package com.example.model

enum class AppLanguage(val code: String, val displayName: String, val shortLabel: String) {
    ENGLISH("en", "English", "EN"),
    HINDI("hi", "हिन्दी", "हिन्दी")
}

data class LocalizedText(
    val en: String,
    val hi: String
) {
    fun get(lang: AppLanguage): String = if (lang == AppLanguage.HINDI) hi else en
}

object AppStrings {
    val appTitle = LocalizedText("Aaj Kya Banayein", "आज क्या बनाएं")
    val appSubtitle = LocalizedText("Daily Food Decision & Recipe Guide", "दैनिक भोजन योजना और आसान रेसिपी गाइड")

    // Navigation
    val navPlanner = LocalizedText("Meal Plan", "भोजन योजना")
    val navRegional = LocalizedText("Famous Food", "प्रसिद्ध स्वाद")
    val navPantry = LocalizedText("Pantry Match", "रसोई सामग्री")
    val navSpin = LocalizedText("Spin Wheel", "पहिया घुमाएं")

    // Regional Section
    val regionalTitle = LocalizedText("State & World Famous Food", "राज्य व विश्व प्रसिद्ध व्यंजन")
    val regionalDesc = LocalizedText("Explore top authentic delicacies by region", "विभिन्न राज्यों और देशों के प्रसिद्ध पारंपरिक व्यंजन")
    val indianStatesTab = LocalizedText("🇮🇳 Indian States", "🇮🇳 भारतीय राज्य")
    val worldCountriesTab = LocalizedText("🌍 World Countries", "🌍 दुनिया के देश")
    val selectStatePrompt = LocalizedText("Select a State", "राज्य चुनें")
    val selectCountryPrompt = LocalizedText("Select a Country", "देश चुनें")
    val topThreeDishes = LocalizedText("Top 3 Famous Dishes", "शीर्ष 3 प्रसिद्ध व्यंजन")
    val authenticRecipe = LocalizedText("Authentic Recipe", "पारंपरिक विधि")

    // Cuisines
    val cuisineIndian = LocalizedText("Indian (Desi)", "भारतीय (देसी)")
    val cuisineContinental = LocalizedText("Continental (Foreign)", "कॉन्टिनेंटल (विदेशी)")

    // Meals
    val breakfast = LocalizedText("Breakfast", "नाश्ता")
    val lunch = LocalizedText("Lunch", "दोपहर का खाना")
    val dinner = LocalizedText("Dinner", "रात का खाना")

    // Days
    val mon = LocalizedText("Monday", "सोमवार")
    val tue = LocalizedText("Tuesday", "मंगलवार")
    val wed = LocalizedText("Wednesday", "बुधवार")
    val thu = LocalizedText("Thursday", "गुरुवार")
    val fri = LocalizedText("Friday", "शुक्रवार")
    val sat = LocalizedText("Saturday", "शनिवार")
    val sun = LocalizedText("Sunday", "रविवार")

    // Planner UI
    val planWeeklyTitle = LocalizedText("Weekly Meal Planner", "साप्ताहिक भोजन तालिका")
    val planWeeklyDesc = LocalizedText("Automated fresh choices for every meal", "प्रत्येक भोजन के लिए स्वचालित ताज़ा सुझाव")
    val shuffleMeal = LocalizedText("Shuffle", "बदलें")
    val shuffleAll = LocalizedText("Shuffle Week", "पूरा सप्ताह बदलें")
    val viewRecipe = LocalizedText("View 4-Step Recipe", "4-स्टेप रेसिपी देखें")
    val prepTime = LocalizedText("Prep", "तैयारी")
    val cookTime = LocalizedText("Cook", "पकाना")
    val minutes = LocalizedText("mins", "मिनट")

    // Pantry UI
    val pantryTitle = LocalizedText("What's in Your Pantry?", "आपकी रसोई में क्या है?")
    val pantryDesc = LocalizedText("Select ingredients available right now at home", "घर पर मौजूद सामग्री चुनें और मैचिंग रेसिपी पाएं")
    val searchIngredient = LocalizedText("Search ingredients...", "सामग्री खोजें...")
    val selectAllCore = LocalizedText("Select Essentials", "ज़रूरी सामग्री चुनें")
    val clearSelection = LocalizedText("Clear All", "सभी हटाएं")
    val matchedRecipes = LocalizedText("Recipes You Can Make", "आप ये व्यंजन बना सकते हैं")
    val ingredientsSelected = LocalizedText("ingredients selected", "सामग्री चुनी गई")
    val fullMatch = LocalizedText("100% Match!", "100% उपलब्ध!")
    val missingCount = LocalizedText("missing", "कम")
    val youHave = LocalizedText("You have:", "आपके पास है:")
    val youNeed = LocalizedText("Need to get:", "ज़रूरत पड़ेगी:")
    val noMatchFound = LocalizedText("No recipes matched yet. Try selecting more items!", "कोई रेसिपी मैच नहीं हुई। और सामग्री चुनकर देखें!")

    // Spin UI
    val spinTitle = LocalizedText("Can't Decide What to Cook?", "समझ नहीं आ रहा क्या बनाएं?")
    val spinSubtitle = LocalizedText("Give the wheel a spin and let fate decide your meal!", "पहिया घुमाएं और अपनी पसंद का फैसला छोड़ दें किस्मत पर!")
    val spinButton = LocalizedText("SPIN THE WHEEL", "पहिया घुमाएं")
    val spinning = LocalizedText("Spinning...", "पहिया घूम रहा है...")
    val winnerAnnouncement = LocalizedText("Today's Winner Dish!", "आज का खास व्यंजन!")
    val spinAgain = LocalizedText("Spin Again", "फिर से घुमाएं")
    val filterAll = LocalizedText("All Meals", "सभी भोजन")

    // Recipe Dialog
    val ingredientsHeading = LocalizedText("Required Ingredients", "ज़रूरी सामग्री")
    val stepsHeading = LocalizedText("Quick 4-Step Instructions", "त्वरित 4-स्टेप्स बनाने की विधि")
    val chefTipHeading = LocalizedText("Chef's Secret Tip", "शेफ की खास टिप")
    val markDone = LocalizedText("Done", "पूरा हुआ")
    val close = LocalizedText("Close", "बंद करें")
    val vegetarian = LocalizedText("Pure Veg", "शुद्ध शाकाहारी")
    val calories = LocalizedText("Approx. Calories", "अनुमानित कैलोरी")
    val kcal = LocalizedText("kcal", "किलोकैलरी")
}
