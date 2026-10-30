import * as React from "react";
export interface ModuleHeaderProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  subtitle?: string;
  count?: string | number;
  actionLabel?: string;
  onAction?: () => void;
  /** custom trailing node; overrides actionLabel */
  action?: React.ReactNode;
}
export declare function ModuleHeader(props: ModuleHeaderProps): JSX.Element;
