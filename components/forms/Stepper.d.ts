import * as React from "react";
export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
  /** accessible name for the group */
  label?: string;
  disabled?: boolean;
}
export declare function Stepper(props: StepperProps): JSX.Element;
