import * as React from "react";
import { TextFieldProps } from "./TextField";
export interface PasswordFieldProps extends Omit<TextFieldProps, "type" | "suffix"> {
  defaultVisible?: boolean;
}
export declare function PasswordField(props: PasswordFieldProps): JSX.Element;
