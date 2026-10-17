package com.example.ui.screens

import androidx.compose.foundation.background
import androidx.compose.foundation.border
import androidx.compose.foundation.clickable
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.ExperimentalLayoutApi
import androidx.compose.foundation.layout.FlowRow
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
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Check
import androidx.compose.material.icons.filled.Clear
import androidx.compose.material.icons.filled.Kitchen
import androidx.compose.material.icons.filled.Search
import androidx.compose.material.icons.filled.Timer
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.HorizontalDivider
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.OutlinedButton
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.material3.TextFieldDefaults
import androidx.compose.runtime.Composable
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.data.RecipeRepository
import com.example.model.AppLanguage
import com.example.model.AppStrings
import com.example.model.Ingredient
import com.example.model.IngredientCategory
import com.example.model.PantryMatchResult
import com.example.model.Recipe
import com.example.ui.theme.PrepTimeBlue
import com.example.ui.theme.SpiceOrangeContainer
import com.example.ui.theme.SpiceOrangePrimary
import com.example.ui.theme.VegGreen
import com.example.ui.theme.VegGreenContainer
import com.example.ui.theme.WarmAmberSecondary

@OptIn(ExperimentalLayoutApi::class)
@Composable
fun PantryMatcherScreen(
    language: AppLanguage,
    selectedIngredients: Set<String>,
    searchQuery: String,
    matchedResults: List<PantryMatchResult>,
    onToggleIngredient: (String) -> Unit,
    onSelectEssentials: () -> Unit,
    onClearAll: () -> Unit,
    onSearchChange: (String) -> Unit,
    onViewRecipe: (Recipe) -> Unit,
    modifier: Modifier = Modifier
) {
    val filteredIngredients by remember(searchQuery, language) {
        derivedStateOf {
            if (searchQuery.isBlank()) {
                RecipeRepository.allIngredients
            } else {
                RecipeRepository.allIngredients.filter {
                    it.nameEn.contains(searchQuery, ignoreCase = true) ||
                    it.nameHi.contains(searchQuery, ignoreCase = true)
                }
            }
        }
    }

    val groupedIngredients by remember(filteredIngredients) {
        derivedStateOf {
            filteredIngredients.groupBy { it.category }
        }
    }

    LazyColumn(
        modifier = modifier
            .fillMaxSize()
            .testTag("pantry_matcher_screen"),
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
                            listOf(Color(0xFFEA580C), Color(0xFFC2410C))
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
                            imageVector = Icons.Default.Kitchen,
                            contentDescription = null,
                            tint = Color.White,
                            modifier = Modifier.size(26.dp)
                        )
                    }

                    Spacer(modifier = Modifier.width(14.dp))

                    Column(modifier = Modifier.weight(1f)) {
                        Text(
                            text = AppStrings.pantryTitle.get(language),
                            style = MaterialTheme.typography.titleLarge.copy(
                                fontWeight = FontWeight.Bold,
                                fontSize = 19.sp
                            ),
                            color = Color.White
                        )
                        Spacer(modifier = Modifier.height(2.dp))
                        Text(
                            text = AppStrings.pantryDesc.get(language),
                            style = MaterialTheme.typography.bodySmall,
                            color = Color.White.copy(alpha = 0.85f)
                        )
                    }
                }
            }
        }

        // Search Bar & Action Buttons
        item {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp)
            ) {
                OutlinedTextField(
                    value = searchQuery,
                    onValueChange = onSearchChange,
                    modifier = Modifier
                        .fillMaxWidth()
                        .testTag("pantry_search_input"),
                    placeholder = {
                        Text(text = AppStrings.searchIngredient.get(language), fontSize = 14.sp)
                    },
                    leadingIcon = {
                        Icon(
                            imageVector = Icons.Default.Search,
                            contentDescription = "Search",
                            tint = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    },
                    trailingIcon = {
                        if (searchQuery.isNotEmpty()) {
                            IconButton(onClick = { onSearchChange("") }) {
                                Icon(
                                    imageVector = Icons.Default.Clear,
                                    contentDescription = "Clear",
                                    tint = MaterialTheme.colorScheme.onSurfaceVariant
                                )
                            }
                        }
                    },
                    shape = RoundedCornerShape(16.dp),
                    colors = TextFieldDefaults.colors(
                        focusedContainerColor = MaterialTheme.colorScheme.surface,
                        unfocusedContainerColor = MaterialTheme.colorScheme.surface,
                        focusedIndicatorColor = SpiceOrangePrimary,
                        unfocusedIndicatorColor = MaterialTheme.colorScheme.outline.copy(alpha = 0.3f)
                    ),
                    singleLine = true
                )

                Spacer(modifier = Modifier.height(10.dp))

                // Quick Preset Actions
                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text(
                        text = "${selectedIngredients.size} ${AppStrings.ingredientsSelected.get(language)}",
                        style = MaterialTheme.typography.labelMedium.copy(
                            fontWeight = FontWeight.Bold,
                            color = SpiceOrangePrimary
                        )
                    )

                    Row(horizontalArrangement = Arrangement.spacedBy(8.dp)) {
                        Surface(
                            shape = RoundedCornerShape(12.dp),
                            color = SpiceOrangeContainer,
                            modifier = Modifier
                                .clickable(onClick = onSelectEssentials)
                                .testTag("select_essentials_button")
                        ) {
                            Text(
                                text = AppStrings.selectAllCore.get(language),
                                fontSize = 11.sp,
                                fontWeight = FontWeight.Bold,
                                color = SpiceOrangePrimary,
                                modifier = Modifier.padding(horizontal = 10.dp, vertical = 6.dp)
                            )
                        }

                        if (selectedIngredients.isNotEmpty()) {
                            Surface(
                                shape = RoundedCornerShape(12.dp),
                                color = MaterialTheme.colorScheme.surfaceVariant,
                                modifier = Modifier
                                    .clickable(onClick = onClearAll)
                                    .testTag("clear_all_ingredients_button")
                            ) {
                                Text(
                                    text = AppStrings.clearSelection.get(language),
                                    fontSize = 11.sp,
                                    fontWeight = FontWeight.Medium,
                                    color = MaterialTheme.colorScheme.onSurfaceVariant,
                                    modifier = Modifier.padding(horizontal = 10.dp, vertical = 6.dp)
                                )
                            }
                        }
                    }
                }

                Spacer(modifier = Modifier.height(14.dp))
            }
        }

        // Ingredient Chips by Category
        groupedIngredients.forEach { (category, items) ->
            item {
                Column(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(horizontal = 16.dp, vertical = 6.dp)
                ) {
                    Text(
                        text = "${category.iconEmoji} ${category.title.get(language)}",
                        style = MaterialTheme.typography.titleSmall.copy(
                            fontWeight = FontWeight.Bold,
                            fontSize = 14.sp
                        ),
                        color = MaterialTheme.colorScheme.onSurface
                    )

                    Spacer(modifier = Modifier.height(8.dp))

                    FlowRow(
                        modifier = Modifier.fillMaxWidth(),
                        horizontalArrangement = Arrangement.spacedBy(8.dp),
                        verticalArrangement = Arrangement.spacedBy(8.dp)
                    ) {
                        items.forEach { ingredient ->
                            val isChecked = selectedIngredients.contains(ingredient.id)
                            PantryIngredientChip(
                                ingredient = ingredient,
                                language = language,
                                isChecked = isChecked,
                                onClick = { onToggleIngredient(ingredient.id) },
                                modifier = Modifier.testTag("ingredient_chip_${ingredient.id}")
                            )
                        }
                    }

                    Spacer(modifier = Modifier.height(10.dp))
                }
            }
        }

        // Matched Recipes Section
        item {
            Column(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp, vertical = 10.dp)
            ) {
                HorizontalDivider(color = MaterialTheme.colorScheme.outline.copy(alpha = 0.2f))
                Spacer(modifier = Modifier.height(14.dp))

                Row(
                    modifier = Modifier.fillMaxWidth(),
                    horizontalArrangement = Arrangement.SpaceBetween,
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Text(
                        text = "🍳 " + AppStrings.matchedRecipes.get(language),
                        style = MaterialTheme.typography.titleMedium.copy(
                            fontWeight = FontWeight.Bold,
                            fontSize = 17.sp
                        ),
                        color = MaterialTheme.colorScheme.onSurface
                    )

                    Surface(
                        color = if (matchedResults.isNotEmpty()) VegGreenContainer else MaterialTheme.colorScheme.surfaceVariant,
                        shape = CircleShape
                    ) {
                        Text(
                            text = "${matchedResults.size} " + (if (language == AppLanguage.HINDI) "रेसिपी" else "Dishes"),
                            fontSize = 11.sp,
                            fontWeight = FontWeight.Bold,
                            color = if (matchedResults.isNotEmpty()) VegGreen else MaterialTheme.colorScheme.onSurfaceVariant,
                            modifier = Modifier.padding(horizontal = 8.dp, vertical = 3.dp)
                        )
                    }
                }
            }
        }

        if (matchedResults.isEmpty()) {
            item {
                Box(
                    modifier = Modifier
                        .fillMaxWidth()
                        .padding(32.dp),
                    contentAlignment = Alignment.Center
                ) {
                    Column(horizontalAlignment = Alignment.CenterHorizontally) {
                        Text(text = "🛒", fontSize = 42.sp)
                        Spacer(modifier = Modifier.height(10.dp))
                        Text(
                            text = AppStrings.noMatchFound.get(language),
                            style = MaterialTheme.typography.bodyMedium,
                            color = MaterialTheme.colorScheme.onSurfaceVariant,
                            textAlign = androidx.compose.ui.text.style.TextAlign.Center
                        )
                    }
                }
            }
        } else {
            items(matchedResults) { match ->
                PantryMatchCard(
                    match = match,
                    language = language,
                    onViewRecipe = { onViewRecipe(match.recipe) },
                    modifier = Modifier.padding(horizontal = 16.dp, vertical = 6.dp)
                )
            }
        }
    }
}

