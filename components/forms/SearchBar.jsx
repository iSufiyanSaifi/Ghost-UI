import React from "react";
import { Icon } from "../display/Icon.jsx";

/** The kit's search field — pill, leading magnifier, optional filter affordance. */
export function SearchBar({ placeholder = "Search…", value, onChange, onFilter, filter = false, style, ...rest }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", overflow: "hidden",
      height: "var(--size-control-md)", borderRadius: "var(--radius-pill)",
      border: "var(--border-thin) solid var(--color-border-default)",
      background: "var(--color-bg-default)", ...style,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 4, padding: "4px 8px", flex: 1, minWidth: 0 }}>
        <span style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 40, height: 40, flexShrink: 0 }}>
          <Icon name="search" size={24} />
        </span>
        <input value={value} onChange={onChange} placeholder={placeholder} type="search" {...rest} style={{
          flex: 1, minWidth: 0, border: "none", outline: "none", background: "transparent", padding: "0 8px",
          fontFamily: "var(--font-brand)", fontSize: "var(--text-body-lg-size)", color: "var(--color-text-primary)",
        }} />
        {filter && (
          <button type="button" onClick={onFilter} aria-label="Filter" style={{
            display: "flex", alignItems: "center", justifyContent: "center", width: 40, alignSelf: "stretch",
            border: "var(--border-default) solid var(--color-border-default)", background: "transparent",
            cursor: "pointer", flexShrink: 0,
          }}><Icon name="sliders-horizontal" size={24} /></button>
        )}
      </div>
    </div>
  );
}
