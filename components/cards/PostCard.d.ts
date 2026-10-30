import * as React from "react";
export interface PostCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: string;
  authorName: string;
  authorAvatar?: string;
  /** e.g. "#Traking" — rendered in iOS blue */
  hashtag?: string;
  caption?: string;
  liked?: boolean;
  onLike?: () => void;
  onComment?: () => void;
}
export declare function PostCard(props: PostCardProps): JSX.Element;
