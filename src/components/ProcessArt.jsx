/**
 * Isometric blue/white illustrations for the six process stages.
 * Every scene shares the same floating base plate and glow so the roadmap
 * reads as one set, with stage-specific geometry on top.
 */

const plate = (u) => (
  <>
    <ellipse cx="90" cy="127" rx="54" ry="10" fill={`url(#${u}-glow)`} />
    <path d="M90 58 L154 90 L90 122 L26 90 Z" fill={`url(#${u}-top)`} />
    <path d="M26 90 L90 122 L90 127 L26 95 Z" fill={`url(#${u}-side)`} />
    <path d="M154 90 L90 122 L90 127 L154 95 Z" fill="#b7ccfb" />
  </>
);

const cube = (u, x, y, s) => (
  <g key={`${x}-${y}`}>
    <path d={`M${x} ${y} L${x + 16 * s} ${y + 8 * s} L${x} ${y + 16 * s} L${x - 16 * s} ${y + 8 * s} Z`} fill={`url(#${u}-top)`} />
    <path d={`M${x - 16 * s} ${y + 8 * s} L${x} ${y + 16 * s} L${x} ${y + 27 * s} L${x - 16 * s} ${y + 19 * s} Z`} fill={`url(#${u}-side)`} />
    <path d={`M${x + 16 * s} ${y + 8 * s} L${x} ${y + 16 * s} L${x} ${y + 27 * s} L${x + 16 * s} ${y + 19 * s} Z`} fill="#b7ccfb" />
  </g>
);

