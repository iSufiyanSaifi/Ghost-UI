import * as React from "react";
export interface ListRowProps extends React.HTMLAttributes<HTMLElement> {
  icon?: React.ReactNode;
  label: string;
  description?: string;
  trailing?: React.ReactNode;
  /** append a trailing chevron */
  chevron?: boolean;
  onClick?: () => void;
}
export declare function ListRow(props: ListRowProps): JSX.Element;
