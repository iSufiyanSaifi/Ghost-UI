import * as React from "react";
export interface DonutSlice { label: string; value: number; color?: string }
export interface DonutChartProps extends React.HTMLAttributes<HTMLDivElement> {
  data: DonutSlice[];
  size?: number;
  thickness?: number;
  legend?: boolean;
}
export declare function DonutChart(props: DonutChartProps): JSX.Element;
