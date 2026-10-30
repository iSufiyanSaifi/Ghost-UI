import * as React from "react";
export interface SelectOption { label: string; value: string }
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "onChange" | "value"> {
  label?: string;
  required?: boolean;
  options: (SelectOption | string)[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  error?: string;
}
export declare function Select(props: SelectProps): JSX.Element;
