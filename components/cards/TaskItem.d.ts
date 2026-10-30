import * as React from "react";
export interface TaskItemProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  note?: string;
  done?: boolean;
  /** text for the trailing badge, e.g. "Today" */
  due?: string;
  tone?: "neutral" | "accent" | "success" | "warning" | "error" | "info";
  onToggle?: (next: boolean) => void;
}
export declare function TaskItem(props: TaskItemProps): JSX.Element;
