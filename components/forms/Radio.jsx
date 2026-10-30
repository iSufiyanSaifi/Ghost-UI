import React from "react";

/** 16px pill well (#E6E6E6) holding a 12px #1C70D4 dot when selected. */
export function Radio({ checked = false, onChange, disabled = false, label, name, value, id, style, ...rest }) {
  const auto = React.useId();
  const rid = id || auto;
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 8, ...style }}>
      <button type="button" role="radio" aria-checked={checked} id={rid} name={name} value={value}
        disabled={disabled} onClick={() => onChange && onChange(value ?? true)} {...rest} style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          width: 16, height: 16, padding: 2, borderRadius: "var(--radius-pill)", border: "none",
          background: "var(--color-border-default)",
          cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? "var(--opacity-disabled)" : 1,
          flexShrink: 0,
        }}>
        <span style={{
          width: 12, height: 12, borderRadius: "50%",
          background: checked ? "var(--color-action-primary)" : "transparent",
          transition: "background var(--motion-fast) var(--ease-standard)",
        }} />
      </button>
      {label && <label htmlFor={rid} style={{ fontFamily: "var(--font-brand)", fontSize: "var(--text-body-lg-size)", color: "var(--color-text-primary)", cursor: "pointer" }}>{label}</label>}
    </span>
  );
}
