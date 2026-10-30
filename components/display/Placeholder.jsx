import React from "react";
import { Icon } from "./Icon.jsx";

/** Content stand-in for unfilled slots and layout studies. */
export function Placeholder({ width = "100%", height = 120, label, icon = "image", radius = "var(--radius-lg)", style, ...rest }) {
  return (
    <div {...rest} style={{
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6,
      width, height, borderRadius: radius, background: "var(--color-bg-box)",
      color: "var(--color-text-secondary)", ...style,
    }}>
      <Icon name={icon} size={24} />
      {label && (
        <span style={{ fontFamily: "var(--font-brand)", fontSize: "var(--text-body-sm-size)" }}>{label}</span>
      )}
    </div>
  );
}
