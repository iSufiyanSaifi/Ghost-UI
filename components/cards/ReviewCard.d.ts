import * as React from "react";
export interface ReviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  handle?: string;
  avatar?: string;
  /** shown in the rating pill, e.g. "4.6" */
  rating?: string;
  body: string;
}
export declare function ReviewCard(props: ReviewCardProps): JSX.Element;
