import React from "react";
import { Icon } from "../display/Icon.jsx";

/** Path trail. The last crumb is the current page and is not a link. */
export function Breadcrumb({ items = [], onNavigate, style, ...rest }) {
  return (
    <nav aria-label="Breadcrumb" {...rest} style={{ display: "flex", alignItems: "center", gap: 4, flexWrap: "wrap", ...style }}>
      {items.map((raw, i) => {
        const it = typeof raw === "string" ? { label: raw } : raw;
        const last = i === items.length - 1;
        return (
          <React.Fragment key={i}>
            {last
              ? <span aria-current="page" style={{ fontFamily: "var(--font-brand)", fontSize: "var(--text-body-md-size)", fontWeight: 500, color: "var(--color-text-primary)" }}>{it.label}</span>
              : <button type="button" onClick={() => onNavigate && onNavigate(it.value ?? it.label)}
                  style={{ border: "none", background: "none", padding: 0, cursor: "pointer", fontFamily: "var(--font-brand)", fontSize: "var(--text-body-md-size)", color: "var(--color-text-secondary)" }}>{it.label}</button>}
            {!last && <Icon name="chevron-right" size={16} />}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
