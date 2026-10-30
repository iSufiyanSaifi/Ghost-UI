import * as React from "react";
export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  /** px gap between slides */
  gap?: number;
  showDots?: boolean;
}
export declare function Carousel(props: CarouselProps): JSX.Element;
