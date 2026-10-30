import React from "react";

/** The bare text node inside a field — the `_input` atom. No shell, no label. */
export function InputAtom({ style, ...rest }) {
  return (
    <input {...rest} style={{
      flex: 1, minWidth: 0, border: "none", outline: "none", background: "transparent",
      fontFamily: "var(--font-brand)", fontSize: "var(--text-body-lg-size)",
      fontWeight: 400, lineHeight: "20px", color: "var(--color-text-primary)", ...style,
    }} />
  );
}
