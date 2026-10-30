import * as React from "react";
export interface FeedbackContentProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Jin/Lucide glyph name */
  icon?: string;
  iconColor?: string;
  title?: string;
  align?: "center" | "start";
}
export interface FeedbackActionProps extends React.HTMLAttributes<HTMLDivElement> {
  confirmLabel?: string;
  /** pass "" to hide the secondary action */
  cancelLabel?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  size?: "small" | "medium" | "big";
}
export declare function FeedbackContent(props: FeedbackContentProps): JSX.Element;
export declare function FeedbackAction(props: FeedbackActionProps): JSX.Element;
