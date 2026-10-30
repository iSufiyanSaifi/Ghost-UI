import React from "react";

/** Hairline rule at 25% opacity — the kit's separator. */
export function Divider({ orientation = "horizontal", inset = 0, style, ...rest }) {
  const v = orientation === "vertical";
  return (
    <span role="separator" aria-orientation={orientation} {...rest} style={{
      display: "block", flexShrink: 0, opacity: 0.25,
      background: "var(--gh-slate-400)",
      width: v ? 1 : "auto", height: v ? "auto" : 1,
      alignSelf: v ? "stretch" : undefined,
      margin: v ? `0 ${inset}px` : `${inset}px 0`, ...style,
    }} />
  );
}
