import React from "react";
import { Avatar, AvatarGroup } from "../display/Avatar.jsx";
import { ProgressRing } from "../display/ProgressRing.jsx";

/** 56px pill row: avatar, title + progress copy, optional friends, progress ring. */
export function HabitCard({ title, detail, avatar, friends, progress = 0, style, ...rest }) {
  return (
    <div {...rest} style={{
      display: "flex", alignItems: "center", gap: 12, height: 56, padding: "8px 16px",
      borderRadius: "var(--radius-pill)", background: "var(--color-bg-default)",
      boxShadow: "inset 0 0 0 1px var(--color-border-default), 58px 26px 68px 0 rgba(35,44,93,0.06)",
      ...style,
    }}>
      <Avatar src={avatar} name={title} size={40} />
      <div style={{ display: "flex", flexDirection: "column", flex: 1, minWidth: 0 }}>
        <span style={{ fontFamily: "var(--font-brand)", fontSize: "var(--text-body-md-size)", lineHeight: 1.15, color: "var(--color-text-primary)" }}>{title}</span>
        <span style={{ fontFamily: "var(--font-brand)", fontSize: "var(--text-body-sm-size)", lineHeight: 1.15, color: "var(--color-text-secondary)" }}>{detail}</span>
      </div>
      {friends && friends.length > 0 && <AvatarGroup items={friends} max={2} size={28} />}
      <ProgressRing value={progress} size={36} />
    </div>
  );
}
