The field shell — the kit's `_field wrapper` (shape × state × prefix × suffix).
`TextField`, `Select` and `SearchBar` are built on it; use it directly only for a
custom input the set doesn't cover.

```jsx
<FieldWrapper state="error" prefix={<Icon name="mail" size={24} />}>
  <input style={{border:'none',outline:'none',flex:1}} />
</FieldWrapper>
```
