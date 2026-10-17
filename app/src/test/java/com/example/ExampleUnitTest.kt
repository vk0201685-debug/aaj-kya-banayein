package com.example

import com.example.data.RecipeRepository
import com.example.data.RegionalFoodRepository
import com.example.model.CuisineType
import com.example.model.MealDay
import com.example.model.MealType
import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertNotNull
import org.junit.Assert.assertTrue
import org.junit.Test

class ExampleUnitTest {

    @Test
    fun testRecipesHaveExactFourStepsBothLanguages() {
        val allRecipes = RecipeRepository.getAllRecipes()
        assertTrue("Should have recipes in repository", allRecipes.isNotEmpty())

        for (recipe in allRecipes) {
            assertEquals("Recipe ${recipe.id} must have exactly 4 English steps", 4, recipe.stepsEn.size)
            assertEquals("Recipe ${recipe.id} must have exactly 4 Hindi steps", 4, recipe.stepsHi.size)
            assertTrue("Recipe ${recipe.id} must have valid nameEn", recipe.nameEn.isNotBlank())
            assertTrue("Recipe ${recipe.id} must have valid nameHi", recipe.nameHi.isNotBlank())
            assertTrue("Recipe ${recipe.id} must have required ingredients", recipe.requiredIngredientIds.isNotEmpty())
        }
    }

    @Test
    fun testIndianStatesHaveAtLeastThreeDishes() {
        val states = RegionalFoodRepository.indianStates
        assertTrue("Should have Indian states", states.size >= 8)

        for (state in states) {
            assertTrue("State ${state.id} must have at least 3 dishes", state.dishes.size >= 3)
            assertTrue("State ${state.id} nameEn must not be blank", state.nameEn.isNotBlank())
            assertTrue("State ${state.id} nameHi must not be blank", state.nameHi.isNotBlank())
            for (dish in state.dishes) {
                assertEquals(4, dish.stepsEn.size)
                assertEquals(4, dish.stepsHi.size)
            }
        }
    }

    @Test
    fun testWorldCountriesHaveAtLeastThreeDishes() {
        val countries = RegionalFoodRepository.worldCountries
        assertTrue("Should have World countries", countries.size >= 7)

        for (country in countries) {
            assertTrue("Country ${country.id} must have at least 3 dishes", country.dishes.size >= 3)
            assertTrue("Country ${country.id} nameEn must not be blank", country.nameEn.isNotBlank())
            assertTrue("Country ${country.id} nameHi must not be blank", country.nameHi.isNotBlank())
            for (dish in country.dishes) {
                assertEquals(4, dish.stepsEn.size)
                assertEquals(4, dish.stepsHi.size)
            }
        }
    }

    @Test
    fun testPantryMatchingScoring() {
        val selected = setOf("poha", "onion", "green_chili", "mustard_cumin", "turmeric_chili", "olive_oil")
        val matches = RecipeRepository.matchRecipes(selected, CuisineType.INDIAN)

        assertTrue(matches.isNotEmpty())
        val pohaMatch = matches.firstOrNull { it.recipe.id == "ind_poha" }
        assertNotNull(pohaMatch)
        assertEquals(100, pohaMatch!!.matchPercentage)
        assertEquals(0, pohaMatch.missingIngredients.size)
    }

    @Test
    fun testWeeklyPlanGenerationCoversAllDaysAndMeals() {
        val plan = RecipeRepository.generateWeeklyPlan(CuisineType.INDIAN)
        assertEquals(7, plan.size)

        for (day in MealDay.values()) {
            val dayMeals = plan[day]
            assertNotNull("Day $day should have meals", dayMeals)
            assertNotNull("Breakfast should exist", dayMeals?.get(MealType.BREAKFAST))
            assertNotNull("Lunch should exist", dayMeals?.get(MealType.LUNCH))
            assertNotNull("Dinner should exist", dayMeals?.get(MealType.DINNER))
        }
    }
}
