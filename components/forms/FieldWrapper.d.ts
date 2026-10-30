import * as React from "react";
export interface FieldWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  shape?: "pill" | "rounded";
  state?: "default" | "hover" | "focused" | "filled" | "error" | "success" | "disabled" | "readonly";
  height?: number | string;
}
export declare function FieldWrapper(props: FieldWrapperProps): JSX.Element;
