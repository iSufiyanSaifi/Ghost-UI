import * as React from "react";
export interface SideSheetProps extends React.HTMLAttributes<HTMLElement> {
  open?: boolean;
  title: string;
  width?: number | string;
  onClose?: () => void;
  footer?: React.ReactNode;
  /** scrim + click-outside close; false for a docked, non-blocking panel */
  modal?: boolean;
}
export declare function SideSheet(props: SideSheetProps): JSX.Element | null;
