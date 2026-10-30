Confirmation card. 400px wide, 12px radius, hairline border, actions right-aligned.

```jsx
<Dialog title="Confirmation" confirmLabel="Send" onConfirm={submit} onCancel={close}>
  You've submitted your details. If everything looks correct, click 'Approve' to proceed or cancel to make changes
</Dialog>
```

tone picks the icon: confirmation (amber warning), success, error, info.
