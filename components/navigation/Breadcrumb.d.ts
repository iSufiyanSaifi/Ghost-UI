import * as React from "react";
export interface Crumb { label: string; value?: string }
export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
  items: (Crumb | string)[];
  onNavigate?: (value: string) => void;
}
export declare function Breadcrumb(props: BreadcrumbProps): JSX.Element;
