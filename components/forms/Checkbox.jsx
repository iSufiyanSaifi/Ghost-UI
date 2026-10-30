import React from "react";

/** 16px square, 4px radius, filled #1C70D4 with a white tick when checked. */
export function Checkbox({ checked = false, onChange, disabled = false, label, id, style, ...rest }) {
  const auto = React.useId();
  const cid = id || auto;
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 8, ...style }}>
      <button type="button" role="checkbox" aria-checked={checked} id={cid} disabled={disabled}
        onClick={() => onChange && onChange(!checked)} {...rest} style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          width: 16, height: 16, padding: 0, borderRadius: "var(--radius-xs)",
          border: checked ? "none" : "var(--border-default) solid var(--color-border-strong)",
          background: checked ? "var(--color-action-primary)" : "transparent",
          cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? "var(--opacity-disabled)" : 1,
          transition: "background var(--motion-fast) var(--ease-standard)", flexShrink: 0,
        }}>
        {checked && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="#fff" aria-hidden="true">
            <path d="M 3.662 8 C 3.41 8 3.157 7.895 2.964 7.685 L 0.289 4.763 C -0.096 4.341 -0.096 3.659 0.289 3.239 C 0.675 2.818 1.298 2.817 1.684 3.238 L 3.662 5.399 L 8.316 0.316 C 8.702 -0.105 9.325 -0.105 9.711 0.316 C 10.096 0.737 10.096 1.419 9.711 1.84 L 4.36 7.685 C 4.167 7.895 3.915 8 3.662 8" fillRule="evenodd" />
          </svg>
        )}
      </button>
      {label && <label htmlFor={cid} style={{ fontFamily: "var(--font-brand)", fontSize: "var(--text-body-lg-size)", color: "var(--color-text-primary)", cursor: "pointer" }}>{label}</label>}
    </span>
  );
}
