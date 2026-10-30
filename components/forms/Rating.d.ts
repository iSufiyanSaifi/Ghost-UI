import * as React from "react";
export interface RatingProps extends React.HTMLAttributes<HTMLSpanElement> {
  value?: number;
  max?: number;
  size?: number;
  /** omit for a read-only display */
  onChange?: (value: number) => void;
  label?: string;
}
export declare function Rating(props: RatingProps): JSX.Element;
