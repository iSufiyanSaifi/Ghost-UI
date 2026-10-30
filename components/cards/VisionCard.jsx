import React from "react";
import { Icon } from "../display/Icon.jsx";

/** Dream / aspiration tile: photo behind two translucent gradient bands. */
export function VisionCard({ image, category, title, onDelete, style, ...rest }) {
  const band = "radial-gradient(50.509px 100.954px at 25% 50%, rgba(38,169,224,0.4) 0%, rgba(112,12,234,0.4) 100%)";
  return (
    <div {...rest} style={{
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      width: 196, height: 192, overflow: "hidden", borderRadius: "var(--radius-md)",
      background: image ? `url(${image}) center/cover no-repeat` : "var(--color-bg-box)",
      boxShadow: "0 2px 8px 0 rgba(0,0,0,0.15)", ...style,
    }}>
      <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", padding: "2px 4px", background: band }}>
        <span style={{
          fontFamily: "var(--font-brand)", fontSize: "var(--text-body-md-size)", lineHeight: "14px",
          color: "var(--gh-white)", display: "-webkit-box", WebkitBoxOrient: "vertical",
          WebkitLineClamp: 2, overflow: "hidden",
        }}>{category}</span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "2px 4px", background: band }}>
        <span style={{
          flex: 1, minWidth: 0, fontFamily: "var(--font-brand)", fontSize: "var(--text-body-md-size)",
          lineHeight: "14px", color: "var(--gh-white)", display: "-webkit-box",
          WebkitBoxOrient: "vertical", WebkitLineClamp: 2, overflow: "hidden",
        }}>{title}</span>
        {onDelete && (
          <button type="button" aria-label="Delete" onClick={onDelete}
            style={{ border: "none", background: "none", padding: 0, cursor: "pointer", display: "flex" }}>
            <Icon name="trash-2" size={20} color="var(--gh-white)" />
          </button>
        )}
      </div>
    </div>
  );
}
