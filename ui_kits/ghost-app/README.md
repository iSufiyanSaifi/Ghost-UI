# Ghost App — UI kit

A click-through recreation of the mobile product the Ghost-Ui Figma file documents:
habits, events, a community feed and a profile, plus the login gate.

**Screens** — `LoginScreen.jsx`, `HabitsScreen.jsx`, `EventsScreen.jsx`,
`CommunityScreen.jsx`, `ProfileScreen.jsx`, wrapped by `Shell.jsx`
(432×960 phone frame, 32px radius, status bar, bottom nav — the frame size the
source file uses for every App screen).

**Interactions** — sign in to enter the app; bottom nav switches destinations;
tabs, chips, switches, likes and the confirmation dialog are live. The profile
screen's "Dark theme" switch flips `data-theme` on the document, which is the
supported way to test the dark palette.

Every surface is composed from the published components — no screen re-implements
a primitive. Photography is copied verbatim from the source file
(`assets/img/`); avatars in the source are 3D character renders.
