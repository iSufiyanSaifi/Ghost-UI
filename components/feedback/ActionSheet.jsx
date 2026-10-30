import React from "react";

/** Mobile action sheet: a stack of choices plus a separate Cancel, over a scrim. */
export function ActionSheet({ open = false, title, actions = [], cancelLabel = "Cancel", onClose, style, ...rest }) {
  if (!open) return null;
  const row = (a, i, last) => (
    <button key={i} type="button" onClick={() => { a.onClick && a.onClick(); onClose && onClose(); }} style={{
      minHeight: 52, border: "none", borderTop: i ? "var(--border-thin) solid var(--color-border-default)" : "none",
      background: "transparent", cursor: "pointer", fontFamily: "var(--font-brand)", fontSize: "var(--text-body-lg-size)",
      fontWeight: 500, color: a.destructive ? "var(--color-status-error-text)" : "var(--color-text-primary)",
    }}>{a.label}</button>
  );
  const box = { display: "flex", flexDirection: "column", borderRadius: "var(--radius-xl)", background: "var(--color-bg-default)", overflow: "hidden" };
  return (
    <div onClick={onClose} style={{ position: "absolute", inset: 0, zIndex: "var(--z-modal)", display: "flex", alignItems: "flex-end", background: "var(--color-scrim)" }}>
      <div role="dialog" aria-modal="true" aria-label={title} onClick={e => e.stopPropagation()} {...rest}
        style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%", padding: "0 8px 16px", ...style }}>
        <div style={box}>
          {title && <span style={{ padding: "14px 16px", textAlign: "center", fontFamily: "var(--font-brand)", fontSize: "var(--text-body-sm-size)", color: "var(--color-text-secondary)", borderBottom: "var(--border-thin) solid var(--color-border-default)" }}>{title}</span>}
          {actions.map((a, i) => row(a, i))}
        </div>
        {cancelLabel && <div style={box}>{row({ label: cancelLabel }, 0)}</div>}
      </div>
    </div>
  );
}
