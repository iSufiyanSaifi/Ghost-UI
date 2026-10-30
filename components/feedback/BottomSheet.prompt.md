Bottom sheet over a blurred scrim — the App frames' overlay pattern.

```jsx
<BottomSheet open={open} title="Add habit" onClose={close}
  actions={<ButtonBar primaryLabel="Save" onPrimary={save} />}>…</BottomSheet>
```

Its parent needs `position: relative` — the sheet fills the phone frame, not the viewport.
