import React from "react";
import { Icon } from "./Icon.jsx";

/** `_module/footer` — full-width "see all" row closing a module. */
export function ModuleFooter({ label = "See all", onClick, divider = true, children, style, ...rest }) {
  return (
    <footer {...rest} style={{ borderTop: divider ? "var(--border-thin) solid var(--color-border-default)" : "none", ...style }}>
      {children || (
        <button type="button" onClick={onClick} style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 4, width: "100%",
          minHeight: 44, border: "none", background: "transparent", cursor: "pointer",
          fontFamily: "var(--font-brand)", fontSize: "var(--text-body-md-size)", fontWeight: 500, color: "var(--color-text-primary)",
        }}>{label}<Icon name="chevron-right" size={16} /></button>
      )}
    </footer>
  );
}
