import React from "react";

/** Loading placeholder. Pulses opacity only — no shimmer sweep. */
export function Skeleton({ width = "100%", height = 16, radius = "var(--radius-sm)", circle = false, style, ...rest }) {
  return (
    <span aria-hidden="true" {...rest} style={{
      display: "block", width: circle ? height : width, height,
      borderRadius: circle ? "50%" : radius, background: "var(--color-bg-box)",
      animation: "gh-pulse 1.4s var(--ease-standard) infinite", ...style,
    }}>
      <style>{"@keyframes gh-pulse{0%,100%{opacity:1}50%{opacity:.55}}"}</style>
    </span>
  );
}
