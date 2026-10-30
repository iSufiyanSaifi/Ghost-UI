package com.ghostui.designsystem.theme

import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

// Ghost-UI — spacing, sizing, icon, and radius tokens, transcribed 1:1 from tokens/scale.css.
object GhostSpacing {
    val space0 = 0.dp
    val space2 = 2.dp
    val space4 = 4.dp
    val space6 = 6.dp
    val space8 = 8.dp
    val space10 = 10.dp
    val space12 = 12.dp
    val space16 = 16.dp
    val space20 = 20.dp
    val space24 = 24.dp
    val space32 = 32.dp
    val space40 = 40.dp
    val space48 = 48.dp
    val space60 = 60.dp
    val space99 = 99.dp
}

object GhostSize {
    val controlSm = 40.dp
    val controlMd = 48.dp
    val controlLg = 56.dp
    val chip = 36.dp
    val tabset = 44.dp
    val nav = 72.dp
    val fab = 56.dp
    val touchMin = 44.dp
}

object GhostIconSize {
    val s12 = 12.dp
    val s16 = 16.dp
    val s20 = 20.dp
    val s24 = 24.dp
    val s32 = 32.dp
    val s40 = 40.dp
    val s48 = 48.dp
}

object GhostRadius {
    val none = 0.dp
    val xs = 4.dp
    val sm = 6.dp
    val md = 8.dp
    val lg = 12.dp
    val xl = 16.dp
    val xxl = 20.dp
    val device = 36.dp
    val pill = 999.dp
}

object GhostBorder {
    val hairline = 0.5.dp
    val thin = 0.6.dp
    val default = 1.dp
}

object GhostMotion {
    const val fastMs = 120
    const val baseMs = 180
    const val slowMs = 260
}

// Text sizes (sp) — see Type.kt for the paired TextStyle definitions.
object GhostTextSize {
    val displayLg = 57.sp
    val displayMd = 45.sp
    val displaySm = 36.sp
    val headingLg = 32.sp
    val headingMd = 28.sp
    val headingSm = 24.sp
    val titleLg = 22.sp
    val titleMd = 20.sp
    val titleSm = 18.sp
    val bodyLg = 16.sp
    val bodyMd = 14.sp
    val bodySm = 12.sp
    val bodyXs = 11.sp
}
