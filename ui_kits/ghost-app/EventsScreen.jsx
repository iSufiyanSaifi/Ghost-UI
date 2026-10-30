const { TopBar, SearchBar, Chip, EventCard, IconButton, Icon } = window.GhostUIDesignSystem_a29fdf;
const HERO = "../../assets/img/trek-hero.png";
const A1 = "../../assets/img/avatar-1.jpg";

const EVENTS = [
  { date: "July 28", title: "Tracking on Chembra Peak in Kerala 2 Days 3 Nights", price: "4999/-" },
  { date: "Aug 09", title: "Sunrise paddle at Ashtamudi Lake — beginners welcome", price: "1299/-" },
];

function EventsScreen({ onOpen }) {
  const [filter, setFilter] = React.useState("All");
  return (
    <>
      <TopBar title="Events" subtitle="Kerala · 12 upcoming" style={{ padding: "8px 0" }}
        actions={<IconButton label="Saved" icon={<Icon name="bookmark" size={20} color="#202020" />} />} />
      <SearchBar placeholder="Search Events..." filter />
      <div style={{ display: "flex", gap: 8, margin: "16px 0", overflowX: "auto" }}>
        {["All", "Trekking", "Water", "Nearby", "Free"].map(f => (
          <Chip key={f} active={filter === f} onClick={() => setFilter(f)}>{f}</Chip>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {EVENTS.map((e, i) => (
          <EventCard key={i} {...e} image={HERO} hostName="Sufiyan Jin" hostHandle="@SufiyanJin"
            hostAvatar={A1} onShare={onOpen} style={{ width: "100%", padding: 0 }} />
        ))}
      </div>
    </>
  );
}
Object.assign(window, { EventsScreen });
