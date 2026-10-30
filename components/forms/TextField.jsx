import React from "react";

/** Pill text input. Label above, hairline field, supporting text below. */
export function TextField({
  label, required = false, value, defaultValue, placeholder, type = "text",
  prefix, suffix, error, helper, disabled = false, readOnly = false,
  onChange, id, style, ...rest
}) {
  const auto = React.useId();
  const fid = id || auto;
  const invalid = Boolean(error);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 48, ...style }}>
      {label && (
        <label htmlFor={fid} style={{
          display: "inline-flex", alignItems: "center", gap: 4,
          fontFamily: "var(--font-brand)", fontSize: "var(--text-body-lg-size)",
          fontWeight: 500, lineHeight: 1, color: "var(--color-text-primary)",
        }}>
          {label}
          {required && <span style={{ color: "var(--color-status-required)", fontSize: "var(--text-body-md-size)" }}>*</span>}
        </label>
      )}
      <div style={{
        display: "flex", alignItems: "center", gap: 8,
        height: "var(--size-control-md)", padding: "8px 20px",
        borderRadius: "var(--radius-pill)",
        border: `var(--border-thin) solid ${invalid ? "var(--color-status-error-text)" : "var(--color-border-default)"}`,
        background: disabled ? "var(--color-bg-surface)" : "var(--color-bg-default)",
        opacity: disabled ? "var(--opacity-disabled)" : 1,
      }}>
        {prefix}
        <input id={fid} type={type} value={value} defaultValue={defaultValue}
          placeholder={placeholder} disabled={disabled} readOnly={readOnly}
          onChange={onChange} aria-invalid={invalid || undefined}
          aria-describedby={error || helper ? fid + "-msg" : undefined} {...rest}
          style={{
            flex: 1, minWidth: 0, border: "none", outline: "none", background: "transparent",
            fontFamily: "var(--font-brand)", fontSize: "var(--text-body-lg-size)",
            fontWeight: 400, lineHeight: "20px", color: "var(--color-text-primary)",
          }} />
        {suffix}
      </div>
      {(error || helper) && (
        <span id={fid + "-msg"} style={{
          fontFamily: "var(--font-brand)", fontSize: "var(--text-body-sm-size)", lineHeight: 1,
          color: invalid ? "var(--color-status-error-text)" : "var(--color-text-secondary)",
        }}>{error || helper}</span>
      )}
    </div>
  );
}
