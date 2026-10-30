package com.ghostui.designsystem.theme

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material.MaterialTheme
import androidx.compose.material.darkColors
import androidx.compose.material.lightColors
import androidx.compose.runtime.Composable
import androidx.compose.runtime.CompositionLocalProvider
import androidx.compose.runtime.compositionLocalOf
import androidx.compose.runtime.staticCompositionLocalOf

// Ghost-UI semantic palette exposed via CompositionLocal, so screens read
// GhostTheme.colors.textPrimary instead of hardcoded Color values.
val LocalGhostColors = staticCompositionLocalOf { GhostLightColors }

object GhostTheme {
    val colors: GhostSemanticColors
        @Composable get() = LocalGhostColors.current
    val spacing get() = GhostSpacing
    val size get() = GhostSize
    val iconSize get() = GhostIconSize
    val radius get() = GhostRadius
    val border get() = GhostBorder
    val type get() = GhostTextStyle
}

@Composable
fun GhostUITheme(
    darkTheme: Boolean = isSystemInDarkTheme(),
    content: @Composable () -> Unit
) {
    val ghostColors = if (darkTheme) GhostDarkColors else GhostLightColors
    val materialColors = if (darkTheme) {
        darkColors(
            primary = ghostColors.actionPrimary,
            primaryVariant = ghostColors.actionPrimaryPressed,
            secondary = GhostColors.Blue500,
            background = ghostColors.bgDefault,
            surface = ghostColors.bgSurface,
            error = ghostColors.statusError,
            onPrimary = ghostColors.textOnAction,
            onSecondary = ghostColors.textOnAction,
            onBackground = ghostColors.textPrimary,
            onSurface = ghostColors.textPrimary,
            onError = ghostColors.textOnAction
        )
    } else {
        lightColors(
            primary = ghostColors.actionPrimary,
            primaryVariant = ghostColors.actionPrimaryPressed,
            secondary = GhostColors.Blue500,
            background = ghostColors.bgDefault,
            surface = ghostColors.bgSurface,
            error = ghostColors.statusError,
            onPrimary = ghostColors.textOnAction,
            onSecondary = ghostColors.textOnAction,
            onBackground = ghostColors.textPrimary,
            onSurface = ghostColors.textPrimary,
            onError = ghostColors.textOnAction
        )
    }

    CompositionLocalProvider(LocalGhostColors provides ghostColors) {
        MaterialTheme(
            colors = materialColors,
            typography = GhostTypography,
            shapes = GhostShapes,
            content = content
        )
    }
}
