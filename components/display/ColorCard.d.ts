import * as React from "react";
export interface ColorCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** any CSS colour for the well */
  color: string;
  name: string;
  /** with or without the leading # */
  hex?: string;
  showHex?: boolean;
}
export declare function ColorCard(props: ColorCardProps): JSX.Element;
