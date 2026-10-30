import * as React from "react";
export interface AndroidNavBarProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "gesture" | "buttons";
  dark?: boolean;
}
export declare function AndroidNavBar(props: AndroidNavBarProps): JSX.Element;
