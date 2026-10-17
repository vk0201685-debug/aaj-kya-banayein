package com.example.ui.components

import androidx.compose.animation.animateColorAsState
import androidx.compose.animation.core.tween
import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Restaurant
import androidx.compose.material.icons.filled.Translate
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.model.AppLanguage
import com.example.model.AppStrings
import com.example.model.CuisineType
import com.example.ui.theme.SpiceOrangeContainer
import com.example.ui.theme.SpiceOrangePrimary

@Composable
fun TopCulinaryBar(
    language: AppLanguage,
    cuisine: CuisineType,
    onToggleLanguage: () -> Unit,
    onSelectCuisine: (CuisineType) -> Unit,
    modifier: Modifier = Modifier
) {
    Surface(
        modifier = modifier.fillMaxWidth(),
        color = MaterialTheme.colorScheme.surface,
        tonalElevation = 2.dp,
        shadowElevation = 3.dp
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(horizontal = 16.dp, vertical = 10.dp)
        ) {
            // Top Row: App Branding + Language Toggle
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Row(
                    verticalAlignment = Alignment.CenterVertically,
                    modifier = Modifier.weight(1f)
                ) {
                    Box(
                        modifier = Modifier
                            .size(38.dp)
                            .clip(CircleShape)
                            .background(
                                Brush.linearGradient(
                                    listOf(SpiceOrangePrimary, Color(0xFFD84315))
                                )
                            ),
                        contentAlignment = Alignment.Center
                    ) {
                        Icon(
                            imageVector = Icons.Default.Restaurant,
                            contentDescription = "Logo",
                            tint = Color.White,
                            modifier = Modifier.size(20.dp)
                        )
                    }

                    Spacer(modifier = Modifier.width(10.dp))

                    Column {
                        Text(
                            text = AppStrings.appTitle.get(language),
                            style = MaterialTheme.typography.titleMedium.copy(
                                fontWeight = FontWeight.Bold,
                                fontSize = 17.sp
                            ),
                            color = MaterialTheme.colorScheme.onSurface
                        )
                        Text(
                            text = if (language == AppLanguage.HINDI) "आज क्या पकाएं?" else "What to cook today?",
                            style = MaterialTheme.typography.bodySmall.copy(
                                fontSize = 11.sp
                            ),
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                }

                // Bilingual Toggle Pill [EN | हिन्दी]
                BilingualTogglePill(
                    currentLanguage = language,
                    onToggle = onToggleLanguage,
                    modifier = Modifier.testTag("language_toggle_button")
                )
            }

            Spacer(modifier = Modifier.height(10.dp))

            // Cuisine Switcher Segmented Bar
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .clip(RoundedCornerShape(14.dp))
                    .background(MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.6f))
                    .padding(4.dp),
                horizontalArrangement = Arrangement.spacedBy(4.dp)
            ) {
                CuisineTabPill(
                    title = "🇮🇳 " + AppStrings.cuisineIndian.get(language),
                    isSelected = cuisine == CuisineType.INDIAN,
                    onClick = { onSelectCuisine(CuisineType.INDIAN) },
                    modifier = Modifier
                        .weight(1f)
                        .testTag("cuisine_indian_pill")
                )

                CuisineTabPill(
                    title = "🌍 " + AppStrings.cuisineContinental.get(language),
                    isSelected = cuisine == CuisineType.CONTINENTAL,
                    onClick = { onSelectCuisine(CuisineType.CONTINENTAL) },
                    modifier = Modifier
                        .weight(1f)
                        .testTag("cuisine_continental_pill")
                )
            }
        }
    }
}

@Composable
private fun BilingualTogglePill(
    currentLanguage: AppLanguage,
    onToggle: () -> Unit,
    modifier: Modifier = Modifier
) {
    Row(
        modifier = modifier
            .clip(RoundedCornerShape(20.dp))
            .background(SpiceOrangeContainer.copy(alpha = 0.5f))
            .border(1.dp, SpiceOrangePrimary.copy(alpha = 0.3f), RoundedCornerShape(20.dp))
            .clickable(onClick = onToggle)
            .padding(horizontal = 8.dp, vertical = 5.dp),
        verticalAlignment = Alignment.CenterVertically
    ) {
        Icon(
            imageVector = Icons.Default.Translate,
            contentDescription = "Language",
            tint = SpiceOrangePrimary,
            modifier = Modifier.size(16.dp)
        )
        Spacer(modifier = Modifier.width(6.dp))

        // EN indicator
        val enBg by animateColorAsState(
            targetValue = if (currentLanguage == AppLanguage.ENGLISH) SpiceOrangePrimary else Color.Transparent,
            animationSpec = tween(200),
            label = "enBg"
        )
        val enText by animateColorAsState(
            targetValue = if (currentLanguage == AppLanguage.ENGLISH) Color.White else MaterialTheme.colorScheme.onSurface,
            animationSpec = tween(200),
            label = "enText"
        )

        Box(
            modifier = Modifier
                .clip(RoundedCornerShape(12.dp))
                .background(enBg)
                .padding(horizontal = 6.dp, vertical = 2.dp)
        ) {
            Text(
                text = "EN",
                fontSize = 11.sp,
                fontWeight = FontWeight.Bold,
                color = enText
            )
        }

        Spacer(modifier = Modifier.width(2.dp))

        // HI indicator
        val hiBg by animateColorAsState(
            targetValue = if (currentLanguage == AppLanguage.HINDI) SpiceOrangePrimary else Color.Transparent,
            animationSpec = tween(200),
            label = "hiBg"
        )
        val hiText by animateColorAsState(
            targetValue = if (currentLanguage == AppLanguage.HINDI) Color.White else MaterialTheme.colorScheme.onSurface,
            animationSpec = tween(200),
            label = "hiText"
        )

        Box(
            modifier = Modifier
                .clip(RoundedCornerShape(12.dp))
                .background(hiBg)
                .padding(horizontal = 6.dp, vertical = 2.dp)
        ) {
            Text(
                text = "हिन्दी",
                fontSize = 11.sp,
                fontWeight = FontWeight.Bold,
                color = hiText
            )
        }
    }
}

@Composable
private fun CuisineTabPill(
    title: String,
    isSelected: Boolean,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    val bgColor by animateColorAsState(
        targetValue = if (isSelected) MaterialTheme.colorScheme.surface else Color.Transparent,
        animationSpec = tween(200),
        label = "cuisineBg"
    )
    val textColor by animateColorAsState(
        targetValue = if (isSelected) SpiceOrangePrimary else MaterialTheme.colorScheme.onSurfaceVariant,
        animationSpec = tween(200),
        label = "cuisineText"
    )

    Box(
        modifier = modifier
            .clip(RoundedCornerShape(10.dp))
            .background(bgColor)
            .clickable(onClick = onClick)
            .padding(vertical = 7.dp, horizontal = 10.dp),
        contentAlignment = Alignment.Center
    ) {
        Text(
            text = title,
            style = MaterialTheme.typography.labelLarge.copy(
                fontWeight = if (isSelected) FontWeight.Bold else FontWeight.Medium,
                fontSize = 13.sp
            ),
            color = textColor,
            maxLines = 1
        )
    }
}
