import React from "react";

/** Status-bar battery. Level, charging bolt and an optional percentage read-out. */
export function BatteryIndicator({ level = 100, charging = false, showPercent = false, dark = false, style, ...rest }) {
  const pct = Math.max(0, Math.min(100, level));
  const fg = dark ? "var(--gh-white)" : "var(--gh-ink-900)";
  const fill = charging ? "var(--color-status-success)" : pct <= 20 ? "var(--color-action-primary)" : fg;
  return (
    <span {...rest} style={{ display: "inline-flex", alignItems: "center", gap: 4, ...style }}>
      {showPercent && (
        <span style={{ fontFamily: "var(--font-brand)", fontSize: 12, color: fg, fontVariantNumeric: "tabular-nums" }}>{pct}%</span>
      )}
      <span role="img" aria-label={`Battery ${pct}%${charging ? ", charging" : ""}`} style={{
        position: "relative", display: "inline-flex", alignItems: "center",
        width: 25, height: 13, padding: 2, borderRadius: 4,
        boxShadow: `inset 0 0 0 1px ${fg}`, opacity: 0.9,
      }}>
        <span style={{
          width: `${pct}%`, height: "100%", borderRadius: 2, background: fill,
          transition: "width var(--motion-slow) var(--ease-standard)",
        }} />
        <span style={{
          position: "absolute", left: "100%", top: "50%", transform: "translateY(-50%)",
          width: 2, height: 5, marginLeft: 1, borderRadius: "0 2px 2px 0", background: fg, opacity: 0.5,
        }} />
      </span>
    </span>
  );
}
