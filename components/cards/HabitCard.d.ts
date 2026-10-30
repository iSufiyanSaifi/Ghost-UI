import * as React from "react";
export interface HabitCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  /** e.g. "500/2000 ML" */
  detail?: string;
  avatar?: string;
  friends?: { src?: string; name?: string }[];
  /** 0–100 */
  progress?: number;
}
export declare function HabitCard(props: HabitCardProps): JSX.Element;
