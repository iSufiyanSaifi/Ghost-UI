import React from "react";

/** Floating action button — the kit uses it for the primary create action. */
export function Fab({ icon, label, extended = false, children, style, ...rest }) {
  return (
    <button type="button" aria-label={extended ? undefined : label} {...rest} style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 12,
      height: "var(--size-fab)", width: extended ? undefined : "var(--size-fab)",
      padding: extended ? "0 24px" : 0, border: "none",
      borderRadius: "var(--radius-pill)", background: "var(--color-action-primary)",
      color: "var(--color-text-on-action)", boxShadow: "var(--shadow-fab)",
      fontFamily: "var(--font-brand)", fontSize: "var(--text-title-md-size)", fontWeight: 500,
      cursor: "pointer", transition: "transform var(--motion-fast) var(--ease-standard)", ...style,
    }}>
      {icon}
      {extended && (children || label)}
    </button>
  );
}
