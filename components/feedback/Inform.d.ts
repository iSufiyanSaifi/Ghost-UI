import * as React from "react";
export interface InformProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: "info" | "success" | "warning" | "error";
  title?: string;
  action?: React.ReactNode;
  onDismiss?: () => void;
}
export declare function Inform(props: InformProps): JSX.Element;
