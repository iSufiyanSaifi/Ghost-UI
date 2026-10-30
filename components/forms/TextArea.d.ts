import * as React from "react";
export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  required?: boolean;
  error?: string;
  helper?: string;
}
export declare function TextArea(props: TextAreaProps): JSX.Element;
