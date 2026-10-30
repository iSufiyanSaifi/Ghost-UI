import React from "react";
import { PageDots } from "./PageDots.jsx";

/** Horizontal snap track with paging dots. Scrolls natively; dots jump. */
export function Carousel({ children, gap = 12, showDots = true, style, ...rest }) {
  const ref = React.useRef(null);
  const items = React.Children.toArray(children);
  const [index, setIndex] = React.useState(0);
  const onScroll = () => {
    const el = ref.current;
    if (!el || !el.firstElementChild) return;
    const w = el.firstElementChild.getBoundingClientRect().width + gap;
    setIndex(Math.round(el.scrollLeft / w));
  };
  const jump = i => {
    const el = ref.current;
    if (!el || !el.firstElementChild) return;
    const w = el.firstElementChild.getBoundingClientRect().width + gap;
    el.scrollTo({ left: i * w, behavior: "smooth" });
  };
  return (
    <div {...rest} style={{ display: "flex", flexDirection: "column", gap: 12, ...style }}>
      <div ref={ref} onScroll={onScroll} style={{
        display: "flex", gap, overflowX: "auto", scrollSnapType: "x mandatory",
        scrollbarWidth: "none", paddingBottom: 2,
      }}>
        {items.map((c, i) => (
          <div key={i} style={{ scrollSnapAlign: "start", flexShrink: 0 }}>{c}</div>
        ))}
      </div>
      {showDots && items.length > 1 && (
        <PageDots count={items.length} index={index} onSelect={jump} style={{ alignSelf: "center" }} />
      )}
    </div>
  );
}
