import * as React from "react";
/**
 * Generic Ghost-UI surface.
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  padding?: number | string;
  radius?: string;
  /** 1px hairline ring */
  outlined?: boolean;
  /** the kit's wide, very soft drop shadow */
  elevated?: boolean;
}
export declare function Card(props: CardProps): JSX.Element;
