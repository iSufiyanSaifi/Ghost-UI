import React from "react";
import { Icon } from "../display/Icon.jsx";

/** iOS-style status strip the App frames sit under. Purely decorative in mocks. */
export function PhoneStatusBar({ time = "9:41", dark = false, style, ...rest }) {
  const fg = dark ? "var(--gh-white)" : "var(--gh-ink-900)";
  return (
    <div aria-hidden="true" {...rest} style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      height: 44, padding: "0 24px", flexShrink: 0, ...style,
    }}>
      <span style={{ fontFamily: "var(--font-brand)", fontSize: 15, fontWeight: 600, color: fg }}>{time}</span>
      <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
        <Icon name="signal" size={16} color={fg} />
        <Icon name="wifi" size={16} color={fg} />
        <Icon name="battery-full" size={20} color={fg} />
      </span>
    </div>
  );
}
