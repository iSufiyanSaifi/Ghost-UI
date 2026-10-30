import * as React from "react";
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  /** required for screen readers — the button has no visible text */
  label: string;
  size?: "small" | "medium" | "big";
  variant?: "primary" | "secondary" | "ghost";
  shape?: "circle" | "rounded";
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
