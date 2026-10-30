import React from "react";
import { Avatar } from "./Avatar.jsx";
import { Icon } from "./Icon.jsx";

/** Full profile header: avatar, name + tick, handle, and a stat strip. */
export function ProfileHeader({ name, handle, src, verified = false, stats = [], actions, style, ...rest }) {
  return (
    <div {...rest} style={{
      display: "flex", flexDirection: "column", alignItems: "center", gap: 12, padding: "16px 0", ...style,
    }}>
      <Avatar src={src} name={name} size="xl" />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
        <span style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          fontFamily: "var(--font-brand)", fontSize: "var(--text-title-lg-size)",
          fontWeight: 500, color: "var(--color-text-primary)",
        }}>
          {name}
          {verified && <Icon name="badge-check" size={16} color="#2563EB" />}
        </span>
        {handle && (
          <span style={{ fontFamily: "var(--font-brand)", fontSize: "var(--text-body-md-size)", color: "var(--color-text-secondary)" }}>{handle}</span>
        )}
      </div>
      {actions && <div style={{ display: "flex", gap: 8 }}>{actions}</div>}
      {stats.length > 0 && (
        <div style={{ display: "flex", gap: 8, alignSelf: "stretch" }}>
          {stats.map((s, i) => (
            <div key={i} style={{
              flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2, padding: 12,
              borderRadius: "var(--radius-xl)",
              boxShadow: "inset 0 0 0 var(--border-thin) var(--color-border-default)",
            }}>
              <span style={{ fontFamily: "var(--font-brand)", fontSize: "var(--text-title-md-size)", fontWeight: 500 }}>{s.value}</span>
              <span style={{ fontFamily: "var(--font-brand)", fontSize: "var(--text-body-sm-size)", color: "var(--color-text-secondary)" }}>{s.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
