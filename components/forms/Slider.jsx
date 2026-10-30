import React from "react";

/** Single-value range. Track is the surface grey; fill and thumb are the accent. */
export function Slider({ value = 0, min = 0, max = 100, step = 1, onChange, label, disabled = false, id, style, ...rest }) {
  const auto = React.useId();
  const sid = id || auto;
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, ...style }}>
      {label && (
        <label htmlFor={sid} style={{
          display: "flex", justifyContent: "space-between",
          fontFamily: "var(--font-brand)", fontSize: "var(--text-body-md-size)",
          color: "var(--color-text-primary)",
        }}><span>{label}</span><span style={{ color: "var(--color-text-secondary)" }}>{value}</span></label>
      )}
      <input id={sid} type="range" min={min} max={max} step={step} value={value} disabled={disabled}
        onChange={e => onChange && onChange(Number(e.target.value))} {...rest} style={{
          WebkitAppearance: "none", appearance: "none", width: "100%", height: 6,
          borderRadius: "var(--radius-pill)", outline: "none",
          background: `linear-gradient(to right, var(--color-action-primary) ${pct}%, var(--color-bg-surface) ${pct}%)`,
          boxShadow: "var(--shadow-inset-control)",
          opacity: disabled ? "var(--opacity-disabled)" : 1,
          cursor: disabled ? "not-allowed" : "pointer",
        }} />
      <style>{"input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:16px;height:16px;border-radius:50%;background:var(--color-action-primary);cursor:pointer}input[type=range]::-moz-range-thumb{width:16px;height:16px;border:none;border-radius:50%;background:var(--color-action-primary);cursor:pointer}"}</style>
    </div>
  );
}
