import * as React from "react";
export interface SearchBarProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** show the trailing filter button */
  filter?: boolean;
  onFilter?: () => void;
}
export declare function SearchBar(props: SearchBarProps): JSX.Element;
