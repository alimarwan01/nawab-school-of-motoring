export function FirstTimePassBadge({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 140"
      className={className}
      aria-label="Nawab Motoring - First Time Pass badge"
    >
      {/* Outer circle */}
      <circle cx="70" cy="70" r="66" fill="none" stroke="currentColor" strokeWidth="3" />
      <circle cx="70" cy="70" r="58" fill="none" stroke="currentColor" strokeWidth="1.5" />

      {/* Curved text - top: NAWAB MOTORING */}
      <defs>
        <path id="topArc" d="M 25,70 a 45,45 0 1,1 90,0" fill="none" />
        <path id="bottomArc" d="M 115,70 a 45,45 0 1,1 -90,0" fill="none" />
      </defs>
      <text
        fill="currentColor"
        fontSize="10"
        fontWeight="700"
        letterSpacing="2"
        textAnchor="middle"
      >
        <textPath href="#topArc" startOffset="50%">
          NAWAB MOTORING
        </textPath>
      </text>
      <text
        fill="currentColor"
        fontSize="9"
        fontWeight="600"
        letterSpacing="1.5"
        textAnchor="middle"
      >
        <textPath href="#bottomArc" startOffset="50%">
          NAWAB MOTORING
        </textPath>
      </text>

      {/* Center banner */}
      <rect x="15" y="52" width="110" height="28" rx="3" fill="currentColor" />
      <text
        x="70"
        y="71"
        textAnchor="middle"
        fill="white"
        fontSize="14"
        fontWeight="800"
        letterSpacing="1"
      >
        FIRST TIME PASS
      </text>

      {/* Small stars */}
      <circle cx="30" cy="66" r="2" fill="currentColor" />
      <circle cx="110" cy="66" r="2" fill="currentColor" />
    </svg>
  );
}
