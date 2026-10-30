import React from "react";

/** Palette swatch from the Theme pages. 180x128, 100px colour well, name + hex. */
export function ColorCard({ color, name, hex, showHex = true, style, ...rest }) {
  return (
    <div {...rest} style={{
      display: "flex", flexDirection: "column", alignItems: "center",
      width: 180, minHeight: 128, overflow: "hidden", borderRadius: "var(--radius-md)",
      background: "var(--color-bg-default)", ...style,
    }}>
      <div style={{ height: 100, alignSelf: "stretch", borderRadius: "8px 8px 0 0", background: color }} />
      <div style={{
        display: "flex", flexDirection: "column", gap: 4, alignSelf: "stretch",
        minHeight: 28, padding: 8, boxSizing: "border-box",
      }}>
        <span style={{
          fontFamily: "var(--font-brand)", fontSize: "var(--text-body-sm-size)",
          lineHeight: "12px", color: "var(--color-text-primary)",
        }}>{name}</span>
        {showHex && hex && (
          <span style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 2 }}>
            <span style={{ fontFamily: "var(--font-brand)", fontSize: "var(--text-body-sm-size)", fontWeight: 500, lineHeight: "12px", color: "var(--gh-primary-500)" }}>#</span>
            <span style={{ fontFamily: "var(--font-brand)", fontSize: "var(--text-body-sm-size)", lineHeight: "12px", color: "var(--color-text-secondary)" }}>
              {String(hex).replace(/^#/, "")}
            </span>
          </span>
        )}
      </div>
    </div>
  );
}
