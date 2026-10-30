import React from "react";
import { Icon } from "../display/Icon.jsx";

/** Transient dark confirmation. Auto-dismisses; never carries the only copy of a message. */
export function Toast({ message, tone = "neutral", action, onDismiss, duration = 4000, style, ...rest }) {
  React.useEffect(() => {
    if (!onDismiss || !duration) return;
    const t = setTimeout(onDismiss, duration);
    return () => clearTimeout(t);
  }, [onDismiss, duration]);
  const accent = { neutral: null, success: "circle-check", error: "circle-x" }[tone];
  return (
    <div role="status" aria-live="polite" {...rest} style={{
      display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", maxWidth: 400,
      borderRadius: "var(--radius-pill)", background: "var(--color-bg-inverse)",
      color: "var(--color-text-inverse)", boxShadow: "var(--shadow-raised)",
      fontFamily: "var(--font-brand)", fontSize: "var(--text-body-md-size)", ...style,
    }}>
      {accent && <Icon name={accent} size={20} color="currentColor" strokeWidth={2} />}
      <span style={{ flex: 1, minWidth: 0 }}>{message}</span>
      {action}
    </div>
  );
}
