import React from "react";
import { ProfileRow } from "../display/ProfileRow.jsx";
import { Icon } from "../display/Icon.jsx";

/** Reviewer identity + rating pill above a grey quote block. */
export function ReviewCard({ name, handle, avatar, rating, body, style, ...rest }) {
  return (
    <div {...rest} style={{
      display: "flex", flexDirection: "column", gap: 12, padding: 12, width: 400,
      borderRadius: "var(--radius-lg)", background: "var(--color-bg-default)", ...style,
    }}>
      <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
        <ProfileRow name={name} handle={handle} src={avatar} verified outlined={false} style={{ flex: 1, minWidth: 0, padding: "4px 12px" }} />
        {rating != null && (
          <span style={{
            display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
            height: 40, padding: "12px 24px 12px 20px", borderRadius: "var(--radius-pill)",
            background: "var(--color-bg-surface)", boxShadow: "inset 0 0 0 var(--border-hairline) var(--color-border-default)",
            fontFamily: "var(--font-brand)", fontSize: "var(--text-title-md-size)", fontWeight: 500,
            color: "var(--color-text-secondary)",
          }}>
            <Icon name="star" size={16} color="#16A34A" />{rating}
          </span>
        )}
      </div>
      <p style={{
        margin: 0, minHeight: 72, padding: "12px 16px", borderRadius: "var(--radius-md)",
        background: "var(--color-bg-surface)", fontFamily: "var(--font-brand)",
        fontSize: "var(--text-body-lg-size)", lineHeight: 1.35, color: "var(--color-text-primary)",
      }}>{body}</p>
    </div>
  );
}
