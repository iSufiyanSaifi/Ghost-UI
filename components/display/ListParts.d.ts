import * as React from "react";
export interface ListLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  weight?: "regular" | "medium";
  /** Jin/Lucide glyph name */
  icon?: string;
  badge?: React.ReactNode;
}
export interface ListThumbnailProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string;
  name?: string;
  type?: "avatar" | "image";
  size?: "small" | "medium" | "large";
}
export interface ListInfoProps extends React.HTMLAttributes<HTMLSpanElement> {
  muted?: boolean;
}
export interface ListActionProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Jin/Lucide glyph name */
  icon?: string;
  label?: string;
}
export interface ListPrefixProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Jin/Lucide glyph name, or pass children */
  icon?: string;
}
export interface ListSuffixProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** trailing meta text before any children */
  text?: string;
}
export declare function ListLabel(props: ListLabelProps): JSX.Element;
export declare function ListThumbnail(props: ListThumbnailProps): JSX.Element;
export declare function ListInfo(props: ListInfoProps): JSX.Element;
export declare function ListAction(props: ListActionProps): JSX.Element;
export declare function ListPrefix(props: ListPrefixProps): JSX.Element;
export declare function ListSuffix(props: ListSuffixProps): JSX.Element;
