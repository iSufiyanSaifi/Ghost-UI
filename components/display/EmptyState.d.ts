import * as React from "react";
export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Jin/Lucide glyph name */
  icon?: string;
  title: string;
  action?: React.ReactNode;
}
export declare function EmptyState(props: EmptyStateProps): JSX.Element;
