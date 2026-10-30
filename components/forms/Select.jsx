import React from "react";
import { Icon } from "../display/Icon.jsx";

/** Pill dropdown matching TextField's geometry. */
export function Select({ label, required = false, options = [], value, onChange, placeholder = "Select…", error, disabled = false, id, style, ...rest }) {
  const auto = React.useId();
  const sid = id || auto;
  const invalid = Boolean(error);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 48, ...style }}>
      {label && (
        <label htmlFor={sid} style={{
          display: "inline-flex", alignItems: "center", gap: 4,
          fontFamily: "var(--font-brand)", fontSize: "var(--text-body-lg-size)",
          fontWeight: 500, lineHeight: 1, color: "var(--color-text-primary)",
        }}>{label}{required && <span style={{ color: "var(--color-status-required)", fontSize: "var(--text-body-md-size)" }}>*</span>}</label>
      )}
      <div style={{
        position: "relative", display: "flex", alignItems: "center",
        height: "var(--size-control-md)", padding: "8px 20px",
        borderRadius: "var(--radius-pill)",
        border: `var(--border-thin) solid ${invalid ? "var(--color-status-error-text)" : "var(--color-border-default)"}`,
        background: disabled ? "var(--color-bg-surface)" : "var(--color-bg-default)",
        opacity: disabled ? "var(--opacity-disabled)" : 1,
      }}>
        <select id={sid} value={value} disabled={disabled} aria-invalid={invalid || undefined}
          onChange={e => onChange && onChange(e.target.value)} {...rest} style={{
            flex: 1, minWidth: 0, border: "none", outline: "none", background: "transparent",
            appearance: "none", WebkitAppearance: "none", cursor: disabled ? "not-allowed" : "pointer",
            fontFamily: "var(--font-brand)", fontSize: "var(--text-body-lg-size)",
            color: value ? "var(--color-text-primary)" : "var(--color-text-secondary)",
          }}>
          <option value="">{placeholder}</option>
          {options.map((raw, i) => {
            const o = typeof raw === "string" ? { label: raw, value: raw } : raw;
            return <option key={i} value={o.value}>{o.label}</option>;
          })}
        </select>
        <Icon name="chevron-down" size={20} style={{ pointerEvents: "none" }} />
      </div>
      {error && (
        <span style={{ fontFamily: "var(--font-brand)", fontSize: "var(--text-body-sm-size)", color: "var(--color-status-error-text)" }}>{error}</span>
      )}
    </div>
  );
}
