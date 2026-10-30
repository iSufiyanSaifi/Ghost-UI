import React from "react";

const STATES = {
  default:  { border: "var(--color-border-default)", bg: "var(--color-bg-default)" },
  hover:    { border: "var(--color-border-strong)",  bg: "var(--color-bg-default)" },
  focused:  { border: "var(--color-action-primary)", bg: "var(--color-bg-default)" },
  filled:   { border: "var(--color-border-default)", bg: "var(--color-bg-default)" },
  error:    { border: "var(--color-status-error-text)", bg: "var(--color-bg-default)" },
  success:  { border: "var(--color-status-success)", bg: "var(--color-bg-default)" },
  disabled: { border: "var(--color-border-subtle)",  bg: "var(--color-bg-surface)" },
  readonly: { border: "var(--color-border-subtle)",  bg: "var(--color-bg-surface)" },
};

/** The shell every Ghost-UI field sits in. Own it once, reuse it for custom inputs. */
export function FieldWrapper({
  children, prefix, suffix, shape = "pill", state = "default",
  height = "var(--size-control-md)", style, ...rest
}) {
  const s = STATES[state] || STATES.default;
  const off = state === "disabled";
  return (
    <div {...rest} style={{
      display: "flex", alignItems: "center", gap: 8, height,
      padding: shape === "pill" ? "8px 20px" : "8px 12px",
      borderRadius: shape === "pill" ? "var(--radius-pill)" : "var(--radius-md)",
      border: `var(--border-thin) solid ${s.border}`, background: s.bg,
      opacity: off ? "var(--opacity-disabled)" : 1,
      transition: "border-color var(--motion-fast) var(--ease-standard)", ...style,
    }}>
      {prefix}
      <span style={{ flex: 1, minWidth: 0, display: "flex", alignItems: "center" }}>{children}</span>
      {suffix}
    </div>
  );
}
