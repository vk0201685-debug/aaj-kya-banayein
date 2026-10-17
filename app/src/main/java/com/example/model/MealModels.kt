package com.example.model

enum class CuisineType(
    val flag: String,
    val title: LocalizedText,
    val subtitle: LocalizedText
) {
    INDIAN(
        flag = "🇮🇳",
        title = AppStrings.cuisineIndian,
        subtitle = LocalizedText("Desi, Curries, Rotis & Spices", "मसालेदार दालें, रोटियां, पराठे और करी")
    ),
    CONTINENTAL(
        flag = "🌍",
        title = AppStrings.cuisineContinental,
        subtitle = LocalizedText("Pastas, Pizzas, Bowls & Salads", "पास्ता, पिज़्ज़ा, बेक्ड डिश व सूप")
    )
}

enum class MealType(
    val iconEmoji: String,
    val title: LocalizedText
) {
    BREAKFAST("🌅", AppStrings.breakfast),
    LUNCH("☀️", AppStrings.lunch),
    DINNER("🌙", AppStrings.dinner)
}

enum class MealDay(
    val shortName: String,
    val shortNameHi: String,
    val title: LocalizedText
) {
    MON("Mon", "सोम", AppStrings.mon),
    TUE("Tue", "मंगल", AppStrings.tue),
    WED("Wed", "बुध", AppStrings.wed),
    THU("Thu", "गुरु", AppStrings.thu),
    FRI("Fri", "शुक्र", AppStrings.fri),
    SAT("Sat", "शनि", AppStrings.sat),
    SUN("Sun", "रवि", AppStrings.sun)
}

enum class IngredientCategory(
    val title: LocalizedText,
    val iconEmoji: String
) {
    STAPLES(LocalizedText("Grains & Flours", "अनाज व आटा"), "🌾"),
    VEGGIES(LocalizedText("Vegetables", "सब्जियां"), "🥬"),
    DAIRY_PROTEIN(LocalizedText("Dairy & Pulses", "डेयरी व दालें"), "🧀"),
    SPICES_SAUCES(LocalizedText("Oils & Condiments", "तेल व मसाले"), "🫙")
}

data class Ingredient(
    val id: String,
    val nameEn: String,
    val nameHi: String,
    val category: IngredientCategory,
    val emoji: String
) {
    fun localizedName(lang: AppLanguage): String = if (lang == AppLanguage.HINDI) nameHi else nameEn
}

data class Recipe(
    val id: String,
    val nameEn: String,
    val nameHi: String,
    val descriptionEn: String,
    val descriptionHi: String,
    val cuisine: CuisineType,
    val mealTypes: List<MealType>,
    val prepTimeMinutes: Int,
    val cookTimeMinutes: Int,
    val caloriesApprox: Int,
    val isVegetarian: Boolean = true,
    val emoji: String,
    val tags: List<String>,
    val requiredIngredientIds: List<String>,
    val stepsEn: List<String>, // Exactly 4 clear steps
    val stepsHi: List<String>, // Exactly 4 clear steps
    val chefTipEn: String,
    val chefTipHi: String
) {
    val totalTimeMinutes: Int get() = prepTimeMinutes + cookTimeMinutes

    fun localizedName(lang: AppLanguage): String = if (lang == AppLanguage.HINDI) nameHi else nameEn
    fun localizedDesc(lang: AppLanguage): String = if (lang == AppLanguage.HINDI) descriptionHi else descriptionEn
    fun localizedSteps(lang: AppLanguage): List<String> = if (lang == AppLanguage.HINDI) stepsHi else stepsEn
    fun localizedChefTip(lang: AppLanguage): String = if (lang == AppLanguage.HINDI) chefTipHi else chefTipEn
}

data class PantryMatchResult(
    val recipe: Recipe,
    val matchedCount: Int,
    val totalRequired: Int,
    val matchPercentage: Int,
    val matchedIngredients: List<Ingredient>,
    val missingIngredients: List<Ingredient>
)
