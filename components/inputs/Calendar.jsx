import React from "react";
import { Icon } from "../display/Icon.jsx";

const DOW = ["S", "M", "T", "W", "T", "F", "S"];
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];

/** Month grid. Day cells are 32px, 8px radius; the selected day fills #1C70D4. */
export function Calendar({ month = 7, year = 2026, selected, onSelect, disabledDays = [], style, ...rest }) {
  const [m, setM] = React.useState(month);
  const [y, setY] = React.useState(year);
  const first = new Date(y, m, 1).getDay();
  const days = new Date(y, m + 1, 0).getDate();
  const cells = [...Array(first).fill(null), ...Array.from({ length: days }, (_, i) => i + 1)];
  const step = d => {
    const n = m + d;
    if (n < 0) { setM(11); setY(y - 1); } else if (n > 11) { setM(0); setY(y + 1); } else setM(n);
  };
  return (
    <div {...rest} style={{
      display: "flex", flexDirection: "column", gap: 12, padding: 16, width: 320,
      borderRadius: "var(--radius-lg)", background: "var(--color-bg-default)",
      boxShadow: "inset 0 0 0 var(--border-thin) var(--color-border-default)", ...style,
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <button type="button" aria-label="Previous month" onClick={() => step(-1)}
          style={{ border: "none", background: "none", cursor: "pointer", display: "flex", padding: 4 }}>
          <Icon name="chevron-left" size={20} color="var(--color-icon-strong)" />
        </button>
        <span style={{ fontFamily: "var(--font-brand)", fontSize: "var(--text-body-lg-size)", fontWeight: 500 }}>
          {MONTHS[m]} {y}
        </span>
        <button type="button" aria-label="Next month" onClick={() => step(1)}
          style={{ border: "none", background: "none", cursor: "pointer", display: "flex", padding: 4 }}>
          <Icon name="chevron-right" size={20} color="var(--color-icon-strong)" />
        </button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 4 }}>
        {DOW.map((d, i) => (
          <span key={i} style={{
            textAlign: "center", fontFamily: "var(--font-brand)",
            fontSize: "var(--text-body-sm-size)", color: "var(--color-text-secondary)",
          }}>{d}</span>
        ))}
        {cells.map((d, i) => {
          if (!d) return <span key={i} />;
          const off = disabledDays.includes(d);
          const on = d === selected;
          return (
            <button key={i} type="button" disabled={off} aria-pressed={on}
              onClick={() => onSelect && onSelect(d)} style={{
                height: 32, borderRadius: "var(--radius-md)", border: "none",
                background: on ? "var(--color-action-primary)" : "transparent",
                color: on ? "var(--color-text-on-action)" : "var(--color-text-primary)",
                fontFamily: "var(--font-brand)", fontSize: "var(--text-body-md-size)",
                cursor: off ? "not-allowed" : "pointer", opacity: off ? "var(--opacity-disabled)" : 1,
                transition: "background var(--motion-fast) var(--ease-standard)",
              }}>{d}</button>
          );
        })}
      </div>
    </div>
  );
}
