const iconPaths = {
  'arrow-right': <path d="M4.5 12h14m0 0-5.5-5.5M18.5 12 13 17.5" />,
  'arrow-up': <path d="M12 19V5.5m0 0L6.5 11M12 5.5 17.5 11" />,
  'chevron-down': <path d="m6.5 9.5 5.5 5.5 5.5-5.5" />,
  'chevron-right': <path d="m9.5 6.5 5.5 5.5-5.5 5.5" />,
  check: <path d="m4.5 12.5 5 5 10-11" />,
  'check-circle': (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m8.2 12.4 2.6 2.6 5-5.6" />
    </>
  ),
  close: <path d="M6.5 6.5l11 11m0-11-11 11" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4 4" />
    </>
  ),
  sparkles: (
    <>
      <path d="M11 3.5 12.7 8l4.5 1.7-4.5 1.7L11 16l-1.7-4.6L4.8 9.7 9.3 8 11 3.5z" />
      <path d="M18.5 14.5 19.4 17l2.5.9-2.5.9-.9 2.5-.9-2.5-2.5-.9 2.5-.9.9-2.5z" />
    </>
  ),
  brain: (
    <>
      <path d="M9.5 4.5A2.75 2.75 0 0 0 6.75 7.25v.5A2.75 2.75 0 0 0 4.5 10.5c0 1 .55 1.9 1.4 2.35A2.75 2.75 0 0 0 8.25 17.5c0 .5.15 1 .4 1.4A2.5 2.5 0 0 0 12 21V6.75a2.25 2.25 0 0 0-2.5-2.25z" />
      <path d="M14.5 4.5A2.75 2.75 0 0 1 17.25 7.25v.5A2.75 2.75 0 0 1 19.5 10.5c0 1-.55 1.9-1.4 2.35a2.75 2.75 0 0 1-2.35 4.65c-.5 0-1 .15-1.4.4A2.5 2.5 0 0 1 12 21" />
    </>
  ),
  shield: <path d="M12 3.5 19 6.4v4.7c0 4.3-2.85 7.4-7 8.9-4.15-1.5-7-4.6-7-8.9V6.4L12 3.5z" />,
  database: (
    <>
      <ellipse cx="12" cy="6.5" rx="6.5" ry="2.75" />
      <path d="M5.5 6.5v11c0 1.5 2.9 2.75 6.5 2.75s6.5-1.25 6.5-2.75v-11" />
      <path d="M5.5 12c0 1.5 2.9 2.75 6.5 2.75S18.5 13.5 18.5 12" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20h16" />
      <path d="M6.5 20v-5.5M11.5 20V8M16.5 20v-8.5" />
    </>
  ),
  code: <path d="m8.5 7-5 5 5 5M15.5 7l5 5-5 5" />,
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m15.4 8.6-2 4.8-4.8 2 2-4.8 4.8-2z" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.4" />
      <path d="M3.5 19.5c0-3 2.45-5.4 5.5-5.4s5.5 2.4 5.5 5.4" />
      <path d="M15.8 5.4a3.4 3.4 0 0 1 0 5.2M17.4 14.7c1.9.75 3.1 2.6 3.1 4.8" />
    </>
  ),
  wrench: (
    <path d="M20 5.5a4.8 4.8 0 0 1-6.3 6.3l-6.4 6.4a2.1 2.1 0 1 1-3-3l6.4-6.4A4.8 4.8 0 0 1 17 2.5l-3 3 .8 2.7 2.7.8 3-3c.4.7.5 1.5.5 2.5z" />
  ),
  grid: (
    <>
      <rect x="4" y="4" width="7" height="7" rx="1.6" />
      <rect x="13" y="4" width="7" height="7" rx="1.6" />
      <rect x="4" y="13" width="7" height="7" rx="1.6" />
      <rect x="13" y="13" width="7" height="7" rx="1.6" />
    </>
  ),
  cloud: (
    <path d="M7.5 18.5h9a4 4 0 0 0 .5-7.97A5.5 5.5 0 0 0 6.6 11.2 3.65 3.65 0 0 0 7.5 18.5z" />
  ),
  layers: (
    <>
      <path d="m12 3.5 8 4.3-8 4.3-8-4.3 8-4.3z" />
      <path d="m4 12.3 8 4.3 8-4.3" />
      <path d="m4 16.6 8 4.3 8-4.3" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  'life-buoy': (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="3.6" />
      <path d="m6 6 3.4 3.4M18 6l-3.4 3.4M6 18l3.4-3.4M18 18l-3.4-3.4" />
    </>
  ),
  mail: (
    <>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2.2" />
      <path d="m4.5 8 7.5 5.2L19.5 8" />
    </>
  ),
  phone: (
    <path d="M6.2 3.5h2.9l1.4 4.2-1.9 1.4a12.4 12.4 0 0 0 6.3 6.3l1.4-1.9 4.2 1.4v2.9a2 2 0 0 1-2.2 2C10.9 19.2 4.8 13.1 4.2 5.7a2 2 0 0 1 2-2.2z" />
  ),
  pin: (
    <>
      <path d="M12 21s6.8-5.6 6.8-11a6.8 6.8 0 1 0-13.6 0C5.2 15.4 12 21 12 21z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3.5" y="7.5" width="17" height="12.5" rx="2.2" />
      <path d="M8.5 7.5V6a1.8 1.8 0 0 1 1.8-1.8h3.4A1.8 1.8 0 0 1 15.5 6v1.5M3.5 12.5h17" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3.2 2" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5.5" width="17" height="15" rx="2.2" />
      <path d="M8 3.5v4M16 3.5v4M3.5 10.5h17" />
    </>
  ),
  file: (
    <>
      <path d="M14 3.5H7.5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V8l-4.5-4.5z" />
      <path d="M13.8 3.6V8.2h4.6" />
    </>
  ),
  alert: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.8v5M12 16.2h.01" />
    </>
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 11.2v5M12 7.9h.01" />
    </>
  ),
  inbox: (
    <>
      <path d="M4.5 13.5H8l1.6 2.5h4.8l1.6-2.5h3.5" />
      <path d="m4.5 13.5 2.2-7.2A1.8 1.8 0 0 1 8.45 5h7.1a1.8 1.8 0 0 1 1.75 1.3l2.2 7.2v3.8a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-3.8z" />
    </>
  ),
  quote: (
    <path d="M9.5 6.5C7 8 5.5 10.3 5.5 13v4.5h5V13H8c0-1.9.7-3.3 2.3-4.3L9.5 6.5zm9 0C16 8 14.5 10.3 14.5 13v4.5h5V13H17c0-1.9.7-3.3 2.3-4.3l-.8-2.2z" />
  ),
  send: (
    <>
      <path d="M20.5 3.5 3.5 10.2l7 3.1 3.1 7 6.9-16.8z" />
      <path d="m10.5 13.3 4.5-4.5" />
    </>
  ),
  external: (
    <>
      <path d="M14 4.5h5.5V10" />
      <path d="m19.5 4.5-8 8" />
      <path d="M18 13.8V18a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4.2" />
    </>
  ),
  mobile: (
    <>
      <rect x="7" y="3.5" width="10" height="17" rx="2.4" />
      <path d="M11 17.3h2" />
    </>
  ),
  book: (
    <>
      <path d="M5.5 5A2.5 2.5 0 0 1 8 2.5h10.5v16H8A2.5 2.5 0 0 0 5.5 21V5z" />
      <path d="M5.5 18.5A2.5 2.5 0 0 1 8 16h10.5" />
    </>
  ),
  rocket: (
    <>
      <path d="M12 3c3 1.6 4.8 4.6 4.8 8L14.4 13.4H9.6L7.2 11c0-3.4 1.8-6.4 4.8-8z" />
      <path d="M9.6 13.4 7 19.5l3.2-1.1L12 20.5l1.8-2.1L17 19.5l-2.6-6.1" />
      <circle cx="12" cy="9" r="1.6" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <path d="M12 3.5c2.4 2.5 3.7 5.5 3.7 8.5s-1.3 6-3.7 8.5c-2.4-2.5-3.7-5.5-3.7-8.5S9.6 6 12 3.5z" />
    </>
  ),
  filter: (
    <path d="M4.5 6h15M7.5 12h9M10.5 18h3" />
  ),
  refresh: (
    <path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3M19.5 4.5V9H15" />
  ),
  'twitter-x': (
    <path d="M6 6l12 12M18 6 6 18" />
  ),
  linkedin: (
    <>
      <path d="M6.5 10.5V18" />
      <circle cx="6.5" cy="7" r="1.3" />
      <path d="M11 18v-4.6a2.9 2.9 0 0 1 5.8 0V18" />
      <path d="M11 12.6V18" />
    </>
  ),
  instagram: (
    <>
      <rect x="4.5" y="4.5" width="15" height="15" rx="4.5" />
      <circle cx="12" cy="12" r="3.4" />
      <path d="M16.6 7.6h.01" />
    </>
  ),
  facebook: (
    <path d="M14.8 8.4h2.2V5.2h-2.4A3.9 3.9 0 0 0 10.7 9v2.1H8.4v3.2h2.3V21h3.3v-6.7h2.4l.5-3.2h-2.9V9.3c0-.6.4-.9.9-.9z" />
  ),
};

export default function Icon({ name, size = 20, strokeWidth = 1.75, className = '', ...rest }) {
  const glyph = iconPaths[name] ?? iconPaths.sparkles;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...rest}
    >
      {glyph}
    </svg>
  );
}
