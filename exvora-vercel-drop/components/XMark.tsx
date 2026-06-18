export default function XMark({ size = 30 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      <defs>
        <linearGradient id="xg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f6dd9a" />
          <stop offset="42%" stopColor="#d4af5f" />
          <stop offset="78%" stopColor="#a9802f" />
          <stop offset="100%" stopColor="#e9c87a" />
        </linearGradient>
        <linearGradient id="xw" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#d6d6da" />
        </linearGradient>
      </defs>
      {/* Left gold half (chevron pointing right) */}
      <path d="M8 6 H30 L58 50 L30 94 H8 L36 50 Z" fill="url(#xg)" />
      {/* Right white half */}
      <path d="M92 6 H70 L42 50 L70 94 H92 L64 50 Z" fill="url(#xw)" />
    </svg>
  );
}
