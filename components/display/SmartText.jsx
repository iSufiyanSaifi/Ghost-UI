import React from "react";
import { Icon } from "./Icon.jsx";

/** Inline value marked as AI-generated. Label in the icon grey, value in ink. */
export function SmartText({ label, value, ai = true, style, ...rest }) {
  return (
    <span {...rest} style={{
      display: "inline-flex", alignItems: "center", gap: 2, height: 18,
      padding: "0 2px", borderRadius: "var(--radius-lg)", ...style,
    }}>
      {ai && <Icon name="sparkles" size={18} color="var(--color-action-primary)" />}
      <span style={{ display: "inline-flex", alignItems: "center", gap: 4, padding: 2 }}>
        {label && (
          <span style={{
            fontFamily: "var(--font-brand)", fontSize: "var(--text-body-md-size)",
            lineHeight: "14px", color: "var(--gh-slate-400)",
          }}>{label}</span>
        )}
        <span style={{
          fontFamily: "var(--font-brand)", fontSize: "var(--text-body-md-size)", fontWeight: 500,
          lineHeight: "14px", color: "var(--color-text-primary)",
        }}>{value}</span>
      </span>
    </span>
  );
}
