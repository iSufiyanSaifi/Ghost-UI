import React from "react";

/** 320x204 commerce tile: 160px image well, title, struck original + accent price. */
export function ProductCard({ image, title, price, compareAt, currency = "$", onClick, style, ...rest }) {
  return (
    <div onClick={onClick} {...rest} style={{
      display: "flex", flexDirection: "column", gap: 8, width: 320,
      cursor: onClick ? "pointer" : undefined, ...style,
    }}>
      <div style={{
        height: 160, borderRadius: "var(--radius-xl)", background: "var(--gh-grey-55)",
        backgroundImage: image ? `url(${image})` : undefined,
        backgroundSize: "cover", backgroundPosition: "center",
      }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <span style={{
          fontFamily: "var(--font-brand)", fontSize: "var(--text-body-lg-size)",
          lineHeight: "16px", color: "var(--color-text-primary)",
        }}>{title}</span>
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {compareAt && (
            <span style={{
              fontFamily: "var(--font-brand)", fontSize: "var(--text-body-md-size)",
              lineHeight: "14px", color: "var(--color-text-secondary)", textDecoration: "line-through",
            }}>{currency}{compareAt}</span>
          )}
          <span style={{
            fontFamily: "var(--font-brand)", fontSize: "var(--text-body-lg-size)", fontWeight: 500,
            lineHeight: "16px", color: "var(--color-action-primary)",
          }}>{currency}{price}</span>
        </div>
      </div>
    </div>
  );
}
