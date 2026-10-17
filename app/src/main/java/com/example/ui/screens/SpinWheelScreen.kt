package com.example.ui.screens

import android.graphics.Paint
import androidx.compose.animation.AnimatedVisibility
import androidx.compose.animation.core.Animatable
import androidx.compose.animation.core.FastOutSlowInEasing
import androidx.compose.animation.core.tween
import androidx.compose.animation.fadeIn
import androidx.compose.animation.slideInVertically
import androidx.compose.foundation.Canvas
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
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.AutoAwesome
import androidx.compose.material.icons.filled.Casino
import androidx.compose.material.icons.filled.Refresh
import androidx.compose.material.icons.filled.Restaurant
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.Surface
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.derivedStateOf
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.clip
import androidx.compose.ui.geometry.Offset
import androidx.compose.ui.geometry.Size
import androidx.compose.ui.graphics.Brush
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Path
import androidx.compose.ui.graphics.drawscope.DrawScope
import androidx.compose.ui.graphics.drawscope.Fill
import androidx.compose.ui.graphics.drawscope.Stroke
import androidx.compose.ui.graphics.nativeCanvas
import androidx.compose.ui.graphics.toArgb
import androidx.compose.ui.platform.LocalHapticFeedback
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.data.RecipeRepository
import com.example.model.AppLanguage
import com.example.model.AppStrings
import com.example.model.CuisineType
import com.example.model.MealType
import com.example.model.Recipe
import com.example.ui.theme.SpiceOrangeContainer
import com.example.ui.theme.SpiceOrangePrimary
import com.example.ui.theme.WarmAmberSecondary
import kotlinx.coroutines.launch
import kotlin.math.PI
import kotlin.math.cos
import kotlin.math.sin
import kotlin.random.Random

// Beautiful warm culinary wheel colors
val WheelSliceColors = listOf(
    Color(0xFFE65100), // Spice Orange
    Color(0xFFF59E0B), // Golden Saffron
    Color(0xFFEA580C), // Deep Coral
    Color(0xFFD97706), // Warm Amber
    Color(0xFFC2410C), // Terracotta
    Color(0xFFF97316), // Bright Tangerine
    Color(0xFFB45309), // Cinnamon
    Color(0xFFFB923C)  // Light Peach Orange
)

