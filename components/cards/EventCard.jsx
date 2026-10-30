import React from "react";
import { ProfileRow } from "../display/ProfileRow.jsx";
import { Icon } from "../display/Icon.jsx";

/** 390x324 event tile: full-bleed image with a date chip and share button, then title + host + price. */
export function EventCard({
  image, date, title, hostName, hostHandle, hostAvatar, price, currency = "indian-rupee",
  onShare, style, ...rest
}) {
  return (
    <div {...rest} style={{
      display: "flex", flexDirection: "column", gap: 8, padding: 8, width: 390,
      borderRadius: "var(--radius-xl)", background: "var(--color-bg-default)", ...style,
    }}>
      <div style={{
        position: "relative", height: 220, borderRadius: "var(--radius-2xl)", overflow: "hidden",
        display: "flex", alignItems: "flex-start", justifyContent: "space-between",
        padding: 16, background: "var(--color-bg-surface)",
        backgroundImage: image ? `url(${image})` : undefined,
        backgroundSize: "cover", backgroundPosition: "center",
      }}>
        {date && (
          <span style={{
            display: "inline-flex", alignItems: "center", height: 30, padding: "8px 12px",
            borderRadius: "var(--radius-md)", background: "var(--color-bg-surface)",
            fontFamily: "var(--font-brand)", fontSize: "var(--text-body-md-size)", lineHeight: 1,
            color: "var(--color-text-primary)",
          }}>{date}</span>
        )}
        <button type="button" aria-label="Share" onClick={onShare} style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          width: 40, height: 40, border: "none", borderRadius: 99,
          background: "var(--color-bg-surface)", cursor: "pointer", marginLeft: "auto",
        }}><Icon name="reply" size={16} color="var(--color-action-primary)" /></button>
      </div>
      <span style={{
        fontFamily: "var(--font-brand)", fontSize: "var(--text-body-lg-size)", lineHeight: "16px",
        color: "var(--color-text-primary)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
      }}>{title}</span>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <ProfileRow name={hostName} handle={hostHandle} src={hostAvatar} verified style={{ flex: 1, minWidth: 0 }} />
        {price != null && (
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 2, minWidth: 120, height: 40,
            padding: "8px 12px", borderRadius: 99, background: "var(--color-bg-surface)",
            fontFamily: "var(--font-brand)", fontSize: "var(--text-body-lg-size)", fontWeight: 500,
            color: "var(--color-text-primary)",
          }}>
            <Icon name={currency} size={24} color="var(--color-icon-strong)" />{price}
          </span>
        )}
      </div>
    </div>
  );
}
