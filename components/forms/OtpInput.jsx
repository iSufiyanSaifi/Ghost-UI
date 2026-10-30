import React from "react";

/** Fixed-length code entry. One 48px pill cell per digit. */
export function OtpInput({ length = 6, value = "", onChange, label, error, disabled = false, style, ...rest }) {
  const refs = React.useRef([]);
  const chars = Array.from({ length }, (_, i) => value[i] || "");
  const set = (i, ch) => {
    if (!onChange) return;
    const next = chars.slice();
    next[i] = ch.replace(/\D/g, "").slice(-1);
    onChange(next.join(""));
    if (next[i] && refs.current[i + 1]) refs.current[i + 1].focus();
  };
  const back = (i, e) => {
    if (e.key === "Backspace" && !chars[i] && refs.current[i - 1]) refs.current[i - 1].focus();
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, minWidth: 48, ...style }}>
      {label && (
        <span style={{
          fontFamily: "var(--font-brand)", fontSize: "var(--text-body-lg-size)",
          fontWeight: 500, lineHeight: 1, color: "var(--color-text-primary)",
        }}>{label}</span>
      )}
      <div style={{ display: "flex", justifyContent: "space-between", gap: 8, height: 48 }} {...rest}>
        {chars.map((c, i) => (
          <input key={i} ref={el => (refs.current[i] = el)} value={c} disabled={disabled}
            inputMode="numeric" maxLength={1} aria-label={`Digit ${i + 1}`}
            aria-invalid={error ? true : undefined}
            onChange={e => set(i, e.target.value)} onKeyDown={e => back(i, e)}
            style={{
              width: 44, height: 48, textAlign: "center", outline: "none",
              borderRadius: "var(--radius-pill)",
              border: `var(--border-thin) solid ${error ? "var(--color-status-error-text)" : "var(--color-border-default)"}`,
              background: disabled ? "var(--color-bg-surface)" : "var(--color-bg-default)",
              fontFamily: "var(--font-brand)", fontSize: "var(--text-title-md-size)", fontWeight: 500,
              color: "var(--color-text-primary)", opacity: disabled ? "var(--opacity-disabled)" : 1,
            }} />
        ))}
      </div>
      {error && (
        <span style={{ fontFamily: "var(--font-brand)", fontSize: "var(--text-body-sm-size)", color: "var(--color-status-error-text)" }}>{error}</span>
      )}
    </div>
  );
}
