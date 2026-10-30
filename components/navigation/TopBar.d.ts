import * as React from "react";
export interface TopBarProps extends React.HTMLAttributes<HTMLElement> {
  title?: string;
  subtitle?: string;
  onBack?: () => void;
  actions?: React.ReactNode;
}
export declare function TopBar(props: TopBarProps): JSX.Element;
