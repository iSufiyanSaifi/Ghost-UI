import * as React from "react";
export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  count?: string | number;
  action?: React.ReactNode;
}
export declare function SectionHeader(props: SectionHeaderProps): JSX.Element;
