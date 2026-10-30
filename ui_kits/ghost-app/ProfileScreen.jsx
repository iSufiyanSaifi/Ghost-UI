const { TopBar, Avatar, Button, Card, Switch, Divider, Badge, Icon, ProfileRow } = window.GhostUIDesignSystem_a29fdf;
const A1 = "../../assets/img/avatar-1.jpg";

function ProfileScreen({ onSignOut }) {
  const [reminders, setReminders] = React.useState(true);
  const [dark, setDark] = React.useState(false);
  return (
    <>
      <TopBar title="Profile" style={{ padding: "8px 0" }}
        actions={<Icon name="settings" size={24} />} />
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, padding: "16px 0" }}>
        <Avatar src={A1} size="xl" />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
          <span className="gh-title-lg" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
            Sufiyan Jin <Icon name="badge-check" size={16} color="#2563EB" />
          </span>
          <span className="gh-body-md" style={{ color: "var(--color-text-secondary)" }}>@SufiyanJin · Kerala</span>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <Button size="small" variant="primary">Edit profile</Button>
          <Button size="small" variant="ghost">Share</Button>
        </div>
      </div>
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        {[["12", "Habits"], ["4.6", "Rating"], ["38", "Events"]].map(([v, l]) => (
          <Card key={l} outlined padding={12} style={{ flex: 1, alignItems: "center", gap: 2 }}>
            <span className="gh-title-md">{v}</span>
            <span className="gh-body-sm" style={{ color: "var(--color-text-secondary)" }}>{l}</span>
          </Card>
        ))}
      </div>
      <Card outlined padding={16} style={{ gap: 14 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span className="gh-body-lg">Daily reminders</span>
          <Switch checked={reminders} onChange={setReminders} />
        </div>
        <Divider />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span className="gh-body-lg">Dark theme</span>
          <Switch checked={dark} onChange={v => { setDark(v); document.documentElement.setAttribute("data-theme", v ? "dark" : "light"); }} />
        </div>
        <Divider />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span className="gh-body-lg">Membership</span>
          <Badge tone="success">Verified</Badge>
        </div>
      </Card>
      <div style={{ marginTop: 16 }}>
        <ProfileRow name="Ayesha K." handle="Invited you to Chembra Peak" src={A1}
          trailing={<Button size="small" variant="primary">Accept</Button>} />
      </div>
      <Button variant="ghost" size="medium" fullWidth style={{ marginTop: 16 }} onClick={onSignOut}>Sign out</Button>
    </>
  );
}
Object.assign(window, { ProfileScreen });
