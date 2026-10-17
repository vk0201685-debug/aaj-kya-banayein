package com.example.data

import com.example.model.AppLanguage
import com.example.model.CuisineType
import com.example.model.Ingredient
import com.example.model.IngredientCategory
import com.example.model.MealDay
import com.example.model.MealType
import com.example.model.PantryMatchResult
import com.example.model.Recipe

object RecipeRepository {

    val allIngredients: List<Ingredient> = listOf(
        // Staples
        Ingredient("wheat_flour", "Wheat Flour (Atta)", "गेहूं का आटा", IngredientCategory.STAPLES, "🌾"),
        Ingredient("rice", "Basmati Rice", "बासमती चावल", IngredientCategory.STAPLES, "🍚"),
        Ingredient("poha", "Flattened Rice (Poha)", "पोहा", IngredientCategory.STAPLES, "🥣"),
        Ingredient("bread", "Bread Slices", "ब्रेड स्लाइस", IngredientCategory.STAPLES, "🍞"),
        Ingredient("pasta", "Pasta / Macaroni", "पास्ता / मैकरोनी", IngredientCategory.STAPLES, "🍝"),
        Ingredient("oats", "Rolled Oats", "ओट्स", IngredientCategory.STAPLES, "🥣"),
        Ingredient("suji", "Semolina (Rava/Suji)", "सूजी / रवा", IngredientCategory.STAPLES, "🌾"),
        Ingredient("besan", "Gram Flour (Besan)", "बेसन", IngredientCategory.STAPLES, "🌾"),

        // Vegetables
        Ingredient("onion", "Onion", "प्याज़", IngredientCategory.VEGGIES, "🧅"),
        Ingredient("tomato", "Tomato", "टमाटर", IngredientCategory.VEGGIES, "🍅"),
        Ingredient("potato", "Potato (Aloo)", "आलू", IngredientCategory.VEGGIES, "🥔"),
        Ingredient("ginger_garlic", "Ginger & Garlic", "अदरक-लहसुन", IngredientCategory.VEGGIES, "🧄"),
        Ingredient("green_chili", "Green Chili", "हरी मिर्च", IngredientCategory.VEGGIES, "🌶️"),
        Ingredient("peas", "Green Peas (Matar)", "हरी मटर", IngredientCategory.VEGGIES, "🟢"),
        Ingredient("spinach", "Fresh Spinach (Palak)", "ताजा पालक", IngredientCategory.VEGGIES, "🥬"),
        Ingredient("capsicum", "Bell Pepper (Capsicum)", "शिमला मिर्च", IngredientCategory.VEGGIES, "🫑"),
        Ingredient("mushroom", "Button Mushrooms", "मशरूम", IngredientCategory.VEGGIES, "🍄"),
        Ingredient("carrot", "Carrots", "गाजर", IngredientCategory.VEGGIES, "🥕"),

        // Dairy & Protein
        Ingredient("paneer", "Cottage Cheese (Paneer)", "पनीर", IngredientCategory.DAIRY_PROTEIN, "🧀"),
        Ingredient("milk", "Milk", "दूध", IngredientCategory.DAIRY_PROTEIN, "🥛"),
        Ingredient("dahi", "Yogurt / Curd (Dahi)", "दही", IngredientCategory.DAIRY_PROTEIN, "🥣"),
        Ingredient("cheese", "Cheese (Cheddar/Mozzarella)", "चीज़", IngredientCategory.DAIRY_PROTEIN, "🧀"),
        Ingredient("butter", "Butter / Ghee", "मक्खन / घी", IngredientCategory.DAIRY_PROTEIN, "🧈"),
        Ingredient("toor_dal", "Yellow Dal (Toor/Moong)", "अरहर / मूंग दाल", IngredientCategory.DAIRY_PROTEIN, "🍲"),
        Ingredient("chole", "Chickpeas (Chole)", "काबुली चने", IngredientCategory.DAIRY_PROTEIN, "🧆"),
        Ingredient("rajma", "Red Kidney Beans (Rajma)", "राजमा", IngredientCategory.DAIRY_PROTEIN, "🫘"),
        Ingredient("egg", "Fresh Eggs", "अंडे", IngredientCategory.DAIRY_PROTEIN, "🥚"),

        // Spices & Condiments
        Ingredient("mustard_cumin", "Cumin & Mustard Seeds", "जीरा व राई", IngredientCategory.SPICES_SAUCES, "🧂"),
        Ingredient("turmeric_chili", "Turmeric & Chili Powder", "हल्दी व लाल मिर्च", IngredientCategory.SPICES_SAUCES, "🌶️"),
        Ingredient("garam_masala", "Garam Masala Spices", "गरम मसाला", IngredientCategory.SPICES_SAUCES, "🌿"),
        Ingredient("olive_oil", "Cooking / Olive Oil", "तेल", IngredientCategory.SPICES_SAUCES, "🫒"),
        Ingredient("italian_herbs", "Oregano & Chili Flakes", "ऑरेगैनो व हर्ब्स", IngredientCategory.SPICES_SAUCES, "🌿"),
        Ingredient("tomato_sauce", "Tomato Purée / Sauce", "टमाटर प्यूरी / सॉस", IngredientCategory.SPICES_SAUCES, "🥫")
    )

