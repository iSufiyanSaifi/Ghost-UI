import React from "react";

/** 36px filter/selection pill. Inactive is a hairline outline; active fills #1C70D4. */
export function Chip({ children, active = false, leadingIcon, onDismiss, onClick, disabled = false, style, ...rest }) {
  const fg = active ? "var(--color-text-on-action)" : "var(--color-text-secondary)";
  return (
    <button type="button" aria-pressed={active} onClick={onClick} disabled={disabled} {...rest} style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 4,
      height: "var(--size-chip)", padding: "8px 20px", overflow: "hidden",
      borderRadius: "var(--radius-pill)", border: "none",
      background: active ? "var(--color-action-primary)" : "transparent",
      boxShadow: active ? "none" : "inset 0 0 0 var(--border-hairline) var(--color-border-default)",
      color: fg, fontFamily: "var(--font-brand)", fontSize: "var(--text-body-lg-size)",
      fontWeight: 400, lineHeight: 1, whiteSpace: "nowrap",
      cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? "var(--opacity-disabled)" : 1,
      transition: "background var(--motion-fast) var(--ease-standard)", ...style,
    }}>
      {leadingIcon}
      {children}
      {onDismiss && (
        <span role="button" aria-label="Remove" onClick={e => { e.stopPropagation(); onDismiss(); }}
          style={{ display: "inline-flex", marginLeft: 4 }}>×</span>
      )}
    </button>
  );
}
