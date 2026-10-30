import * as React from "react";
export interface VisionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: string;
  /** the life area, e.g. "Relationships & Family" */
  category?: string;
  title: string;
  onDelete?: () => void;
}
export declare function VisionCard(props: VisionCardProps): JSX.Element;