    val indianRecipes: List<Recipe> = listOf(
        Recipe(
            id = "ind_poha",
            nameEn = "Kanda Poha",
            nameHi = "कांदा पोहा",
            descriptionEn = "Classic light flattened rice tossed with onions, green chilies, turmeric, and crunchy peanuts.",
            descriptionHi = "प्याज़, हरी मिर्च, हल्दी और कुरकुरी मूंगफली के साथ बना हल्का व स्वादिष्ट पोहा।",
            cuisine = CuisineType.INDIAN,
            mealTypes = listOf(MealType.BREAKFAST),
            prepTimeMinutes = 10,
            cookTimeMinutes = 10,
            caloriesApprox = 240,
            emoji = "🥣",
            tags = listOf("Quick 15m", "Light Breakfast", "Traditional"),
            requiredIngredientIds = listOf("poha", "onion", "green_chili", "mustard_cumin", "turmeric_chili", "olive_oil"),
            stepsEn = listOf(
                "Rinse poha in a colander under running water for 30 seconds; drain completely and rest with a pinch of turmeric and salt.",
                "Heat 1 tbsp oil in a pan, crackle mustard seeds and cumin, then sauté chopped green chilies and sliced onions until translucent.",
                "Add a pinch of turmeric, salt to taste, and gently fold in the softened poha on low flame for 2-3 minutes.",
                "Squeeze fresh lemon juice, garnish with chopped coriander and roasted peanuts, and serve piping hot!"
            ),
            stepsHi = listOf(
                "पोहे को छलनी में 30 सेकंड धोकर पानी निकाल दें; थोड़ा नमक और चुटकी भर हल्दी मिलाकर एक तरफ रख दें।",
                "कड़ाही में तेल गरम करके राई और जीरा तड़काएं, फिर कटी हरी मिर्च और प्याज़ डालकर पारदर्शी होने तक भूनें।",
                "हल्दी और स्वादानुसार नमक डालकर भीगा हुआ पोहा हल्के हाथों से मिलाएं और धीमी आंच पर 2-3 मिनट ढककर पकाएं।",
                "ऊपर से नींबू का रस निचोड़ें, हरा धनिया और भुनी मूंगफली डालकर गरमा-गरम चाय के साथ परोसें!"
            ),
            chefTipEn = "Do not soak poha in water; a quick rinse is all it takes to keep grains non-sticky and fluffy.",
            chefTipHi = "पोहे को पानी में भिगोकर न रखें; बस छलनी में धोएं ताकि दाने खिले-खिले और मुलायम रहें।"
        ),
        Recipe(
            id = "ind_aloo_paratha",
            nameEn = "Stuffed Aloo Paratha",
            nameHi = "आलू पराठा",
            descriptionEn = "Golden griddled flatbread stuffed with spiced mashed potatoes and dollops of white butter.",
            descriptionHi = "मसालेदार उबले आलू की स्वादिष्ट भरावन से तैयार कुरकुरा पराठा और ऊपर मक्खन।",
            cuisine = CuisineType.INDIAN,
            mealTypes = listOf(MealType.BREAKFAST, MealType.LUNCH),
            prepTimeMinutes = 15,
            cookTimeMinutes = 15,
            caloriesApprox = 320,
            emoji = "🫓",
            tags = listOf("Comfort Classic", "Crowd Favorite", "Filling"),
            requiredIngredientIds = listOf("wheat_flour", "potato", "onion", "green_chili", "garam_masala", "butter"),
            stepsEn = listOf(
                "Boil, peel, and thoroughly mash potatoes; mix with finely chopped onion, green chili, garam masala, and salt.",
                "Knead a smooth, pliable wheat flour dough using water and rest for 10 minutes.",
                "Roll a small dough ball, place a generous potato stuffing sphere in center, seal tightly, and roll gently into an even circle.",
                "Roast on a hot tawa with generous butter or ghee on both sides until crispy and golden brown."
            ),
            stepsHi = listOf(
                "उबले आलू को अच्छी तरह मैश करें; इसमें बारीक प्याज़, हरी मिर्च, गरम मसाला और नमक मिलाएं।",
                "गेहूं के आटे में पानी डालकर नरम व लचीला आटा गूंथ लें और 10 मिनट के लिए रख दें।",
                "लोई बेलकर बीच में आलू का भरावन रखें, चारों तरफ से बंद करें और हल्के हाथों से गोल पराठा बेलें।",
                "गर्म तवे पर दोनों तरफ मक्खन या देसी घी लगाकर सुनहरा व कुरकुरा होने तक सेकें।"
            ),
            chefTipEn = "Cool the boiled potatoes completely before mashing to prevent the paratha from tearing while rolling.",
            chefTipHi = "उबले आलू पूरी तरह ठंडे होने के बाद ही मैश करें, इससे पराठा बेलते समय फटेगा नहीं।"
        ),
        Recipe(
            id = "ind_paneer_butter_masala",
            nameEn = "Paneer Butter Masala",
            nameHi = "पनीर बटर मसाला",
            descriptionEn = "Soft paneer cubes in a silky, mildly sweet and rich tomato-cashew creamy gravy.",
            descriptionHi = "मलाईदार टमाटर और मक्खन की स्वादिष्ट ग्रेवी में डूबे नरम पनीर के टुकड़े।",
            cuisine = CuisineType.INDIAN,
            mealTypes = listOf(MealType.LUNCH, MealType.DINNER),
            prepTimeMinutes = 15,
            cookTimeMinutes = 20,
            caloriesApprox = 380,
            emoji = "🍛",
            tags = listOf("Restaurant Style", "Rich & Creamy", "Special"),
            requiredIngredientIds = listOf("paneer", "tomato", "onion", "ginger_garlic", "butter", "garam_masala", "turmeric_chili"),
            stepsEn = listOf(
                "Sauté chopped onions, tomatoes, and ginger-garlic in 1 tsp butter until mushy; blend into a silky smooth puree.",
                "Melt remaining butter in the pan, temper with bay leaf, add the puree, red chili powder, turmeric, and cook until oil separates.",
                "Pour in 1/2 cup warm water, season with salt and garam masala, and simmer into a velvety rich gravy.",
                "Gently slide in fresh paneer cubes, swirl with fresh cream and crushed kasuri methi, and simmer for 3 minutes."
            ),
            stepsHi = listOf(
                "कड़ाही में मक्खन डालकर कटे प्याज़, टमाटर और अदरक-लहसुन भूनें; ठंडा करके मिक्सी में महीन पीस लें।",
                "पैन में मक्खन गरम करें, तैयार प्यूरी, हल्दी व कश्मीरी लाल मिर्च डालकर तेल छूटने तक भूनें।",
                "आधा कप गुनगुना पानी, नमक और गरम मसाला मिलाकर ग्रेवी को धीमी आंच पर 5 मिनट उबालें।",
                "पनीर के टुकड़े डालें, ऊपर से थोड़ी मलाई और कसूरी मेथी मसलकर डालें, 3 मिनट पकाकर सर्व करें।"
            ),
            chefTipEn = "Soak paneer cubes in warm salted water for 10 minutes before adding to make them melt-in-mouth soft.",
            chefTipHi = "पनीर के टुकड़ों को डालने से पहले 10 मिनट गुनगुने नमकीन पानी में भिगो दें, पनीर एकदम रुई जैसा नरम रहेगा।"
        ),
        Recipe(
            id = "ind_rajma_chawal",
            nameEn = "Punjabi Rajma Masala",
            nameHi = "पंजाबी राजमा मसाला",
            descriptionEn = "Melt-in-mouth kidney beans simmered in a luscious onion-tomato masala, served with rice.",
            descriptionHi = "धीमी आंच पर पके मसालेदार राजमा जो जीरा राइस के साथ लाजवाब लगते हैं।",
            cuisine = CuisineType.INDIAN,
            mealTypes = listOf(MealType.LUNCH, MealType.DINNER),
            prepTimeMinutes = 15,
            cookTimeMinutes = 25,
            caloriesApprox = 340,
            emoji = "🫘",
            tags = listOf("North Indian Classic", "High Protein", "Sunday Special"),
            requiredIngredientIds = listOf("rajma", "rice", "onion", "tomato", "ginger_garlic", "garam_masala", "olive_oil"),
            stepsEn = listOf(
                "Pressure cook soaked rajma with salt and whole spices for 5-6 whistles until completely soft.",
                "In a kadai, heat oil and brown the finely minced onions; add ginger-garlic paste and cook till fragrant.",
                "Stir in tomato puree, red chili, turmeric, and coriander powder; fry vigorously until oil leaves the sides.",
                "Add boiled rajma with its broth, mash a few beans with the ladle to thicken the gravy, and simmer for 10 minutes."
            ),
            stepsHi = listOf(
                "रातभर भीगे राजमा को नमक डालकर कुकर में 5-6 सीटी आने तक पूरी तरह गलने तक उबालें।",
                "कड़ाही में तेल गरम करके बारीक प्याज़ को सुनहरा भूनें; फिर अदरक-लहसुन पेस्ट डालकर खुशबू आने तक भूनें।",
                "टमाटर की प्यूरी, हल्दी, लाल मिर्च और धनिया पाउडर डालकर मसाला तेल छोड़ने तक अच्छी तरह भूनें।",
                "उबले राजमा पानी सहित डालें, थोड़े दाने करछी से मैश करें ताकि तरी गाढ़ी बने, 10 मिनट धीमी आंच पर पकाएं।"
            ),
            chefTipEn = "Lightly mashing 15% of boiled kidney beans against the pan side gives that authentic dhaba thickness without cornstarch.",
            chefTipHi = "थोड़े से राजमा को करछी से दबाकर मैश कर दें, इससे तरी बिना किसी मिलावट के एकदम गाढ़ी और स्वादिष्ट बनेगी।"
        ),
        Recipe(
            id = "ind_dal_tadka",
            nameEn = "Dal Tadka with Jeera Rice",
            nameHi = "दाल तड़का और जीरा राइस",
            descriptionEn = "Creamy yellow lentils finished with a smoking ghee tempering of cumin, garlic, and dried chilies.",
            descriptionHi = "लहसुन, जीरा और हींग के तड़के वाली अरहर दाल और सुगंधित जीरा राइस।",
            cuisine = CuisineType.INDIAN,
            mealTypes = listOf(MealType.LUNCH, MealType.DINNER),
            prepTimeMinutes = 10,
            cookTimeMinutes = 20,
            caloriesApprox = 290,
            emoji = "🍲",
            tags = listOf("Everyday Comfort", "Healthy & Easy", "Pure Soul Food"),
            requiredIngredientIds = listOf("toor_dal", "rice", "onion", "tomato", "ginger_garlic", "butter", "mustard_cumin"),
            stepsEn = listOf(
                "Pressure cook rinsed yellow toor dal with turmeric and salt for 3 whistles until creamy.",
                "In a small pan, melt 2 tbsp ghee/butter; add cumin seeds, sliced garlic, and dried red chilies until golden.",
                "Toss in chopped onions and tomatoes; cook for 3 minutes with a pinch of garam masala.",
                "Pour the smoking tadka sizzling over the boiled dal, cover immediately with lid to trap aroma, and serve with jeera rice."
            ),
            stepsHi = listOf(
                "अरहर दाल को हल्दी और नमक डालकर कुकर में 3 सीटी आने तक अच्छी तरह पकाएं।",
                "तड़का पैन में देसी घी या मक्खन गरम करें; जीरा, बारीक कटा लहसुन और साबुत लाल मिर्च सुनहरी होने तक भूनें।",
                "कटा प्याज़ और टमाटर डालकर 3 मिनट भूनें और चुटकी भर गरम मसाला मिलाएं।",
                "उबलती हुई दाल पर गरमा-गरम छौंक लगाएं, ढक्कन तुरंत बंद करें ताकि खुशबू समा जाए, जीरा राइस के साथ परोसें।"
            ),
            chefTipEn = "Letting the garlic turn light golden-brown in ghee gives dal that signature restaurant smoky flavor.",
            chefTipHi = "लहसुन को घी में हल्का सुनहरा होने तक भूनें, इससे दाल में रेस्टोरेंट जैसा असली स्वाद और खुशबू आती है।"
        ),
        Recipe(
            id = "ind_palak_paneer",
            nameEn = "Creamy Palak Paneer",
            nameHi = "पालक पनीर",
            descriptionEn = "Vibrant blanched spinach puree gently spiced and studded with soft paneer cubes.",
            descriptionHi = "ताज़ा हरी पालक की ग्रेवी और मसालों में पकाया गया स्वादिष्ट व पौष्टिक पनीर।",
            cuisine = CuisineType.INDIAN,
            mealTypes = listOf(MealType.LUNCH, MealType.DINNER),
            prepTimeMinutes = 15,
            cookTimeMinutes = 15,
            caloriesApprox = 310,
            emoji = "🥬",
            tags = listOf("Nutritious", "Iron Rich", "Classic Green"),
            requiredIngredientIds = listOf("spinach", "paneer", "onion", "tomato", "ginger_garlic", "butter", "turmeric_chili"),
            stepsEn = listOf(
                "Blanch fresh spinach leaves in boiling water for 2 minutes, then instantly plunge into ice water to retain bright green color.",
                "Blend blanched spinach with 1 green chili and ginger into a smooth, silky green puree.",
                "Heat butter in a pan, sauté onions, garlic, and tomato with mild cumin and turmeric powder.",
                "Pour in the spinach puree, add paneer cubes with salt and garam masala, and simmer on gentle heat for 4 minutes."
            ),
            stepsHi = listOf(
                "पालक को उबलते पानी में 2 मिनट ब्लांच करें, फिर तुरंत ठंडे पानी में डालें ताकि हरा रंग बरकरार रहे।",
                "पालक, हरी मिर्च और अदरक को मिक्सी में पीसकर स्मूथ हरी प्यूरी बना लें।",
                "पैन में मक्खन गरम करें, बारीक प्याज़, लहसुन और टमाटर को जीरा व हल्दी के साथ भूनें।",
                "पालक प्यूरी और पनीर के टुकड़े डालें, स्वादानुसार नमक व गरम मसाला मिलाकर 4 मिनट धीमी आंच पर पकाएं।"
            ),
            chefTipEn = "Never cover the pan while simmering spinach puree, or it will lose its emerald vibrant hue.",
            chefTipHi = "पालक की ग्रेवी पकाते समय पैन को ढके नहीं, खुला पकाने से हरा रंग खूबसूरत और चमकदार बना रहता है।"
        ),
        Recipe(
            id = "ind_besan_chilla",
            nameEn = "Crispy Besan Chilla",
            nameHi = "कुरकुरा बेसन चीला",
            descriptionEn = "Savory spiced gram flour crepes packed with chopped onions, tomatoes, and green chilies.",
            descriptionHi = "प्याज़, टमाटर और मसालों से भरपूर पौष्टिक, झटपट और स्वादिष्ट बेसन चीला।",
            cuisine = CuisineType.INDIAN,
            mealTypes = listOf(MealType.BREAKFAST, MealType.DINNER),
            prepTimeMinutes = 10,
            cookTimeMinutes = 10,
            caloriesApprox = 210,
            emoji = "🥞",
            tags = listOf("Quick 15m", "High Protein", "Weight-Loss Friendly"),
            requiredIngredientIds = listOf("besan", "onion", "tomato", "green_chili", "turmeric_chili", "olive_oil"),
            stepsEn = listOf(
                "Whisk gram flour (besan) with water into a smooth, pourable pancake-style batter without lumps.",
                "Mix in finely diced onions, juicy tomatoes, minced green chilies, ajwain, turmeric, and salt.",
                "Heat a non-stick tawa, ladle the batter, and spread evenly into a thin round circle.",
                "Drizzle a few drops of oil around edges, flip when bubbles form, and cook both sides crisp and golden."
            ),
            stepsHi = listOf(
                "एक बर्तन में बेसन, थोड़ा पानी मिलाकर चिकना और बिना गुठली वाला घोल तैयार करें।",
                "घोल में बारीक कटा प्याज़, टमाटर, हरी मिर्च, अजवाइन, हल्दी और नमक अच्छी तरह मिलाएं।",
                "तवा गर्म करके एक कलछी घोल डालें और गोल आकार में पतला फैलाएं।",
                "किनारों पर हल्का तेल लगाएं, नीचे से सिकने पर पलटें और दोनों तरफ से कुरकुरा होने तक सेकें।"
            ),
            chefTipEn = "Adding a pinch of ajwain (carom seeds) aids digestion and provides authentic street-style fragrance.",
            chefTipHi = "घोल में थोड़ी सी अजवाइन मसलकर डालें, इससे पाचन भी अच्छा रहता है और स्वाद लाजवाब आता है।"
        ),
        Recipe(
            id = "ind_pav_bhaji",
            nameEn = "Mumbai Style Pav Bhaji",
            nameHi = "मुंबई पाव भाजी",
            descriptionEn = "Spicy mashed mixed vegetable mash loaded with butter, served with toasted buttery pav buns.",
            descriptionHi = "मक्खन और खास मसालों में घुली मिली-जुली सब्जियां और गरमा-गरम पाव।",
            cuisine = CuisineType.INDIAN,
            mealTypes = listOf(MealType.LUNCH, MealType.DINNER),
            prepTimeMinutes = 15,
            cookTimeMinutes = 20,
            caloriesApprox = 410,
            emoji = "🥖",
            tags = listOf("Street Food", "Buttery Indulgence", "Family Feast"),
            requiredIngredientIds = listOf("potato", "peas", "capsicum", "tomato", "onion", "butter", "bread"),
            stepsEn = listOf(
                "Boil potatoes, peas, and carrots; mash them thoroughly with a potato masher until semi-smooth.",
                "Melt generous butter on a flat tawa or pan; sauté finely diced onions, capsicum, and ginger-garlic paste.",
                "Add tomatoes and 2 tbsp pav bhaji masala, cook till mushy, then combine with mashed vegetables and water.",
                "Simmer while mashing repeatedly, top with a heavy slab of butter, and serve with butter-toasted bread/pav."
            ),
            stepsHi = listOf(
                "आलू, मटर और गाजर को कुकर में उबालें और मैशर से अच्छी तरह मैश कर लें।",
                "तवे या कड़ाही में भरपूर मक्खन पिघलाएं; बारीक कटी शिमला मिर्च, प्याज़ और अदरक-लहसुन भूनें।",
                "टमाटर और पाव भाजी मसाला डालकर भूनें, फिर मैश की हुई सब्जियां और थोड़ा पानी मिलाकर पकाएं।",
                "करछी से लगातार दबाते हुए 8 मिनट उबालें, ऊपर से मक्खन का टुकड़ा रखें और मक्खन में सिके पाव/ब्रेड के साथ परोसें।"
            ),
            chefTipEn = "Finely chopped green capsicum fried in butter right at the start gives that iconic Juhu Beach aroma.",
            chefTipHi = "शुरुआत में ही मक्खन में बारीक शिमला मिर्च भूनें, यही मुंबई चौपाटी वाले स्वाद का असली राज़ है।"
        ),
        Recipe(
            id = "ind_chole_masala",
            nameEn = "Amritsari Chole",
            nameHi = "अमृतसरी छोले",
            descriptionEn = "Robust, dark spiced chickpeas cooked with aromatic spices, onions, and tangy amchur.",
            descriptionHi = "अनारदाना, गरम मसाले और चटपटी तरी में बने गाढ़े व स्वादिष्ट अमृतसरी छोले।",
            cuisine = CuisineType.INDIAN,
            mealTypes = listOf(MealType.LUNCH, MealType.DINNER),
            prepTimeMinutes = 15,
            cookTimeMinutes = 25,
            caloriesApprox = 360,
            emoji = "🧆",
            tags = listOf("High Protein", "Festive", "Rich Gravy"),
            requiredIngredientIds = listOf("chole", "onion", "tomato", "ginger_garlic", "garam_masala", "olive_oil"),
            stepsEn = listOf(
                "Pressure cook soaked chickpeas with tea bag, bay leaf, and salt for 6 whistles until melt-in-mouth soft.",
                "Heat oil in a heavy-bottom pot, brown onion paste slowly, then add ginger-garlic and green chili.",
                "Add tomato puree and chole masala spices; fry on medium flame until thick and dark reddish-brown.",
                "Tip in boiled chickpeas with liquid, simmer for 15 minutes to infuse flavours, and garnish with ginger juliennes."
            ),
            stepsHi = listOf(
                "रातभर भीगे छोले में चायपत्ती की पोटली और नमक डालकर 6 सीटी तक एकदम नरम होने तक उबालें।",
                "कड़ाही में तेल गरम करके प्याज़ का पेस्ट गहरा सुनहरा भूनें; फिर अदरक-लहसुन पेस्ट और हरी मिर्च डालें।",
                "टमाटर प्यूरी और छोले मसाला डालकर मसाला गाढ़ा और तेल छोड़ने तक अच्छी तरह भूनें।",
                "उबले छोले पानी सहित मिलाएं, 15 मिनट धीमी आंच पर पकाएं और ऊपर से लंबी कटी अदरक व धनिया से सजाएं।"
            ),
            chefTipEn = "Boiling chickpeas with a tea bag or dried amla gives the authentic dark color and earthy depth.",
            chefTipHi = "छोले उबालते समय एक टी-बैग डाल दें, इससे छोलों का रंग खूबसूरत डार्क और स्वाद लाजवाब बनता है।"
        ),
        Recipe(
            id = "ind_veg_khichdi",
            nameEn = "Comforting Moong Dal Khichdi",
            nameHi = "मूंग दाल खिचड़ी",
            descriptionEn = "Wholesome, soothing rice and yellow moong pot meal tempered with ghee, cumin, and hing.",
            descriptionHi = "चावल और मूंग दाल का पौष्टिक, हल्का व पाचक भोजन, ऊपर से देसी घी का छौंक।",
            cuisine = CuisineType.INDIAN,
            mealTypes = listOf(MealType.LUNCH, MealType.DINNER),
            prepTimeMinutes = 10,
            cookTimeMinutes = 15,
            caloriesApprox = 260,
            emoji = "🍲",
            tags = listOf("Gentle on Stomach", "Soul Food", "Under 25m"),
            requiredIngredientIds = listOf("rice", "toor_dal", "potato", "peas", "mustard_cumin", "butter", "turmeric_chili"),
            stepsEn = listOf(
                "Wash equal parts rice and yellow moong dal together; soak for 15 minutes.",
                "Heat ghee in a pressure cooker; splutter cumin seeds, hing (asafoetida), and add diced potatoes and peas.",
                "Add soaked rice-dal, turmeric powder, and salt; pour 4 cups water for a soft porridge-like texture.",
                "Pressure cook for 3 whistles on medium flame; stir gently and serve with fresh yogurt and pickle."
            ),
            stepsHi = listOf(
                "चावल और मूंग दाल को बराबर मात्रा में मिलाकर धो लें और 15 मिनट पानी में भिगो दें।",
                "प्रेशर कुकर में देसी घी गरम करें; जीरा, हींग तड़काएं और कटे आलू व मटर डालकर 1 मिनट भूनें।",
                "दाल-चावल, हल्दी, नमक और 4 कप पानी डालें ताकि खिचड़ी एकदम मुलायम व रसीली बने।",
                "कुकर में 3 सीटी लगाएं; भाप निकलने पर खोलें, ऊपर से देसी घी डालकर ताज़ा दही व पापड़ के साथ खाएं।"
            ),
            chefTipEn = "Roasting the yellow moong dal dry for 2 minutes before cooking elevates the nutty aroma tremendously.",
            chefTipHi = "मूंग दाल को पकाने से पहले 2 मिनट सूखा भून लें, इससे खिचड़ी में सोंधी खुशबू आ जाती है।"
        ),
        Recipe(
            id = "ind_matar_paneer",
            nameEn = "Desi Matar Paneer",
            nameHi = "मटर पनीर",
            descriptionEn = "Tender green peas and soft cottage cheese simmered in a homestyle spiced onion-tomato curry.",
            descriptionHi = "मीठी हरी मटर और पनीर के टुकड़ों की हर घर में पसंद की जाने वाली स्वादिष्ट करी।",
            cuisine = CuisineType.INDIAN,
            mealTypes = listOf(MealType.LUNCH, MealType.DINNER),
            prepTimeMinutes = 15,
            cookTimeMinutes = 18,
            caloriesApprox = 330,
            emoji = "🍛",
            tags = listOf("North Indian Favorite", "Protein Rich", "Family Dinner"),
            requiredIngredientIds = listOf("paneer", "peas", "onion", "tomato", "ginger_garlic", "garam_masala", "olive_oil"),
            stepsEn = listOf(
                "Puree sauteed onions, ginger-garlic, and tomatoes into a vibrant base.",
                "Heat oil in a pan, bloom cumin seeds, pour in the puree, and cook with turmeric, coriander, and chili powder.",
                "Add sweet green peas with 1 cup water, cover and simmer until peas are tender and soft.",
                "Fold in paneer cubes, sprinkle garam masala, and cook on gentle flame for 3 minutes before serving."
            ),
            stepsHi = listOf(
                "प्याज़, अदरक-लहसुन और टमाटर को हल्का भूनकर मिक्सी में पीसकर पेस्ट बना लें।",
                "कड़ाही में तेल गरम करें, जीरा तड़काएं और पिसा मसाला डालकर हल्दी, धनिया, मिर्च के साथ तेल छोड़ने तक भूनें।",
                "हरी मटर और एक कप पानी डालें, ढककर मटर के गलने तक 5 मिनट पकाएं।",
                "पनीर के टुकड़े और गरम मसाला डालें, 3 मिनट धीमी आंच पर पकाएं और रोटियों के साथ परोसें।"
            ),
            chefTipEn = "Add a pinch of sugar when cooking peas to preserve their natural sweetness and vibrant emerald color.",
            chefTipHi = "मटर पकाते समय चुटकी भर चीनी डाल दें, इससे मटर का मीठापन और गहरा हरा रंग बरकरार रहता है।"
        ),
        Recipe(
            id = "ind_suji_upma",
            nameEn = "Vegetable Rava Upma",
            nameHi = "वेजिटेबल रवा उपमा",
            descriptionEn = "Fluffy roasted semolina tempered with mustard seeds, curry leaves, veggies, and crunchy cashews.",
            descriptionHi = "भुनी सूजी, राई, कढ़ी पत्ता और ताजी सब्जियों से बना हल्का, स्वादिष्ट व पौष्टिक उपमा।",
            cuisine = CuisineType.INDIAN,
            mealTypes = listOf(MealType.BREAKFAST),
            prepTimeMinutes = 10,
            cookTimeMinutes = 12,
            caloriesApprox = 230,
            emoji = "🥣",
            tags = listOf("South Indian Classic", "Quick 15m", "Zero Fuss"),
            requiredIngredientIds = listOf("suji", "onion", "peas", "carrot", "green_chili", "mustard_cumin", "butter"),
            stepsEn = listOf(
                "Dry roast semolina (rava/suji) on low flame for 4-5 minutes until warm and fragrant; set aside.",
                "Heat ghee/oil in a pan, pop mustard seeds, add green chili, curry leaves, and saute sliced onions and diced veggies.",
                "Pour in 2.5 cups of water with salt and bring to a rolling rolling boil.",
                "Slowly pour in the roasted suji in a steady stream while whisking continuously to avoid lumps; cover and cook for 3 minutes."
            ),
            stepsHi = listOf(
                "सूजी को धीमी आंच पर 4-5 मिनट खुशबू आने तक सूखा भून लें और एक थाली में निकाल लें।",
                "कड़ाही में घी गरम करें, राई, कटी हरी मिर्च, कढ़ी पत्ता और बारीक कटी सब्जियां 2 मिनट भूनें।",
                "ढाई कप पानी और स्वादानुसार नमक डालकर पानी में तेज़ उबाल आने दें।",
                "उबलते पानी में भुनी सूजी धीरे-धीरे डालते हुए लगातार चलाते रहें ताकि गांठ न पड़े; 3 मिनट ढककर पकाएं।"
            ),
            chefTipEn = "Always add suji in a thin stream into boiling water while stirring with the other hand for lump-free perfection.",
            chefTipHi = "उबलते पानी में सूजी धीरे-धीरे डालें और लगातार चलाते रहें, उपमा कभी चिपचिपा नहीं बनेगा और गांठें नहीं पड़ेंगी।"
        )
    )

