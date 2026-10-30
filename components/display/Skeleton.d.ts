import * as React from "react";
export interface SkeletonProps extends React.HTMLAttributes<HTMLSpanElement> {
  width?: number | string;
  height?: number;
  radius?: string;
  /** square it off into a circle of `height` */
  circle?: boolean;
}
export declare function Skeleton(props: SkeletonProps): JSX.Element;
