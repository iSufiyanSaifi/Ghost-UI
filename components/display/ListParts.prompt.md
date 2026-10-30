The list row's internal atoms (`_list/label`, `_list/thumbnail`,
`_list/additional information`, `_list/additional action`). `ListItem` and
`ListRow` compose them — use these directly only for a custom row layout.

```jsx
<ListThumbnail src={a} name="Sufiyan Jin" />
<ListLabel icon="mountain" badge="Host">Sufiyan Jin</ListLabel>
<ListInfo>@SufiyanJin</ListInfo>
<ListAction icon="ellipsis" label="More" onClick={openMenu} />
```
