import React from "react";

/** Leading or trailing bit inside a field — an icon, a unit, a currency, a small action. */
export function Adornment({ children, type = "icon", onClick, label, style, ...rest }) {
  const base = {
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 4,
    flexShrink: 0, fontFamily: "var(--font-brand)",
    fontSize: "var(--text-body-lg-size)",
    color: type === "text" ? "var(--color-text-secondary)" : "var(--color-icon-default)",
    ...style,
  };
  if (!onClick) return <span {...rest} style={base}>{children}</span>;
  return (
    <button type="button" aria-label={label} onClick={onClick} {...rest}
      style={{ ...base, border: "none", background: "none", padding: 0, cursor: "pointer" }}>{children}</button>
  );
}
