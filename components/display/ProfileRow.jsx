import React from "react";
import { Avatar } from "./Avatar.jsx";
import { Icon } from "./Icon.jsx";

/** Pill-shaped identity row: avatar, name (+ verified tick), handle, trailing slot. */
export function ProfileRow({ name, handle, src, verified = false, trailing, outlined = true, style, ...rest }) {
  return (
    <div {...rest} style={{
      display: "flex", alignItems: "center", gap: 8,
      padding: "8px 12px", borderRadius: "var(--radius-pill)",
      background: "var(--color-bg-default)",
      border: outlined ? "var(--border-thin) solid var(--color-border-default)" : "none",
      ...style,
    }}>
      <Avatar src={src} name={name} size={36} />
      <div style={{ display: "flex", flexDirection: "column", gap: 4, padding: 2, flex: 1, minWidth: 0 }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 2 }}>
          <span style={{
            fontFamily: "var(--font-brand)", fontSize: "var(--text-body-lg-size)", fontWeight: 500,
            lineHeight: "16px", color: "var(--color-text-primary)",
            overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
          }}>{name}</span>
          {verified && <Icon name="badge-check" size={10} color="#2563EB" />}
        </span>
        {handle && (
          <span style={{
            fontFamily: "var(--font-brand)", fontSize: "var(--text-body-sm-size)",
            lineHeight: "16px", color: "var(--color-text-secondary)",
          }}>{handle}</span>
        )}
      </div>
      {trailing}
    </div>
  );
}
