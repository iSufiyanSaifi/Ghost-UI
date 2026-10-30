import * as React from "react";
export interface MapCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** static map bitmap; a placeholder glyph shows without one */
  image?: string;
  place: string;
  address?: string;
  distance?: string;
  onOpen?: () => void;
}
export declare function MapCard(props: MapCardProps): JSX.Element;
