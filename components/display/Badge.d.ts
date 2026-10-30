import * as React from "react";
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "neutral" | "accent" | "success" | "warning" | "error" | "info";
  /** render as an 8px dot instead of a pill */
  dot?: boolean;
  icon?: React.ReactNode;
}
export declare function Badge(props: BadgeProps): JSX.Element;
