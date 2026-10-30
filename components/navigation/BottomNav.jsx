import React from "react";
import { Icon } from "../display/Icon.jsx";

/** 72px app bar, 16px radius, #F8F8F8. Selected item turns the glyph #1C70D4. */
export function BottomNav({ items = [], value, onChange, style, ...rest }) {
  return (
    <nav {...rest} style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      height: "var(--size-nav)", padding: "12px 16px",
      borderRadius: "var(--radius-xl)", background: "var(--color-bg-surface)", ...style,
    }}>
      {items.map((it, i) => {
        const on = (it.value ?? it.icon) === value;
        return (
          <button key={i} type="button" aria-label={it.label} aria-current={on ? "page" : undefined}
            onClick={() => onChange && onChange(it.value ?? it.icon)} style={{
              display: "inline-flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              gap: 4, minWidth: "var(--size-touch-min)", minHeight: "var(--size-touch-min)",
              padding: 0, border: "none", background: "transparent", cursor: "pointer",
            }}>
            <Icon name={it.icon} size={24} strokeWidth={on ? 2 : 1.5}
              color={on ? "var(--color-action-primary)" : "var(--color-icon-default)"} />
            {it.label && (
              <span style={{
                fontFamily: "var(--font-brand)", fontSize: "var(--text-body-xs-size)", lineHeight: 1,
                color: on ? "var(--color-action-primary)" : "var(--color-text-secondary)",
              }}>{it.label}</span>
            )}
          </button>
        );
      })}
    </nav>
  );
}
