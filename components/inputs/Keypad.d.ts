import * as React from "react";
export interface KeypadProps extends React.HTMLAttributes<HTMLDivElement> {
  /** fires with "0"–"9", "clear" or "delete" */
  onKey?: (key: string) => void;
  /** show the ABC/DEF sub-labels */
  letters?: boolean;
}
export declare function Keypad(props: KeypadProps): JSX.Element;
