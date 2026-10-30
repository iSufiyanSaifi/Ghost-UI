import React from "react";

/** Carousel position indicator. The active dot stretches into a pill. */
export function PageDots({ count = 3, index = 0, onSelect, style, ...rest }) {
  return (
    <div role="tablist" aria-label="Page" {...rest} style={{ display: "inline-flex", alignItems: "center", gap: 6, ...style }}>
      {Array.from({ length: count }, (_, i) => {
        const on = i === index;
        return (
          <button key={i} role="tab" aria-selected={on} aria-label={`Page ${i + 1}`} type="button"
            onClick={() => onSelect && onSelect(i)} style={{
              width: on ? 20 : 6, height: 6, padding: 0, border: "none",
              borderRadius: "var(--radius-pill)",
              background: on ? "var(--color-action-primary)" : "var(--color-border-strong)",
              cursor: onSelect ? "pointer" : "default",
              transition: "width var(--motion-base) var(--ease-standard), background var(--motion-base) var(--ease-standard)",
            }} />
        );
      })}
    </div>
  );
}
