import * as React from "react";
export interface SmartTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** prefix like "Block:" — rendered in the icon grey */
  label?: string;
  value: React.ReactNode;
  /** show the sparkle marking the value as AI-derived */
  ai?: boolean;
}
export declare function SmartText(props: SmartTextProps): JSX.Element;
