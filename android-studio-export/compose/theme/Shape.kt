package com.ghostui.designsystem.theme

import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.Shapes

// Ghost-UI is near-flat: cards use radius_lg, sheets/dialogs radius_xl, chips/buttons pill.
val GhostShapes = Shapes(
    small = RoundedCornerShape(GhostRadius.sm),
    medium = RoundedCornerShape(GhostRadius.lg),
    large = RoundedCornerShape(GhostRadius.xl)
)
