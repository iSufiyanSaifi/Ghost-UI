import * as React from "react";
export interface DividerProps extends React.HTMLAttributes<HTMLSpanElement> {
  orientation?: "horizontal" | "vertical";
  /** px margin on the cross axis */
  inset?: number;
}
export declare function Divider(props: DividerProps): JSX.Element;
