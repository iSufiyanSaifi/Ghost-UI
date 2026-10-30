import React from "react";
import { Icon } from "../display/Icon.jsx";

/** Linear multi-step indicator. Done steps fill; the current one rings. */
export function ProgressSteps({ steps = [], current = 0, style, ...rest }) {
  return (
    <ol {...rest} style={{
      display: "flex", alignItems: "flex-start", gap: 0, listStyle: "none", margin: 0, padding: 0, ...style,
    }}>
      {steps.map((raw, i) => {
        const label = typeof raw === "string" ? raw : raw.label;
        const done = i < current;
        const now = i === current;
        return (
          <li key={i} aria-current={now ? "step" : undefined} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, position: "relative" }}>
            {i > 0 && (
              <span style={{
                position: "absolute", top: 11, right: "50%", width: "100%", height: 2,
                background: done || now ? "var(--color-action-primary)" : "var(--color-border-default)",
              }} />
            )}
            <span style={{
              position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center",
              width: 24, height: 24, borderRadius: "50%",
              background: done ? "var(--color-action-primary)" : "var(--color-bg-default)",
              boxShadow: done ? "none" : `inset 0 0 0 2px ${now ? "var(--color-action-primary)" : "var(--color-border-default)"}`,
              fontFamily: "var(--font-brand)", fontSize: "var(--text-body-sm-size)", fontWeight: 500,
              color: done ? "var(--color-text-on-action)" : now ? "var(--color-action-primary)" : "var(--color-text-secondary)",
            }}>{done ? <Icon name="check" size={14} color="var(--gh-white)" strokeWidth={2.5} /> : i + 1}</span>
            <span style={{
              fontFamily: "var(--font-brand)", fontSize: "var(--text-body-sm-size)", textAlign: "center",
              color: now ? "var(--color-text-primary)" : "var(--color-text-secondary)",
            }}>{label}</span>
          </li>
        );
      })}
    </ol>
  );
}
