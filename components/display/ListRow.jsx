import React from "react";
import { Icon } from "./Icon.jsx";

/** Settings / menu row: leading slot, label + description, trailing slot or chevron. */
export function ListRow({ icon, label, description, trailing, chevron = false, onClick, style, ...rest }) {
  const Tag = onClick ? "button" : "div";
  return (
    <Tag onClick={onClick} {...rest} style={{
      display: "flex", alignItems: "center", gap: 12, width: "100%",
      minHeight: "var(--size-touch-min)", padding: "12px 16px", textAlign: "left",
      border: "none", borderRadius: "var(--radius-lg)", background: "transparent",
      cursor: onClick ? "pointer" : undefined, ...style,
    }}>
      {icon}
      <span style={{ display: "flex", flexDirection: "column", gap: 2, flex: 1, minWidth: 0 }}>
        <span style={{ fontFamily: "var(--font-brand)", fontSize: "var(--text-body-lg-size)", color: "var(--color-text-primary)" }}>{label}</span>
        {description && (
          <span style={{ fontFamily: "var(--font-brand)", fontSize: "var(--text-body-sm-size)", color: "var(--color-text-secondary)" }}>{description}</span>
        )}
      </span>
      {trailing}
      {chevron && <Icon name="chevron-right" size={20} />}
    </Tag>
  );
}
