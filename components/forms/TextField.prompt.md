Pill input with an optional label, leading/trailing slots and supporting text.

```jsx
<TextField label="Email Address" required placeholder="sufiyan@grayvolf.com"
  prefix={<Icon name="mail" size={24} />} />
<TextField label="Password" type="password" error="Error message"
  suffix={<Icon name="eye-off" size={24} />} />
```

48px tall, 0.6px hairline, 20px side padding. Errors turn the border and message #F01616; the required marker is #EC1C3C.
