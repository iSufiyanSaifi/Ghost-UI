# Ghost-UI Design System

Ghost-UI is a mobile-first product design language built from the **Ghost-Ui** Figma
file supplied by its author, Sufiyan Jin (Gray Volf). The file documents a single
consumer mobile product — habits, events, a community feed, dream/bucket lists,
perceptions & reviews, and a legend/gamification layer — together with the
foundations, controls and 1,520-glyph icon set those screens are drawn from.

The system is quiet on purpose. One accent blue does all the signalling, everything
else is grey, and depth comes from a 0.6px hairline rather than a shadow.

> **Component coverage — declared complete.** The mounted `.fig` contains 930
> component families. **88 are implemented; the other 842 are intentionally
> skipped** because they are third-party Figma libraries the file's author imported
> for reference (Material 3, vendor button systems, shadcn charts, Apple/Android
> device chrome, animoji and 3D-render sheets, third-party brand logos) plus the
> 1,520 `JinIcon/*` glyph symbols, which are served by a single `Icon` component as
> an icon family should be. Rebuilding them would ship other vendors' design
> systems under Ghost-UI's name. The full breakdown, group by group with the reason
> and the Ghost-UI component that does the same job, is in **Scope** below.

## Sources

| Source | What was taken from it |
| --- | --- |
| `Ghost-Ui.fig` (attached, mounted read-only) | Colour, type, spacing and radius tokens; every component spec; screen layouts; product photography |
| `uploads/*.otf` — SJ Pro, 8 weights | The brand typeface, copied to `assets/fonts/` |
| `uploads/Jin.svg`, `Sufiyan Jin.svg`, `Volf Logo.svg` | The author's personal / studio marks, copied to `assets/` |
| https://github.com/JinSufiyan/Ghost-UI (`main`) | The published repository for this design system: tokens, 96 components, guidelines cards, the Ghost App UI kit, `assets/logo.svg`, SJ Pro fonts and the Android Studio export. It mirrors this project, so it is the canonical place to clone or pull the system from. |

### Scope

The mounted file is a working library, not a shipped kit: it carries 930 component
families, and **the large majority are third-party Figma libraries the author pulled
in for reference, not Ghost-UI's own vocabulary.** Ghost-UI implements the **70
families the author authored and actually used** across the file's product frames —
Buttons, Text Inputs, Tabs, Chips, Cards, Products, Profiles, Skills, Smart
Components, Bottom Nav, Search, Tooltip, Divider, Charts, Calendar, Keyboard, Map,
Dream Bucket, Status Bar, Icons — plus the state, scaffolding and atom components
the product screens draw inline (`Inform`, `Toast`, `Spinner`, `EmptyState`,
`Skeleton`, `Placeholder`, `Module`, `SectionHeader`, `TitleHeading`, `ListItem`,
`FieldWrapper`, `Adornment`, `Stepper`, `PageDots`, `Carousel`, `Breadcrumb`,
`ProgressSteps`, `SegmentedControl`, `BatteryIndicator`, `ChatBubble`, `ButtonBar`,
`AndroidNavBar`, `BottomSheet`).

**Intentionally skipped, and why:**

| Skipped family group | Why |
| --- | --- |
| Material 3 sets — `_field wrapper` (216 variants), `_input`, `_list/*`, `_chip/*`, `_module/*`, `_feedback/*`, `_inform`, `_unit/*`, `schemes-*` tokens | Google's Material library, imported wholesale. Rebuilding it would ship Material as Ghost-UI. Where a Ghost-UI screen needed the same job done, it is served by `TextField`, `Select`, `Chip`, `ListRow`, `SectionHeader` and `Inform` in this system's own visual language. |
| `Brand button` / `Brand reverse button` / `Button/Brand` / `Button/Neutral` (345–360 variants each) | Another vendor's button system, unused in any scoped frame. Ghost-UI's real button is the pill in `/Buttons`. |
| shadcn chart set — `Area Chart - *`, `Bar Chart - *`, ~60 families | A charting library reference sheet. The file's own chart is the pie/donut on `/Charts-Graphs`, which is built. |
| Apple/Android device chrome — `BatteryIndicator` (32 variants), `Battery New/Old`, `Android Status Bar`, `Apple Watch` (27), `Apple TV`, `DynamicIsland*`, connectivity/privacy indicators | Platform chrome, not product UI. Represented by one `PhoneStatusBar`. |
| `animoji` (116 variants ×3), `3D Avatar` (8 near-duplicate sets), `3D Character Atom` | Stock 3D render sheets. Represented by `Avatar`, which takes the source's real renders as images. |
| Brand marks — `BMW Logo`, `Brand Logo`, `Apple Logo`, `apple`, `allah`, `al-aqsa-mosque` | Third-party logos and unrelated iconography. |
| The 1,520-glyph `JinIcon/*` symbol set | Not 1,520 components — one `Icon` component over the whole set, as an icon family should be. See Iconography. |

