Dialog internals (`_feedback/content`, `_feedback/action`), exposed for custom
overlays. `Dialog` composes both already.

```jsx
<FeedbackContent icon="circle-check" iconColor="var(--color-status-success)" title="Saved">
  Your habit is live.
</FeedbackContent>
<FeedbackAction confirmLabel="Done" cancelLabel="" onConfirm={close} />
```
