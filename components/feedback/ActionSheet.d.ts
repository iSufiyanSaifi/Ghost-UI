import * as React from "react";
export interface ActionSheetAction { label: string; onClick?: () => void; destructive?: boolean; }
export interface ActionSheetProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  title?: string;
  actions: ActionSheetAction[];
  /** pass "" to hide */
  cancelLabel?: string;
  onClose?: () => void;
}
export declare function ActionSheet(props: ActionSheetProps): JSX.Element | null;
