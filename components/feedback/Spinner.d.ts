import * as React from "react";
export interface SpinnerProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?: number;
  thickness?: number;
  color?: string;
  /** accessible name */
  label?: string;
}
export declare function Spinner(props: SpinnerProps): JSX.Element;
