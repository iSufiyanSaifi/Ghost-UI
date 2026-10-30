import React from "react";

const TONES = {
  neutral: { bg: "var(--color-bg-surface)", fg: "var(--color-text-secondary)" },
  accent:  { bg: "var(--color-action-primary)", fg: "var(--color-text-on-action)" },
  success: { bg: "var(--color-status-success)", fg: "var(--gh-white)" },
  warning: { bg: "var(--color-status-warning)", fg: "var(--gh-ink-900)" },
  error:   { bg: "var(--color-status-error)", fg: "var(--gh-white)" },
  info:    { bg: "var(--color-status-info)", fg: "var(--gh-white)" },
};

/** Small status marker. Dot form for counts, pill form for labels. */
export function Badge({ children, tone = "neutral", dot = false, icon, style, ...rest }) {
  const t = TONES[tone] || TONES.neutral;
  if (dot) {
    return <span {...rest} style={{ display: "inline-block", width: 8, height: 8, borderRadius: "50%", background: t.bg, ...style }} />;
  }
  return (
    <span {...rest} style={{
      display: "inline-flex", alignItems: "center", gap: 4,
      height: 24, padding: "0 8px", borderRadius: "var(--radius-pill)",
      background: t.bg, color: t.fg,
      fontFamily: "var(--font-brand)", fontSize: "var(--text-body-sm-size)", fontWeight: 500,
      lineHeight: 1, whiteSpace: "nowrap", ...style,
    }}>{icon}{children}</span>
  );
}