@Composable
private fun PantryIngredientChip(
    ingredient: Ingredient,
    language: AppLanguage,
    isChecked: Boolean,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    Surface(
        shape = RoundedCornerShape(12.dp),
        color = if (isChecked) SpiceOrangePrimary else MaterialTheme.colorScheme.surface,
        border = androidx.compose.foundation.BorderStroke(
            1.dp,
            if (isChecked) SpiceOrangePrimary else MaterialTheme.colorScheme.outline.copy(alpha = 0.25f)
        ),
        shadowElevation = if (isChecked) 2.dp else 0.dp,
        modifier = modifier
            .clip(RoundedCornerShape(12.dp))
            .clickable(onClick = onClick)
    ) {
        Row(
            modifier = Modifier.padding(horizontal = 10.dp, vertical = 7.dp),
            verticalAlignment = Alignment.CenterVertically
        ) {
            Text(text = ingredient.emoji, fontSize = 14.sp)
            Spacer(modifier = Modifier.width(6.dp))
            Text(
                text = ingredient.localizedName(language),
                fontSize = 12.sp,
                fontWeight = if (isChecked) FontWeight.Bold else FontWeight.Medium,
                color = if (isChecked) Color.White else MaterialTheme.colorScheme.onSurface
            )
            if (isChecked) {
                Spacer(modifier = Modifier.width(6.dp))
                Icon(
                    imageVector = Icons.Default.Check,
                    contentDescription = null,
                    tint = Color.White,
                    modifier = Modifier.size(13.dp)
                )
            }
        }
    }
}

