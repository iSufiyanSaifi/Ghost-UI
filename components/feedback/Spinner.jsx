import React from "react";

/** Indeterminate loader — the kit's Loading family. */
export function Spinner({ size = 24, thickness = 2, color = "var(--color-action-primary)", label = "Loading", style, ...rest }) {
  return (
    <span role="status" aria-label={label} {...rest} style={{
      display: "inline-block", width: size, height: size, flexShrink: 0,
      borderRadius: "50%", border: `${thickness}px solid var(--color-border-default)`,
      borderTopColor: color, animation: "gh-spin 700ms linear infinite", ...style,
    }}>
      <style>{"@keyframes gh-spin{to{transform:rotate(360deg)}}"}</style>
    </span>
  );
}
