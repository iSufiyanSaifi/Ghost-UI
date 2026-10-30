import React from "react";
import { Icon } from "../display/Icon.jsx";

/** Quantity control — the kit's "Button bar / Qty". Pill shell, hairline ring. */
export function Stepper({ value = 0, min = 0, max = 99, step = 1, onChange, label, disabled = false, style, ...rest }) {
  const set = v => onChange && onChange(Math.max(min, Math.min(max, v)));
  const btn = (name, aria, next, off) => (
    <button type="button" aria-label={aria} disabled={disabled || off} onClick={() => set(next)} style={{
      display: "flex", alignItems: "center", justifyContent: "center",
      width: 32, height: 32, border: "none", borderRadius: "var(--radius-pill)",
      background: "transparent", cursor: disabled || off ? "not-allowed" : "pointer",
      opacity: disabled || off ? "var(--opacity-disabled)" : 1,
    }}><Icon name={name} size={20} color="var(--color-icon-strong)" /></button>
  );
  return (
    <div role="group" aria-label={label} {...rest} style={{
      display: "inline-flex", alignItems: "center", gap: 4, height: 40, padding: "0 4px",
      borderRadius: "var(--radius-pill)",
      boxShadow: "inset 0 0 0 var(--border-thin) var(--color-border-default)", ...style,
    }}>
      {btn("minus", "Decrease", value - step, value <= min)}
      <span aria-live="polite" style={{
        minWidth: 28, textAlign: "center", fontFamily: "var(--font-brand)",
        fontSize: "var(--text-body-lg-size)", fontWeight: 500, color: "var(--color-text-primary)",
        fontVariantNumeric: "tabular-nums",
      }}>{value}</span>
      {btn("plus", "Increase", value + step, value >= max)}
    </div>
  );
}
