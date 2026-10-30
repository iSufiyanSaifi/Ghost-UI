import React from "react";
import { Checkbox } from "../forms/Checkbox.jsx";
import { Badge } from "../display/Badge.jsx";

/** Checkable task row with an optional due chip. */
export function TaskItem({ label, note, done = false, due, tone = "neutral", onToggle, style, ...rest }) {
  return (
    <div {...rest} style={{
      display: "flex", alignItems: "center", gap: 12, minHeight: "var(--size-touch-min)",
      padding: "8px 16px", borderRadius: "var(--radius-pill)",
      background: "var(--color-bg-default)",
      boxShadow: "inset 0 0 0 var(--border-thin) var(--color-border-default)", ...style,
    }}>
      <Checkbox checked={done} onChange={onToggle} />
      <span style={{ display: "flex", flexDirection: "column", gap: 2, flex: 1, minWidth: 0 }}>
        <span style={{
          fontFamily: "var(--font-brand)", fontSize: "var(--text-body-lg-size)",
          color: done ? "var(--color-text-secondary)" : "var(--color-text-primary)",
          textDecoration: done ? "line-through" : "none",
        }}>{label}</span>
        {note && <span style={{ fontFamily: "var(--font-brand)", fontSize: "var(--text-body-sm-size)", color: "var(--color-text-secondary)" }}>{note}</span>}
      </span>
      {due && <Badge tone={tone}>{due}</Badge>}
    </div>
  );
}
