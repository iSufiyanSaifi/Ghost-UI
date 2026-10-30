import * as React from "react";
export interface PhoneStatusBarProps extends React.HTMLAttributes<HTMLDivElement> {
  time?: string;
  /** invert for dark backgrounds */
  dark?: boolean;
}
export declare function PhoneStatusBar(props: PhoneStatusBarProps): JSX.Element;
