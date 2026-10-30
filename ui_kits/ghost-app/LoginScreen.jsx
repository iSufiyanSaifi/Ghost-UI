const { TextField, Button, Checkbox, Icon, Divider } = window.GhostUIDesignSystem_a29fdf;

function LoginScreen({ onSignIn }) {
  const [remember, setRemember] = React.useState(true);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20, padding: "40px 0 0" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <span className="gh-heading-md" style={{ letterSpacing: "-0.5px" }}>Ghost-UI</span>
        <span className="gh-body-md" style={{ color: "var(--color-text-secondary)" }}>
          Sign in to pick up your habits, events and people.
        </span>
      </div>
      <TextField label="Email Address" required defaultValue="sufiyan@grayvolf.com"
        prefix={<Icon name="mail" size={24} />} />
      <TextField label="Password" required type="password" defaultValue="password"
        suffix={<Icon name="eye-off" size={24} />} helper="At least 8 characters" />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <Checkbox checked={remember} onChange={setRemember} label="Remember me" />
        <a href="#" className="gh-body-md">Forgot password?</a>
      </div>
      <Button variant="primary" size="big" fullWidth onClick={onSignIn}>Sign in</Button>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Divider style={{ flex: 1 }} />
        <span className="gh-body-sm" style={{ color: "var(--color-text-secondary)" }}>or</span>
        <Divider style={{ flex: 1 }} />
      </div>
      <div style={{ display: "flex", gap: 12 }}>
        <Button variant="ghost" size="medium" fullWidth leadingIcon={<Icon name="chrome" size={20} />}>Google</Button>
        <Button variant="ghost" size="medium" fullWidth leadingIcon={<Icon name="apple" size={20} />}>Apple</Button>
      </div>
      <span className="gh-body-sm" style={{ textAlign: "center", color: "var(--color-text-secondary)" }}>
        New here? <a href="#">Create an account</a>
      </span>
    </div>
  );
}
Object.assign(window, { LoginScreen });
