import * as React from "react";
export interface IllustrationProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** path to a real asset — never a redrawn approximation */
  src?: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  /** the kit's Tilt=True variant */
  tilt?: boolean;
  background?: string;
}
export declare function Illustration(props: IllustrationProps): JSX.Element;
