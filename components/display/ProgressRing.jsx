import React from "react";

/** Circular progress used on habit rows and stat tiles. */
export function ProgressRing({ value = 0, size = 36, thickness = 3, label, style, ...rest }) {
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  const pct = Math.max(0, Math.min(100, value));
  return (
    <span role="progressbar" aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100} {...rest}
      style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", width: size, height: size, flexShrink: 0, ...style }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--color-border-default)" strokeWidth={thickness} />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--color-action-primary)"
          strokeWidth={thickness} strokeLinecap="round" strokeDasharray={c}
          strokeDashoffset={c * (1 - pct / 100)}
          style={{ transition: "stroke-dashoffset var(--motion-slow) var(--ease-standard)" }} />
      </svg>
      <span style={{
        position: "absolute", fontFamily: "var(--font-brand)",
        fontSize: Math.max(9, Math.round(size * 0.28)), fontWeight: 500, color: "var(--color-text-primary)",
      }}>{label ?? pct + "%"}</span>
    </span>
  );
}
