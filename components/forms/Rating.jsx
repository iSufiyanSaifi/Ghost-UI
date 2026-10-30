import React from "react";
import { Icon } from "../display/Icon.jsx";

/** Star rating. Read-only by default; pass onChange to make it an input. */
export function Rating({ value = 0, max = 5, size = 16, onChange, label = "Rating", style, ...rest }) {
  const readOnly = !onChange;
  return (
    <span role={readOnly ? "img" : "radiogroup"} aria-label={`${label}: ${value} of ${max}`}
      {...rest} style={{ display: "inline-flex", alignItems: "center", gap: 2, ...style }}>
      {Array.from({ length: max }, (_, i) => {
        const on = i < Math.round(value);
        const star = <Icon name="star" size={size} strokeWidth={on ? 2 : 1.5}
          color={on ? "#16A34A" : "var(--color-icon-default)"} />;
        return readOnly ? <span key={i}>{star}</span> : (
          <button key={i} type="button" aria-label={`${i + 1} of ${max}`} onClick={() => onChange(i + 1)}
            style={{ border: "none", background: "none", padding: 0, cursor: "pointer", display: "flex" }}>{star}</button>
        );
      })}
    </span>
  );
}
