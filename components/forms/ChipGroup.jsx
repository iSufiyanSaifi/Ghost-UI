import React from "react";
import { Chip } from "./Chip.jsx";

/** A wrapping row of filter chips with single or multi selection. */
export function ChipGroup({ options = [], value, onChange, multiple = false, style, ...rest }) {
  const selected = multiple ? (value || []) : value;
  const isOn = v => multiple ? selected.includes(v) : selected === v;
  const toggle = v => {
    if (!onChange) return;
    if (multiple) onChange(isOn(v) ? selected.filter(x => x !== v) : [...selected, v]);
    else onChange(isOn(v) ? undefined : v);
  };
  return (
    <div role="group" {...rest} style={{ display: "flex", flexWrap: "wrap", gap: 8, ...style }}>
      {options.map((raw, i) => {
        const o = typeof raw === "string" ? { label: raw, value: raw } : raw;
        return <Chip key={i} active={isOn(o.value)} aria-pressed={isOn(o.value)} onClick={() => toggle(o.value)} leadingIcon={o.icon}>{o.label}</Chip>;
      })}
    </div>
  );
}
