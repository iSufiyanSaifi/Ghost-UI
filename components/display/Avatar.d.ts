import * as React from "react";
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string;
  alt?: string;
  /** used for initials when there is no image */
  name?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | number;
  ring?: boolean;
}
export interface AvatarGroupProps extends React.HTMLAttributes<HTMLSpanElement> {
  items: { src?: string; name?: string }[];
  max?: number;
  size?: number;
}
export declare function Avatar(props: AvatarProps): JSX.Element;
export declare function AvatarGroup(props: AvatarGroupProps): JSX.Element;
