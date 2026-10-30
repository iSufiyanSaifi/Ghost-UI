import * as React from "react";
export interface SegmentOption { label: string; value?: string; icon?: React.ReactNode }
export interface SegmentedControlProps extends React.HTMLAttributes<HTMLDivElement> {
  options: (SegmentOption | string)[];
  value?: string;
  onChange?: (value: string) => void;
  size?: "small" | "medium";
}
export declare function SegmentedControl(props: SegmentedControlProps): JSX.Element;
