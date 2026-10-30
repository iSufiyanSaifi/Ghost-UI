import * as React from "react";
export interface ButtonBarProps extends React.HTMLAttributes<HTMLDivElement> {
  primaryLabel: string;
  onPrimary?: () => void;
  secondaryLabel?: string;
  onSecondary?: () => void;
  direction?: "horizontal" | "vertical";
  size?: "small" | "medium" | "big";
  disabled?: boolean;
}
export interface ApprovalButtonsProps extends React.HTMLAttributes<HTMLDivElement> {
  onApprove?: () => void;
  onDecline?: () => void;
  approveLabel?: string;
  declineLabel?: string;
  disabled?: boolean;
}
export declare function ButtonBar(props: ButtonBarProps): JSX.Element;
export declare function ApprovalButtons(props: ApprovalButtonsProps): JSX.Element;
