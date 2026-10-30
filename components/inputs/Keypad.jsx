import React from "react";
import { Icon } from "../display/Icon.jsx";

const ALPHA = ["", "ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];

/** Numeric keypad. 36x40 keys, 6px radius, the kit's only 0 2 2 key shadow. */
export function Keypad({ onKey, letters = true, style, ...rest }) {
  const press = v => onKey && onKey(v);
  const Key = ({ children, label, onClick, ...k }) => (
    <button type="button" aria-label={label} onClick={onClick} {...k} style={{
      display: "flex", alignItems: "center", justifyContent: "center", gap: 2,
      height: 40, padding: 8, border: "none", borderRadius: "var(--radius-sm)",
      background: "var(--color-bg-surface)", boxShadow: "0 2px 2px 0 rgba(0,0,0,0.15)",
      fontFamily: "var(--font-brand)", cursor: "pointer",
    }}>{children}</button>
  );
  return (
    <div {...rest} style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(36px,1fr))", gap: 8, width: 240, ...style }}>
      {[1,2,3,4,5,6,7,8,9].map(n => (
        <Key key={n} label={String(n)} onClick={() => press(String(n))}>
          <span style={{ fontSize: 24, color: "var(--color-text-primary)" }}>{n}</span>
          {letters && ALPHA[n - 1] && (
            <span style={{ fontSize: 14, color: "var(--color-text-secondary)" }}>{ALPHA[n - 1]}</span>
          )}
        </Key>
      ))}
      <Key label="Clear" onClick={() => press("clear")}>
        <span style={{ fontSize: 14, color: "var(--color-text-secondary)" }}>Clear</span>
      </Key>
      <Key label="0" onClick={() => press("0")}>
        <span style={{ fontSize: 24, color: "var(--color-text-primary)" }}>0</span>
      </Key>
      <Key label="Delete" onClick={() => press("delete")}>
        <Icon name="delete" size={20} color="var(--color-icon-strong)" />
      </Key>
    </div>
  );
}
