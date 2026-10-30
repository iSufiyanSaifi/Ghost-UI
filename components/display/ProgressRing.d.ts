import * as React from "react";
export interface ProgressRingProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** 0–100 */
  value?: number;
  size?: number;
  thickness?: number;
  /** overrides the centred percentage text */
  label?: string;
}
export declare function ProgressRing(props: ProgressRingProps): JSX.Element;
