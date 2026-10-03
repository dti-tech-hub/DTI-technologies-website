import { useEffect, useRef } from 'react';

/**
 * Drives a horizontally scrolling "rail": a track holding identical card sets
 * that drifts right to left on its own and can be dragged/swiped either way.
 *
 * This is a JS animation frame rather than a CSS keyframe because the track
 * transform has to be readable *and* writable by the pointer handlers. A running
 * CSS animation owns `transform`, so it would overwrite a drag offset, and
 * handing the offset back at the end of the gesture would jump.
 *
 * Three details that are easy to regress:
 *
 * - Pointer listeners sit on `window` and no pointer capture is taken. Capture
 *   retargets the follow-up `click` to the capturing element, which breaks every
 *   link inside a card; a rail-level `pointerleave` fires the moment the pointer
 *   crosses onto a neighbouring card, ending the gesture after a few pixels.
 * - `setWidth` is `scrollWidth / copies`, and the spacing between cards must be a
 *   per-card margin rather than a flex `gap`. A gap leaves a half-gap remainder
 *   at the copy boundary, so the rail jumps once per lap.
 * - `touch-action: pan-y` belongs on the rail in CSS, so a horizontal drag
 *   still lets the page scroll vertically on touch.
 *
 * @param {object}  [options]
 * @param {number}  [options.speed]          Pixels per second; positive scrolls right to left.
 * @param {number}  [options.dragThreshold]  Pointer travel in px before a press counts as a drag.
 * @param {number}  [options.copies]         How many identical card sets the track renders.
 * @returns {{railRef: React.RefObject<HTMLElement>, trackRef: React.RefObject<HTMLElement>}}
 */
export function useSwipeRail({ speed = 40, dragThreshold = 5, copies = 2 } = {}) {
  const railRef = useRef(null);
  const trackRef = useRef(null);

  // Live values the animation frame and the pointer handlers both read and write.
  // Refs rather than state so neither rAF nor dragging triggers a re-render.
  const offsetRef = useRef(0);
  const setWidthRef = useRef(0);
  const frameRef = useRef(0);
  const dragRef = useRef(null);
  const visibleRef = useRef(true);
  const suppressClickUntilRef = useRef(0);

  useEffect(() => {
    const rail = railRef.current;
    const track = trackRef.current;
    if (!rail || !track) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

    // Folds `value` into one set width. Because the track repeats the same cards,
    // an offset of -40px and -40px-minus-a-set are visually identical; normalising
    // keeps the number small no matter how long the page stays open.
    const wrapOffset = (value) => {
      const width = setWidthRef.current;
      if (!width) return value;
      return ((value % width) + width) % width;
    };

    const measure = () => {
      setWidthRef.current = track.scrollWidth / copies;
    };

    const paint = () => {
      track.style.transform = `translate3d(${-wrapOffset(offsetRef.current)}px, 0, 0)`;
    };

    let lastTime = 0;

    const step = (now) => {
      frameRef.current = requestAnimationFrame(step);
      const dt = lastTime ? Math.min((now - lastTime) / 1000, 0.05) : 0;
      lastTime = now;
      // Hold still while a pointer is down; the drag owns the offset then.
      if (dragRef.current) return;
      offsetRef.current = wrapOffset(offsetRef.current + speed * dt);
      paint();
    };

    const syncLoop = () => {
      const shouldRun = visibleRef.current && !reduceMotion.matches;
      if (shouldRun && !frameRef.current) {
        frameRef.current = requestAnimationFrame(step);
      } else if (!shouldRun && frameRef.current) {
        cancelAnimationFrame(frameRef.current);
        frameRef.current = 0;
        lastTime = 0;
      }
    };

    measure();
    paint();

    const resizeObserver = typeof ResizeObserver === 'function'
      ? new ResizeObserver(() => {
        measure();
        paint();
      })
      : null;
    if (resizeObserver) resizeObserver.observe(track);

    const onWindowResize = () => {
      measure();
      paint();
    };
    window.addEventListener('resize', onWindowResize);

    // Don't burn frames on a rail that is scrolled out of view.
    const intersectionObserver = typeof IntersectionObserver === 'function'
      ? new IntersectionObserver(
        (entries) => {
          visibleRef.current = entries.some((entry) => entry.isIntersecting);
          syncLoop();
        },
        { threshold: 0 },
      )
      : null;
    if (intersectionObserver) intersectionObserver.observe(rail);

    const onMotionPreferenceChange = () => syncLoop();
    reduceMotion.addEventListener('change', onMotionPreferenceChange);

    // ---- drag / swipe ----
    const onDragMove = (event) => {
      const drag = dragRef.current;
      if (!drag || drag.pointerId !== event.pointerId) return;

      const dx = event.clientX - drag.startX;
      if (!drag.moved) {
        if (Math.abs(dx) < dragThreshold) return;
        drag.moved = true;
      }

      // Dragging left walks forward through the cards, so the offset shrinks.
      offsetRef.current = wrapOffset(drag.startOffset - dx);
      paint();
    };

    const onDragEnd = (event) => {
      const drag = dragRef.current;
      if (!drag || (event && event.pointerId !== drag.pointerId)) return;

      dragRef.current = null;
      rail.classList.remove('is-dragging');
      detachDrag();

      if (drag.moved) {
        // Swallow the click a browser emits after a drag, otherwise a flick that
        // happens to end on a link navigates the visitor away.
        suppressClickUntilRef.current = performance.now() + 250;
      }
    };

    const detachDrag = () => {
      window.removeEventListener('pointermove', onDragMove);
      window.removeEventListener('pointerup', onDragEnd);
      window.removeEventListener('pointercancel', onDragEnd);
    };

    const onDragStart = (event) => {
      // Primary mouse button only; touch and pen report button 0 as well.
      if (event.pointerType === 'mouse' && event.button !== 0) return;
      if (!setWidthRef.current) return;

      dragRef.current = {
        pointerId: event.pointerId,
        startX: event.clientX,
        startOffset: offsetRef.current,
        moved: false,
      };

      rail.classList.add('is-dragging');
      window.addEventListener('pointermove', onDragMove);
      window.addEventListener('pointerup', onDragEnd);
      window.addEventListener('pointercancel', onDragEnd);
    };

    rail.addEventListener('pointerdown', onDragStart);

    // Capture phase so a drag's click never reaches anything underneath.
    const onClickCapture = (event) => {
      if (performance.now() < suppressClickUntilRef.current) {
        event.preventDefault();
        event.stopPropagation();
      }
    };
    rail.addEventListener('click', onClickCapture, true);

    syncLoop();

    return () => {
      resizeObserver?.disconnect();
      intersectionObserver?.disconnect();
      window.removeEventListener('resize', onWindowResize);
      reduceMotion.removeEventListener('change', onMotionPreferenceChange);
      rail.removeEventListener('pointerdown', onDragStart);
      rail.removeEventListener('click', onClickCapture, true);
      detachDrag();
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = 0;
    };
  }, [speed, dragThreshold, copies]);

  return { railRef, trackRef };
}