const SCENES = {
  /* 01 Discover — field notes under a magnifier */
  '01': (u) => (
    <>
      <rect x="44" y="42" width="52" height="46" rx="9" fill="#fff" stroke="#c9dcff" strokeWidth="2" />
      <rect x="56" y="54" width="26" height="5" rx="2.5" fill="#d5e3ff" />
      <rect x="56" y="66" width="32" height="5" rx="2.5" fill="#e3ecff" />
      <circle cx="61" cy="78" r="5" fill={`url(#${u}-accent)`} />
      <rect x="70" y="75" width="18" height="5" rx="2.5" fill="#d5e3ff" />
      <circle cx="122" cy="66" r="18" fill="rgba(255,255,255,0.55)" stroke={`url(#${u}-accent)`} strokeWidth="5" />
      <circle cx="114" cy="58" r="4" fill="#a9c4ff" />
      <path d="M135 79 L149 93" stroke={`url(#${u}-accent)`} strokeWidth="7" strokeLinecap="round" />
    </>
  ),

  /* 02 Define — scope agreed, hit the target */
  '02': (u) => (
    <>
      <ellipse cx="90" cy="88" rx="48" ry="23" fill="#ffffff" fillOpacity="0.55" stroke="#c1d5fb" strokeWidth="3" />
      <ellipse cx="90" cy="88" rx="32" ry="15.5" fill="none" stroke="#a9c4ff" strokeWidth="3" />
      <ellipse cx="90" cy="88" rx="15" ry="7" fill={`url(#${u}-accent)`} />
      <path d="M82 40 L98 40" stroke="#a9c4ff" strokeWidth="3" strokeLinecap="round" />
      <path d="M90 26 L90 68" stroke={`url(#${u}-accent)`} strokeWidth="4" strokeLinecap="round" />
      <path d="M83 63 L90 71 L97 63" fill="none" stroke={`url(#${u}-accent)`} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),

  /* 03 Design — experience and architecture side by side */
  '03': (u) => (
    <>
      <rect x="38" y="38" width="56" height="46" rx="9" fill="#fff" stroke="#c9dcff" strokeWidth="2" />
      <rect x="48" y="50" width="36" height="5" rx="2.5" fill="#d5e3ff" />
      <rect x="48" y="61" width="26" height="5" rx="2.5" fill="#e3ecff" />
      <rect x="86" y="52" width="56" height="46" rx="9" fill="#fff" stroke="#c9dcff" strokeWidth="2" />
      <path d="M95 60 L95 90" stroke={`url(#${u}-accent)`} strokeWidth="4" strokeLinecap="round" />
      <rect x="103" y="64" width="32" height="5" rx="2.5" fill="#d5e3ff" />
      <rect x="103" y="76" width="22" height="5" rx="2.5" fill="#e3ecff" />
      <path d="M70 76 L70 92 L75 87 L79 95 L83 93 L79 85 L85 84 Z" fill={`url(#${u}-accent)`} />
    </>
  ),

  /* 04 Build — shipping in increments */
  '04': (u) => (
    <>
      <rect x="80" y="30" width="36" height="7" rx="3.5" fill={`url(#${u}-accent)`} />
      <rect x="88" y="43" width="20" height="6" rx="3" fill="#a9c4ff" />
      {cube(u, 58, 62, 0.85)}
      {cube(u, 96, 74, 0.95)}
      {cube(u, 126, 58, 0.75)}
    </>
  ),

  /* 05 Launch — release into production */
  '05': (u) => (
    <>
      <path d="M32 110 Q44 68 70 40" fill="none" stroke="#bcd2fb" strokeWidth="3" strokeDasharray="5 8" strokeLinecap="round" />
      <path d="M76 68 L58 88 L76 82 Z" fill={`url(#${u}-side)`} />
      <path d="M108 68 L126 88 L108 82 Z" fill="#b7ccfb" />
      <path d="M92 18 C100 33 103 44 104 54 L80 54 C81 44 84 33 92 18 Z" fill={`url(#${u}-accent)`} />
      <path d="M92 18 C106 40 111 62 108 82 L76 82 C73 62 78 40 92 18 Z" fill="#fff" stroke="#c9dcff" strokeWidth="2" />
      <circle cx="92" cy="60" r="9" fill={`url(#${u}-accent)`} />
      <circle cx="92" cy="60" r="4.5" fill="#eaf1ff" fillOpacity="0.8" />
      <path d="M84 82 L92 108 L100 82 Z" fill={`url(#${u}-accent)`} />
      <circle cx="44" cy="90" r="3" fill="#a9c4ff" />
      <circle cx="138" cy="76" r="3.5" fill="#8fb2f5" />
    </>
  ),

  /* 06 Evolve — measure, maintain, improve */
  '06': (u) => (
    <>
      <path d="M118 60 A32 32 0 1 0 122 88" fill="none" stroke={`url(#${u}-accent)`} strokeWidth="5" strokeLinecap="round" />
      <path d="M113 84 L123 90 L117 99" fill="none" stroke={`url(#${u}-accent)`} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="70" y="86" width="9" height="16" rx="3" fill="#cfe0ff" />
      <rect x="84" y="76" width="9" height="26" rx="3" fill="#a9c4ff" />
      <rect x="98" y="64" width="9" height="38" rx="3" fill={`url(#${u}-accent)`} />
      <path d="M62 106 L120 106" stroke="#c9dcff" strokeWidth="3" strokeLinecap="round" />
    </>
  ),
};

export default function ProcessArt({ name }) {
  const u = `pa-${name}`;
  const scene = SCENES[name] ?? SCENES['01'];

  return (
    <svg viewBox="0 0 180 140" className="process-art" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id={`${u}-top`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#dbe8ff" />
        </linearGradient>
        <linearGradient id={`${u}-side`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cfe0ff" />
          <stop offset="1" stopColor="#a9c4ff" />
        </linearGradient>
        <linearGradient id={`${u}-accent`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#5b86e8" />
          <stop offset="1" stopColor="#2a4fb3" />
        </linearGradient>
        <radialGradient id={`${u}-glow`}>
          <stop offset="0" stopColor="rgba(59,130,246,0.3)" />
          <stop offset="1" stopColor="rgba(59,130,246,0)" />
        </radialGradient>
      </defs>
      {plate(u)}
      {scene(u)}
    </svg>
  );
}