    val continentalRecipes: List<Recipe> = listOf(
        Recipe(
            id = "cont_pancakes",
            nameEn = "Classic Fluffy Pancakes",
            nameHi = "क्लासिक फ्लफी पैनकेक्स",
            descriptionEn = "Golden, airy breakfast pancakes served with melting butter and sweet syrup.",
            descriptionHi = "मक्खन और शहद के साथ परोसे जाने वाले बेहद नरम, फूले हुए और स्वादिष्ट पैनकेक्स।",
            cuisine = CuisineType.CONTINENTAL,
            mealTypes = listOf(MealType.BREAKFAST),
            prepTimeMinutes = 10,
            cookTimeMinutes = 10,
            caloriesApprox = 280,
            emoji = "🥞",
            tags = listOf("Fluffy & Sweet", "Weekend Breakfast", "Kids Favorite"),
            requiredIngredientIds = listOf("wheat_flour", "milk", "butter", "egg"),
            stepsEn = listOf(
                "In a mixing bowl, whisk flour, sugar, baking powder, and a tiny pinch of salt.",
                "In another bowl, whisk milk, melted butter, and an egg until combined.",
                "Fold the wet ingredients into the dry mixture gently just until combined (small lumps are totally okay!).",
                "Pour 1/4 cup batter onto a buttered non-stick pan; flip when bubbles burst and cook golden on both sides."
            ),
            stepsHi = listOf(
                "एक कटोरे में आटा/मैदा, थोड़ी चीनी, बेकिंग पाउडर और चुटकी भर नमक मिलाएं।",
                "दूसरे कटोरे में दूध, पिघला मक्खन और अंडा अच्छी तरह फेंटें।",
                "सूखे और गीले मिश्रण को हल्के हाथों से मिलाएं (हल्की गांठें रह जाएं तो कोई बात नहीं, ज़्यादा न फेंटें)।",
                "मक्खन लगे गर्म पैन पर घोल डालें, बुलबुले फूटने पर पलटें और दोनों तरफ से सुनहरा होने तक सेकें।"
            ),
            chefTipEn = "Do not overmix the batter! Leaving tiny lumps guarantees the fluffiest, cloud-like pancakes.",
            chefTipHi = "घोल को ज़रूरत से ज़्यादा न फेंटें; हल्की गांठें रहने से पैनकेक एकदम रुई जैसे फूले हुए बनते हैं।"
        ),
        Recipe(
            id = "cont_tomato_pasta",
            nameEn = "Creamy Tomato Basil Pasta",
            nameHi = "क्रीमी टोमैटो बेसिल पास्ता",
            descriptionEn = "Al dente pasta tossed in a rich garlic tomato sauce with Italian herbs and melted cheese.",
            descriptionHi = "टमाटर प्यूरी, लहसुन, ऑरेगैनो और पिघली हुई चीज़ में लिपटा स्वादिष्ट इतालवी पास्ता।",
            cuisine = CuisineType.CONTINENTAL,
            mealTypes = listOf(MealType.LUNCH, MealType.DINNER),
            prepTimeMinutes = 10,
            cookTimeMinutes = 15,
            caloriesApprox = 390,
            emoji = "🍝",
            tags = listOf("Italian Classic", "Comfort Food", "Cheesy & Saucy"),
            requiredIngredientIds = listOf("pasta", "tomato_sauce", "ginger_garlic", "cheese", "olive_oil", "italian_herbs"),
            stepsEn = listOf(
                "Boil pasta in salted boiling water for 8-9 minutes until al dente; reserve 1/2 cup pasta cooking water before draining.",
                "Warm olive oil in a skillet, sauté minced garlic until fragrant, then pour in rich tomato puree.",
                "Season with Italian herbs, black pepper, and salt; simmer sauce for 5 minutes until glossy and thick.",
                "Toss pasta and reserved pasta water into the sauce, fold in grated cheese, and stir until creamy and emulsified."
            ),
            stepsHi = listOf(
                "उबलते नमकीन पानी में पास्ता को 8-9 मिनट पकाएं; छानने से पहले आधा कप पास्ता का पानी अलग रख लें।",
                "पैन में ऑलिव ऑयल गर्म करें, बारीक लहसुन भूनें और टमाटर की प्यूरी डालें।",
                "ऑरेगैनो, काली मिर्च और नमक डालकर सॉस को 5 मिनट तक गाढ़ा व चमकदार होने तक पकाएं।",
                "उबला पास्ता और बचा हुआ पास्ता पानी सॉस में मिलाएं, ऊपर से चीज़ डालकर मलाईदार होने तक टॉस करें।"
            ),
            chefTipEn = "Starchy pasta water is the secret ingredient that binds tomato sauce and cheese into a velvety restaurant emulsion.",
            chefTipHi = "पास्ता उबालने वाला नमकीन पानी सॉस में मिलाने से पास्ता और चीज़ आपस में रेशमी तरीके से मिल जाते हैं।"
        ),
        Recipe(
            id = "cont_grilled_cheese",
            nameEn = "Gourmet Grilled Cheese",
            nameHi = "चीज़ टोस्ट सैंडविच",
            descriptionEn = "Crispy golden butter-toasted artisan bread filled with an irresistible molten cheese pull.",
            descriptionHi = "मक्खन में क्रिस्पी सिकी ब्रेड और अंदर से पिघलती हुई गर्म व स्वादिष्ट चीज़।",
            cuisine = CuisineType.CONTINENTAL,
            mealTypes = listOf(MealType.BREAKFAST, MealType.LUNCH),
            prepTimeMinutes = 5,
            cookTimeMinutes = 8,
            caloriesApprox = 340,
            emoji = "🥪",
            tags = listOf("Under 15m", "Quick Comfort", "Cheese Pull"),
            requiredIngredientIds = listOf("bread", "cheese", "butter", "italian_herbs"),
            stepsEn = listOf(
                "Butter the outer sides of two bread slices generously from crust to crust.",
                "Layer thick cheddar or mozzarella cheese between the unbuttered sides, sprinkling a pinch of chili flakes and oregano.",
                "Place on a skillet heated over medium-low flame and press down gently with a spatula.",
                "Grill for 3-4 minutes per side until the exterior is deeply golden and crackling while cheese fully melts."
            ),
            stepsHi = listOf(
                "ब्रेड के दोनों बाहरी किनारों पर अच्छी तरह मक्खन लगाएं।",
                "अंदरूनी हिस्से पर भरपूर चीज़ रखें और थोड़ा ऑरेगैनो व चिली फ्लेक्स छिड़कें।",
                "धीमी-मध्यम आंच पर तवे पर रखें और करछी से हल्का-हल्का दबाएं।",
                "दोनों तरफ से 3-4 मिनट तक ब्रेड के सुनहरा व कुरकुरा होने और चीज़ के पिघलने तक सेकें।"
            ),
            chefTipEn = "Cook low and slow! High heat burns the bread before the cheese in the middle has melted.",
            chefTipHi = "धीमी आंच पर सेकें! तेज़ आंच करने से ब्रेड जल जाएगी और अंदर की चीज़ ठीक से पिघल नहीं पाएगी।"
        ),
        Recipe(
            id = "cont_margherita_pizza",
            nameEn = "Crispy Pan Margherita Pizza",
            nameHi = "क्रंची पैन मार्गेरीटा पिज़्ज़ा",
            descriptionEn = "Simple yet divine flat crust layered with zesty tomato sauce, melted cheese, and basil.",
            descriptionHi = "मसालेदार टोमैटो सॉस, ढेर सारी पिघली चीज़ और हर्ब्स से भरपूर क्रिस्पी तवा पिज़्ज़ा।",
            cuisine = CuisineType.CONTINENTAL,
            mealTypes = listOf(MealType.LUNCH, MealType.DINNER),
            prepTimeMinutes = 15,
            cookTimeMinutes = 12,
            caloriesApprox = 420,
            emoji = "🍕",
            tags = listOf("Party Favorite", "Crowd Pleaser", "Cheesy Delight"),
            requiredIngredientIds = listOf("wheat_flour", "tomato_sauce", "cheese", "olive_oil", "italian_herbs", "tomato"),
            stepsEn = listOf(
                "Roll prepared pizza dough or flatbread base into a 9-inch circle on a light dusting of flour.",
                "Brush a heavy pan with olive oil, place the dough on low heat, and prick with a fork to prevent bubbling.",
                "Spread a layer of aromatic tomato sauce, add tomato slices, and smother generously with shredded mozzarella.",
                "Cover with a domed lid and cook on medium-low for 8-10 minutes until cheese bubbles and crust is crispy."
            ),
            stepsHi = listOf(
                "आटे या पिज़्ज़ा बेस को बेलकर गोल आकार दें।",
                "पैन में हल्का ऑलिव ऑयल लगाएं, बेस को रखें और कांटे से छोटे-छोटे छेद कर दें।",
                "ऊपर टोमैटो सॉस फैलाएं, टमाटर के पतले टुकड़े रखें और खूब सारी चीज़ छिड़कें।",
                "पैन को ढक्कन से ढकें और मध्यम-धीमी आंच पर 8-10 मिनट चीज़ के पिघलने व नीचे से क्रिस्पी होने तक पकाएं।"
            ),
            chefTipEn = "Covering the skillet with a tight lid traps convective steam to melt cheese without needing an oven.",
            chefTipHi = "पैन को भारी ढक्कन से अच्छी तरह ढकें, इससे बिना ओवन के भी ऊपर की चीज़ पूरी तरह पिघल जाती है।"
        ),
        Recipe(
            id = "cont_mushroom_toast",
            nameEn = "Garlic Butter Mushroom Toast",
            nameHi = "गार्लिक बटर मशरूम टोस्ट",
            descriptionEn = "Earthy button mushrooms sautéed in fragrant garlic, butter, and herbs piled on crusty toast.",
            descriptionHi = "लहसुन, मक्खन और ताज़ी हर्ब्स में भुने जूसी मशरूम और कुरकुरी टोस्टेड ब्रेड।",
            cuisine = CuisineType.CONTINENTAL,
            mealTypes = listOf(MealType.BREAKFAST, MealType.LUNCH),
            prepTimeMinutes = 10,
            cookTimeMinutes = 10,
            caloriesApprox = 260,
            emoji = "🍄",
            tags = listOf("Gourmet in 15m", "Quick Savory", "Cafe Style"),
            requiredIngredientIds = listOf("mushroom", "bread", "butter", "ginger_garlic", "italian_herbs", "cheese"),
            stepsEn = listOf(
                "Clean mushrooms with a damp cloth, slice them thickly, and toast bread slices until deeply golden.",
                "Melt butter and a splash of olive oil in a wide pan over high heat until sizzling.",
                "Add mushrooms in a single layer; sear undisturbed for 3 minutes until caramelized before tossing with minced garlic.",
                "Season with Italian herbs, salt, and pepper; spoon the juicy mushrooms onto hot toast and sprinkle with cheese."
            ),
            stepsHi = listOf(
                "मशरूम को साफ कपड़े से पोंछकर मोटे टुकड़ों में काटें और ब्रेड को कुरकुरा टोस्ट कर लें।",
                "पैन में मक्खन और थोड़ा तेल डालकर तेज़ आंच पर गरम करें।",
                "मशरूम डालें और 3 मिनट बिना हिलाए भूनें ताकि वो कैरेमलाइज़ हो जाएं, फिर कटा लहसुन डालकर चलाएं।",
                "हर्ब्स, नमक और काली मिर्च मिलाएं; गरमा-गरम टोस्ट पर रसीले मशरूम रखें और चीज़ छिड़कें।"
            ),
            chefTipEn = "Do not salt mushrooms until they have browned; salting too early releases water and steams them instead of searing.",
            chefTipHi = "मशरूम भूनने के बाद ही नमक डालें; पहले नमक डालने से पानी छूट जाता है और मशरूम कुरकुरे नहीं बनते।"
        ),
        Recipe(
            id = "cont_french_toast",
            nameEn = "Classic Brioche French Toast",
            nameHi = "गोल्डन फ्रेंच टोस्ट",
            descriptionEn = "Thick bread soaked in a spiced egg-milk custard and pan-fried to rich caramelized perfection.",
            descriptionHi = "अंडे और दूध के घोल में डूबी और मक्खन में सुनहरी सिकी स्वादिष्ट फ्रेंच टोस्ट।",
            cuisine = CuisineType.CONTINENTAL,
            mealTypes = listOf(MealType.BREAKFAST),
            prepTimeMinutes = 5,
            cookTimeMinutes = 8,
            caloriesApprox = 290,
            emoji = "🍞",
            tags = listOf("Quick 15m", "Sweet & Golden", "Breakfast Classic"),
            requiredIngredientIds = listOf("bread", "egg", "milk", "butter"),
            stepsEn = listOf(
                "In a shallow dish, beat egg, milk, sugar, and a hint of cinnamon together until smooth.",
                "Dip thick bread slices into the custard for 15 seconds per side until fully absorbed but not falling apart.",
                "Melt butter in a skillet over medium heat until foamy.",
                "Cook the bread for 3-4 minutes on each side until puffed, golden brown, and delightfully crisp on the edges."
            ),
            stepsHi = listOf(
                "चौड़े बर्तन में अंडा, दूध, थोड़ी चीनी और चुटकी भर दालचीनी पाउडर अच्छी तरह फेंटें।",
                "ब्रेड स्लाइस को घोल में दोनों तरफ 15 सेकंड डुबोएं ताकि मिश्रण अंदर तक समा जाए।",
                "तवे पर मध्यम आंच पर मक्खन पिघलाएं।",
                "ब्रेड को दोनों तरफ से 3-4 मिनट तक सुनहरा और किनारों से क्रिस्पी होने तक सेकें।"
            ),
            chefTipEn = "Day-old stale bread absorbs the custard beautifully without getting soggy or tearing.",
            chefTipHi = "एक दिन पुरानी ब्रेड का इस्तेमाल करें, वो घोल को अच्छे से सोखती है और सेकते समय टूटती नहीं है।"
        ),
        Recipe(
            id = "cont_minestrone_soup",
            nameEn = "Hearty Italian Minestrone Soup",
            nameHi = "इटैलियन मिनस्ट्रोन वेज सूप",
            descriptionEn = "Rustic vegetable, bean, and pasta soup simmered slowly in an aromatic tomato-herb broth.",
            descriptionHi = "ताज़ी सब्जियों, बीन्स और पास्ता से भरपूर गर्म, पौष्टिक व सेहतमंद इतालवी सूप।",
            cuisine = CuisineType.CONTINENTAL,
            mealTypes = listOf(MealType.LUNCH, MealType.DINNER),
            prepTimeMinutes = 15,
            cookTimeMinutes = 20,
            caloriesApprox = 220,
            emoji = "🍲",
            tags = listOf("Healthy & Light", "Winter Warmer", "Loaded Veggies"),
            requiredIngredientIds = listOf("carrot", "potato", "peas", "tomato", "pasta", "olive_oil", "italian_herbs"),
            stepsEn = listOf(
                "Heat olive oil in a deep pot; sauté diced carrots, potatoes, onions, and garlic for 5 minutes.",
                "Stir in chopped tomatoes, tomato paste, Italian oregano, and vegetable stock or water.",
                "Bring to a boil, then reduce heat and simmer for 10 minutes until vegetables become fork-tender.",
                "Add small pasta and green peas, cook for 7 more minutes until pasta is tender, and serve with grated cheese."
            ),
            stepsHi = listOf(
                "गहरे बर्तन में ऑलिव ऑयल गर्म करें; कटी गाजर, आलू, प्याज़ और लहसुन को 5 मिनट भूनें।",
                "कटे टमाटर, हर्ब्स और 3 कप पानी या वेज स्टॉक डालें।",
                "उबाल आने पर आंच धीमी करें और सब्जियों के गलने तक 10 मिनट पकाएं।",
                "छोटा पास्ता और हरी मटर डालें, पास्ता के पकने तक 7 मिनट और उबालें, ऊपर से चीज़ डालकर सर्व करें।"
            ),
            chefTipEn = "A piece of cheese rind simmered in the soup broth adds an incredible savory depth of umami flavor.",
            chefTipHi = "सूप उबलते समय चीज़ का टुकड़ा डाल दें, इससे सूप का स्वाद रेस्टोरेंट जैसा समृद्ध बन जाता है।"
        ),
        Recipe(
            id = "cont_veggie_quesadilla",
            nameEn = "Cheesy Veggie Quesadilla",
            nameHi = "चीज़ी वेजी केसाडिला",
            descriptionEn = "Crispy folded tortillas packed with sautéed peppers, sweet corn, melted cheese, and salsa.",
            descriptionHi = "शिमला मिर्च, प्याज़ और ढेर सारी चीज़ से भरी मैक्सिकन कुरकुरी केसाडिला।",
            cuisine = CuisineType.CONTINENTAL,
            mealTypes = listOf(MealType.LUNCH, MealType.DINNER),
            prepTimeMinutes = 10,
            cookTimeMinutes = 10,
            caloriesApprox = 370,
            emoji = "🌮",
            tags = listOf("Mexican Treat", "Crunchy & Cheesy", "Quick Dinner"),
            requiredIngredientIds = listOf("wheat_flour", "capsicum", "onion", "cheese", "butter", "italian_herbs"),
            stepsEn = listOf(
                "Quickly sauté sliced bell peppers and onions in a drop of oil with salt and chili seasoning until tender-crisp.",
                "Warm a flatbread or flour tortilla on a dry skillet over medium heat.",
                "Scatter shredded cheese over one half, layer the sautéed peppers and onions, and fold the tortilla into a half-moon.",
                "Grill each side for 2-3 minutes with a touch of butter until golden, crunchy, and oozing cheese."
            ),
            stepsHi = listOf(
                "कटी शिमला मिर्च और प्याज़ को थोड़े तेल और हर्ब्स के साथ 2 मिनट हल्का क्रंची भूनें।",
                "तवे पर रोटी या टॉर्टिला को हल्का गर्म करें।",
                "आधे हिस्से पर कद्दूकस की हुई चीज़ और भुनी सब्जियां फैलाएं, फिर दूसरे आधे हिस्से को मोड़कर बंद करें।",
                "हल्का मक्खन लगाकर दोनों तरफ से 2-3 मिनट सुनहरा और कुरकुरा होने तक सेकें।"
            ),
            chefTipEn = "Put cheese both below and above the veggies so the cheese acts as glue holding the quesadilla together when cut.",
            chefTipHi = "सब्जियों के नीचे और ऊपर दोनों तरफ चीज़ रखें, इससे काटते समय केसाडिला खुलेगी नहीं।"
        ),
        Recipe(
            id = "cont_garlic_butter_rice",
            nameEn = "Garlic Butter Herb Rice",
            nameHi = "गार्लिक बटर हर्ब राइस",
            descriptionEn = "Aromatic basmati rice cooked in rich golden garlic butter, vegetable broth, and fresh herbs.",
            descriptionHi = "मक्खन में भुने लहसुन, सब्जियों और हर्ब्स के साथ पका सुगंधित व स्वादिष्ट चावल।",
            cuisine = CuisineType.CONTINENTAL,
            mealTypes = listOf(MealType.LUNCH, MealType.DINNER),
            prepTimeMinutes = 10,
            cookTimeMinutes = 18,
            caloriesApprox = 310,
            emoji = "🍚",
            tags = listOf("One Pot Meal", "Aromatic & Savory", "Quick Dinner"),
            requiredIngredientIds = listOf("rice", "ginger_garlic", "butter", "carrot", "peas", "olive_oil", "italian_herbs"),
            stepsEn = listOf(
                "Rinse basmati rice thoroughly until water runs clear; drain completely.",
                "In a pot, melt 2 tbsp butter with 1 tbsp olive oil; sauté finely minced garlic on gentle heat until pale golden.",
                "Toss in diced carrots and peas for 2 minutes, then stir in the drained rice to coat each grain in garlic butter.",
                "Pour in 2 cups of salted water and herbs; bring to boil, cover tightly, and steam on low for 15 minutes."
            ),
            stepsHi = listOf(
                "बासमती चावल को अच्छी तरह धोकर पानी निकाल दें।",
                "पैन में मक्खन और थोड़ा तेल गरम करें; बारीक कटा लहसुन हल्का सुनहरा होने तक भूनें।",
                "कटी गाजर और मटर डालकर 2 मिनट चलाएं, फिर चावल डालकर मक्खन में अच्छी तरह लपेटें।",
                "2 कप पानी, नमक और हर्ब्स डालें; उबाल आने पर ढक्कन बंद करें और धीमी आंच पर 15 मिनट दम दें।"
            ),
            chefTipEn = "Rest the cooked rice covered for 5 minutes off the flame before fluffing with a fork for perfectly separated grains.",
            chefTipHi = "गैस बंद करने के बाद 5 मिनट ढक्कन न खोलें, फिर कांटे से हल्के हाथों चलाएं, चावल का हर दाना अलग-अलग रहेगा।"
        ),
        Recipe(
            id = "cont_greek_salad",
            nameEn = "Mediterranean Crunch Bowl",
            nameHi = "मेडिटेरेनियन वेज क्रंच बाउल",
            descriptionEn = "Crisp cucumbers, juicy tomatoes, bell peppers, and crumbled cheese tossed in lemon herb dressing.",
            descriptionHi = "टमाटर, शिमला मिर्च, चीज़ और नींबू-ऑलिव ऑयल ड्रेसिंग का ताज़ा व पौष्टिक सलाद।",
            cuisine = CuisineType.CONTINENTAL,
            mealTypes = listOf(MealType.LUNCH, MealType.DINNER),
            prepTimeMinutes = 12,
            cookTimeMinutes = 0,
            caloriesApprox = 190,
            emoji = "🥗",
            tags = listOf("No Cook 15m", "Ultra Healthy", "Fresh & Vibrant"),
            requiredIngredientIds = listOf("tomato", "capsicum", "onion", "cheese", "olive_oil", "italian_herbs"),
            stepsEn = listOf(
                "Chop juicy tomatoes, crisp bell peppers, and red onions into bite-sized chunky cubes.",
                "In a small jar, shake extra virgin olive oil, fresh lemon juice, oregano, salt, and crushed black pepper.",
                "Combine all chopped vegetables in a wide salad bowl and drizzle the tangy herb dressing over.",
                "Toss gently, crown with generous chunks of cheese (feta or paneer), and serve chilled."
            ),
            stepsHi = listOf(
                "टमाटर, शिमला मिर्च और प्याज़ को चौकोर बड़े टुकड़ों में काट लें।",
                "एक छोटी कटोरी में ऑलिव ऑयल, नींबू का रस, ऑरेगैनो, नमक और काली मिर्च मिलाकर ड्रेसिंग बनाएं।",
                "एक बड़े कटोरे में कटी सब्जियां डालें और ऊपर से तैयार की हुई ड्रेसिंग डालें।",
                "हल्के हाथों से मिलाएं, ऊपर से चीज़ या पनीर के टुकड़े डालकर ताज़ा परोसें।"
            ),
            chefTipEn = "Keep the vegetable chunks large and rustic so they don't lose their crisp refreshing crunch.",
            chefTipHi = "सब्जियों को बहुत बारीक न काटें, बड़े टुकड़े रखने से सलाद में क्रंच और ताज़गी बनी रहती है।"
        ),
        Recipe(
            id = "cont_spinach_corn_pasta",
            nameEn = "Creamy Spinach Alfredo Pasta",
            nameHi = "क्रीमी पालक अल्फ्रेडो पास्ता",
            descriptionEn = "Penne or macaroni folded in a silken white garlic sauce loaded with tender spinach and cheese.",
            descriptionHi = "मक्खन, दूध और चीज़ की सफेद सॉस में ताज़ा पालक और पास्ता का लाजवाब स्वाद।",
            cuisine = CuisineType.CONTINENTAL,
            mealTypes = listOf(MealType.LUNCH, MealType.DINNER),
            prepTimeMinutes = 12,
            cookTimeMinutes = 15,
            caloriesApprox = 410,
            emoji = "🍝",
            tags = listOf("Cheesy White Sauce", "Comforting", "Dinner Date"),
            requiredIngredientIds = listOf("pasta", "spinach", "milk", "butter", "wheat_flour", "cheese", "ginger_garlic"),
            stepsEn = listOf(
                "Boil pasta until tender; wash and roughly shred fresh spinach leaves.",
                "Melt 2 tbsp butter in a skillet, sauté garlic, then stir in 1 tbsp flour and cook for 1 minute without browning.",
                "Slowly pour in warm milk while whisking vigorously until a thick, lump-free béchamel sauce forms.",
                "Stir in the shredded spinach to wilt, add cooked pasta and grated cheese, and season with black pepper."
            ),
            stepsHi = listOf(
                "पास्ता को उबाल लें; पालक को धोकर टुकड़ों में काट लें।",
                "पैन में मक्खन गरम करें, लहसुन भूनें, फिर 1 चम्मच आटा डालकर 1 मिनट भूनें।",
                "गुनगुना दूध धीरे-धीरे डालते हुए लगातार फेंटें ताकि चिकनी और गाढ़ी सफेद सॉस बन जाए।",
                "पालक डालकर 1 मिनट चलाएं, फिर उबला पास्ता और चीज़ डालकर काली मिर्च के साथ टॉस करें।"
            ),
            chefTipEn = "Add milk warm rather than cold straight from the fridge to prevent the flour roux from seizing into lumps.",
            chefTipHi = "सॉस बनाते समय दूध गुनगुना डालें, ठंडा दूध डालने से आटे की गांठें पड़ सकती हैं।"
        ),
        Recipe(
            id = "cont_mushroom_risotto",
            nameEn = "Creamy Garlic Herb Rice Bowl",
            nameHi = "क्रीमी मशरूम राइस बाउल",
            descriptionEn = "Tender rice simmered gently in vegetable stock with caramelized mushrooms, butter, and cheese.",
            descriptionHi = "मशरूम, मक्खन और चीज़ के साथ धीमी आंच पर पका मलाईदार राइस बाउल।",
            cuisine = CuisineType.CONTINENTAL,
            mealTypes = listOf(MealType.LUNCH, MealType.DINNER),
            prepTimeMinutes = 10,
            cookTimeMinutes = 20,
            caloriesApprox = 350,
            emoji = "🍚",
            tags = listOf("Restaurant Style", "Warm & Cozy", "Gourmet"),
            requiredIngredientIds = listOf("rice", "mushroom", "butter", "ginger_garlic", "cheese", "olive_oil"),
            stepsEn = listOf(
                "Brown sliced button mushrooms in 1 tbsp butter over high heat; remove half for the final garnish.",
                "In the same pan, sauté finely minced garlic and onions in butter until translucent.",
                "Add pre-cooked rice and 1/2 cup warm vegetable stock or milk; simmer gently on low heat while stirring.",
                "Fold in grated cheese and remaining butter until creamy and glossy; top with the reserved seared mushrooms."
            ),
            stepsHi = listOf(
                "मशरूम को तेज़ आंच पर मक्खन में सुनहरा भूनें; आधा मशरूम गार्निश के लिए अलग रख लें।",
                "उसी पैन में बारीक लहसुन और प्याज़ डालकर पारदर्शी होने तक भूनें।",
                "पके हुए चावल और आधा कप गुनगुना दूध या वेज स्टॉक डालें; धीमी आंच पर लगातार चलाते हुए पकाएं।",
                "कद्दूकस की चीज़ और एक चम्मच मक्खन मिलाएं जिससे क्रीमी टेक्सचर बने; ऊपर भुने मशरूम सजाकर परोसें।"
            ),
            chefTipEn = "Stirring vigorously in the final minute activates the starches to give that authentic velvety risotto creaminess.",
            chefTipHi = "अंत में एक मिनट तेज़ी से चलाएं, इससे चावल का स्टार्च और चीज़ मिलकर क्रीमी रेस्टोरेंट स्टाइल स्वाद देते हैं।"
        )
    )

