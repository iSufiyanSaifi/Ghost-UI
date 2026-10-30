const { Icon, BottomNav } = window.GhostUIDesignSystem_a29fdf;

/** 432x960 phone frame with the kit's 32px radius, status bar and bottom nav. */
function StatusBar() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between",
      height: 44, padding: "0 24px", flexShrink: 0 }}>
      <span style={{ fontFamily: "var(--font-brand)", fontSize: 15, fontWeight: 600 }}>9:41</span>
      <span style={{ display: "flex", gap: 6, alignItems: "center" }}>
        <Icon name="signal" size={16} color="var(--color-icon-strong)" />
        <Icon name="wifi" size={16} color="var(--color-icon-strong)" />
        <Icon name="battery-full" size={20} color="var(--color-icon-strong)" />
      </span>
    </div>
  );
}

function Screen({ children, tab, onTab, nav = true, background = "var(--color-bg-default)" }) {
  return (
    <div style={{
      position: "relative", width: 432, height: 960, overflow: "hidden",
      borderRadius: 32, background, display: "flex", flexDirection: "column",
      boxShadow: "inset 0 0 0 1px var(--color-border-default)", flexShrink: 0,
    }}>
      <StatusBar />
      <div style={{ flex: 1, minHeight: 0, overflowY: "auto", padding: "0 16px 16px" }}>{children}</div>
      {nav && (
        <div style={{ padding: "0 6px 12px" }}>
          <BottomNav value={tab} onChange={onTab} items={[
            { icon: "house", value: "home" },
            { icon: "calendar-days", value: "events" },
            { icon: "circle-plus", value: "add" },
            { icon: "users", value: "community" },
            { icon: "user", value: "profile" },
          ]} />
        </div>
      )}
    </div>
  );
}

Object.assign(window, { Screen, StatusBar });
