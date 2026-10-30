package com.ghostui.designsystem.theme

import androidx.compose.material.Typography
import androidx.compose.ui.text.TextStyle
import androidx.compose.ui.text.font.Font
import androidx.compose.ui.text.font.FontFamily
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.sp
import com.ghostui.designsystem.R

// Ghost-UI runs one family end to end; weight and size carry the hierarchy.
// Point Font(...) at res/font/sj_pro_*.otf (copied in alongside this file).
val SJPro = FontFamily(
    Font(R.font.sj_pro_thin, FontWeight.Thin),
    Font(R.font.sj_pro_light, FontWeight.Light),
    Font(R.font.sj_pro_regular, FontWeight.Normal),
    Font(R.font.sj_pro_medium, FontWeight.Medium),
    Font(R.font.sj_pro_semibold, FontWeight.SemiBold),
    Font(R.font.sj_pro_bold, FontWeight.Bold),
    Font(R.font.sj_pro_heavy, FontWeight.ExtraBold),
    Font(R.font.sj_pro_black, FontWeight.Black)
)

object GhostTextStyle {
    val displayLg = TextStyle(fontFamily = SJPro, fontWeight = FontWeight.Normal, fontSize = 57.sp, lineHeight = 64.sp, letterSpacing = (-0.25).sp)
    val displayMd = TextStyle(fontFamily = SJPro, fontWeight = FontWeight.Normal, fontSize = 45.sp, lineHeight = 52.sp)
    val displaySm = TextStyle(fontFamily = SJPro, fontWeight = FontWeight.Normal, fontSize = 36.sp, lineHeight = 44.sp)
    val headingLg = TextStyle(fontFamily = SJPro, fontWeight = FontWeight.SemiBold, fontSize = 32.sp, lineHeight = 40.sp)
    val headingMd = TextStyle(fontFamily = SJPro, fontWeight = FontWeight.SemiBold, fontSize = 28.sp, lineHeight = 36.sp)
    val headingSm = TextStyle(fontFamily = SJPro, fontWeight = FontWeight.SemiBold, fontSize = 24.sp, lineHeight = 32.sp)
    val titleLg = TextStyle(fontFamily = SJPro, fontWeight = FontWeight.Medium, fontSize = 22.sp, lineHeight = 28.sp)
    val titleMd = TextStyle(fontFamily = SJPro, fontWeight = FontWeight.Medium, fontSize = 20.sp, lineHeight = 24.sp, letterSpacing = 0.15.sp)
    val titleSm = TextStyle(fontFamily = SJPro, fontWeight = FontWeight.Medium, fontSize = 18.sp, lineHeight = 20.sp, letterSpacing = 0.1.sp)
    val bodyLg = TextStyle(fontFamily = SJPro, fontWeight = FontWeight.Normal, fontSize = 16.sp, lineHeight = 24.sp, letterSpacing = 0.5.sp)
    val bodyMd = TextStyle(fontFamily = SJPro, fontWeight = FontWeight.Normal, fontSize = 14.sp, lineHeight = 20.sp, letterSpacing = 0.25.sp)
    val bodySm = TextStyle(fontFamily = SJPro, fontWeight = FontWeight.Normal, fontSize = 12.sp, lineHeight = 16.sp, letterSpacing = 0.4.sp)
    val bodyXs = TextStyle(fontFamily = SJPro, fontWeight = FontWeight.Normal, fontSize = 11.sp, lineHeight = 16.sp, letterSpacing = 0.5.sp)
}

// Wire into Material's Typography so default Text() styles (h1, body1, ...) match Ghost-UI.
val GhostTypography = Typography(
    h1 = GhostTextStyle.displayLg,
    h2 = GhostTextStyle.displayMd,
    h3 = GhostTextStyle.displaySm,
    h4 = GhostTextStyle.headingLg,
    h5 = GhostTextStyle.headingMd,
    h6 = GhostTextStyle.headingSm,
    subtitle1 = GhostTextStyle.titleLg,
    subtitle2 = GhostTextStyle.titleMd,
    body1 = GhostTextStyle.bodyLg,
    body2 = GhostTextStyle.bodyMd,
    button = GhostTextStyle.titleSm.copy(letterSpacing = 0.sp),
    caption = GhostTextStyle.bodySm,
    overline = GhostTextStyle.bodyXs
)
