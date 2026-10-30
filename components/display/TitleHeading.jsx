import React from "react";

/** The kit's plain section title — 28px tall, no rule, no decoration. */
export function TitleHeading({ children, align = "start", style, ...rest }) {
  return (
    <div {...rest} style={{
      display: "flex", alignItems: "center", justifyContent: align === "center" ? "center" : "flex-start",
      minHeight: 28, alignSelf: "stretch", ...style,
    }}>
      <span style={{
        fontFamily: "var(--font-display)", fontSize: "var(--text-title-md-size)", fontWeight: 500,
        lineHeight: "24px", color: "var(--color-text-primary)",
      }}>{children}</span>
    </div>
  );
}
