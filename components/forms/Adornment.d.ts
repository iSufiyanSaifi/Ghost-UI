import * as React from "react";
export interface AdornmentProps extends React.HTMLAttributes<HTMLElement> {
  type?: "icon" | "text";
  /** makes it a button; requires `label` */
  onClick?: () => void;
  label?: string;
}
export declare function Adornment(props: AdornmentProps): JSX.Element;
