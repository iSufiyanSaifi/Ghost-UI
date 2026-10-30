import React from "react";

const SIZES = {
  small:  { h: 40, pad: "12px 16px", gap: 6,  font: "var(--text-body-lg-size)",  weight: 400, icon: 20 },
  medium: { h: 48, pad: "12px 20px", gap: 8,  font: "var(--text-title-sm-size)", weight: 500, icon: 22 },
  big:    { h: 56, pad: "12px 24px", gap: 16, font: "var(--text-title-md-size)", weight: 500, icon: 24 },
};

const SKINS = {
  primary:     { bg: "var(--color-action-primary)", fg: "var(--color-text-on-action)", bd: "none" },
  secondary:   { bg: "var(--color-action-secondary)", fg: "var(--color-text-primary)", bd: "none" },
  ghost:       { bg: "transparent", fg: "var(--color-text-primary)", bd: "var(--border-thin) solid var(--color-border-default)" },
  destructive: { bg: "var(--color-status-error)", fg: "var(--color-text-on-action)", bd: "none" },
};

/** The kit's pill button. Type × Size, plus state. */
export function Button({
  children, variant = "primary", size = "big", leadingIcon, trailingIcon,
  disabled = false, loading = false, fullWidth = false, style, ...rest
}) {
  const s = SIZES[size] || SIZES.big;
  const k = SKINS[variant] || SKINS.primary;
  const off = disabled || loading;
  return (
    <button type="button" disabled={off} {...rest} style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      gap: s.gap, height: s.h, padding: s.pad, width: fullWidth ? "100%" : undefined,
      borderRadius: "var(--radius-pill)", border: k.bd, background: k.bg, color: k.fg,
      fontFamily: "var(--font-brand)", fontSize: s.font, fontWeight: s.weight, lineHeight: 1,
      cursor: off ? "not-allowed" : "pointer", opacity: off ? "var(--opacity-disabled)" : 1,
      transition: "background var(--motion-fast) var(--ease-standard), opacity var(--motion-fast) var(--ease-standard)",
      whiteSpace: "nowrap", ...style,
    }}>
      {loading ? <Spinner size={s.icon} /> : leadingIcon}
      {children}
      {trailingIcon}
    </button>
  );
}

function Spinner({ size }) {
  return (
    <span style={{
      width: size, height: size, borderRadius: "50%", flexShrink: 0,
      border: "2px solid currentColor", borderTopColor: "transparent",
      animation: "gh-spin 700ms linear infinite",
    }}>
      <style>{"@keyframes gh-spin{to{transform:rotate(360deg)}}"}</style>
    </span>
  );
}
