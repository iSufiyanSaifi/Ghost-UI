import React from "react";
import { Icon } from "../display/Icon.jsx";

const TONES = {
  info:    { icon: "info",           fg: "var(--color-status-info)" },
  success: { icon: "circle-check",   fg: "var(--color-status-success)" },
  warning: { icon: "triangle-alert", fg: "var(--color-status-warning)" },
  error:   { icon: "circle-x",       fg: "var(--color-status-error)" },
};

/** Inline message bar. Icon carries the tone alongside the words, never instead of them. */
export function Inform({ tone = "info", title, children, action, onDismiss, style, ...rest }) {
  const t = TONES[tone] || TONES.info;
  return (
    <div role="status" {...rest} style={{
      display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 16px",
      borderRadius: "var(--radius-lg)", background: "var(--color-bg-surface)",
      boxShadow: "inset 0 0 0 var(--border-thin) var(--color-border-default)", ...style,
    }}>
      <Icon name={t.icon} size={20} color={t.fg} strokeWidth={2} style={{ marginTop: 1 }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 2, flex: 1, minWidth: 0 }}>
        {title && <span style={{ fontFamily: "var(--font-brand)", fontSize: "var(--text-body-lg-size)", fontWeight: 500, color: "var(--color-text-primary)" }}>{title}</span>}
        {children && <span style={{ fontFamily: "var(--font-brand)", fontSize: "var(--text-body-md-size)", color: "var(--color-text-secondary)" }}>{children}</span>}
      </div>
      {action}
      {onDismiss && (
        <button type="button" aria-label="Dismiss" onClick={onDismiss}
          style={{ border: "none", background: "none", padding: 0, cursor: "pointer", display: "flex" }}>
          <Icon name="x" size={20} />
        </button>
      )}
    </div>
  );
}
