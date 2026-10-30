import * as React from "react";
export interface BatteryIndicatorProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** 0–100 */
  level?: number;
  charging?: boolean;
  showPercent?: boolean;
  /** invert for dark backgrounds */
  dark?: boolean;
}
export declare function BatteryIndicator(props: BatteryIndicatorProps): JSX.Element;
