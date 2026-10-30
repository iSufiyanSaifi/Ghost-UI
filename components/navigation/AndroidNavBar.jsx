import React from "react";

/** Android system navigation strip — gesture pill or the three-button set. */
export function AndroidNavBar({ type = "gesture", dark = false, style, ...rest }) {
  const fg = dark ? "var(--gh-white)" : "var(--gh-ink-900)";
  return (
    <div aria-hidden="true" {...rest} style={{
      display: "flex", alignItems: "center", justifyContent: "center", gap: 64,
      height: 32, ...style,
    }}>
      {type === "gesture"
        ? <span style={{ width: 108, height: 4, borderRadius: 999, background: fg, opacity: 0.85 }} />
        : <>
            <span style={{ width: 0, height: 0, borderTop: "7px solid transparent", borderBottom: "7px solid transparent", borderRight: `11px solid ${fg}` }} />
            <span style={{ width: 13, height: 13, borderRadius: "50%", boxShadow: `inset 0 0 0 1.5px ${fg}` }} />
            <span style={{ width: 12, height: 12, borderRadius: 2, boxShadow: `inset 0 0 0 1.5px ${fg}` }} />
          </>}
    </div>
  );
}
