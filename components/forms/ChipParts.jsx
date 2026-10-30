import React from "react";
import { Icon } from "../display/Icon.jsx";

/** Text block inside a chip — the `_chip/content` atom. */
export function ChipContent({ children, active = false, disabled = false, style, ...rest }) {
  return (
    <span {...rest} style={{
      display: "inline-flex", alignItems: "center", gap: 4, padding: "2px 8px",
      fontFamily: "var(--font-brand)", fontSize: "var(--text-body-lg-size)", lineHeight: "16px",
      color: active ? "var(--color-text-on-action)" : "var(--color-text-secondary)",
      opacity: disabled ? "var(--opacity-disabled)" : 1, whiteSpace: "nowrap", ...style,
    }}>{children}</span>
  );
}

/** Leading glyph inside a chip — the `_chip/prefix` atom. */
export function ChipPrefix({ name = "layout-dashboard", active = false, style, ...rest }) {
  return <Icon name={name} size={20} {...rest}
    color={active ? "var(--color-text-on-action)" : "#898989"} style={style} />;
}

/** Trailing glyph inside a chip — the `_chip/suffix` atom (tick or dismiss). */
export function ChipSuffix({ type = "check", active = false, onClick, label, style, ...rest }) {
  const glyph = <Icon name={type === "close" ? "x" : "check"} size={20}
    color={active ? "var(--color-text-on-action)" : "#898989"} />;
  if (!onClick) return <span {...rest} style={{ display: "inline-flex", ...style }}>{glyph}</span>;
  return (
    <button type="button" aria-label={label || (type === "close" ? "Remove" : "Selected")} onClick={onClick}
      {...rest} style={{ display: "inline-flex", border: "none", background: "none", padding: 0, cursor: "pointer", ...style }}>{glyph}</button>
  );
}

/** Grouped export matching the file name for the bundler. */
export const ChipParts = { ChipContent, ChipPrefix, ChipSuffix };
