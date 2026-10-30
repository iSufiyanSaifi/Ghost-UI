import React from "react";
import { Button } from "./Button.jsx";

/** Bottom action bar. One primary, at most one secondary; stacks when `direction="vertical"`. */
export function ButtonBar({
  primaryLabel, onPrimary, secondaryLabel, onSecondary,
  direction = "horizontal", size = "big", disabled = false, style, ...rest
}) {
  const vertical = direction === "vertical";
  return (
    <div {...rest} style={{
      display: "flex", flexDirection: vertical ? "column" : "row", gap: 12,
      alignItems: "stretch", ...style,
    }}>
      {secondaryLabel && (
        <Button variant="ghost" size={size} fullWidth onClick={onSecondary} disabled={disabled}>{secondaryLabel}</Button>
      )}
      <Button variant="primary" size={size} fullWidth onClick={onPrimary} disabled={disabled}>{primaryLabel}</Button>
    </div>
  );
}

/** Accept / decline pair — the kit's "Button Approval". */
export function ApprovalButtons({ onApprove, onDecline, approveLabel = "Approve", declineLabel = "Decline", disabled = false, style, ...rest }) {
  return (
    <div {...rest} style={{ display: "flex", gap: 12, ...style }}>
      <Button variant="ghost" size="small" onClick={onDecline} disabled={disabled}>{declineLabel}</Button>
      <Button variant="primary" size="small" onClick={onApprove} disabled={disabled}>{approveLabel}</Button>
    </div>
  );
}
