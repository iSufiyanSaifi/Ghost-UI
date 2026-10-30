import * as React from "react";
export interface SkillRowProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  /** optional qualifier, e.g. "Advanced" */
  level?: string;
  /** show the approve/decline pair */
  approval?: boolean;
  onApprove?: () => void;
  onDecline?: () => void;
  onAdd?: () => void;
}
export declare function SkillRow(props: SkillRowProps): JSX.Element;
