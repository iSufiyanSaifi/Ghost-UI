import * as React from "react";
export interface ChatBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "in" | "out";
  time?: string;
  /** the kit's Blue Tick states */
  status?: "sent" | "read";
}
export declare function ChatBubble(props: ChatBubbleProps): JSX.Element;
