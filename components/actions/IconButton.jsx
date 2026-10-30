import React from "react";

const BOX = { small: 32, medium: 40, big: 48 };
const GLYPH = { small: 16, medium: 20, big: 24 };

/** Square-footprint icon-only action. Circle by default, rounded on request. */
export function IconButton({
  icon, label, size = "medium", variant = "secondary", shape = "circle",
  disabled = false, style, ...rest
}) {
  const box = BOX[size] || BOX.medium;
  const fills = {
    primary: { bg: "var(--color-action-primary)", fg: "var(--color-text-on-action)", bd: "none" },
    secondary: { bg: "var(--color-action-secondary)", fg: "var(--color-icon-strong)", bd: "none" },
    ghost: { bg: "transparent", fg: "var(--color-icon-strong)", bd: "var(--border-thin) solid var(--color-border-default)" },
  };
  const k = fills[variant] || fills.secondary;
  return (
    <button type="button" aria-label={label} disabled={disabled} {...rest} style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      width: box, height: box, padding: 0, border: k.bd, background: k.bg, color: k.fg,
      borderRadius: shape === "circle" ? "var(--radius-pill)" : "var(--radius-lg)",
      cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? "var(--opacity-disabled)" : 1,
      transition: "background var(--motion-fast) var(--ease-standard)", ...style,
    }}>
      {icon || null}
      {!icon && <span style={{ width: GLYPH[size], height: GLYPH[size] }} />}
    </button>
  );
}
