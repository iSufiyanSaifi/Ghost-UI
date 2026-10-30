import * as React from "react";
export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  /** called on Escape */
  onClose?: () => void;
}
export interface MenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Jin/Lucide glyph name or node */
  icon?: string | React.ReactNode;
  label?: string;
  shortcut?: string;
  selected?: boolean;
  destructive?: boolean;
}
export declare function Menu(props: MenuProps): JSX.Element | null;
export declare function MenuItem(props: MenuItemProps): JSX.Element;
export declare function MenuDivider(): JSX.Element;
