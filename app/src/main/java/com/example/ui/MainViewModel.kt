package com.example.ui

import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.example.data.RecipeRepository
import com.example.model.AppLanguage
import com.example.model.CuisineType
import com.example.model.MealDay
import com.example.model.MealType
import com.example.model.PantryMatchResult
import com.example.model.Recipe
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.SharingStarted
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.flow.combine
import kotlinx.coroutines.flow.stateIn
import java.util.Calendar

enum class AppTab {
    PLANNER,
    REGIONAL,
    PANTRY,
    SPIN_WHEEL
}

class MainViewModel : ViewModel() {

    private val _language = MutableStateFlow(AppLanguage.HINDI) // Defaulting to Hindi gives instant bilingual feel as requested by "Aaj Kya Banayein", easy to toggle to EN
    val language: StateFlow<AppLanguage> = _language.asStateFlow()

    private val _cuisine = MutableStateFlow(CuisineType.INDIAN)
    val cuisine: StateFlow<CuisineType> = _cuisine.asStateFlow()

    private val _currentTab = MutableStateFlow(AppTab.PLANNER)
    val currentTab: StateFlow<AppTab> = _currentTab.asStateFlow()

    // Regional Section State
    private val _regionalMode = MutableStateFlow(com.example.model.RegionalMode.INDIAN_STATES)
    val regionalMode: StateFlow<com.example.model.RegionalMode> = _regionalMode.asStateFlow()

    private val _selectedStateId = MutableStateFlow("punjab")
    val selectedStateId: StateFlow<String> = _selectedStateId.asStateFlow()

    private val _selectedCountryId = MutableStateFlow("italy")
    val selectedCountryId: StateFlow<String> = _selectedCountryId.asStateFlow()

    private val _selectedDay = MutableStateFlow(getCurrentDayOfWeek())
    val selectedDay: StateFlow<MealDay> = _selectedDay.asStateFlow()

    private val _weeklyPlan = MutableStateFlow(RecipeRepository.generateWeeklyPlan(CuisineType.INDIAN))
    val weeklyPlan: StateFlow<Map<MealDay, Map<MealType, Recipe>>> = _weeklyPlan.asStateFlow()

    private val _selectedIngredients = MutableStateFlow(
        setOf("wheat_flour", "onion", "tomato", "potato", "butter", "olive_oil")
    )
    val selectedIngredients: StateFlow<Set<String>> = _selectedIngredients.asStateFlow()

    private val _pantrySearchQuery = MutableStateFlow("")
    val pantrySearchQuery: StateFlow<String> = _pantrySearchQuery.asStateFlow()

    // Pantry matches dynamically calculated based on selected ingredients and cuisine
    val pantryMatches: StateFlow<List<PantryMatchResult>> = combine(
        _selectedIngredients,
        _cuisine
    ) { ingredients, cuisineType ->
        RecipeRepository.matchRecipes(ingredients, cuisineType)
    }.stateIn(viewModelScope, SharingStarted.Eagerly, emptyList())

    // Bottom sheet detail
    private val _selectedRecipeForDetail = MutableStateFlow<Recipe?>(null)
    val selectedRecipeForDetail: StateFlow<Recipe?> = _selectedRecipeForDetail.asStateFlow()

    private val _completedSteps = MutableStateFlow<Set<Int>>(emptySet())
    val completedSteps: StateFlow<Set<Int>> = _completedSteps.asStateFlow()

    // Spin the wheel filter
    private val _spinMealFilter = MutableStateFlow<MealType?>(null)
    val spinMealFilter: StateFlow<MealType?> = _spinMealFilter.asStateFlow()

    fun setRegionalMode(mode: com.example.model.RegionalMode) {
        _regionalMode.value = mode
    }

    fun setSelectedState(id: String) {
        _selectedStateId.value = id
    }

    fun setSelectedCountry(id: String) {
        _selectedCountryId.value = id
    }

    fun toggleLanguage() {
        _language.value = if (_language.value == AppLanguage.HINDI) AppLanguage.ENGLISH else AppLanguage.HINDI
    }

    fun setLanguage(lang: AppLanguage) {
        _language.value = lang
    }

    fun setCuisine(newCuisine: CuisineType) {
        if (_cuisine.value != newCuisine) {
            _cuisine.value = newCuisine
            _weeklyPlan.value = RecipeRepository.generateWeeklyPlan(newCuisine)
        }
    }

    fun setTab(tab: AppTab) {
        _currentTab.value = tab
    }

    fun setSelectedDay(day: MealDay) {
        _selectedDay.value = day
    }

    fun shuffleMealSlot(day: MealDay, mealType: MealType) {
        val currentPlan = _weeklyPlan.value.toMutableMap()
        val dayMeals = currentPlan[day]?.toMutableMap() ?: mutableMapOf()
        val currentRecipeId = dayMeals[mealType]?.id ?: ""
        val newRecipe = RecipeRepository.getAlternativeRecipe(_cuisine.value, mealType, currentRecipeId)
        dayMeals[mealType] = newRecipe
        currentPlan[day] = dayMeals
        _weeklyPlan.value = currentPlan
    }

    fun shuffleFullWeek() {
        _weeklyPlan.value = RecipeRepository.generateWeeklyPlan(_cuisine.value)
    }

    fun toggleIngredient(id: String) {
        val current = _selectedIngredients.value.toMutableSet()
        if (current.contains(id)) {
            current.remove(id)
        } else {
            current.add(id)
        }
        _selectedIngredients.value = current
    }

    fun selectEssentialIngredients() {
        _selectedIngredients.value = setOf(
            "wheat_flour", "rice", "onion", "tomato", "potato",
            "ginger_garlic", "green_chili", "butter", "olive_oil", "cheese", "paneer"
        )
    }

    fun clearAllIngredients() {
        _selectedIngredients.value = emptySet()
    }

    fun setPantrySearchQuery(query: String) {
        _pantrySearchQuery.value = query
    }

    fun setSpinMealFilter(filter: MealType?) {
        _spinMealFilter.value = filter
    }

    fun openRecipeDetail(recipe: Recipe) {
        _completedSteps.value = emptySet()
        _selectedRecipeForDetail.value = recipe
    }

    fun closeRecipeDetail() {
        _selectedRecipeForDetail.value = null
    }

    fun toggleStepCompleted(stepIndex: Int) {
        val current = _completedSteps.value.toMutableSet()
        if (current.contains(stepIndex)) {
            current.remove(stepIndex)
        } else {
            current.add(stepIndex)
        }
        _completedSteps.value = current
    }

    private fun getCurrentDayOfWeek(): MealDay {
        return when (Calendar.getInstance().get(Calendar.DAY_OF_WEEK)) {
            Calendar.MONDAY -> MealDay.MON
            Calendar.TUESDAY -> MealDay.TUE
            Calendar.WEDNESDAY -> MealDay.WED
            Calendar.THURSDAY -> MealDay.THU
            Calendar.FRIDAY -> MealDay.FRI
            Calendar.SATURDAY -> MealDay.SAT
            Calendar.SUNDAY -> MealDay.SUN
            else -> MealDay.MON
        }
    }
}
