import React from "react";
import { Icon } from "../display/Icon.jsx";

/** Sort / filter direction toggle — the kit's Arrow-up-arrow-down and Direction=Filter. */
export function SortControl({ value = "none", onChange, label = "Sort", style, ...rest }) {
  const next = { none: "asc", asc: "desc", desc: "none" }[value] || "asc";
  const icon = { none: "arrow-up-down", asc: "arrow-up-narrow-wide", desc: "arrow-down-wide-narrow" }[value];
  const state = { none: "unsorted", asc: "ascending", desc: "descending" }[value];
  return (
    <button type="button" aria-label={`${label}: ${state}`} onClick={() => onChange && onChange(next)}
      {...rest} style={{
        display: "inline-flex", alignItems: "center", gap: 6, height: 36, padding: "0 12px",
        border: "none", borderRadius: "var(--radius-pill)", background: "transparent",
        boxShadow: "inset 0 0 0 var(--border-hairline) var(--color-border-default)",
        fontFamily: "var(--font-brand)", fontSize: "var(--text-body-md-size)",
        color: value === "none" ? "var(--color-text-secondary)" : "var(--color-text-primary)",
        cursor: "pointer", ...style,
      }}>
      {label}
      <Icon name={icon} size={16} color={value === "none" ? "var(--color-icon-default)" : "var(--color-action-primary)"} />
    </button>
  );
}
