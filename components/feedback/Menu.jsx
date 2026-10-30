import React from "react";
import { Icon } from "../display/Icon.jsx";

/** Floating menu surface. Place under an anchor with position:relative. */
export function Menu({ open = true, onClose, children, style, ...rest }) {
  React.useEffect(() => {
    if (!open || !onClose) return;
    const k = e => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div role="menu" {...rest} style={{
      display: "flex", flexDirection: "column", minWidth: 200, padding: "6px 0",
      borderRadius: "var(--radius-lg)", background: "var(--color-bg-default)",
      border: "var(--border-thin) solid var(--color-border-default)",
      boxShadow: "var(--shadow-raised)", zIndex: "var(--z-overlay)", ...style,
    }}>{children}</div>
  );
}

/** One row in a Menu. */
export function MenuItem({ icon, label, shortcut, selected = false, destructive = false, disabled = false, onClick, children, style, ...rest }) {
  const color = destructive ? "var(--color-status-error-text)" : "var(--color-text-primary)";
  return (
    <button type="button" role="menuitem" disabled={disabled} onClick={onClick} {...rest}
      style={{
        display: "flex", alignItems: "center", gap: 12, minHeight: 44, padding: "0 16px",
        border: "none", background: selected ? "var(--color-bg-surface)" : "transparent",
        cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? "var(--opacity-disabled)" : 1,
        textAlign: "left", fontFamily: "var(--font-brand)", fontSize: "var(--text-body-lg-size)", color, ...style,
      }}>
      {icon && (typeof icon === "string" ? <Icon name={icon} size={20} color={color} /> : icon)}
      <span style={{ flex: 1 }}>{label || children}</span>
      {shortcut && <span style={{ fontSize: "var(--text-body-sm-size)", color: "var(--color-text-secondary)" }}>{shortcut}</span>}
      {selected && <Icon name="check" size={18} color={color} />}
    </button>
  );
}

/** Hairline between Menu groups. */
export function MenuDivider() {
  return <span role="separator" style={{ height: 1, margin: "6px 0", background: "var(--color-border-default)" }} />;
}
