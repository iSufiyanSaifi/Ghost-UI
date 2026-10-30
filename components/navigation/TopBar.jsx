import React from "react";
import { Icon } from "../display/Icon.jsx";

/** Screen header: optional back affordance, title block, trailing actions. */
export function TopBar({ title, subtitle, onBack, actions, style, ...rest }) {
  return (
    <header {...rest} style={{
      display: "flex", alignItems: "center", gap: 12,
      minHeight: 56, padding: "8px 16px", background: "transparent", ...style,
    }}>
      {onBack && (
        <button type="button" aria-label="Back" onClick={onBack} style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          width: 40, height: 40, flexShrink: 0, border: "none", borderRadius: "var(--radius-pill)",
          background: "var(--color-bg-surface)", cursor: "pointer",
        }}><Icon name="arrow-left" size={24} color="var(--color-icon-strong)" /></button>
      )}
      <div style={{ display: "flex", flexDirection: "column", gap: 2, flex: 1, minWidth: 0 }}>
        <span style={{
          fontFamily: "var(--font-brand)", fontSize: "var(--text-title-md-size)", fontWeight: 500,
          lineHeight: "24px", color: "var(--color-text-primary)",
          overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
        }}>{title}</span>
        {subtitle && (
          <span style={{
            fontFamily: "var(--font-brand)", fontSize: "var(--text-body-sm-size)",
            lineHeight: "16px", color: "var(--color-text-secondary)",
          }}>{subtitle}</span>
        )}
      </div>
      {actions && <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>{actions}</div>}
    </header>
  );
}
