import React from "react";

/** Multi-line input. Rounded-rectangle shell — the one field that isn't a pill. */
export function TextArea({ label, required = false, error, helper, rows = 3, disabled = false, id, style, ...rest }) {
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
        }}>{label}{required && <span style={{ color: "var(--color-status-required)", fontSize: "var(--text-body-md-size)" }}>*</span>}</label>
      )}
      <textarea id={fid} rows={rows} disabled={disabled} aria-invalid={invalid || undefined}
        aria-describedby={error || helper ? fid + "-msg" : undefined} {...rest} style={{
          resize: "vertical", padding: "12px 16px", outline: "none",
          borderRadius: "var(--radius-md)",
          border: `var(--border-thin) solid ${invalid ? "var(--color-status-error-text)" : "var(--color-border-default)"}`,
          background: disabled ? "var(--color-bg-surface)" : "var(--color-bg-default)",
          fontFamily: "var(--font-brand)", fontSize: "var(--text-body-lg-size)", lineHeight: 1.4,
          color: "var(--color-text-primary)", opacity: disabled ? "var(--opacity-disabled)" : 1,
        }} />
      {(error || helper) && (
        <span id={fid + "-msg"} style={{
          fontFamily: "var(--font-brand)", fontSize: "var(--text-body-sm-size)", lineHeight: 1,
          color: invalid ? "var(--color-status-error-text)" : "var(--color-text-secondary)",
        }}>{error || helper}</span>
      )}
    </div>
  );
}
