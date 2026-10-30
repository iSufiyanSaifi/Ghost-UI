import React from "react";

/** Row that opens a content module: title, optional count, trailing action. */
export function SectionHeader({ title, count, action, style, ...rest }) {
  return (
    <div {...rest} style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      gap: 12, minHeight: 28, ...style,
    }}>
      <span style={{ display: "inline-flex", alignItems: "baseline", gap: 8 }}>
        <span style={{
          fontFamily: "var(--font-brand)", fontSize: "var(--text-title-sm-size)",
          fontWeight: 600, lineHeight: "20px", color: "var(--color-text-primary)",
        }}>{title}</span>
        {count != null && (
          <span style={{
            fontFamily: "var(--font-brand)", fontSize: "var(--text-body-md-size)",
            color: "var(--color-text-secondary)",
          }}>{count}</span>
        )}
      </span>
      {action}
    </div>
  );
}
