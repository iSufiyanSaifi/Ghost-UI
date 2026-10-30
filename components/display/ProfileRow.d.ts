import * as React from "react";
export interface ProfileRowProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  handle?: string;
  src?: string;
  /** blue tick beside the name */
  verified?: boolean;
  trailing?: React.ReactNode;
  outlined?: boolean;
}
export declare function ProfileRow(props: ProfileRowProps): JSX.Element;