@Composable
fun SpinWheelScreen(
    language: AppLanguage,
    cuisine: CuisineType,
    selectedMealFilter: MealType?,
    onSelectMealFilter: (MealType?) -> Unit,
    onViewRecipe: (Recipe) -> Unit,
    modifier: Modifier = Modifier
) {
    val coroutineScope = rememberCoroutineScope()
    val rotationAngle = remember { Animatable(0f) }
    var isSpinning by remember { mutableStateOf(false) }
    var winnerRecipe by remember { mutableStateOf<Recipe?>(null) }

    // Slices pool (up to 8 recipes for best readability)
    val slices by remember(cuisine, selectedMealFilter) {
        derivedStateOf {
            val pool = RecipeRepository.getRecipesByCuisine(cuisine).let { list ->
                if (selectedMealFilter != null) {
                    list.filter { it.mealTypes.contains(selectedMealFilter) }
                } else list
            }
            if (pool.size > 8) pool.take(8) else pool
        }
    }

    LazyColumn(
        modifier = modifier
            .fillMaxSize()
            .testTag("spin_wheel_screen"),
        horizontalAlignment = Alignment.CenterHorizontally,
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
                            listOf(Color(0xFFD97706), Color(0xFFEA580C))
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
                            .size(46.dp)
                            .clip(CircleShape)
                            .background(Color.White.copy(alpha = 0.2f)),
                        contentAlignment = Alignment.Center
                    ) {
                        Icon(
                            imageVector = Icons.Default.Casino,
                            contentDescription = null,
                            tint = Color.White,
                            modifier = Modifier.size(26.dp)
                        )
                    }

                    Spacer(modifier = Modifier.width(14.dp))

                    Column(modifier = Modifier.weight(1f)) {
                        Text(
                            text = AppStrings.spinTitle.get(language),
                            style = MaterialTheme.typography.titleMedium.copy(
                                fontWeight = FontWeight.Bold,
                                fontSize = 18.sp
                            ),
                            color = Color.White
                        )
                        Spacer(modifier = Modifier.height(2.dp))
                        Text(
                            text = AppStrings.spinSubtitle.get(language),
                            style = MaterialTheme.typography.bodySmall,
                            color = Color.White.copy(alpha = 0.85f)
                        )
                    }
                }
            }
        }

        // Meal Filter Chips Row
        item {
            Row(
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 16.dp, vertical = 4.dp),
                horizontalArrangement = Arrangement.spacedBy(8.dp)
            ) {
                // All filter
                MealFilterChip(
                    title = AppStrings.filterAll.get(language),
                    isSelected = selectedMealFilter == null,
                    onClick = {
                        if (!isSpinning) {
                            winnerRecipe = null
                            onSelectMealFilter(null)
                        }
                    },
                    modifier = Modifier.weight(1f)
                )

                // Breakfast filter
                MealFilterChip(
                    title = "🌅 " + AppStrings.breakfast.get(language),
                    isSelected = selectedMealFilter == MealType.BREAKFAST,
                    onClick = {
                        if (!isSpinning) {
                            winnerRecipe = null
                            onSelectMealFilter(MealType.BREAKFAST)
                        }
                    },
                    modifier = Modifier.weight(1f)
                )

                // Lunch filter
                MealFilterChip(
                    title = "☀️ " + AppStrings.lunch.get(language),
                    isSelected = selectedMealFilter == MealType.LUNCH,
                    onClick = {
                        if (!isSpinning) {
                            winnerRecipe = null
                            onSelectMealFilter(MealType.LUNCH)
                        }
                    },
                    modifier = Modifier.weight(1f)
                )

                // Dinner filter
                MealFilterChip(
                    title = "🌙 " + AppStrings.dinner.get(language),
                    isSelected = selectedMealFilter == MealType.DINNER,
                    onClick = {
                        if (!isSpinning) {
                            winnerRecipe = null
                            onSelectMealFilter(MealType.DINNER)
                        }
                    },
                    modifier = Modifier.weight(1f)
                )
            }

            Spacer(modifier = Modifier.height(16.dp))
        }

        // Spinning Wheel Interactive Canvas
        item {
            Box(
                modifier = Modifier
                    .size(310.dp)
                    .padding(10.dp),
                contentAlignment = Alignment.Center
            ) {
                // The Wheel
                Canvas(
                    modifier = Modifier
                        .fillMaxSize()
                        .testTag("interactive_wheel_canvas")
                ) {
                    val radius = size.minDimension / 2f
                    val center = Offset(size.width / 2f, size.height / 2f)
                    val sliceCount = slices.size.coerceAtLeast(1)
                    val sweepAngle = 360f / sliceCount
                    val currentRotation = rotationAngle.value

                    // Draw Outer Golden Rim
                    drawCircle(
                        color = Color(0xFFD97706),
                        radius = radius,
                        center = center,
                        style = Stroke(width = 10.dp.toPx())
                    )

                    // Draw slices
                    slices.forEachIndexed { index, item ->
                        val startAngle = currentRotation + (index * sweepAngle)
                        val color = WheelSliceColors[index % WheelSliceColors.size]

                        drawArc(
                            color = color,
                            startAngle = startAngle,
                            sweepAngle = sweepAngle,
                            useCenter = true,
                            topLeft = Offset(center.x - radius + 5.dp.toPx(), center.y - radius + 5.dp.toPx()),
                            size = Size((radius - 5.dp.toPx()) * 2, (radius - 5.dp.toPx()) * 2)
                        )

                        // Draw divider lines
                        val angleRad = (startAngle * PI / 180f).toFloat()
                        val lineEnd = Offset(
                            x = center.x + (radius - 5.dp.toPx()) * cos(angleRad),
                            y = center.y + (radius - 5.dp.toPx()) * sin(angleRad)
                        )
                        drawLine(
                            color = Color.White.copy(alpha = 0.5f),
                            start = center,
                            end = lineEnd,
                            strokeWidth = 2.dp.toPx()
                        )

                        // Draw text & emoji on slice
                        val midAngle = startAngle + (sweepAngle / 2f)
                        val midRad = (midAngle * PI / 180f).toFloat()
                        val textDist = radius * 0.62f
                        val textPos = Offset(
                            x = center.x + textDist * cos(midRad),
                            y = center.y + textDist * sin(midRad)
                        )

                        drawContext.canvas.nativeCanvas.apply {
                            save()
                            rotate(midAngle + 90f, textPos.x, textPos.y)

                            val paint = Paint().apply {
                                this.color = android.graphics.Color.WHITE
                                this.textSize = 12.sp.toPx()
                                this.isFakeBoldText = true
                                this.textAlign = Paint.Align.CENTER
                                this.isAntiAlias = true
                            }

                            // Short title
                            val label = item.localizedName(language).let { name ->
                                if (name.length > 12) name.take(10) + ".." else name
                            }
                            drawText("${item.emoji} $label", textPos.x, textPos.y, paint)
                            restore()
                        }
                    }

                    // Outer perimeter golden studs
                    val studCount = 16
                    for (i in 0 until studCount) {
                        val studAngle = (i * (360f / studCount)) * PI / 180f
                        val studPos = Offset(
                            x = center.x + (radius - 5.dp.toPx()) * cos(studAngle).toFloat(),
                            y = center.y + (radius - 5.dp.toPx()) * sin(studAngle).toFloat()
                        )
                        drawCircle(
                            color = Color(0xFFFFD54F),
                            radius = 3.dp.toPx(),
                            center = studPos
                        )
                    }

                    // Center Hub
                    drawCircle(
                        color = Color(0xFF78350F),
                        radius = 26.dp.toPx(),
                        center = center
                    )
                    drawCircle(
                        color = Color(0xFFFFD54F),
                        radius = 22.dp.toPx(),
                        center = center
                    )
                }

                // Center Icon on Hub
                Icon(
                    imageVector = Icons.Default.Restaurant,
                    contentDescription = null,
                    tint = Color(0xFF78350F),
                    modifier = Modifier.size(24.dp)
                )

                // Top Pointer Needle pointing downward into wheel
                Box(
                    modifier = Modifier
                        .align(Alignment.TopCenter)
                        .padding(top = 2.dp)
                ) {
                    Canvas(modifier = Modifier.size(28.dp, 34.dp)) {
                        val path = Path().apply {
                            moveTo(size.width / 2f, size.height) // tip pointing down
                            lineTo(0f, 0f)
                            lineTo(size.width, 0f)
                            close()
                        }
                        drawPath(path, color = Color(0xFFB91C1C)) // Crimson red needle
                        drawPath(path, color = Color.White, style = Stroke(width = 2.dp.toPx()))
                    }
                }
            }
        }

        // Spin Button
        item {
            Spacer(modifier = Modifier.height(18.dp))

            Button(
                onClick = {
                    if (!isSpinning && slices.isNotEmpty()) {
                        isSpinning = true
                        winnerRecipe = null

                        val winnerIndex = Random.nextInt(slices.size)
                        val sliceSweep = 360f / slices.size
                        // Pointer is at 270 degrees (Top).
                        // Slice center relative to wheel = (winnerIndex * sliceSweep) + (sliceSweep / 2)
                        // At wheel angle W: slice angle under needle is (W + sliceCenter) % 360 == 270
                        // Hence target W % 360 = 270 - sliceCenter
                        val targetSliceAngle = 270f - (winnerIndex * sliceSweep + sliceSweep / 2f)
                        val fullTurns = (5 + Random.nextInt(3)) * 360f
                        val currentBase = (rotationAngle.value % 360f)
                        val delta = (targetSliceAngle - currentBase + 360f) % 360f
                        val finalAngle = rotationAngle.value + fullTurns + delta

                        coroutineScope.launch {
                            rotationAngle.animateTo(
                                targetValue = finalAngle,
                                animationSpec = tween(
                                    durationMillis = 3500,
                                    easing = FastOutSlowInEasing
                                )
                            )
                            isSpinning = false
                            winnerRecipe = slices[winnerIndex]
                        }
                    }
                },
                enabled = !isSpinning && slices.isNotEmpty(),
                colors = ButtonDefaults.buttonColors(containerColor = SpiceOrangePrimary),
                shape = RoundedCornerShape(18.dp),
                modifier = Modifier
                    .fillMaxWidth()
                    .padding(horizontal = 24.dp)
                    .height(52.dp)
                    .testTag("spin_wheel_button")
            ) {
                Icon(
                    imageVector = Icons.Default.Casino,
                    contentDescription = null,
                    modifier = Modifier.size(20.dp),
                    tint = Color.White
                )
                Spacer(modifier = Modifier.width(8.dp))
                Text(
                    text = if (isSpinning) AppStrings.spinning.get(language) else AppStrings.spinButton.get(language),
                    fontWeight = FontWeight.ExtraBold,
                    fontSize = 15.sp,
                    color = Color.White
                )
            }
        }

        // Winner Announcement Card
        item {
            AnimatedVisibility(
                visible = winnerRecipe != null,
                enter = fadeIn() + slideInVertically()
            ) {
                winnerRecipe?.let { recipe ->
                    Card(
                        shape = RoundedCornerShape(22.dp),
                        colors = CardDefaults.cardColors(containerColor = MaterialTheme.colorScheme.surface),
                        elevation = CardDefaults.cardElevation(defaultElevation = 4.dp),
                        modifier = Modifier
                            .fillMaxWidth()
                            .padding(horizontal = 16.dp, vertical = 20.dp)
                            .testTag("winner_result_card")
                    ) {
                        Column(
                            modifier = Modifier
                                .fillMaxWidth()
                                .padding(18.dp),
                            horizontalAlignment = Alignment.CenterHorizontally
                        ) {
                            Surface(
                                color = Color(0xFFFEF3C7),
                                shape = RoundedCornerShape(12.dp)
                            ) {
                                Row(
                                    modifier = Modifier.padding(horizontal = 12.dp, vertical = 6.dp),
                                    verticalAlignment = Alignment.CenterVertically
                                ) {
                                    Icon(
                                        imageVector = Icons.Default.AutoAwesome,
                                        contentDescription = null,
                                        tint = Color(0xFFB45309),
                                        modifier = Modifier.size(16.dp)
                                    )
                                    Spacer(modifier = Modifier.width(6.dp))
                                    Text(
                                        text = AppStrings.winnerAnnouncement.get(language),
                                        fontSize = 12.sp,
                                        fontWeight = FontWeight.Bold,
                                        color = Color(0xFFB45309)
                                    )
                                }
                            }

                            Spacer(modifier = Modifier.height(14.dp))

                            Box(
                                modifier = Modifier
                                    .size(72.dp)
                                    .clip(RoundedCornerShape(20.dp))
                                    .background(SpiceOrangeContainer),
                                contentAlignment = Alignment.Center
                            ) {
                                Text(text = recipe.emoji, fontSize = 40.sp)
                            }

                            Spacer(modifier = Modifier.height(10.dp))

                            Text(
                                text = recipe.localizedName(language),
                                style = MaterialTheme.typography.titleLarge.copy(
                                    fontWeight = FontWeight.Bold,
                                    fontSize = 20.sp
                                ),
                                color = MaterialTheme.colorScheme.onSurface
                            )

                            Text(
                                text = recipe.localizedDesc(language),
                                style = MaterialTheme.typography.bodySmall,
                                color = MaterialTheme.colorScheme.onSurfaceVariant,
                                textAlign = androidx.compose.ui.text.style.TextAlign.Center,
                                modifier = Modifier.padding(horizontal = 8.dp, vertical = 4.dp)
                            )

                            Spacer(modifier = Modifier.height(14.dp))

                            // Action button to open recipe
                            Button(
                                onClick = { onViewRecipe(recipe) },
                                colors = ButtonDefaults.buttonColors(containerColor = SpiceOrangePrimary),
                                shape = RoundedCornerShape(14.dp),
                                modifier = Modifier
                                    .fillMaxWidth()
                                    .height(46.dp)
                                    .testTag("winner_view_recipe_button")
                            ) {
                                Text(
                                    text = AppStrings.viewRecipe.get(language),
                                    fontWeight = FontWeight.Bold,
                                    fontSize = 14.sp
                                )
                            }
                        }
                    }
                }
            }
        }
    }
}

@Composable
private fun MealFilterChip(
    title: String,
    isSelected: Boolean,
    onClick: () -> Unit,
    modifier: Modifier = Modifier
) {
    Surface(
        shape = RoundedCornerShape(12.dp),
        color = if (isSelected) SpiceOrangePrimary else MaterialTheme.colorScheme.surface,
        border = androidx.compose.foundation.BorderStroke(
            1.dp,
            if (isSelected) SpiceOrangePrimary else MaterialTheme.colorScheme.outline.copy(alpha = 0.25f)
        ),
        shadowElevation = if (isSelected) 2.dp else 0.dp,
        modifier = modifier
            .clip(RoundedCornerShape(12.dp))
            .clickable(onClick = onClick)
    ) {
        Box(
            modifier = Modifier.padding(vertical = 8.dp, horizontal = 4.dp),
            contentAlignment = Alignment.Center
        ) {
            Text(
                text = title,
                fontSize = 11.sp,
                fontWeight = if (isSelected) FontWeight.Bold else FontWeight.Medium,
                color = if (isSelected) Color.White else MaterialTheme.colorScheme.onSurface,
                maxLines = 1
            )
        }
    }
}
