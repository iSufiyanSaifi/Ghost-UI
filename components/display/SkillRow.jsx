import React from "react";
import { Icon } from "./Icon.jsx";
import { ApprovalButtons } from "../actions/ButtonBar.jsx";

/** 52px pill row naming a skill, with optional approve/decline and a trailing action. */
export function SkillRow({ name, level, approval = false, onApprove, onDecline, onAdd, style, ...rest }) {
  return (
    <div {...rest} style={{
      display: "flex", alignItems: "center", gap: 12, height: 52, padding: "8px 12px",
      borderRadius: "var(--radius-pill)", background: "var(--color-bg-default)",
      border: "var(--border-thin) solid var(--color-border-default)", ...style,
    }}>
      <span style={{ display: "flex", alignItems: "center", gap: 8, padding: "0 8px", flex: 1, minWidth: 0 }}>
        <span style={{
          fontFamily: "var(--font-brand)", fontSize: "var(--text-body-lg-size)", fontWeight: 500,
          lineHeight: "16px", color: "var(--color-text-primary)",
          overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
        }}>{name}</span>
        {level && (
          <span style={{ fontFamily: "var(--font-brand)", fontSize: "var(--text-body-sm-size)", color: "var(--color-text-secondary)" }}>{level}</span>
        )}
      </span>
      {approval && <ApprovalButtons onApprove={onApprove} onDecline={onDecline} />}
      {onAdd && (
        <button type="button" aria-label={`Add ${name}`} onClick={onAdd} style={{
          display: "flex", alignItems: "center", justifyContent: "center", width: 36, alignSelf: "stretch",
          border: "none", background: "none", padding: 4, cursor: "pointer",
        }}><Icon name="plus" size={28} color="var(--color-icon-strong)" /></button>
      )}
    </div>
  );
}
