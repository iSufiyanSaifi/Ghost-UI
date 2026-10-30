# Ghost-UI — Android Studio / Kotlin export

Generated from this project's `tokens/*.css` (source of truth) for use in an Android Studio project built with Kotlin + Jetpack Compose.

## What's in here

- `compose/theme/` — drop straight into `app/src/main/java/com/ghostui/designsystem/theme/`.
  - `Color.kt` — primitives + light/dark semantic palettes (`GhostLightColors` / `GhostDarkColors`).
  - `Dimens.kt` — spacing, control sizes, icon sizes, radius, border widths, motion durations.
  - `Type.kt` — SJ Pro `FontFamily` + `GhostTextStyle` per type-scale step + Material `Typography` mapping.
  - `Shape.kt` — Material `Shapes` (card/sheet/pill radii).
  - `Theme.kt` — `GhostUITheme { }` composable. Wrap your app content in it; read tokens via `GhostTheme.colors`, `GhostTheme.spacing`, etc.
- `compose/components/GhostButton.kt` — one sample component port, showing the pattern (token-driven, no hardcoded values). Port the rest of `components/` the same way; each family's `.d.ts` and `.prompt.md` describe its full prop surface.
- `res/font/` — the 8 SJ Pro weights (renamed to Android's lowercase/underscore convention) + `font_family_sj_pro.xml`, referenced from `Type.kt` via `R.font.sj_pro_*`.
- `res/values/` + `res/values-night/` — equivalent XML resources (`colors.xml`, `dimens.xml`, `type.xml`, `themes.xml`) and `res/drawable/` shape backgrounds, for any XML/View-based screens alongside your Compose ones.

## Setup

1. Copy `res/font/*`, `res/values/*`, `res/values-night/*`, `res/drawable/*` into your app module's `res/` folder.
2. Copy `compose/theme/*.kt` and `compose/components/*.kt` into `app/src/main/java/com/ghostui/designsystem/...` (adjust the package name to match your app, or keep `com.ghostui.designsystem`).
3. Add the Compose BOM / Material (Compose) dependency if not already present (`androidx.compose.material:material`).
4. Wrap your root composable:

```kotlin
setContent {
    GhostUITheme {
        // your screens
    }
}
```

5. Reference tokens instead of hardcoding: `GhostTheme.colors.textPrimary`, `GhostTheme.spacing.space16`, `GhostTextStyle.bodyMd`.

## Notes

- Dark mode follows system setting by default (`isSystemInDarkTheme()`); pass `darkTheme = false/true` to `GhostUITheme` to force it.
- `--font-mono` (Cousine) isn't included — the web tokens fall back to system monospace; add a Cousine `.otf`/`.ttf` to `res/font/` if you need it on Android.
- 87 component families exist in the source system (`components/`); this export ports the token layer plus one worked example. Treat porting the rest as straightforward repeats of the `GhostButton.kt` pattern — ask if you want more of them pre-ported.
