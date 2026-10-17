package com.example.ui.screens

import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.fadeIn
import androidx.compose.animation.slideInVertically
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
import androidx.compose.material.icons.filled.CalendarMonth
import androidx.compose.material.icons.filled.RestaurantMenu
import androidx.compose.material.icons.filled.Shuffle
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
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
import com.example.model.MealDay
import com.example.model.MealType
import com.example.model.Recipe
import com.example.ui.components.MealCard
import com.example.ui.theme.SpiceOrangeContainer
import com.example.ui.theme.SpiceOrangePrimary
import com.example.ui.theme.WarmAmberSecondary

@Composable
fun HomeScreen(
    language: AppLanguage,
    cuisine: CuisineType,
    selectedDay: MealDay,
    weeklyPlan: Map<MealDay, Map<MealType, Recipe>>,
    onSelectDay: (MealDay) -> Unit,
    onShuffleSlot: (MealDay, MealType) -> Unit,
    onShuffleWeek: () -> Unit,
    onViewRecipe: (Recipe) -> Unit,
    modifier: Modifier = Modifier
) {
    val dayMeals = weeklyPlan[selectedDay] ?: emptyMap()
    val breakfast = dayMeals[MealType.BREAKFAST]
    val lunch = dayMeals[MealType.LUNCH]
    val dinner = dayMeals[MealType.DINNER]

    val totalCalories = (breakfast?.caloriesApprox ?: 0) + (lunch?.caloriesApprox ?: 0) + (dinner?.caloriesApprox ?: 0)
    val totalTime = (breakfast?.totalTimeMinutes ?: 0) + (lunch?.totalTimeMinutes ?: 0) + (dinner?.totalTimeMinutes ?: 0)

    LazyColumn(
        modifier = modifier
            .fillMaxSize()
            .testTag("home_meal_planner_screen"),
        contentPadding = PaddingValues(bottom = 90.dp)
    ) {
        // Hero Banner
        item {
            Box(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp, vertical = 12.dp)
                    .clip(RoundedCornerShape(22.dp))
                    .background(
                        Brush.horizontalGradient(
                            listOf(SpiceOrangePrimary, Color(0xFFD97706))
                        )
                    )
                    .padding(18.dp)
            ) {
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Column(modifier = Modifier.weight(1f)) {
                        Row(verticalAlignment = Alignment.CenterVertically) {
                            Icon(
                                imageVector = Icons.Default.AutoAwesome,
                                contentDescription = null,
                                tint = Color(0xFFFFD54F),
                                modifier = Modifier.size(16.dp)
                            )
                            Spacer(modifier = Modifier.width(6.dp))
                            Text(
                                text = if (language == AppLanguage.HINDI) "आज का भोजन मेनू" else "Today's Meal Plan",
                                fontSize = 12.sp,
                                fontWeight = FontWeight.Bold,
                                color = Color.White.copy(alpha = 0.9f)
                            )
                        }

                        Spacer(modifier = Modifier.height(4.dp))

                        Text(
                            text = "${selectedDay.title.get(language)} • ${cuisine.title.get(language)}",
                            style = MaterialTheme.typography.titleLarge.copy(
                                fontWeight = FontWeight.ExtraBold,
                                fontSize = 20.sp
                            ),
                            color = Color.White
                        )

                        Spacer(modifier = Modifier.height(6.dp))

                        Text(
                            text = if (language == AppLanguage.HINDI)
                                "कुल 3 भोजन • ~${totalCalories} kcal • ${totalTime} मिनट"
                            else
                                "3 Meals • ~${totalCalories} kcal • ~${totalTime} mins cooking",
                            fontSize = 12.sp,
                            color = Color.White.copy(alpha = 0.85f)
                        )
                    }

                    // Shuffle week button
                    Surface(
                        color = Color.White.copy(alpha = 0.2f),
                        shape = CircleShape,
                        modifier = Modifier
                            .clickable(onClick = onShuffleWeek)
                            .testTag("shuffle_week_hero_button")
                    ) {
                        Row(
                            modifier = Modifier.padding(horizontal = 10.dp, vertical = 8.dp),
                            verticalAlignment = Alignment.CenterVertically
                        ) {
                            Icon(
                                imageVector = Icons.Default.Shuffle,
                                contentDescription = "Shuffle",
                                tint = Color.White,
                                modifier = Modifier.size(16.dp)
                            )
                            Spacer(modifier = Modifier.width(4.dp))
                            Text(
                                text = AppStrings.shuffleMeal.get(language),
                                fontSize = 11.sp,
                                fontWeight = FontWeight.Bold,
                                color = Color.White
                            )
                        }
                    }
                }
            }
        }

        // Horizontal Day Selector Pills
        item {
            Column(modifier = Modifier.fillMaxWidth()) {
                LazyRow(
                    modifier = Modifier.fillMaxWidth(),
                    contentPadding = PaddingValues(horizontal = 16.dp),
                    horizontalArrangement = Arrangement.spacedBy(8.dp)
                ) {
                    items(MealDay.values()) { day ->
                        val isSelected = day == selectedDay
                        DayPill(
                            day = day,
                            language = language,
                            isSelected = isSelected,
                            onClick = { onSelectDay(day) },
                            modifier = Modifier.testTag("day_pill_${day.name.lowercase()}")
                        )
                    }
                }

                Spacer(modifier = Modifier.height(16.dp))
            }
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
                    text = if (language == AppLanguage.HINDI) "भोजन तालिका (3 समय)" else "Daily Meals (3 Slots)",
                    style = MaterialTheme.typography.titleMedium.copy(
                        fontWeight = FontWeight.Bold,
                        fontSize = 16.sp
                    ),
                    color = MaterialTheme.colorScheme.onSurface
                )

                Text(
                    text = if (language == AppLanguage.HINDI) "टैप करके स्टेप्स देखें" else "Tap card for recipe",
                    style = MaterialTheme.typography.bodySmall,
                    color = MaterialTheme.colorScheme.onSurfaceVariant
                )
            }
        }

        // Breakfast Card
        if (breakfast != null) {
            item {
                Box(modifier = Modifier.padding(horizontal = 16.dp, vertical = 6.dp)) {
                    MealCard(
                        mealType = MealType.BREAKFAST,
                        recipe = breakfast,
                        language = language,
                        onViewRecipe = { onViewRecipe(breakfast) },
                        onShuffle = { onShuffleSlot(selectedDay, MealType.BREAKFAST) }
                    )
                }
            }
        }

        // Lunch Card
        if (lunch != null) {
            item {
                Box(modifier = Modifier.padding(horizontal = 16.dp, vertical = 6.dp)) {
                    MealCard(
                        mealType = MealType.LUNCH,
                        recipe = lunch,
                        language = language,
                        onViewRecipe = { onViewRecipe(lunch) },
                        onShuffle = { onShuffleSlot(selectedDay, MealType.LUNCH) }
                    )
                }
            }
        }

        // Dinner Card
        if (dinner != null) {
            item {
                Box(modifier = Modifier.padding(horizontal = 16.dp, vertical = 6.dp)) {
                    MealCard(
                        mealType = MealType.DINNER,
                        recipe = dinner,
                        language = language,
                        onViewRecipe = { onViewRecipe(dinner) },
                        onShuffle = { onShuffleSlot(selectedDay, MealType.DINNER) }
                    )
                }
            }
        }

        // Bottom Actions: Full Week Randomizer & Tip
        item {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp, vertical = 14.dp)
            ) {
                Button(
                    onClick = onShuffleWeek,
                    colors = ButtonDefaults.buttonColors(
                        containerColor = SpiceOrangePrimary
                    ),
                    shape = RoundedCornerShape(16.dp),
                    modifier = Modifier
                        .fillMaxWidth()
                        .height(48.dp)
                        .testTag("shuffle_full_week_button")
                ) {
                    Icon(
                        imageVector = Icons.Default.Shuffle,
                        contentDescription = null,
                        modifier = Modifier.size(18.dp)
                    )
                    Spacer(modifier = Modifier.width(8.dp))
                    Text(
                        text = AppStrings.shuffleAll.get(language),
                        fontWeight = FontWeight.Bold,
                        fontSize = 14.sp
                    )
                }
            }
        }
    }
}

