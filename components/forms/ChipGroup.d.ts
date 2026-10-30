import * as React from "react";
export interface ChipGroupOption { label: string; value: string; icon?: React.ReactNode; }
export interface ChipGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  options: (string | ChipGroupOption)[];
  /** string for single, string[] when multiple */
  value?: string | string[];
  onChange?: (value: any) => void;
  multiple?: boolean;
}
export declare function ChipGroup(props: ChipGroupProps): JSX.Element;
