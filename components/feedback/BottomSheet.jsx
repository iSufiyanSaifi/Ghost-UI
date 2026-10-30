import React from "react";

/** Sheet that rises from the bottom of a phone frame, over a scrim. */
export function BottomSheet({ open = false, title, children, onClose, actions, style, ...rest }) {
  if (!open) return null;
  return (
    <div onClick={onClose} style={{
      position: "absolute", inset: 0, zIndex: "var(--z-modal)",
      display: "flex", alignItems: "flex-end",
      background: "var(--color-scrim)", backdropFilter: "blur(2px)",
    }}>
      <div role="dialog" aria-modal="true" aria-label={title}
        onClick={e => e.stopPropagation()} {...rest} style={{
          display: "flex", flexDirection: "column", gap: 16, width: "100%",
          maxHeight: "80%", overflowY: "auto", padding: "12px 16px 24px",
          borderRadius: "var(--radius-2xl) var(--radius-2xl) 0 0",
          background: "var(--color-bg-default)",
          animation: "gh-sheet var(--motion-slow) var(--ease-decelerate)", ...style,
        }}>
        <span style={{ width: 40, height: 4, borderRadius: 999, background: "var(--color-border-strong)", alignSelf: "center" }} />
        {title && (
          <span style={{
            fontFamily: "var(--font-brand)", fontSize: "var(--text-title-md-size)",
            fontWeight: 500, color: "var(--color-text-primary)",
          }}>{title}</span>
        )}
        {children}
        {actions}
        <style>{"@keyframes gh-sheet{from{transform:translateY(24px);opacity:0}to{transform:none;opacity:1}}"}</style>
      </div>
    </div>
  );
}
