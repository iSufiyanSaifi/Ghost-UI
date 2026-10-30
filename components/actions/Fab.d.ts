import * as React from "react";
export interface FabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode;
  label: string;
  /** show the label beside the icon */
  extended?: boolean;
}
export declare function Fab(props: FabProps): JSX.Element;
