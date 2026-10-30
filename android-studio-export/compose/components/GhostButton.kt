package com.ghostui.designsystem.components

import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.Button
import androidx.compose.material.ButtonDefaults
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.ghostui.designsystem.theme.GhostRadius
import com.ghostui.designsystem.theme.GhostSize
import com.ghostui.designsystem.theme.GhostTextStyle
import com.ghostui.designsystem.theme.GhostTheme

// Sample port of components/buttons/Button — a starting point, not a 1:1 port
// of every variant. Cross-check against components/buttons/Button.d.ts and
// Button.prompt.md for the full prop surface (variant, size, icon slots, loading).
@Composable
fun GhostButton(
    label: String,
    onClick: () -> Unit,
    modifier: Modifier = Modifier,
    enabled: Boolean = true
) {
    Button(
        onClick = onClick,
        enabled = enabled,
        modifier = modifier.height(GhostSize.controlLg),
        shape = RoundedCornerShape(GhostRadius.pill),
        colors = ButtonDefaults.buttonColors(
            backgroundColor = GhostTheme.colors.actionPrimary,
            disabledBackgroundColor = GhostTheme.colors.actionDisabled,
            contentColor = GhostTheme.colors.textOnAction
        ),
        contentPadding = PaddingValues(horizontal = 24.dp)
    ) {
        Text(text = label, style = GhostTextStyle.titleSm)
    }
}
