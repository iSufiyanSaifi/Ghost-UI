import React from "react";
import { ListThumbnail, ListLabel, ListInfo, ListAction } from "./ListParts.jsx";

/** Assembled list body — the `_list/content` composite (image × info lines × action). */
export function ListContent({ thumbnail, thumbnailType = "avatar", label, badge, info, secondaryInfo, action, onAction, style, ...rest }) {
  return (
    <div {...rest} style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0, ...style }}>
      {thumbnail && <ListThumbnail src={thumbnail} name={label} type={thumbnailType} />}
      <span style={{ display: "flex", flexDirection: "column", gap: 2, flex: 1, minWidth: 0 }}>
        <ListLabel badge={badge}>{label}</ListLabel>
        {info && <ListInfo>{info}</ListInfo>}
        {secondaryInfo && <ListInfo muted>{secondaryInfo}</ListInfo>}
      </span>
      {action && <ListAction icon={action} label={action} onClick={onAction} />}
    </div>
  );
}

/** A stack of ListItems inside one surface — the `_list/master bundle`. */
export function ListGroup({ children, title, dividers = true, style, ...rest }) {
  const items = React.Children.toArray(children);
  return (
    <div {...rest} style={{
      display: "flex", flexDirection: "column", borderRadius: "var(--radius-xl)",
      background: "var(--color-bg-default)",
      boxShadow: "inset 0 0 0 var(--border-thin) var(--color-border-default)",
      padding: "4px 0", ...style,
    }}>
      {title && (
        <span style={{
          padding: "12px 16px 4px", fontFamily: "var(--font-brand)",
          fontSize: "var(--text-body-sm-size)", fontWeight: 500,
          color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.5px",
        }}>{title}</span>
      )}
      {items.map((c, i) => (
        <React.Fragment key={i}>
          {c}
          {dividers && i < items.length - 1 && (
            <span style={{ height: 1, margin: "0 16px", background: "var(--gh-slate-400)", opacity: 0.25 }} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
