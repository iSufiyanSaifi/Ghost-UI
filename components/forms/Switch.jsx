import React from "react";

/** 48x24 track with an inset shadow — the kit's one piece of depth. */
export function Switch({ checked = false, onChange, disabled = false, label, id, style, ...rest }) {
  const auto = React.useId();
  const sid = id || auto;
  const track = (
    <button type="button" role="switch" aria-checked={checked} id={sid} disabled={disabled}
      onClick={() => onChange && onChange(!checked)} {...rest} style={{
        display: "flex", alignItems: "center", justifyContent: checked ? "flex-end" : "flex-start",
        width: 48, height: 24, padding: "4px 8px", border: "none",
        borderRadius: 60, background: "var(--color-bg-surface)",
        boxShadow: "var(--shadow-inset-control)",
        cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? "var(--opacity-disabled)" : 1,
        transition: "all var(--motion-base) var(--ease-standard)", flexShrink: 0,
      }}>
      <span style={{
        width: 16, height: 16, borderRadius: "50%",
        background: checked ? "var(--color-action-primary)" : "var(--color-border-strong)",
        transition: "background var(--motion-base) var(--ease-standard)",
      }} />
    </button>
  );
  if (!label) return track;
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 12, ...style }}>
      {track}
      <label htmlFor={sid} style={{
        fontFamily: "var(--font-brand)", fontSize: "var(--text-body-lg-size)",
        color: "var(--color-text-primary)", cursor: "pointer",
      }}>{label}</label>
    </span>
  );
}
