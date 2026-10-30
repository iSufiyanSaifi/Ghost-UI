import React from "react";

/** Generic surface. 16px radius, white, hairline ring optional. */
export function Card({ children, padding = 12, radius = "var(--radius-xl)", outlined = false, elevated = false, style, ...rest }) {
  return (
    <div {...rest} style={{
      display: "flex", flexDirection: "column", gap: 8,
      padding, borderRadius: radius, background: "var(--color-bg-default)",
      boxShadow: [
        outlined ? "inset 0 0 0 1px var(--color-border-default)" : "",
        elevated ? "58px 26px 68px 0 rgba(35,44,93,0.06)" : "",
      ].filter(Boolean).join(", ") || "none",
      ...style,
    }}>{children}</div>
  );
}
