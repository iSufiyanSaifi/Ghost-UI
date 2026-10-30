import React from "react";

/** Compact 2–3 option switch. Squarer and denser than `Tabs`. */
export function SegmentedControl({ options = [], value, onChange, size = "medium", style, ...rest }) {
  const h = size === "small" ? 32 : 40;
  return (
    <div role="radiogroup" {...rest} style={{
      display: "inline-flex", alignItems: "center", gap: 2, height: h, padding: 2,
      borderRadius: "var(--radius-md)", background: "var(--color-bg-surface)",
      boxShadow: "inset 0 0 0 var(--border-thin) var(--color-border-default)", ...style,
    }}>
      {options.map((raw, i) => {
        const o = typeof raw === "string" ? { label: raw, value: raw } : raw;
        const on = (o.value ?? o.label) === value;
        return (
          <button key={i} type="button" role="radio" aria-checked={on}
            onClick={() => onChange && onChange(o.value ?? o.label)} style={{
              display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 4,
              height: "100%", padding: "0 12px", border: "none", borderRadius: "var(--radius-sm)",
              background: on ? "var(--color-bg-default)" : "transparent",
              color: on ? "var(--color-text-primary)" : "var(--color-text-secondary)",
              fontFamily: "var(--font-brand)", fontSize: "var(--text-body-md-size)",
              fontWeight: on ? 500 : 400, whiteSpace: "nowrap", cursor: "pointer",
              transition: "background var(--motion-fast) var(--ease-standard)",
            }}>{o.icon}{o.label}</button>
        );
      })}
    </div>
  );
}
