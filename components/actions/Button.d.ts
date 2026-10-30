import * as React from "react";
/**
 * Ghost-UI pill button.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "destructive";
  size?: "small" | "medium" | "big";
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  loading?: boolean;
  fullWidth?: boolean;
}
export declare function Button(props: ButtonProps): JSX.Element;
