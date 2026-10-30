import React from "react";

const CACHE = new Map();
const BASE = "https://unpkg.com/lucide-static@0.469.0/icons/";

/** Jin Icons — the kit's 1520-glyph Lucide-derived set. Names are kebab-case. */
export function Icon({ name = "circle", size = 24, color, strokeWidth = 1.5, style, ...rest }) {
  const [markup, setMarkup] = React.useState(() => CACHE.get(name) || null);
  React.useEffect(() => {
    let live = true;
    if (CACHE.has(name)) { setMarkup(CACHE.get(name)); return; }
    fetch(BASE + name + ".svg").then(r => (r.ok ? r.text() : "")).then(t => {
      CACHE.set(name, t);
      if (live) setMarkup(t);
    }).catch(() => {});
    return () => { live = false; };
  }, [name]);
  const s = {
    display: "inline-flex", alignItems: "center", justifyContent: "center",
    width: size, height: size, flexShrink: 0,
    color: color || "var(--color-icon-default)",
    ["--gh-icon-stroke"]: strokeWidth, ...style,
  };
  return (
    <span aria-hidden="true" {...rest} style={s}
      ref={el => { if (el && markup && el.dataset.n !== name) { el.innerHTML = markup; el.dataset.n = name;
        const svg = el.firstElementChild;
        if (svg) { svg.setAttribute("width", "100%"); svg.setAttribute("height", "100%");
          svg.style.strokeWidth = strokeWidth; svg.style.stroke = "currentColor"; } } }} />
  );
}
