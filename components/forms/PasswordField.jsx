import React from "react";
import { TextField } from "./TextField.jsx";
import { Icon } from "../display/Icon.jsx";

/** TextField with a show/hide toggle — the kit's `_input` password variant. */
export function PasswordField({ defaultVisible = false, ...rest }) {
  const [visible, setVisible] = React.useState(defaultVisible);
  return (
    <TextField {...rest} type={visible ? "text" : "password"} suffix={
      <button type="button" aria-label={visible ? "Hide password" : "Show password"} onClick={() => setVisible(v => !v)} style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center", width: 28, height: 28,
        margin: "0 -6px 0 0", padding: 0, border: "none", background: "transparent", cursor: "pointer",
        color: "var(--color-text-secondary)",
      }}><Icon name={visible ? "eye-off" : "eye"} size={20} /></button>
    } />
  );
}
