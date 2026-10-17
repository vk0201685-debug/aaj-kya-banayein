package com.example.ui.screens

import androidx.compose.animation.AnimatedContent
import androidx.compose.animation.animateColorAsState
import androidx.compose.animation.core.tween
import androidx.compose.animation.fadeIn
import androidx.compose.animation.fadeOut
import androidx.compose.animation.togetherWith
import androidx.compose.foundation.background
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.PaddingValues
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.layout.width
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AutoAwesome
import androidx.compose.material.icons.filled.Public
import androidx.compose.material.icons.filled.Star
import androidx.compose.material.icons.filled.Timer
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
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
import com.example.data.RegionalFoodRepository
import com.example.model.AppLanguage
import com.example.model.AppStrings
import com.example.model.IndianState
import com.example.model.Recipe
import com.example.model.RegionalMode
import com.example.model.WorldCountry
import com.example.ui.theme.PrepTimeBlue
import com.example.ui.theme.SpiceOrangeContainer
import com.example.ui.theme.SpiceOrangePrimary
import com.example.ui.theme.WarmAmberSecondary

@Composable
fun RegionalFoodScreen(
    language: AppLanguage,
    regionalMode: RegionalMode,
    selectedStateId: String,
    selectedCountryId: String,
    onSelectMode: (RegionalMode) -> Unit,
    onSelectState: (String) -> Unit,
    onSelectCountry: (String) -> Unit,
    onViewRecipe: (Recipe) -> Unit,
    modifier: Modifier = Modifier
) {
    val currentState = RegionalFoodRepository.getIndianState(selectedStateId) ?: RegionalFoodRepository.indianStates.first()
    val currentCountry = RegionalFoodRepository.getWorldCountry(selectedCountryId) ?: RegionalFoodRepository.worldCountries.first()

    val currentDishes = if (regionalMode == RegionalMode.INDIAN_STATES) {
        currentState.dishes
    } else {
        currentCountry.dishes
    }

    LazyColumn(
        modifier = modifier
            .fillMaxSize()
            .testTag("regional_food_screen"),
        contentPadding = PaddingValues(bottom = 90.dp)
    ) {
        // Hero Header
        item {
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp, vertical = 12.dp)
                    .clip(RoundedCornerShape(22.dp))
                    .background(
                        Brush.horizontalGradient(
                            listOf(Color(0xFFC2410C), Color(0xFFD97706))
                        )
                    )
                    .padding(18.dp)
            ) {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Box(
                        modifier = Modifier
                            .size(48.dp)
                            .clip(CircleShape)
                            .background(Color.White.copy(alpha = 0.2f)),
                        contentAlignment = Alignment.Center
                    ) {
                        Icon(
                            imageVector = Icons.Default.Public,
                            contentDescription = null,
                            tint = Color.White,
                            modifier = Modifier.size(26.dp)
                        )
                    }

                    Spacer(modifier = Modifier.width(14.dp))

                    Column(modifier = Modifier.weight(1f)) {
                        Text(
                            text = AppStrings.regionalTitle.get(language),
                            style = MaterialTheme.typography.titleLarge.copy(
                                fontWeight = FontWeight.Bold,
                                fontSize = 19.sp
                            ),
                            color = Color.White
                        )
                        Spacer(modifier = Modifier.height(2.dp))
                        Text(
                            text = AppStrings.regionalDesc.get(language),
                            style = MaterialTheme.typography.bodySmall,
                            color = Color.White.copy(alpha = 0.85f)
                        )
                    }
                }
            }
        }

        // Sub-Mode Segmented Control (Indian States vs World Countries)
        item {
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp)
                    .clip(RoundedCornerShape(14.dp))
                    .background(MaterialTheme.colorScheme.surfaceVariant.copy(alpha = 0.6f))
                    .padding(4.dp),
                horizontalArrangement = Arrangement.spacedBy(4.dp)
            ) {
                RegionalModePill(
                    title = AppStrings.indianStatesTab.get(language),
                    isSelected = regionalMode == RegionalMode.INDIAN_STATES,
                    onClick = { onSelectMode(RegionalMode.INDIAN_STATES) },
                    modifier = Modifier
                        .weight(1f)
                        .testTag("mode_indian_states_pill")
                )

                RegionalModePill(
                    title = AppStrings.worldCountriesTab.get(language),
                    isSelected = regionalMode == RegionalMode.WORLD_COUNTRIES,
                    onClick = { onSelectMode(RegionalMode.WORLD_COUNTRIES) },
                    modifier = Modifier
                        .weight(1f)
                        .testTag("mode_world_countries_pill")
                )
            }

            Spacer(modifier = Modifier.height(14.dp))
        }

        // Horizontal Selector Chips for States or Countries
        item {
            AnimatedContent(
                targetState = regionalMode,
                transitionSpec = { fadeIn(tween(250)) togetherWith fadeOut(tween(200)) },
                label = "SelectorRow"
            ) { mode ->
                if (mode == RegionalMode.INDIAN_STATES) {
                    LazyRow(
                        modifier = Modifier.fillMaxWidth(),
                        contentPadding = PaddingValues(horizontal = 16.dp),
                        horizontalArrangement = Arrangement.spacedBy(8.dp)
                    ) {
                        items(RegionalFoodRepository.indianStates) { state ->
                            val isSelected = state.id == selectedStateId
                            StateChip(
                                state = state,
                                language = language,
                                isSelected = isSelected,
                                onClick = { onSelectState(state.id) },
                                modifier = Modifier.testTag("state_chip_${state.id}")
                            )
                        }
                    }
                } else {
                    LazyRow(
                        modifier = Modifier.fillMaxWidth(),
                        contentPadding = PaddingValues(horizontal = 16.dp),
                        horizontalArrangement = Arrangement.spacedBy(8.dp)
                    ) {
                        items(RegionalFoodRepository.worldCountries) { country ->
                            val isSelected = country.id == selectedCountryId
                            CountryChip(
                                country = country,
                                language = language,
                                isSelected = isSelected,
                                onClick = { onSelectCountry(country.id) },
                                modifier = Modifier.testTag("country_chip_${country.id}")
                            )
                        }
                    }
                }
            }

            Spacer(modifier = Modifier.height(14.dp))
        }

        // Region Intro Banner
        item {
            Card(
                shape = RoundedCornerShape(18.dp),
                colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
                elevation = CardDefaults.cardElevation(defaultElevation = 2.dp),
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp, vertical = 4.dp)
            ) {
                Row(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(16.dp),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Box(
                        modifier = Modifier
                            .size(54.dp)
                            .clip(RoundedCornerShape(16.dp))
                            .background(SpiceOrangeContainer),
                        contentAlignment = Alignment.Center
                    ) {
                        Text(
                            text = if (regionalMode == RegionalMode.INDIAN_STATES) currentState.iconEmoji else currentCountry.flagEmoji,
                            fontSize = 30.sp
                        )
                    }

                    Spacer(modifier = Modifier.width(14.dp))

                    Column(modifier = Modifier.weight(1f)) {
                        Text(
                            text = if (regionalMode == RegionalMode.INDIAN_STATES)
                                currentState.localizedName(language)
                            else
                                currentCountry.localizedName(language),
                            style = MaterialTheme.typography.titleLarge.copy(
                                fontWeight = FontWeight.ExtraBold,
                                fontSize = 19.sp
                            ),
                            color = MaterialTheme.colorScheme.onSurface
                        )
                        Spacer(modifier = Modifier.height(2.dp))
                        Text(
                            text = if (regionalMode == RegionalMode.INDIAN_STATES)
                                currentState.localizedTagline(language)
                            else
                                currentCountry.localizedTagline(language),
                            style = MaterialTheme.typography.bodySmall.copy(
                                lineHeight = 17.sp
                            ),
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                }
            }

            Spacer(modifier = Modifier.height(14.dp))
        }

        // Section Title
        item {
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp, vertical = 4.dp),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    text = "🏆 " + AppStrings.topThreeDishes.get(language),
                    style = MaterialTheme.typography.titleMedium.copy(
                        fontWeight = FontWeight.Bold,
                        fontSize = 16.sp
                    ),
                    color = MaterialTheme.colorScheme.onSurface
                )

                Text(
                    text = if (language == AppLanguage.HINDI) "स्टेप्स देखने के लिए टैप करें" else "Tap for 4-step recipe",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }

            Spacer(modifier = Modifier.height(6.dp))
        }

        // 3 Famous Dishes Cards
        items(currentDishes.size) { index ->
            val dish = currentDishes[index]
            val rankLabel = when (index) {
                0 -> if (language == AppLanguage.HINDI) "#1 सर्वाधिक प्रसिद्ध व्यंजन" else "#1 Most Famous Authentic Dish"
                1 -> if (language == AppLanguage.HINDI) "#2 पारंपरिक धरोहर व्यंजन" else "#2 Cultural Heritage Classic"
                else -> if (language == AppLanguage.HINDI) "#3 लोकप्रिय पसंदीदा व्यंजन" else "#3 Iconic Local Favorite"
            }

            FamousDishCard(
                rankNumber = index + 1,
                rankLabel = rankLabel,
                dish = dish,
                language = language,
                onViewRecipe = { onViewRecipe(dish) },
                modifier = Modifier.padding(horizontal = 16.dp, vertical = 6.dp)
            )
        }
    }
}

