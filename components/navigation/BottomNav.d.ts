import * as React from "react";
export interface BottomNavItem { icon: string; label?: string; value?: string }
export interface BottomNavProps extends React.HTMLAttributes<HTMLElement> {
  items: BottomNavItem[];
  value?: string;
  onChange?: (value: string) => void;
}
export declare function BottomNav(props: BottomNavProps): JSX.Element;
