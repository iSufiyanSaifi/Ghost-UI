import * as React from "react";
export interface ProgressStepsProps extends React.HTMLAttributes<HTMLOListElement> {
  steps: (string | { label: string })[];
  /** 0-indexed current step */
  current?: number;
}
export declare function ProgressSteps(props: ProgressStepsProps): JSX.Element;
