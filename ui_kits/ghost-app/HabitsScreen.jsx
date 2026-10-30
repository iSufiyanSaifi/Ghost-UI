const { TopBar, Tabs, HabitCard, Card, Chip, Fab, Icon, ProgressRing } = window.GhostUIDesignSystem_a29fdf;

const A1 = "../../assets/img/avatar-1.jpg";
const A2 = "../../assets/img/avatar-2.png";
const A3 = "../../assets/img/avatar-3.png";

const HABITS = [
  { title: "Drink the water", detail: "500/2000 ML", avatar: A2, progress: 25 },
  { title: "Sleep Early", detail: "Before 11:00 PM", avatar: A3, progress: 80 },
  { title: "Morning run", detail: "2.4/5 KM", avatar: A1, progress: 48 },
  { title: "Read 20 pages", detail: "14/20 pages", avatar: A2, progress: 70 },
];

function HabitsScreen({ onAdd }) {
  const [range, setRange] = React.useState("Today");
  return (
    <>
      <TopBar title="Habits" subtitle="Thursday, 13 August"
        actions={<Icon name="bell" size={24} />} style={{ padding: "8px 0" }} />
      <Tabs items={["Today", "Week", "Month"]} value={range} onChange={setRange} />
      <Card outlined padding={16} style={{ marginTop: 16, gap: 12 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <ProgressRing value={56} size={56} thickness={4} />
          <div style={{ display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
            <span className="gh-title-sm">4 of 7 done</span>
            <span className="gh-body-sm" style={{ color: "var(--color-text-secondary)" }}>Keep the streak — 12 days</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Chip active>All</Chip><Chip>Health</Chip><Chip>Focus</Chip>
        </div>
      </Card>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 16 }}>
        {HABITS.map((h, i) => <HabitCard key={i} {...h} friends={i === 0 ? [{src:A1},{src:A3},{src:A2},{src:A1},{src:A2}] : undefined} />)}
      </div>
      <Fab label="Add habit" onClick={onAdd} icon={<Icon name="plus" size={24} color="#fff" />}
        style={{ position: "absolute", right: 20, bottom: 104 }} />
    </>
  );
}
Object.assign(window, { HabitsScreen });
