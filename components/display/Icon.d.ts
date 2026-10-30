import * as React from "react";
export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** kebab-case Jin/Lucide glyph name, e.g. "search", "bell", "arrow-right" */
  name?: string;
  /** px box. Ghost-UI sizes: 12 16 20 24 32 40 48 */
  size?: number;
  /** any CSS colour; defaults to --color-icon-default (#95A0B2) */
  color?: string;
  /** 1.5 is the kit default */
  strokeWidth?: number;
}
export declare function Icon(props: IconProps): JSX.Element;
