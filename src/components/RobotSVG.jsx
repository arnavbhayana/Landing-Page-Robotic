export default function RobotSVG() {
  return (
    <div
      className="interactive-robot cursor-pointer animate-float"
      title="Hover to interact"
    >
      <svg
        width="380"
        height="480"
        viewBox="0 0 380 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="will-change-transform transform-gpu drop-shadow-[0_0_12px_rgba(184,255,60,0.35)]"
      >
        {/* Base */}
        <rect x="120" y="430" width="140" height="20" rx="4" fill="#1a2332" stroke="#b8ff3c" strokeWidth="1.5" />
        <rect x="140" y="420" width="100" height="16" rx="3" fill="#243044" stroke="#b8ff3c" strokeWidth="1" />

        {/* Column */}
        <rect x="175" y="280" width="30" height="145" rx="4" fill="#1a2332" stroke="#b8ff3c" strokeWidth="1.5" />
        <rect x="182" y="300" width="16" height="80" rx="2" fill="rgba(184,255,60,0.05)" />

        {/* Joint 1 */}
        <circle cx="190" cy="280" r="18" fill="#243044" stroke="#b8ff3c" strokeWidth="1.5" />
        <circle cx="190" cy="280" r="8" fill="#b8ff3c" opacity="0.8" />

        {/* Lower Arm (animated on hover via CSS) */}
        <g className="robot-arm" style={{ transformOrigin: '190px 280px' }}>
          <rect x="176" y="200" width="28" height="85" rx="6" fill="#1a2332" stroke="#b8ff3c" strokeWidth="1.5" />
          <line x1="185" y1="215" x2="185" y2="255" stroke="#b8ff3c" strokeWidth="0.5" opacity="0.4" />
          <line x1="195" y1="215" x2="195" y2="255" stroke="#b8ff3c" strokeWidth="0.5" opacity="0.4" />
          <rect x="181" y="228" width="18" height="8" rx="1" fill="rgba(184,255,60,0.1)" stroke="#b8ff3c" strokeWidth="0.5" />

          {/* Joint 2 */}
          <circle cx="190" cy="200" r="14" fill="#243044" stroke="#b8ff3c" strokeWidth="1.5" />
          <circle cx="190" cy="200" r="5" fill="#b8ff3c" opacity="0.6" />

          {/* Upper Arm */}
          <rect x="177" y="120" width="26" height="85" rx="5" fill="#1a2332" stroke="#b8ff3c" strokeWidth="1.5" />
          <line x1="186" y1="135" x2="186" y2="185" stroke="#b8ff3c" strokeWidth="0.5" opacity="0.3" />
          <line x1="194" y1="135" x2="194" y2="185" stroke="#b8ff3c" strokeWidth="0.5" opacity="0.3" />

          {/* Joint 3 */}
          <circle cx="190" cy="120" r="12" fill="#243044" stroke="#b8ff3c" strokeWidth="1.5" />
          <circle cx="190" cy="120" r="4" fill="#b8ff3c" opacity="0.5" />

          {/* Wrist */}
          <rect x="179" y="60" width="22" height="64" rx="4" fill="#1a2332" stroke="#b8ff3c" strokeWidth="1.5" />
          <rect x="183" y="76" width="14" height="20" rx="2" fill="rgba(184,255,60,0.1)" stroke="#b8ff3c" strokeWidth="0.5" />

          {/* End Effector */}
          <rect x="178" y="38" width="24" height="26" rx="3" fill="#243044" stroke="#b8ff3c" strokeWidth="1.5" />
          <circle cx="190" cy="51" r="3" fill="#ff6b35" />
          <circle cx="190" cy="51" r="6" fill="rgba(255,107,53,0.15)" />

          {/* Left Claw */}
          <g className="robot-claw-l">
            <rect x="162" y="36" width="16" height="6" rx="2" fill="#243044" stroke="#b8ff3c" strokeWidth="1" />
            <rect x="155" y="36" width="10" height="4" rx="1" fill="#b8ff3c" opacity="0.7" />
          </g>

          {/* Right Claw */}
          <g className="robot-claw-r">
            <rect x="202" y="36" width="16" height="6" rx="2" fill="#243044" stroke="#b8ff3c" strokeWidth="1" />
            <rect x="215" y="36" width="10" height="4" rx="1" fill="#b8ff3c" opacity="0.7" />
          </g>
        </g>

        {/* Decorative ring */}
        <circle cx="190" cy="280" r="28" fill="none" stroke="rgba(184,255,60,0.2)" strokeWidth="1" strokeDasharray="4 4" />

        {/* Side panels */}
        <rect x="60" y="300" width="80" height="50" rx="4" fill="#111827" stroke="rgba(184,255,60,0.2)" strokeWidth="1" />
        <rect x="68" y="308" width="64" height="8" rx="1" fill="rgba(184,255,60,0.08)" stroke="#b8ff3c" strokeWidth="0.5" />
        <rect x="68" y="322" width="40" height="4" rx="1" fill="rgba(184,255,60,0.15)" />
        <rect x="68" y="330" width="28" height="4" rx="1" fill="rgba(255,107,53,0.3)" />

        <rect x="240" y="300" width="80" height="50" rx="4" fill="#111827" stroke="rgba(184,255,60,0.2)" strokeWidth="1" />
        <rect x="248" y="308" width="64" height="8" rx="1" fill="rgba(184,255,60,0.08)" stroke="#b8ff3c" strokeWidth="0.5" />
        <rect x="248" y="322" width="56" height="4" rx="1" fill="rgba(184,255,60,0.15)" />
        <rect x="248" y="330" width="32" height="4" rx="1" fill="rgba(184,255,60,0.3)" />

        {/* Status dots */}
        <circle cx="70" cy="355" r="4" fill="#b8ff3c" opacity="0.8" className="animate-pulse-dot" />
        <circle cx="82" cy="355" r="4" fill="#b8ff3c" opacity="0.5" style={{ animationDelay: '0.4s' }} className="animate-pulse-dot" />
        <circle cx="94" cy="355" r="4" fill="#ff6b35" opacity="0.6" style={{ animationDelay: '0.8s' }} className="animate-pulse-dot" />
      </svg>
    </div>
  )
}