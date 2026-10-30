import React from "react";
import { Avatar } from "./Avatar.jsx";
import { Icon } from "./Icon.jsx";
import { Badge } from "./Badge.jsx";

/** Label + optional icon + optional badge — the `_list/label` atom. */
export function ListLabel({ children, weight = "medium", icon, badge, style, ...rest }) {
  return (
    <span {...rest} style={{ display: "inline-flex", alignItems: "center", gap: 6, minWidth: 0, ...style }}>
      {icon && <Icon name={icon} size={16} />}
      <span style={{
        fontFamily: "var(--font-brand)", fontSize: "var(--text-body-lg-size)",
        fontWeight: weight === "regular" ? 400 : 500, color: "var(--color-text-primary)",
        overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
      }}>{children}</span>
      {badge && <Badge tone="neutral">{badge}</Badge>}
    </span>
  );
}

/** Leading avatar or image — the `_list/thumbnail` atom. Sizes small 32 / medium 40 / large 56. */
export function ListThumbnail({ src, name, type = "avatar", size = "medium", style, ...rest }) {
  const px = { small: 32, medium: 40, large: 56 }[size] || 40;
  if (type === "avatar") return <Avatar src={src} name={name} size={px} style={style} {...rest} />;
  return (
    <span {...rest} style={{
      width: px, height: px, flexShrink: 0, borderRadius: "var(--radius-md)",
      background: src ? `url(${src}) center/cover no-repeat` : "var(--color-bg-box)",
      display: "inline-block", ...style,
    }} />
  );
}

/** One line of supporting metadata — the `_list/additional information` atom. */
export function ListInfo({ children, muted = false, style, ...rest }) {
  return (
    <span {...rest} style={{
      fontFamily: "var(--font-brand)", fontSize: "var(--text-body-sm-size)",
      color: muted ? "var(--color-text-muted)" : "var(--color-text-secondary)", ...style,
    }}>{children}</span>
  );
}

/** Trailing tap target — the `_list/additional action` atom. */
export function ListAction({ icon = "chevron-right", label, onClick, style, ...rest }) {
  return (
    <button type="button" aria-label={label || icon} onClick={onClick} {...rest} style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      minWidth: 32, minHeight: 32, border: "none", background: "none",
      padding: 4, cursor: "pointer", flexShrink: 0, ...style,
    }}><Icon name={icon} size={20} /></button>
  );
}

/** Leading slot of a row — the `_list/prefix` atom (icon, avatar or control). */
export function ListPrefix({ children, icon, style, ...rest }) {
  return (
    <span {...rest} style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0, ...style }}>
      {children || (icon && <Icon name={icon} size={24} />)}
    </span>
  );
}

/** Trailing slot of a row — the `_list/suffix` atom (badge, switch, chevron, text). */
export function ListSuffix({ children, text, style, ...rest }) {
  return (
    <span {...rest} style={{ display: "inline-flex", alignItems: "center", gap: 8, flexShrink: 0, ...style }}>
      {text && (
        <span style={{ fontFamily: "var(--font-brand)", fontSize: "var(--text-body-md-size)", color: "var(--color-text-secondary)" }}>{text}</span>
      )}
      {children}
    </span>
  );
}

/** Grouped export matching the file name for the bundler. */
export const ListParts = { ListLabel, ListThumbnail, ListInfo, ListAction, ListPrefix, ListSuffix };
