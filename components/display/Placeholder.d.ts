import * as React from "react";
export interface PlaceholderProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number | string;
  height?: number | string;
  label?: string;
  /** Jin/Lucide glyph name */
  icon?: string;
  radius?: string;
}
export declare function Placeholder(props: PlaceholderProps): JSX.Element;
