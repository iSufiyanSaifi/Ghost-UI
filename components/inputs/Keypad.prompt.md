Numeric entry pad — OTP, PIN, amount.

```jsx
<Keypad onKey={k => setPin(p => k === "delete" ? p.slice(0,-1) : p + k)} />
```
