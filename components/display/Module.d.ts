import * as React from "react";
export interface ModuleProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  count?: string | number;
  headerAction?: React.ReactNode;
  footer?: React.ReactNode;
  /** 16px screen gutter; turn off inside an already-padded surface */
  sidePadding?: boolean;
}
export declare function Module(props: ModuleProps): JSX.Element;