@Composable
private fun DayPill(
    day: MealDay,
    language: AppLanguage,
    isSelected: Boolean,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    val bgColor = if (isSelected) SpiceOrangePrimary else MaterialTheme.colorScheme.surface
    val textColor = if (isSelected) Color.White else MaterialTheme.colorScheme.onSurface
    val subTextColor = if (isSelected) Color.White.copy(alpha = 0.8f) else MaterialTheme.colorScheme.onSurfaceVariant

    Surface(
        color = bgColor,
        shape = RoundedCornerShape(16.dp),
        shadowElevation = if (isSelected) 3.dp else 1.dp,
        modifier = modifier
            .clip(RoundedCornerShape(16.dp))
            .clickable(onClick = onClick)
    ) {
        Column(
            modifier = Modifier
                .padding(horizontal = 14.dp, vertical = 10.dp),
            horizontalAlignment = Alignment.CenterHorizontally
        ) {
            Text(
                text = if (language == AppLanguage.HINDI) day.shortNameHi else day.shortName,
                fontSize = 14.sp,
                fontWeight = FontWeight.Bold,
                color = textColor
            )
            Spacer(modifier = Modifier.height(2.dp))
            Box(
                modifier = Modifier
                    .size(5.dp)
                    .clip(CircleShape)
                    .background(if (isSelected) Color.White else MaterialTheme.colorScheme.outline.copy(alpha = 0.4f))
            )
        }
    }
}