    fun getRecipesByCuisine(cuisine: CuisineType): List<Recipe> {
        return if (cuisine == CuisineType.INDIAN) indianRecipes else continentalRecipes
    }

    fun getAllRecipes(): List<Recipe> = indianRecipes + continentalRecipes + RegionalFoodRepository.getAllRegionalDishes()

    fun getRecipeById(id: String): Recipe? {
        return getAllRecipes().firstOrNull { it.id == id }
    }

    /**
     * Match recipes against selected ingredients
     */
    fun matchRecipes(selectedIngredientIds: Set<String>, cuisine: CuisineType? = null): List<PantryMatchResult> {
        val pool = if (cuisine != null) getRecipesByCuisine(cuisine) else getAllRecipes()

        return pool.map { recipe ->
            val required = recipe.requiredIngredientIds
            val matched = required.filter { selectedIngredientIds.contains(it) }
            val missing = required.filter { !selectedIngredientIds.contains(it) }
            val percentage = if (required.isNotEmpty()) {
                ((matched.size.toFloat() / required.size.toFloat()) * 100).toInt()
            } else 0

            PantryMatchResult(
                recipe = recipe,
                matchedCount = matched.size,
                totalRequired = required.size,
                matchPercentage = percentage,
                matchedIngredients = matched.mapNotNull { id -> allIngredients.find { it.id == id } },
                missingIngredients = missing.mapNotNull { id -> allIngredients.find { it.id == id } }
            )
        }
        .filter { it.matchedCount > 0 }
        .sortedWith(compareByDescending<PantryMatchResult> { it.matchPercentage }.thenByDescending { it.matchedCount })
    }

