import * as React from "react";
export interface ChipContentProps extends React.HTMLAttributes<HTMLSpanElement> {
  active?: boolean;
  disabled?: boolean;
}
export interface ChipPrefixProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Jin/Lucide glyph name */
  name?: string;
  active?: boolean;
}
export interface ChipSuffixProps extends React.HTMLAttributes<HTMLElement> {
  type?: "check" | "close";
  active?: boolean;
  onClick?: () => void;
  label?: string;
}
export declare function ChipContent(props: ChipContentProps): JSX.Element;
export declare function ChipPrefix(props: ChipPrefixProps): JSX.Element;
export declare function ChipSuffix(props: ChipSuffixProps): JSX.Element;
