import * as React from "react";
export interface ListItemProps extends React.HTMLAttributes<HTMLElement> {
  /** image URL for the leading slot */
  thumbnail?: string;
  thumbnailType?: "avatar" | "image";
  thumbnailSize?: "small" | "medium" | "large";
  label: string;
  /** node beside the label — usually a Badge */
  badge?: React.ReactNode;
  info?: string;
  secondaryInfo?: string;
  actions?: React.ReactNode;
  chevron?: boolean;
  selected?: boolean;
  onClick?: () => void;
}
export declare function ListItem(props: ListItemProps): JSX.Element;
