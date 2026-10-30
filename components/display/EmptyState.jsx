import React from "react";
import { Icon } from "./Icon.jsx";

/** Centred placeholder for an empty list. Always offers the next action. */
export function EmptyState({ icon = "inbox", title, children, action, style, ...rest }) {
  return (
    <div {...rest} style={{
      display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
      padding: "40px 24px", textAlign: "center", ...style,
    }}>
      <Icon name={icon} size={40} />
      <span style={{
        fontFamily: "var(--font-brand)", fontSize: "var(--text-title-sm-size)",
        fontWeight: 500, color: "var(--color-text-primary)",
      }}>{title}</span>
      {children && (
        <span style={{
          fontFamily: "var(--font-brand)", fontSize: "var(--text-body-md-size)",
          color: "var(--color-text-secondary)", maxWidth: 280,
        }}>{children}</span>
      )}
      {action}
    </div>
  );
}
