import React from "react";

const SIZES = { xs: 28, sm: 36, md: 40, lg: 56, xl: 80 };

/** Circular avatar with the kit's 1px white/grey inset ring. */
export function Avatar({ src, alt = "", name, size = "md", ring = true, style, ...rest }) {
  const px = typeof size === "number" ? size : (SIZES[size] || SIZES.md);
  const initials = (name || "").split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
  return (
    <span {...rest} style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      width: px, height: px, flexShrink: 0, overflow: "hidden",
      borderRadius: "50%", background: "var(--color-bg-surface)",
      boxShadow: ring ? "inset 0 0 0 1px var(--color-border-default)" : "none",
      fontFamily: "var(--font-brand)", fontSize: Math.round(px * 0.36), fontWeight: 500,
      color: "var(--color-text-secondary)", ...style,
    }}>
      {src ? <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : initials}
    </span>
  );
}

/** Overlapping avatar row, ending in a "+n" pill when the list is longer. */
export function AvatarGroup({ items = [], max = 3, size = 28, style, ...rest }) {
  const shown = items.slice(0, max);
  const rest_ = items.length - shown.length;
  return (
    <span {...rest} style={{ display: "inline-flex", alignItems: "center", ...style }}>
      {shown.map((it, i) => (
        <Avatar key={i} src={it.src} name={it.name} size={size}
          style={{ marginLeft: i ? -8 : 0, boxShadow: "inset 0 0 0 1px var(--gh-white)" }} />
      ))}
      {rest_ > 0 && (
        <span style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center",
          width: size, height: size, marginLeft: -8, borderRadius: 24,
          background: "#EBECFF", boxShadow: "inset 0 0 0 1px var(--gh-white)",
          fontFamily: "var(--font-brand)", fontSize: 12, fontWeight: 500, color: "var(--gh-primary-500)",
        }}>+{rest_}</span>
      )}
    </span>
  );
}
