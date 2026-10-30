The chip's internal atoms (`_chip/content`, `_chip/prefix`, `_chip/suffix`).
`Chip` already assembles them — reach for these only when building a custom chip-like control.

```jsx
<ChipPrefix name="tag" /> <ChipContent>Label</ChipContent> <ChipSuffix type="close" onClick={remove} />
```
