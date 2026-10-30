import * as React from "react";
export interface RadioProps {
  checked?: boolean;
  onChange?: (value: any) => void;
  disabled?: boolean;
  label?: string;
  name?: string;
  value?: any;
  id?: string;
  style?: React.CSSProperties;
}
export declare function Radio(props: RadioProps): JSX.Element;
