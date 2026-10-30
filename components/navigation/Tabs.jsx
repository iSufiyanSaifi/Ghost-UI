import React from "react";

/** Segmented pill tabset: 44px shell, 2px inner padding, active segment lifts to white. */
export function Tabs({ items = [], value, onChange, style, ...rest }) {
  const active = value ?? (items[0] && (items[0].value ?? items[0]));
  return (
    <div role="tablist" {...rest} style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      height: "var(--size-tabset)", padding: 2, gap: 2,
      borderRadius: "var(--radius-pill)",
      border: "var(--border-thin) solid var(--color-border-default)",
      background: "var(--color-bg-surface)", ...style,
    }}>
      {items.map((raw, i) => {
        const it = typeof raw === "string" ? { label: raw, value: raw } : raw;
        const on = (it.value ?? it.label) === active;
        return (
          <button key={i} role="tab" aria-selected={on} type="button"
            onClick={() => onChange && onChange(it.value ?? it.label)} style={{
              flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6,
              height: "100%", padding: "8px 16px", border: "none",
              borderRadius: "var(--radius-pill)",
              background: on ? "var(--color-bg-default)" : "transparent",
              boxShadow: on ? "var(--shadow-raised)" : "none",
              color: on ? "var(--color-text-primary)" : "var(--color-text-secondary)",
              fontFamily: "var(--font-brand)", fontSize: "var(--text-body-lg-size)",
              fontWeight: on ? 500 : 400, lineHeight: 1, whiteSpace: "nowrap", cursor: "pointer",
              transition: "background var(--motion-base) var(--ease-standard)",
            }}>
            {it.icon}
            {it.label}
          </button>
        );
      })}
    </div>
  );
}
