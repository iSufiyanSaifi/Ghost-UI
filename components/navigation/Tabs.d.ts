import * as React from "react";
export interface TabItem { label: string; value?: string; icon?: React.ReactNode }
/**
 * Segmented pill tabset.
 * @startingPoint section="Navigation" subtitle="Segmented pill tabset" viewport="700x120"
 */
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  items: (TabItem | string)[];
  value?: string;
  onChange?: (value: string) => void;
}
export declare function Tabs(props: TabsProps): JSX.Element;