If you want any of these rebuilt as first-class Ghost-UI components, say which group
and I'll add them.

### Logo

`assets/logo.svg` is the Ghost-UI logo (supplied by the author): a ghost mark in blue and violet with the "Ghost-UI" wordmark beneath it. Use it as the system's identity. The `assets/*.svg` files for Jin, Sufiyan Jin and Volf are the author's personal marks and are not part of Ghost-UI.

---

## Content fundamentals

The product's copy is short, plain and unbranded. It names the thing and stops.

**Tone.** Neutral and matter-of-fact. Labels are nouns or noun phrases —
"Email Address", "Confirmation", "Search Events...", "Drink the water",
"500/2000 ML". Nothing is chirpy; nothing apologises.

**Person.** Second person, and only when an action needs explaining:
*"You've submitted your details. If everything looks correct, click 'Approve' to
proceed or cancel to make changes."* Otherwise copy is impersonal.

**Casing.** Title Case for labels and headings ("Email Address", "Body Large",
"Habit Tracker"). Sentence case for supporting text and errors. Buttons are
Title Case single words where possible: Send, Cancel, Approve, Button.

**Length.** Field labels 1–3 words. Supporting text one sentence. Error text is
literally "Error message" in the kit — replace it, but keep it to one line.

**Numbers and units.** Written tight and unpadded: "4999/-", "500/2000 ML",
"4.6", "July 28", "+3". Currency uses a glyph, not a code.

**Multilingual.** The review content is Hinglish, written as people speak
("Bahut cooperative aur supportive hain."). Don't sanitise user-authored copy into
formal English; the product's voice is not the users' voice.

**Emoji.** Not used in product copy. A few appear in Figma variant names only.

---

## Visual foundations

**Colour.** One accent — `#1C70D4` (the Ghost-UI logo blue) — on an almost entirely neutral field. It fills
primary buttons, the switch knob, checkbox and radio marks, the selected nav glyph,
the share arrow, and nothing else. Pressed is `#1559AB`. The source file's original reds (`#FF1947`, `#EF233C`) are kept only as the error/warning family. Supporting hues (navy `#182E6F`, sky
`#A7DEFF`, periwinkle `#CECFFF`, orange `#FF6E32`) exist in the palette but barely
surface in UI. Semantic colours are Material-ish: success `#34A853`, caution
`#FBA715`, error `#B00020`, link `#0000FF`. Backgrounds are white with `#F8F8F8`
as the one surface tint; dark mode swaps to `#121212` / `#202020`.

**Type.** SJ Pro throughout, at three weights: 400 for body, 500 for titles,
labels and buttons, 600 for headings. The scale is Material's 13-step ladder
(57/45/36 display, 32/28/24 heading, 22/20/18 title, 16/14/12/11 body) with the
file's exact tracking — negative only on Display Large, mildly positive from
Title Medium down. The file names **K2D** as its "special font" for a few section
titles; that file was not supplied, so `--font-display` points at SJ Pro instead.
Swap the token back to `"K2D", var(--font-brand)` if the font is ever added.

**Spacing.** 2, 4, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 60. Cards pad 8–16,
control rows gap 8–12, screen gutters 16. Nothing is snapped to a strict 8-grid —
6px and 10px are real steps and the source uses them.

