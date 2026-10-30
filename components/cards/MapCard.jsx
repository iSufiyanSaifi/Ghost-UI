import React from "react";
import { Icon } from "../display/Icon.jsx";

/** Location tile — static map image with a pin and an address line. */
export function MapCard({ image, place, address, distance, onOpen, style, ...rest }) {
  return (
    <div {...rest} style={{
      display: "flex", flexDirection: "column", gap: 8, padding: 8, width: 390,
      borderRadius: "var(--radius-xl)", background: "var(--color-bg-default)",
      boxShadow: "inset 0 0 0 var(--border-thin) var(--color-border-default)", ...style,
    }}>
      <div style={{
        position: "relative", height: 140, borderRadius: "var(--radius-lg)", overflow: "hidden",
        display: "flex", alignItems: "center", justifyContent: "center",
        background: image ? `url(${image}) center/cover no-repeat` : "var(--gh-grey-55)",
      }}>
        {!image && <Icon name="map" size={32} />}
        <span style={{
          position: "absolute", display: "flex", alignItems: "center", justifyContent: "center",
          width: 32, height: 32, borderRadius: "var(--radius-pill)",
          background: "var(--color-action-primary)", boxShadow: "var(--shadow-fab)",
        }}><Icon name="map-pin" size={18} color="var(--gh-white)" strokeWidth={2} /></span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "0 8px 4px" }}>
        <span style={{ display: "flex", flexDirection: "column", gap: 2, flex: 1, minWidth: 0 }}>
          <span style={{ fontFamily: "var(--font-brand)", fontSize: "var(--text-body-lg-size)", fontWeight: 500, color: "var(--color-text-primary)" }}>{place}</span>
          {address && <span style={{ fontFamily: "var(--font-brand)", fontSize: "var(--text-body-sm-size)", color: "var(--color-text-secondary)" }}>{address}</span>}
        </span>
        {distance && (
          <span style={{
            display: "inline-flex", alignItems: "center", height: 32, padding: "0 12px",
            borderRadius: "var(--radius-pill)", background: "var(--color-bg-surface)",
            fontFamily: "var(--font-brand)", fontSize: "var(--text-body-md-size)", color: "var(--color-text-primary)",
          }}>{distance}</span>
        )}
        {onOpen && (
          <button type="button" aria-label="Open in maps" onClick={onOpen}
            style={{ border: "none", background: "none", padding: 0, cursor: "pointer", display: "flex" }}>
            <Icon name="external-link" size={20} />
          </button>
        )}
      </div>
    </div>
  );
}
