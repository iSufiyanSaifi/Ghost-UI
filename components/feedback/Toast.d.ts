import * as React from "react";
export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  message: string;
  tone?: "neutral" | "success" | "error";
  action?: React.ReactNode;
  onDismiss?: () => void;
  /** ms before onDismiss fires; 0 disables auto-dismiss */
  duration?: number;
}
export declare function Toast(props: ToastProps): JSX.Element;