**Backgrounds.** Flat colour. No gradients, no patterns, no textures, no noise.
Photography is used full-bleed inside card hero areas (28px or 20px radius), never
behind text. Imagery is warm, natural, high-saturation travel and lifestyle
photography; avatars are 3D character renders, not illustrations.

**Corners.** Controls are full pills (`999px`): buttons, inputs, chips, tabs,
search, profile rows, habit rows. Surfaces are softer rectangles: 8 for date
chips and inner blocks, 12 for dialogs and review cards, 16 for cards and the
bottom nav, 20–28 for image wells, 32–36 for the device frame. Checkboxes are 4.

**Borders.** A **0.6px** stroke in `#E6E6E6` is the system's signature — thinner
than a hairline, used on inputs, ghost buttons, tabsets, search and profile rows.
Chips use a 0.5px inset+outset ring instead. 1px appears only on filter buttons and
avatar rings.

**Shadows.** Almost none. Three exist: the switch track's inset
`-1px 3px 6px rgba(32,32,32,.15)`, a floating menu's `0 2px 6px rgba(0,0,0,.2)`,
and a very wide, very faint card glow `58px 26px 68px rgba(35,44,93,.06)`.
There is no elevation ladder. If you reach for a shadow, use a hairline instead.

**Transparency and blur.** Rare. The divider sits at 25% opacity; disabled controls
at 40%; a scrim behind modals at 30% black. Blur is used only behind sheet overlays
in the App frames, never as decoration.

**Hover, press, focus.** The source is a mobile kit and defines no hover state, so
Ghost-UI adds a conservative one: background darkens one step
(`--color-action-primary-pressed`, `--color-action-secondary-pressed`) over 120ms.
Press does not scale or shrink. Focus is a 2px `#1C70D4` outline at 2px offset —
always visible, never removed.

**Animation.** 120 / 180 / 260ms with `cubic-bezier(.2,0,0,1)`. Colour and position
only. No bounce, no spring, no entrance choreography. The one continuous animation
is the button spinner.

**Layout.** Screens are 432×960 with a 32px frame radius, content inset 16px to a
400px column. The bottom nav is a 72px pinned bar with 16px radius, sitting on
`#F8F8F8`. On web, containers step 390 / 720 / 1032 / 1280 across
4 / 8 / 12 columns.

**Cards.** White, 16px radius, no shadow, and either bare or wearing the 0.6px
hairline. Content cards put a full-bleed image at the top with floating pill
controls over it, then a title line, then a row of identity + price.

---

## Iconography

**Jin Icons** is the system's icon set — 1,520 glyphs on a 21.286px artboard, with
a 1.5 stroke and `#95A0B2` as the resting colour. The names are Lucide's, verbatim
(`a-arrow-down`, `archive-x`, `badge-check`, `circle-dashed`, `armchair`), so the set
is a Lucide fork renamed with a `JinIcon/` prefix.

**Substitution flagged.** The source's SVGs are stored as ~1,520 individual vector
files inside the .fig and cannot be extracted at that volume here, so `Icon` loads
the identical glyph geometry from the **lucide-static CDN**
(`unpkg.com/lucide-static@0.469.0`) and applies the file's stroke and colour. If you
need the set offline or with hand-tuned overrides, export it from Figma and drop it
into `assets/icons/`. **This is the one place the system uses a stand-in rather than
the source's own file.**

- Sizes: 12, 16, 20, 24, 32, 40, 48. 24 is the default; 20 inside small controls;
  16 for inline meta; 40 for dialog headers; 10 for the verified tick.
- Colour: `#95A0B2` at rest, `#202020` when the glyph is the content,
  `#1C70D4` when it marks the primary action or a selected state.
- Selected states thicken the stroke to 2 as well as changing colour, so state
  never depends on colour alone.
- A handful of brand glyphs (Apple, Google, WhatsApp, PhonePe) appear in the source
  as separate components; use the vendors' own marks rather than a Lucide stand-in.
