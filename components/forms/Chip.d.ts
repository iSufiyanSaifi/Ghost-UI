import * as React from "react";
export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  leadingIcon?: React.ReactNode;
  /** renders a trailing dismiss affordance */
  onDismiss?: () => void;
}
export declare function Chip(props: ChipProps): JSX.Element;
