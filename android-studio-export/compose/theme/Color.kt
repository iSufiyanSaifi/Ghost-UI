package com.ghostui.designsystem.theme

import androidx.compose.ui.graphics.Color

// Ghost-UI — primitives, transcribed 1:1 from tokens/colors.css.
object GhostColors {
    val Primary500 = Color(0xFF1C70D4)
    val Primary600 = Color(0xFF1559AB)
    val Red500 = Color(0xFFFF1947)
    val Red550 = Color(0xFFEF233C)
    val Red560 = Color(0xFFEC1C3C)
    val Red600 = Color(0xFFF01616)
    val Red700 = Color(0xFFB00020)
    val RedIcon = Color(0xFFE22718)
    val Navy700 = Color(0xFF182E6F)
    val Blue100 = Color(0xFFA7DEFF)
    val Periwinkle100 = Color(0xFFCECFFF)
    val Orange500 = Color(0xFFFF6E32)
    val Blue500 = Color(0xFF0066B1)
    val Blue600 = Color(0xFF005DAC)
    val Blue800 = Color(0xFF003D78)
    val Hyperlink = Color(0xFF0000FF)
    val Green500 = Color(0xFF34A853)
    val Green400 = Color(0xFF10B981)
    val Amber500 = Color(0xFFFBA715)
    val Amber400 = Color(0xFFFFBB00)
    val Black = Color(0xFF000000)
    val Ink900 = Color(0xFF202020)
    val Ink850 = Color(0xFF282828)
    val Ink800 = Color(0xFF303030)
    val Ink750 = Color(0xFF363636)
    val Ink700 = Color(0xFF474747)
    val Grey600 = Color(0xFF666666)
    val Grey500 = Color(0xFF808080)
    val Grey450 = Color(0xFF898989)
    val Grey400 = Color(0xFFA1A1A1)
    val Grey350 = Color(0xFFBFBFBF)
    val Grey300 = Color(0xFFC9C9C9)
    val Grey280 = Color(0xFFCDCDCD)
    val Grey260 = Color(0xFFD1D1D1)
    val Grey250 = Color(0xFFD6D6D6)
    val Grey200 = Color(0xFFE0E0E0)
    val Grey150 = Color(0xFFE6E6E6)
    val Grey120 = Color(0xFFEBECEE)
    val Grey100 = Color(0xFFF0F0F0)
    val Grey60 = Color(0xFFF6F6F9)
    val Grey55 = Color(0xFFF6F8F9)
    val Grey50 = Color(0xFFF8F8F8)
    val Grey40 = Color(0xFFF9F9F9)
    val White = Color(0xFFFFFFFF)
    val Slate400 = Color(0xFF95A0B2)
    val ShadowGrey = Color(0xFFDADADA)
    val Black15 = Color(0x26303030)
    val Black30 = Color(0x4D303030)
    val Ink15 = Color(0x26202020)
}

// Semantic roles — components reference these, never the primitives above.
data class GhostSemanticColors(
    val bgDefault: Color,
    val bgSurface: Color,
    val bgSubtle: Color,
    val bgBox: Color,
    val bgInverse: Color,
    val textPrimary: Color,
    val textSecondary: Color,
    val textMuted: Color,
    val textDisabled: Color,
    val textInverse: Color,
    val textLink: Color,
    val textOnAction: Color,
    val borderDefault: Color,
    val borderSubtle: Color,
    val borderStrong: Color,
    val borderFocus: Color,
    val actionPrimary: Color,
    val actionPrimaryPressed: Color,
    val actionSecondary: Color,
    val actionSecondaryPressed: Color,
    val actionDisabled: Color,
    val iconDefault: Color,
    val iconStrong: Color,
    val iconInverse: Color,
    val iconAccent: Color,
    val iconInfo: Color,
    val statusSuccess: Color,
    val statusWarning: Color,
    val statusError: Color,
    val statusErrorText: Color,
    val statusInfo: Color,
    val statusRequired: Color,
    val shadow: Color,
    val scrim: Color
)

val GhostLightColors = GhostSemanticColors(
    bgDefault = GhostColors.White,
    bgSurface = GhostColors.Grey50,
    bgSubtle = GhostColors.Grey40,
    bgBox = GhostColors.Grey120,
    bgInverse = GhostColors.Ink900,
    textPrimary = GhostColors.Ink900,
    textSecondary = GhostColors.Grey500,
    textMuted = GhostColors.Grey350,
    textDisabled = GhostColors.Grey300,
    textInverse = GhostColors.White,
    textLink = GhostColors.Hyperlink,
    textOnAction = GhostColors.White,
    borderDefault = GhostColors.Grey150,
    borderSubtle = GhostColors.Grey100,
    borderStrong = GhostColors.Grey300,
    borderFocus = GhostColors.Primary500,
    actionPrimary = GhostColors.Primary500,
    actionPrimaryPressed = GhostColors.Primary600,
    actionSecondary = GhostColors.Grey50,
    actionSecondaryPressed = GhostColors.Grey150,
    actionDisabled = GhostColors.Grey150,
    iconDefault = GhostColors.Slate400,
    iconStrong = GhostColors.Ink900,
    iconInverse = GhostColors.White,
    iconAccent = GhostColors.Primary500,
    iconInfo = GhostColors.Blue600,
    statusSuccess = GhostColors.Green500,
    statusWarning = GhostColors.Amber500,
    statusError = GhostColors.Red700,
    statusErrorText = GhostColors.Red600,
    statusInfo = GhostColors.Blue500,
    statusRequired = GhostColors.Red560,
    shadow = GhostColors.ShadowGrey,
    scrim = GhostColors.Black30
)

val GhostDarkColors = GhostSemanticColors(
    bgDefault = Color(0xFF121212),
    bgSurface = GhostColors.Ink900,
    bgSubtle = GhostColors.Ink850,
    bgBox = GhostColors.Ink700,
    bgInverse = GhostColors.White,
    textPrimary = GhostColors.White,
    textSecondary = GhostColors.Grey400,
    textMuted = GhostColors.Grey500,
    textDisabled = GhostColors.Grey600,
    textInverse = GhostColors.Ink900,
    textLink = GhostColors.Hyperlink,
    textOnAction = GhostColors.White,
    borderDefault = GhostColors.Grey600,
    borderSubtle = GhostColors.Ink700,
    borderStrong = GhostColors.Grey500,
    borderFocus = GhostColors.Primary500,
    actionPrimary = GhostColors.Primary500,
    actionPrimaryPressed = GhostColors.Primary600,
    actionSecondary = GhostColors.Ink850,
    actionSecondaryPressed = GhostColors.Ink700,
    actionDisabled = GhostColors.Ink700,
    iconDefault = GhostColors.Slate400,
    iconStrong = GhostColors.White,
    iconInverse = GhostColors.Ink900,
    iconAccent = GhostColors.Primary500,
    iconInfo = GhostColors.Blue600,
    statusSuccess = GhostColors.Green500,
    statusWarning = GhostColors.Amber500,
    statusError = GhostColors.Red700,
    statusErrorText = GhostColors.Red600,
    statusInfo = GhostColors.Blue500,
    statusRequired = GhostColors.Red560,
    shadow = GhostColors.Black,
    scrim = GhostColors.Black30
)