    /**
     * Default weekly meal schedule generator
     */
    fun generateWeeklyPlan(cuisine: CuisineType): Map<MealDay, Map<MealType, Recipe>> {
        val recipes = getRecipesByCuisine(cuisine)
        val breakfasts = recipes.filter { it.mealTypes.contains(MealType.BREAKFAST) }
        val lunches = recipes.filter { it.mealTypes.contains(MealType.LUNCH) }
        val dinners = recipes.filter { it.mealTypes.contains(MealType.DINNER) }

        val plan = mutableMapOf<MealDay, Map<MealType, Recipe>>()
        val days = MealDay.values()

        days.forEachIndexed { index, day ->
            val b = breakfasts[index % breakfasts.size]
            val l = lunches[(index * 2) % lunches.size]
            val d = dinners[(index * 3 + 1) % dinners.size]

            plan[day] = mapOf(
                MealType.BREAKFAST to b,
                MealType.LUNCH to l,
                MealType.DINNER to d
            )
        }
        return plan
    }

    /**
     * Pick a random alternative recipe for a specific slot
     */
    fun getAlternativeRecipe(cuisine: CuisineType, mealType: MealType, currentRecipeId: String): Recipe {
        val candidates = getRecipesByCuisine(cuisine)
            .filter { it.mealTypes.contains(mealType) && it.id != currentRecipeId }
        return if (candidates.isNotEmpty()) candidates.random() else getRecipeById(currentRecipeId)!!
    }
}
