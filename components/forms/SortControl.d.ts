import * as React from "react";
export interface SortControlProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value?: "none" | "asc" | "desc";
  onChange?: (value: "none" | "asc" | "desc") => void;
  label?: string;
}
export declare function SortControl(props: SortControlProps): JSX.Element;
