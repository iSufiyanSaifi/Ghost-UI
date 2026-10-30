import * as React from "react";
/**
 * Ghost-UI pill text input.
 */
export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix"> {
  label?: string;
  required?: boolean;
  /** node rendered inside the field, before the input (usually an Icon) */
  prefix?: React.ReactNode;
  /** node rendered inside the field, after the input (eye toggle, unit, action) */
  suffix?: React.ReactNode;
  /** presence switches the field to its error state */
  error?: string;
  helper?: string;
}
export declare function TextField(props: TextFieldProps): JSX.Element;
