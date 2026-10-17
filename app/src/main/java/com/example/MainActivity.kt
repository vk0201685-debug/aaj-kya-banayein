package com.example

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.BackHandler
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.activity.viewModels
import androidx.compose.animation.Crossfade
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.runtime.collectAsState
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import com.example.ui.AppTab
import com.example.ui.MainViewModel
import com.example.ui.components.BottomNavBar
import com.example.ui.components.RecipeDetailBottomSheet
import com.example.ui.components.TopCulinaryBar
import com.example.ui.screens.HomeScreen
import com.example.ui.screens.PantryMatcherScreen
import com.example.ui.screens.SpinWheelScreen
import com.example.ui.theme.MyApplicationTheme

class MainActivity : ComponentActivity() {

    private val viewModel: MainViewModel by viewModels()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()

        setContent {
            MyApplicationTheme {
                MainAppScreen(viewModel = viewModel)
            }
        }
    }
}

@OptIn(androidx.compose.material3.ExperimentalMaterial3Api::class)
@Composable
fun MainAppScreen(
    viewModel: MainViewModel,
    modifier: Modifier = Modifier
) {
    val language by viewModel.language.collectAsState()
    val cuisine by viewModel.cuisine.collectAsState()
    val currentTab by viewModel.currentTab.collectAsState()
    val selectedDay by viewModel.selectedDay.collectAsState()
    val weeklyPlan by viewModel.weeklyPlan.collectAsState()
    val regionalMode by viewModel.regionalMode.collectAsState()
    val selectedStateId by viewModel.selectedStateId.collectAsState()
    val selectedCountryId by viewModel.selectedCountryId.collectAsState()
    val selectedIngredients by viewModel.selectedIngredients.collectAsState()
    val pantrySearchQuery by viewModel.pantrySearchQuery.collectAsState()
    val pantryMatches by viewModel.pantryMatches.collectAsState()
    val selectedRecipeForDetail by viewModel.selectedRecipeForDetail.collectAsState()
    val completedSteps by viewModel.completedSteps.collectAsState()
    val spinMealFilter by viewModel.spinMealFilter.collectAsState()

    // Handle back button: if in secondary tab, navigate to planner; if sheet is open, close sheet
    BackHandler(enabled = selectedRecipeForDetail != null || currentTab != AppTab.PLANNER) {
        if (selectedRecipeForDetail != null) {
            viewModel.closeRecipeDetail()
        } else if (currentTab != AppTab.PLANNER) {
            viewModel.setTab(AppTab.PLANNER)
        }
    }

    Scaffold(
        modifier = modifier.fillMaxSize(),
        topBar = {
            TopCulinaryBar(
                language = language,
                cuisine = cuisine,
                onToggleLanguage = { viewModel.toggleLanguage() },
                onSelectCuisine = { viewModel.setCuisine(it) }
            )
        },
        bottomBar = {
            BottomNavBar(
                currentTab = currentTab,
                language = language,
                onTabSelected = { viewModel.setTab(it) }
            )
        }
    ) { innerPadding ->
        Box(
            modifier = Modifier
                .fillMaxSize()
                .padding(innerPadding)
        ) {
            Crossfade(
                targetState = currentTab,
                label = "ScreenTransition"
            ) { tab ->
                when (tab) {
                    AppTab.PLANNER -> {
                        HomeScreen(
                            language = language,
                            cuisine = cuisine,
                            selectedDay = selectedDay,
                            weeklyPlan = weeklyPlan,
                            onSelectDay = { viewModel.setSelectedDay(it) },
                            onShuffleSlot = { day, slot -> viewModel.shuffleMealSlot(day, slot) },
                            onShuffleWeek = { viewModel.shuffleFullWeek() },
                            onViewRecipe = { viewModel.openRecipeDetail(it) }
                        )
                    }

                    AppTab.REGIONAL -> {
                        com.example.ui.screens.RegionalFoodScreen(
                            language = language,
                            regionalMode = regionalMode,
                            selectedStateId = selectedStateId,
                            selectedCountryId = selectedCountryId,
                            onSelectMode = { viewModel.setRegionalMode(it) },
                            onSelectState = { viewModel.setSelectedState(it) },
                            onSelectCountry = { viewModel.setSelectedCountry(it) },
                            onViewRecipe = { viewModel.openRecipeDetail(it) }
                        )
                    }

                    AppTab.PANTRY -> {
                        PantryMatcherScreen(
                            language = language,
                            selectedIngredients = selectedIngredients,
                            searchQuery = pantrySearchQuery,
                            matchedResults = pantryMatches,
                            onToggleIngredient = { viewModel.toggleIngredient(it) },
                            onSelectEssentials = { viewModel.selectEssentialIngredients() },
                            onClearAll = { viewModel.clearAllIngredients() },
                            onSearchChange = { viewModel.setPantrySearchQuery(it) },
                            onViewRecipe = { viewModel.openRecipeDetail(it) }
                        )
                    }

                    AppTab.SPIN_WHEEL -> {
                        SpinWheelScreen(
                            language = language,
                            cuisine = cuisine,
                            selectedMealFilter = spinMealFilter,
                            onSelectMealFilter = { viewModel.setSpinMealFilter(it) },
                            onViewRecipe = { viewModel.openRecipeDetail(it) }
                        )
                    }
                }
            }

            // Recipe 4-Step Detail Bottom Sheet
            selectedRecipeForDetail?.let { recipe ->
                RecipeDetailBottomSheet(
                    recipe = recipe,
                    language = language,
                    completedSteps = completedSteps,
                    onToggleStep = { viewModel.toggleStepCompleted(it) },
                    onDismiss = { viewModel.closeRecipeDetail() }
                )
            }
        }
    }
}
