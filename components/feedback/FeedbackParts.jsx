import React from "react";
import { Icon } from "../display/Icon.jsx";
import { Button } from "../actions/Button.jsx";

/** Icon + title + supporting copy — the `_feedback/content` atom used by Dialog and Inform. */
export function FeedbackContent({ icon, iconColor = "var(--gh-amber-400)", title, children, align = "center", style, ...rest }) {
  return (
    <div {...rest} style={{
      display: "flex", flexDirection: "column", alignItems: align === "center" ? "center" : "flex-start",
      gap: 8, textAlign: align, ...style,
    }}>
      {icon && <Icon name={icon} size={40} color={iconColor} strokeWidth={2} />}
      {title && (
        <span style={{
          fontFamily: "var(--font-brand)", fontSize: "var(--text-title-md-size)", fontWeight: 500,
          lineHeight: 1, color: "var(--color-text-primary)",
        }}>{title}</span>
      )}
      {children && (
        <span style={{
          fontFamily: "var(--font-brand)", fontSize: "var(--text-body-md-size)",
          lineHeight: 1.35, color: "var(--gh-grey-350)",
        }}>{children}</span>
      )}
    </div>
  );
}

/** Right-aligned action pair — the `_feedback/action` atom. */
export function FeedbackAction({ confirmLabel = "Send", cancelLabel = "Cancel", onConfirm, onCancel, size = "medium", style, ...rest }) {
  return (
    <div {...rest} style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 16, alignSelf: "stretch", ...style }}>
      {cancelLabel && <Button variant="secondary" size={size} onClick={onCancel}>{cancelLabel}</Button>}
      <Button variant="primary" size={size} onClick={onConfirm}>{confirmLabel}</Button>
    </div>
  );
}

/** Grouped export matching the file name for the bundler. */
export const FeedbackParts = { FeedbackContent, FeedbackAction };
