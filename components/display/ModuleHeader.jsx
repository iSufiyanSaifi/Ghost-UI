import React from "react";

/** `_module/header` — title, optional count and subtitle, trailing action link. */
export function ModuleHeader({ title, subtitle, count, actionLabel, onAction, action, style, ...rest }) {
  return (
    <header {...rest} style={{ display: "flex", alignItems: "center", gap: 12, minHeight: 32, ...style }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 2, flex: 1, minWidth: 0 }}>
        <span style={{ display: "inline-flex", alignItems: "baseline", gap: 6, fontFamily: "var(--font-brand)", fontSize: "var(--text-title-md-size)", fontWeight: 600, color: "var(--color-text-primary)" }}>
          {title}
          {count != null && <span style={{ fontFamily: "var(--font-brand)", fontSize: "var(--text-body-md-size)", fontWeight: 400, color: "var(--color-text-secondary)" }}>{count}</span>}
        </span>
        {subtitle && <span style={{ fontFamily: "var(--font-brand)", fontSize: "var(--text-body-sm-size)", fontWeight: 400, color: "var(--color-text-secondary)" }}>{subtitle}</span>}
      </div>
      {action || (actionLabel && (
        <button type="button" onClick={onAction} style={{
          border: "none", background: "transparent", padding: 0, cursor: "pointer",
          fontFamily: "var(--font-brand)", fontSize: "var(--text-body-md-size)", fontWeight: 500, color: "var(--color-text-link, var(--color-text-primary))", textDecoration: "underline",
        }}>{actionLabel}</button>
      ))}
    </header>
  );
}
