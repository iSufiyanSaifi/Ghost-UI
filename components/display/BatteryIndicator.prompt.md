Status-bar battery, collapsing the kit's Battery / BatteryIndicator variant sets.

```jsx
<BatteryIndicator level={18} showPercent />
<BatteryIndicator level={64} charging dark />
```

Low (≤20%) turns the fill #FF1947; charging turns it green — the aria-label states both.