@Composable
private fun PantryMatchCard(
    match: PantryMatchResult,
    language: AppLanguage,
    onViewRecipe: () -> Unit,
    modifier: Modifier = Modifier
) {
    val recipe = match.recipe
    val isPerfectMatch = match.matchPercentage == 100

    Card(
        shape = RoundedCornerShape(18.dp),
        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
        elevation = CardDefaults.cardElevation(defaultElevation = 2.dp),
        modifier = modifier
            .fillMaxWidth()
            .clickable(onClick = onViewRecipe)
            .testTag("match_card_${recipe.id}")
    ) {
        Column(
            modifier = Modifier
                .fillMaxWidth()
                .padding(14.dp)
        ) {
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Row(
                    modifier = Modifier.weight(1f),
                    verticalAlignment = Alignment.CenterVertically
                ) {
                    Box(
                        modifier = Modifier
                            .size(46.dp)
                            .clip(RoundedCornerShape(14.dp))
                            .background(SpiceOrangeContainer),
                        contentAlignment = Alignment.Center
                    ) {
                        Text(text = recipe.emoji, fontSize = 24.sp)
                    }

                    Spacer(modifier = Modifier.width(12.dp))

                    Column {
                        Text(
                            text = recipe.localizedName(language),
                            style = MaterialTheme.typography.titleMedium.copy(
                                fontWeight = FontWeight.Bold,
                                fontSize = 15.sp
                            ),
                            color = MaterialTheme.colorScheme.onSurface
                        )
                        Text(
                            text = "${recipe.totalTimeMinutes} ${AppStrings.minutes.get(language)} • ~${recipe.caloriesApprox} kcal",
                            style = MaterialTheme.typography.bodySmall,
                            color = MaterialTheme.colorScheme.onSurfaceVariant
                        )
                    }
                }

                // Match Badge
                Surface(
                    color = if (isPerfectMatch) VegGreenContainer else Color(0xFFFEF3C7),
                    shape = RoundedCornerShape(10.dp)
                ) {
                    Text(
                        text = if (isPerfectMatch) AppStrings.fullMatch.get(language) else "${match.matchPercentage}%",
                        fontSize = 11.sp,
                        fontWeight = FontWeight.Bold,
                        color = if (isPerfectMatch) VegGreen else Color(0xFFB45309),
                        modifier = Modifier.padding(horizontal = 8.dp, vertical = 4.dp)
                    )
                }
            }

            Spacer(modifier = Modifier.height(10.dp))

            // Missing vs Available Ingredients quick indicator
            Row(
                modifier = Modifier.fillMaxWidth(),
                horizontalArrangement = Arrangement.SpaceBetween,
                verticalAlignment = Alignment.CenterVertically
            ) {
                Row(verticalAlignment = Alignment.CenterVertically) {
                    Text(
                        text = "${AppStrings.youHave.get(language)} ${match.matchedCount}/${match.totalRequired}",
                        fontSize = 11.sp,
                        fontWeight = FontWeight.SemiBold,
                        color = VegGreen
                    )
                    if (match.missingIngredients.isNotEmpty()) {
                        Spacer(modifier = Modifier.width(8.dp))
                        Text(
                            text = "(${match.missingIngredients.size} ${AppStrings.missingCount.get(language)})",
                            fontSize = 11.sp,
                            fontWeight = FontWeight.Medium,
                            color = MaterialTheme.colorScheme.error
                        )
                    }
                }

                Text(
                    text = AppStrings.viewRecipe.get(language) + " →",
                    fontSize = 11.sp,
                    fontWeight = FontWeight.Bold,
                    color = SpiceOrangePrimary
                )
            }
        }
    }
}
