import React from "react";
import { Icon } from "../display/Icon.jsx";

/** Panel sliding in from the right edge — admin filters, detail panes. */
export function SideSheet({ open = false, title, width = 360, onClose, children, footer, modal = true, style, ...rest }) {
  if (!open) return null;
  return (
    <div onClick={modal ? onClose : undefined} style={{
      position: "absolute", inset: 0, zIndex: "var(--z-modal)", display: "flex", justifyContent: "flex-end",
      background: modal ? "var(--color-scrim)" : "transparent", pointerEvents: modal ? "auto" : "none",
    }}>
      <aside role="dialog" aria-modal={modal} aria-label={title} onClick={e => e.stopPropagation()} {...rest} style={{
        display: "flex", flexDirection: "column", width, maxWidth: "100%", height: "100%", pointerEvents: "auto",
        background: "var(--color-bg-default)", borderLeft: "var(--border-thin) solid var(--color-border-default)",
        animation: "gh-side var(--motion-slow) var(--ease-decelerate)", ...style,
      }}>
        <header style={{ display: "flex", alignItems: "center", gap: 12, padding: "16px 20px", borderBottom: "var(--border-thin) solid var(--color-border-default)" }}>
          <span style={{ flex: 1, fontFamily: "var(--font-brand)", fontSize: "var(--text-title-md-size)", fontWeight: 600, color: "var(--color-text-primary)" }}>{title}</span>
          {onClose && <button type="button" aria-label="Close" onClick={onClose} style={{ display: "inline-flex", width: 32, height: 32, alignItems: "center", justifyContent: "center", border: "none", background: "transparent", cursor: "pointer", color: "var(--color-text-primary)" }}><Icon name="x" size={20} /></button>}
        </header>
        <div style={{ flex: 1, overflowY: "auto", padding: 20, display: "flex", flexDirection: "column", gap: 16 }}>{children}</div>
        {footer && <footer style={{ display: "flex", gap: 12, justifyContent: "flex-end", padding: "16px 20px", borderTop: "var(--border-thin) solid var(--color-border-default)" }}>{footer}</footer>}
        <style>{"@keyframes gh-side{from{transform:translateX(24px);opacity:0}to{transform:none;opacity:1}}"}</style>
      </aside>
    </div>
  );
}
