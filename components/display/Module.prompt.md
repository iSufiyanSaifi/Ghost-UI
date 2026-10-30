Titled content block — header, body, optional footer.

```jsx
<Module title="Upcoming" count={12} headerAction={<Button size="small" variant="ghost">See all</Button>}
  footer={<Button size="small" variant="ghost">Load more</Button>}>
  {events.map(e => <EventCard key={e.id} {...e} />)}
</Module>
```
