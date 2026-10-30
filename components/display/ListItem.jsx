import React from "react";
import { Avatar } from "./Avatar.jsx";
import { Icon } from "./Icon.jsx";

const THUMB = { small: 32, medium: 40, large: 56 };

/** Composed list row: thumbnail, label + badge, supporting lines, trailing actions. */
export function ListItem({
  thumbnail, thumbnailType = "avatar", thumbnailSize = "medium",
  label, badge, info, secondaryInfo, actions, chevron = false,
  selected = false, onClick, style, ...rest
}) {
  const box = THUMB[thumbnailSize] || THUMB.medium;
  const Tag = onClick ? "button" : "div";
  return (
    <Tag onClick={onClick} aria-current={selected ? "true" : undefined} {...rest} style={{
      display: "flex", alignItems: "center", gap: 12, width: "100%", textAlign: "left",
      minHeight: "var(--size-touch-min)", padding: "8px 16px", border: "none",
      borderRadius: "var(--radius-pill)",
      background: selected ? "var(--color-bg-surface)" : "transparent",
      cursor: onClick ? "pointer" : undefined, ...style,
    }}>
      {thumbnail && (thumbnailType === "avatar"
        ? <Avatar src={thumbnail} name={label} size={box} />
        : <span style={{
            width: box, height: box, flexShrink: 0, borderRadius: "var(--radius-md)",
            background: `var(--color-bg-box) center/cover no-repeat`,
            backgroundImage: `url(${thumbnail})`,
          }} />)}
      <span style={{ display: "flex", flexDirection: "column", gap: 2, flex: 1, minWidth: 0 }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 6, minWidth: 0 }}>
          <span style={{
            fontFamily: "var(--font-brand)", fontSize: "var(--text-body-lg-size)", fontWeight: 500,
            color: "var(--color-text-primary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
          }}>{label}</span>
          {badge}
        </span>
        {info && <span style={{ fontFamily: "var(--font-brand)", fontSize: "var(--text-body-sm-size)", color: "var(--color-text-secondary)" }}>{info}</span>}
        {secondaryInfo && <span style={{ fontFamily: "var(--font-brand)", fontSize: "var(--text-body-sm-size)", color: "var(--color-text-muted)" }}>{secondaryInfo}</span>}
      </span>
      {actions}
      {chevron && <Icon name="chevron-right" size={20} />}
    </Tag>
  );
}
