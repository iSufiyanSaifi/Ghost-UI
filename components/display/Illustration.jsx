import React from "react";

/** Frame for a copied brand illustration or spot graphic. */
export function Illustration({ src, alt = "", width = 102, height = 80, tilt = false, background = "var(--color-bg-default)", style, ...rest }) {
  return (
    <span {...rest} style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      width, height, padding: 8, overflow: "hidden", background,
      transform: tilt ? "rotate(-6deg)" : undefined, ...style,
    }}>
      {src
        ? <img src={src} alt={alt} style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
        : <span style={{ width: "100%", height: "100%", background: "var(--color-bg-box)" }} />}
    </span>
  );
}
