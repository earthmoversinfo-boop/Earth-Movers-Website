// Flat-vector scene art used in place of photography. Drawn to feel like
// technical duotone illustration: dark ground, sand shapes, machine orange.

export function ExcavatorScene() {
  return (
    <svg className="scene" viewBox="0 0 640 480" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <rect width="640" height="480" fill="#17150f" />
      {/* contour lines */}
      <g stroke="#f4f1ea" strokeOpacity="0.09" fill="none" strokeWidth="1.5">
        <path d="M-20 120 C 120 80, 260 160, 400 120 S 620 80, 680 130" />
        <path d="M-20 170 C 120 130, 260 210, 400 170 S 620 130, 680 180" />
        <path d="M-20 220 C 120 180, 260 260, 400 220 S 620 180, 680 230" />
      </g>
      {/* sun */}
      <circle cx="512" cy="120" r="46" fill="#d9651c" fillOpacity="0.9" />
      {/* dune silhouettes */}
      <path d="M0 340 L140 260 L250 330 L360 280 L470 350 L570 300 L640 340 L640 480 L0 480 Z" fill="#211e16" />
      {/* ground */}
      <rect y="392" width="640" height="88" fill="#2a261b" />
      <path d="M0 392 h640" stroke="#f4f1ea" strokeOpacity="0.18" />
      {/* spoil heap */}
      <path d="M60 392 L130 352 L210 392 Z" fill="#3a3423" />
      {/* excavator — tracks */}
      <g>
        <rect x="360" y="356" width="150" height="36" rx="18" fill="#f4f1ea" />
        <rect x="368" y="364" width="134" height="20" rx="10" fill="#17150f" />
        <circle cx="384" cy="374" r="6" fill="#f4f1ea" />
        <circle cx="410" cy="374" r="6" fill="#f4f1ea" />
        <circle cx="436" cy="374" r="6" fill="#f4f1ea" />
        <circle cx="462" cy="374" r="6" fill="#f4f1ea" />
        <circle cx="488" cy="374" r="6" fill="#f4f1ea" />
        {/* body */}
        <rect x="368" y="322" width="120" height="30" fill="#d9651c" />
        <rect x="376" y="292" width="52" height="30" fill="#d9651c" />
        <rect x="384" y="298" width="30" height="18" fill="#17150f" />
        {/* counterweight */}
        <rect x="488" y="326" width="26" height="26" fill="#b04e10" />
        {/* boom */}
        <path d="M376 322 L300 250 L312 240 L392 314 Z" fill="#d9651c" />
        {/* arm */}
        <path d="M306 246 L246 306 L236 296 L298 238 Z" fill="#b04e10" />
        {/* bucket */}
        <path d="M244 300 L268 320 L240 336 L228 310 Z" fill="#f4f1ea" />
        <path d="M240 336 l-14 6 6-16" fill="#f4f1ea" />
      </g>
      {/* measure marks */}
      <g stroke="#f4f1ea" strokeOpacity="0.35">
        <path d="M96 440 h448" strokeDasharray="2 10" />
      </g>
    </svg>
  )
}

export function FleetScene() {
  return (
    <svg viewBox="0 0 640 360" className="scene-static" aria-hidden="true" style={{ width: '100%', height: 'auto' }}>
      <rect width="640" height="360" fill="#211e16" />
      <g stroke="#f4f1ea" strokeOpacity="0.08" fill="none" strokeWidth="1.5">
        <path d="M-20 90 C 140 60, 300 130, 460 90 S 640 60, 700 100" />
        <path d="M-20 140 C 140 110, 300 180, 460 140 S 640 110, 700 150" />
      </g>
      <rect y="276" width="640" height="84" fill="#2a261b" />
      <path d="M0 276 h640" stroke="#f4f1ea" strokeOpacity="0.16" />
      {/* bulldozer */}
      <g transform="translate(70 176)">
        <rect x="20" y="64" width="120" height="30" rx="15" fill="#f4f1ea" />
        <rect x="27" y="71" width="106" height="16" rx="8" fill="#211e16" />
        <rect x="30" y="34" width="86" height="30" fill="#d9651c" />
        <rect x="42" y="10" width="42" height="24" fill="#d9651c" />
        <rect x="48" y="16" width="24" height="14" fill="#211e16" />
        <path d="M140 40 L168 40 L168 94 L156 94 Z" fill="#f4f1ea" />
        <path d="M116 52 L140 44" stroke="#b04e10" strokeWidth="6" />
      </g>
      {/* dump truck */}
      <g transform="translate(330 160)">
        <path d="M10 66 L26 26 L150 26 L150 84 L10 84 Z" fill="#d9651c" />
        <path d="M20 62 L32 34 L142 34" fill="none" stroke="#211e16" strokeWidth="4" />
        <rect x="150" y="48" width="56" height="36" fill="#f4f1ea" />
        <rect x="160" y="56" width="22" height="16" fill="#211e16" />
        <circle cx="52" cy="94" r="16" fill="#f4f1ea" />
        <circle cx="52" cy="94" r="7" fill="#211e16" />
        <circle cx="108" cy="94" r="16" fill="#f4f1ea" />
        <circle cx="108" cy="94" r="7" fill="#211e16" />
        <circle cx="178" cy="94" r="16" fill="#f4f1ea" />
        <circle cx="178" cy="94" r="7" fill="#211e16" />
        {/* load */}
        <path d="M30 26 L60 8 L96 22 L126 6 L150 26 Z" fill="#3a3423" />
      </g>
      <g stroke="#f4f1ea" strokeOpacity="0.3">
        <path d="M60 322 h520" strokeDasharray="2 10" />
      </g>
    </svg>
  )
}

export function TopoBackdrop({ className }) {
  return (
    <svg className={className} viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
          <path
            key={i}
            d={`M-40 ${80 + i * 70} C 240 ${20 + i * 70}, 520 ${140 + i * 70}, 800 ${80 + i * 70} S 1240 ${30 + i * 70}, 1260 ${90 + i * 70}`}
          />
        ))}
      </g>
    </svg>
  )
}
