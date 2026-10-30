import React from "react";
import { Icon } from "./Icon.jsx";

/** Message bubble. Outgoing fills the accent; incoming sits on the surface grey. */
export function ChatBubble({ children, direction = "in", time, status, style, ...rest }) {
  const out = direction === "out";
  return (
    <div {...rest} style={{
      display: "flex", flexDirection: "column", gap: 4, maxWidth: 280,
      alignSelf: out ? "flex-end" : "flex-start",
      alignItems: out ? "flex-end" : "flex-start", ...style,
    }}>
      <span style={{
        padding: "10px 14px",
        borderRadius: out ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
        background: out ? "var(--color-action-primary)" : "var(--color-bg-surface)",
        color: out ? "var(--color-text-on-action)" : "var(--color-text-primary)",
        fontFamily: "var(--font-brand)", fontSize: "var(--text-body-lg-size)", lineHeight: 1.35,
      }}>{children}</span>
      {(time || status) && (
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 4,
          fontFamily: "var(--font-brand)", fontSize: "var(--text-body-xs-size)",
          color: "var(--color-text-secondary)",
        }}>
          {time}
          {status === "sent" && <Icon name="check" size={12} />}
          {status === "read" && <Icon name="check-check" size={12} color="#2563EB" />}
        </span>
      )}
    </div>
  );
}
