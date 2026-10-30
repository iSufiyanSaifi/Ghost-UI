The kit's only text button — a full pill, never a rounded rectangle.

```jsx
<Button variant="primary" size="big" trailingIcon={<Icon name="send" size={24} color="#fff" />}>Send</Button>
<Button variant="ghost" size="small">Cancel</Button>
```

variant: primary (#1C70D4), secondary (#F8F8F8 fill), ghost (white + 0.6px #E6E6E6 hairline), destructive.
size: small 40px/16px text, medium 48px/18px, big 56px/20px. `loading` swaps the leading slot for a spinner.
