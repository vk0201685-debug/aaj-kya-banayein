package com.example.ui.theme

import android.os.Build
import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.dynamicDarkColorScheme
import androidx.compose.material3.dynamicLightColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext

private val DarkColorScheme = darkColorScheme(
  primary = SpiceOrangePrimaryDark,
  onPrimary = Color.Black,
  primaryContainer = SpiceOrangeContainerDark,
  onPrimaryContainer = Color(0xFFFFDBC8),
  secondary = WarmAmberSecondaryDark,
  onSecondary = Color.Black,
  secondaryContainer = WarmAmberContainerDark,
  onSecondaryContainer = Color(0xFFFDE68A),
  background = WarmBackgroundDark,
  onBackground = Color(0xFFF3ECE1),
  surface = WarmSurfaceDark,
  onSurface = Color(0xFFF3ECE1),
  surfaceVariant = WarmSurfaceVariantDark,
  onSurfaceVariant = Color(0xFFD7CCC8),
  outline = WarmOutlineDark
)

private val LightColorScheme = lightColorScheme(
  primary = SpiceOrangePrimary,
  onPrimary = Color.White,
  primaryContainer = SpiceOrangeContainer,
  onPrimaryContainer = OnSpiceOrangeContainer,
  secondary = WarmAmberSecondary,
  onSecondary = Color.White,
  secondaryContainer = WarmAmberContainer,
  onSecondaryContainer = OnWarmAmberContainer,
  tertiary = TerracottaTertiary,
  onTertiary = Color.White,
  tertiaryContainer = TerracottaContainer,
  onTertiaryContainer = OnTerracottaContainer,
  background = WarmBackgroundLight,
  onBackground = Color(0xFF2C2420),
  surface = WarmSurfaceLight,
  onSurface = Color(0xFF2C2420),
  surfaceVariant = WarmSurfaceVariantLight,
  onSurfaceVariant = Color(0xFF63564F),
  outline = WarmOutlineLight
)

@Composable
fun MyApplicationTheme(
  darkTheme: Boolean = isSystemInDarkTheme(),
  // We prefer our handcrafted warm culinary palette over generic dynamic wallpaper tints
  dynamicColor: Boolean = false,
  content: @Composable () -> Unit,
) {
  val colorScheme = when {
    dynamicColor && Build.VERSION.SDK_INT >= Build.VERSION_CODES.S -> {
      val context = LocalContext.current
      if (darkTheme) dynamicDarkColorScheme(context) else dynamicLightColorScheme(context)
    }
    darkTheme -> DarkColorScheme
    else -> LightColorScheme
  }

  MaterialTheme(
    colorScheme = colorScheme,
    typography = Typography,
    content = content
  )
}