@Composable
private fun RegionalModePill(
    title: String,
    isSelected: Boolean,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    val bgColor by animateColorAsState(
        targetValue = if (isSelected) MaterialTheme.colorScheme.surface else Color.Transparent,
        animationSpec = tween(200),
        label = "regModeBg"
    )
    val textColor by animateColorAsState(
        targetValue = if (isSelected) SpiceOrangePrimary else MaterialTheme.colorScheme.onSurfaceVariant,
        animationSpec = tween(200),
        label = "regModeText"
    )

    Box(
        modifier = modifier
            .clip(RoundedCornerShape(10.dp))
            .background(bgColor)
            .clickable(onClick = onClick)
            .padding(vertical = 8.dp, horizontal = 8.dp),
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

@Composable
private fun StateChip(
    state: IndianState,
    language: AppLanguage,
    isSelected: Boolean,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    Surface(
        shape = RoundedCornerShape(14.dp),
        color = if (isSelected) SpiceOrangePrimary else MaterialTheme.colorScheme.surface,
        border = androidx.compose.foundation.BorderStroke(
            1.dp,
            if (isSelected) SpiceOrangePrimary else MaterialTheme.colorScheme.outline.copy(alpha = 0.25f)
        ),
        shadowElevation = if (isSelected) 3.dp else 1.dp,
        modifier = modifier
            .clip(RoundedCornerShape(14.dp))
            .clickable(onClick = onClick)
    ) {
        Row(
            modifier = Modifier.padding(horizontal = 12.dp, vertical = 8.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Text(text = state.iconEmoji, fontSize = 15.sp)
            Spacer(modifier = Modifier.width(6.dp))
            Text(
                text = state.localizedName(language),
                fontSize = 13.sp,
                fontWeight = if (isSelected) FontWeight.Bold else FontWeight.Medium,
                color = if (isSelected) Color.White else MaterialTheme.colorScheme.onSurface
            )
        }
    }
}

@Composable
private fun CountryChip(
    country: WorldCountry,
    language: AppLanguage,
    isSelected: Boolean,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    Surface(
        shape = RoundedCornerShape(14.dp),
        color = if (isSelected) SpiceOrangePrimary else MaterialTheme.colorScheme.surface,
        border = androidx.compose.foundation.BorderStroke(
            1.dp,
            if (isSelected) SpiceOrangePrimary else MaterialTheme.colorScheme.outline.copy(alpha = 0.25f)
        ),
        shadowElevation = if (isSelected) 3.dp else 1.dp,
        modifier = modifier
            .clip(RoundedCornerShape(14.dp))
            .clickable(onClick = onClick)
    ) {
        Row(
            modifier = Modifier.padding(horizontal = 12.dp, vertical = 8.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Text(text = country.flagEmoji, fontSize = 16.sp)
            Spacer(modifier = Modifier.width(6.dp))
            Text(
                text = country.localizedName(language),
                fontSize = 13.sp,
                fontWeight = if (isSelected) FontWeight.Bold else FontWeight.Medium,
                color = if (isSelected) Color.White else MaterialTheme.colorScheme.onSurface
            )
        }
    }
}

@Composable
private fun FamousDishCard(
    rankNumber: Int,
    rankLabel: String,
    dish: Recipe,
    language: AppLanguage,
    onViewRecipe: () -> Unit,
    modifier: Modifier = Modifier
) {
    Card(
        shape = RoundedCornerShape(20.dp),
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
        elevation = CardDefaults.cardElevation(defaultElevation = 2.dp),
        modifier = modifier
            .fillMaxWidth()
            .clickable(onClick = onViewRecipe)
            .testTag("famous_dish_card_${dish.id}")
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(16.dp)
        ) {
            // Rank Badge Header
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Surface(
                    color = when (rankNumber) {
                        1 -> Color(0xFFFEF3C7) // gold
                        2 -> Color(0xFFF3E8FF) // purple
                        else -> Color(0xFFE0F2FE) // sky blue
                    },
                    shape = RoundedCornerShape(10.dp)
                ) {
                    Row(
                        modifier = Modifier.padding(horizontal = 8.dp, vertical = 4.dp),
                        verticalAlignment = Alignment.CenterVertically
                    ) {
                        Icon(
                            imageVector = Icons.Default.Star,
                            contentDescription = null,
                            tint = when (rankNumber) {
                                1 -> Color(0xFFB45309)
                                2 -> Color(0xFF7E22CE)
                                else -> Color(0xFF0369A1)
                            },
                            modifier = Modifier.size(13.dp)
                        )
                        Spacer(modifier = Modifier.width(4.dp))
                        Text(
                            text = rankLabel,
                            fontSize = 11.sp,
                            fontWeight = FontWeight.Bold,
                            color = when (rankNumber) {
                                1 -> Color(0xFFB45309)
                                2 -> Color(0xFF7E22CE)
                                else -> Color(0xFF0369A1)
                            }
                        )
                    }
                }

                Text(
                    text = "${dish.totalTimeMinutes} ${AppStrings.minutes.get(language)}",
                    fontSize = 11.sp,
                    fontWeight = FontWeight.SemiBold,
                    color = PrepTimeBlue
                )
            }

            Spacer(modifier = Modifier.height(12.dp))

            // Main Info
            Row(
                modifier = Modifier.fillMaxWidth(),
                verticalAlignment = Alignment.CenterVertically
            ) {
                Box(
                    modifier = Modifier
                        .size(56.dp)
                        .clip(RoundedCornerShape(16.dp))
                        .background(SpiceOrangeContainer),
                    contentAlignment = Alignment.Center
                ) {
                    Text(text = dish.emoji, fontSize = 30.sp)
                }

                Spacer(modifier = Modifier.width(14.dp))

                Column(modifier = Modifier.weight(1f)) {
                    Text(
                        text = dish.localizedName(language),
                        style = MaterialTheme.typography.titleMedium.copy(
                            fontWeight = FontWeight.Bold,
                            fontSize = 16.sp
                        ),
                        color = MaterialTheme.colorScheme.onSurface
                    )
                    Spacer(modifier = Modifier.height(2.dp))
                    Text(
                        text = if (language == AppLanguage.HINDI) dish.nameEn else dish.nameHi,
                        style = MaterialTheme.typography.bodySmall,
                        color = MaterialTheme.colorScheme.onSurfaceVariant
                    )
                }
            }

            Spacer(modifier = Modifier.height(10.dp))

            Text(
                text = dish.localizedDesc(language),
                style = MaterialTheme.typography.bodySmall.copy(
                    lineHeight = 17.sp
                ),
                color = MaterialTheme.colorScheme.onSurfaceVariant
            )

            Spacer(modifier = Modifier.height(12.dp))

            // Bottom action link
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Text(
                    text = "🔥 ~${dish.caloriesApprox} kcal",
                    fontSize = 11.sp,
                    fontWeight = FontWeight.Medium,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )

                Text(
                    text = AppStrings.viewRecipe.get(language) + " →",
                    style = MaterialTheme.typography.labelSmall.copy(
                        fontWeight = FontWeight.Bold,
                        fontSize = 12.sp
                    ),
                    color = SpiceOrangePrimary
                )
            }
        }
    }
}
