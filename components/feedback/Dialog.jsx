import React from "react";
import { Button } from "../actions/Button.jsx";
import { Icon } from "../display/Icon.jsx";

const TONES = {
  confirmation: { icon: "triangle-alert", color: "var(--gh-amber-400)" },
  success:      { icon: "circle-check",   color: "var(--color-status-success)" },
  error:        { icon: "circle-x",       color: "var(--color-status-error)" },
  info:         { icon: "info",           color: "var(--color-status-info)" },
};

/** Centred confirmation card — icon, headline, supporting copy, right-aligned actions. */
export function Dialog({
  tone = "confirmation", title, children, confirmLabel = "Send", cancelLabel = "Cancel",
  onConfirm, onCancel, style, ...rest
}) {
  const t = TONES[tone] || TONES.confirmation;
  return (
    <div role="dialog" aria-modal="true" aria-label={title} {...rest} style={{
      display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
      width: 400, padding: 16, borderRadius: "var(--radius-lg)",
      border: "var(--border-thin) solid var(--color-border-default)",
      background: "var(--color-bg-default)", ...style,
    }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
        <Icon name={t.icon} size={40} color={t.color} strokeWidth={2} />
        <span style={{
          fontFamily: "var(--font-brand)", fontSize: "var(--text-title-md-size)", fontWeight: 500,
          lineHeight: 1, color: "var(--color-text-primary)",
        }}>{title}</span>
      </div>
      <p style={{
        margin: 0, alignSelf: "stretch", fontFamily: "var(--font-brand)",
        fontSize: "var(--text-body-md-size)", lineHeight: 1.35, color: "var(--gh-grey-350)",
      }}>{children}</p>
      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 16, alignSelf: "stretch" }}>
        {cancelLabel && <Button variant="secondary" size="medium" onClick={onCancel}>{cancelLabel}</Button>}
        <Button variant="primary" size="medium" onClick={onConfirm}>{confirmLabel}</Button>
      </div>
    </div>
  );
}
