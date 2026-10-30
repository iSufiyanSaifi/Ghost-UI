Screen-level action bar and the accept/decline pair.

```jsx
<ButtonBar primaryLabel="Book now" secondaryLabel="Save" onPrimary={book} />
<ApprovalButtons onApprove={yes} onDecline={no} />
```

Only ever one primary in a bar.
