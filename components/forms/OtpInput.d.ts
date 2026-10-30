import * as React from "react";
export interface OtpInputProps extends React.HTMLAttributes<HTMLDivElement> {
  length?: number;
  value?: string;
  onChange?: (value: string) => void;
  label?: string;
  error?: string;
  disabled?: boolean;
}
export declare function OtpInput(props: OtpInputProps): JSX.Element;
