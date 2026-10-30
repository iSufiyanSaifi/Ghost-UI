Primary app navigation — 5 destinations, 72px tall, sits on the surface grey.

```jsx
<BottomNav value={tab} onChange={setTab} items={[
  { icon: "house", value: "home" }, { icon: "calendar-days", value: "events" },
  { icon: "plus", value: "add" }, { icon: "users", value: "community" },
  { icon: "user", value: "profile" },
]} />
```

Selection is carried by colour AND a heavier stroke, so it reads without colour.