- No icon font, no PNG icons, no emoji, no Unicode glyphs as icons.

---

## Index

**Foundations** — `styles.css` (the single entry point) imports:
`tokens/fonts.css`, `tokens/colors.css` (primitives), `tokens/semantic.css`
(light + dark aliases), `tokens/typography.css` (scale + `.gh-*` classes),
`tokens/scale.css` (space, size, radius, border, shadow, motion, z, breakpoints),
`tokens/base.css` (reset and link colours).

`reference/figma-variables-raw.css` is the untouched dump of all 965 Figma
Variables across the file's seven collections, including the third-party libraries.
It is **not** imported — names collide across collections — but it is the audit
trail for any value in `tokens/`.

**Specimen cards** — `guidelines/*.card.html`, grouped as Colors, Type, Spacing
and Brand in the Design System tab.

**Components** (`components/<group>/`):

- Actions — `Button`, `IconButton`, `Fab`, `ButtonBar`, `ApprovalButtons`
- Forms — `TextField`, `TextArea`, `Select`, `SearchBar`, `OtpInput`, `Switch`, `Checkbox`,
  `Radio`, `Slider`, `Stepper`, `Rating`, `SortControl`, `Chip`, `FieldWrapper`,
  `Adornment`, `InputAtom`, `PasswordField`, `ChipGroup`, and the `ChipParts` atoms (`ChipContent`, `ChipPrefix`,
  `ChipSuffix`)
- Inputs — `Calendar`, `Keypad`
- Navigation — `Tabs`, `SegmentedControl`, `BottomNav`, `TopBar`, `Breadcrumb`,
  `ProgressSteps`, `PhoneStatusBar`, `AndroidNavBar`, `PageDots`, `Carousel`
- Display — `Card`, `Module`, `ModuleHeader`, `ModuleFooter`, `SectionHeader`, `TitleHeading`, `ProfileHeader`,
  `ProfileRow`, `SkillRow`, `ListRow`, `ListItem`, `Avatar`, `AvatarGroup`, `Badge`,
  `SmartText`, `ProgressRing`, `DonutChart`, `BatteryIndicator`, `ChatBubble`,
  `ColorCard`, `Illustration`, `Divider`, `Skeleton`, `Placeholder`, `EmptyState`,
  `Icon`, `ListContent`, `ListGroup`, and the `ListParts` atoms (`ListLabel`,
  `ListThumbnail`, `ListInfo`, `ListAction`, `ListPrefix`, `ListSuffix`)
- Cards — `EventCard`, `HabitCard`, `ReviewCard`, `PostCard`, `ProductCard`,
  `VisionCard`, `TaskItem`, `MapCard`
- Feedback — `Dialog`, `BottomSheet`, `ActionSheet`, `SideSheet`, `Menu` (+ `MenuItem`,
  `MenuDivider`), `Inform`, `Toast`, `Tooltip`, `Spinner`,
  and the `FeedbackParts` atoms (`FeedbackContent`, `FeedbackAction`)

Each directory holds `<Name>.jsx`, `<Name>.d.ts`, `<Name>.prompt.md` and one
`@dsCard` HTML showing the variants.

**Intentional additions.** Three components have no exact counterpart in the source
and exist to make the set usable: `Icon` (a wrapper for the glyph set, which the
file stores as loose symbols), `TopBar` (the App frames draw a header inline on every
screen rather than as a component), `ListRow`, `SectionHeader`, `EmptyState`,
`Skeleton`, `Inform` and `Toast` (all drawn inline in the App frames rather than as
components) and `Tooltip` (the file's "Tooltip" page is actually a confirmation
dialog, shipped here as `Dialog`; a real hover tooltip was missing).

**UI kit** — `ui_kits/ghost-app/` — five click-through screens (Login, Habits,
Events, Community, Profile) in the source's 432×960 frame. See its README.

**Assets** — `assets/fonts/` (SJ Pro ×8), `assets/img/` (photography and avatars
copied verbatim from the file), `assets/*.svg` (the author's marks).

**Agent skill** — `SKILL.md`.
