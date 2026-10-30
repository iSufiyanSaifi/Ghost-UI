import React from "react";

const PALETTE = ["var(--gh-primary-500)", "var(--gh-navy-700)", "var(--gh-orange-500)", "var(--gh-blue-100)", "var(--gh-grey-200)"];

/** Proportion chart from the Charts & Graphs page. Legend is required, not optional. */
export function DonutChart({ data = [], size = 160, thickness = 20, legend = true, style, ...rest }) {
  const total = data.reduce((a, d) => a + d.value, 0) || 1;
  const r = (size - thickness) / 2;
  const c = 2 * Math.PI * r;
  let offset = 0;
  return (
    <div {...rest} style={{ display: "flex", alignItems: "center", gap: 20, ...style }}>
      <svg width={size} height={size} role="img" aria-label="Donut chart" style={{ flexShrink: 0 }}>
        <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
          {data.map((d, i) => {
            const len = (d.value / total) * c;
            const el = (
              <circle key={i} cx={size / 2} cy={size / 2} r={r} fill="none"
                stroke={d.color || PALETTE[i % PALETTE.length]} strokeWidth={thickness}
                strokeDasharray={`${len} ${c - len}`} strokeDashoffset={-offset} />
            );
            offset += len;
            return el;
          })}
        </g>
      </svg>
      {legend && (
        <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
          {data.map((d, i) => (
            <li key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "var(--font-brand)", fontSize: "var(--text-body-md-size)" }}>
              <span style={{ width: 10, height: 10, borderRadius: 2, background: d.color || PALETTE[i % PALETTE.length], flexShrink: 0 }} />
              <span style={{ color: "var(--color-text-primary)" }}>{d.label}</span>
              <span style={{ color: "var(--color-text-secondary)" }}>{Math.round((d.value / total) * 100)}%</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
