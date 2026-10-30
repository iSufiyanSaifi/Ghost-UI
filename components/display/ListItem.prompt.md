The kit's `_list/*` family assembled into one component — thumbnail, label + badge,
up to two supporting lines, trailing actions.

```jsx
<ListItem thumbnail={a} label="Sufiyan Jin" badge={<Badge tone="success">Host</Badge>}
  info="@SufiyanJin" secondaryInfo="Joined 12 events" chevron onClick={open} />
```

Use `ListRow` for settings menus; `ListItem` when a row carries an image and metadata.
