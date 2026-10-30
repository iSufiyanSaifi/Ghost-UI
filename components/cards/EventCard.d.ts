import * as React from "react";
/**
 * Event tile from the Cards page.
 */
export interface EventCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image?: string;
  date?: string;
  title: string;
  hostName?: string;
  hostHandle?: string;
  hostAvatar?: string;
  price?: string;
  /** Jin/Lucide currency glyph, default "indian-rupee" */
  currency?: string;
  onShare?: () => void;
}
export declare function EventCard(props: EventCardProps): JSX.Element;
