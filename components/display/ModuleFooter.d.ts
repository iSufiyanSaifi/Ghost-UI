import * as React from "react";
export interface ModuleFooterProps extends React.HTMLAttributes<HTMLElement> {
  label?: string;
  onClick?: () => void;
  /** hairline above the footer */
  divider?: boolean;
}
export declare function ModuleFooter(props: ModuleFooterProps): JSX.Element;
