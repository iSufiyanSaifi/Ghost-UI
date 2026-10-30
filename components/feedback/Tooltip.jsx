import React from "react";

/** Small dark label anchored to a trigger. Hover and focus both open it. */
export function Tooltip({ label, placement = "top", children, style, ...rest }) {
  const [open, setOpen] = React.useState(false);
  const pos = {
    top: { bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" },
    bottom: { top: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" },
    left: { right: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" },
    right: { left: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" },
  }[placement];
  return (
    <span {...rest} style={{ position: "relative", display: "inline-flex", ...style }}
      onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)} onBlur={() => setOpen(false)}>
      {children}
      {open && (
        <span role="tooltip" style={{
          position: "absolute", zIndex: "var(--z-tooltip)", ...pos,
          padding: "6px 10px", borderRadius: "var(--radius-md)",
          background: "var(--color-bg-inverse)", color: "var(--color-text-inverse)",
          fontFamily: "var(--font-brand)", fontSize: "var(--text-body-sm-size)",
          lineHeight: 1.3, whiteSpace: "nowrap", boxShadow: "var(--shadow-raised)",
        }}>{label}</span>
      )}
    </span>
  );
}
