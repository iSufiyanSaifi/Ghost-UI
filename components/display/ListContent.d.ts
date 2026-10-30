import * as React from "react";
export interface ListContentProps extends React.HTMLAttributes<HTMLDivElement> {
  thumbnail?: string;
  thumbnailType?: "avatar" | "image";
  label: string;
  badge?: React.ReactNode;
  info?: string;
  secondaryInfo?: string;
  /** Jin/Lucide glyph for the trailing action */
  action?: string;
  onAction?: () => void;
}
export interface ListGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  dividers?: boolean;
}
export declare function ListContent(props: ListContentProps): JSX.Element;
export declare function ListGroup(props: ListGroupProps): JSX.Element;
