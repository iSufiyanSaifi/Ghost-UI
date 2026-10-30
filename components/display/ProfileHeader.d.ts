import * as React from "react";
export interface ProfileStat { value: string | number; label: string }
export interface ProfileHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  handle?: string;
  src?: string;
  verified?: boolean;
  stats?: ProfileStat[];
  actions?: React.ReactNode;
}
export declare function ProfileHeader(props: ProfileHeaderProps): JSX.Element;
