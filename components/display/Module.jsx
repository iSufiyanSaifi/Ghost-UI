import React from "react";
import { SectionHeader } from "./SectionHeader.jsx";

/** A titled block of content with an optional footer — the kit's `_module/*` family. */
export function Module({ title, count, headerAction, children, footer, sidePadding = true, style, ...rest }) {
  return (
    <section {...rest} style={{
      display: "flex", flexDirection: "column", gap: 12,
      padding: sidePadding ? "0 16px" : 0, ...style,
    }}>
      {title && <SectionHeader title={title} count={count} action={headerAction} />}
      {children}
      {footer && (
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 12,
          paddingTop: 4, fontFamily: "var(--font-brand)",
          fontSize: "var(--text-body-md-size)", color: "var(--color-text-secondary)",
        }}>{footer}</div>
      )}
    </section>
  );
}
