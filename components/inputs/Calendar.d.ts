import * as React from "react";
/**
 * Month grid date picker.
 */
export interface CalendarProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 0-indexed */
  month?: number;
  year?: number;
  selected?: number;
  onSelect?: (day: number) => void;
  disabledDays?: number[];
}
export declare function Calendar(props: CalendarProps): JSX.Element;
