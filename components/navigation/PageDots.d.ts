import * as React from "react";
export interface PageDotsProps extends React.HTMLAttributes<HTMLDivElement> {
  count?: number;
  index?: number;
  onSelect?: (index: number) => void;
}
export declare function PageDots(props: PageDotsProps): JSX.Element;
