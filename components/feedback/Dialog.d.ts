import * as React from "react";
/**
 * Confirmation card (the kit's "Tooltip / Type=Confirmation").
 */
export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: "confirmation" | "success" | "error" | "info";
  title: string;
  confirmLabel?: string;
  /** pass "" to hide the secondary action */
  cancelLabel?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}
export declare function Dialog(props: DialogProps): JSX.Element;
