// Complete Recipe and Ingredient Database for Aaj Kya Banayein (Bilingual)
const APP_DATA = {
  ingredients: [
    // Staples
    { id: "wheat_flour", nameEn: "Wheat Flour (Atta)", nameHi: "गेहूं का आटा", category: "STAPLES", emoji: "🌾" },
    { id: "rice", nameEn: "Basmati Rice", nameHi: "बासमती चावल", category: "STAPLES", emoji: "🍚" },
    { id: "poha", nameEn: "Flattened Rice (Poha)", nameHi: "पोहा", category: "STAPLES", emoji: "🥣" },
    { id: "bread", nameEn: "Bread Slices", nameHi: "ब्रेड स्लाइस", category: "STAPLES", emoji: "🍞" },
    { id: "pasta", nameEn: "Pasta / Macaroni", nameHi: "पास्ता / मैकरोनी", category: "STAPLES", emoji: "🍝" },
    { id: "oats", nameEn: "Rolled Oats", nameHi: "ओट्स", category: "STAPLES", emoji: "🥣" },
    { id: "suji", nameEn: "Semolina (Rava/Suji)", nameHi: "सूजी / रवा", category: "STAPLES", emoji: "🌾" },
    { id: "besan", nameEn: "Gram Flour (Besan)", nameHi: "बेसन", category: "STAPLES", emoji: "🌾" },

    // Vegetables
    { id: "onion", nameEn: "Onion", nameHi: "प्याज़", category: "VEGGIES", emoji: "🧅" },
    { id: "tomato", nameEn: "Tomato", nameHi: "टमाटर", category: "VEGGIES", emoji: "🍅" },
    { id: "potato", nameEn: "Potato (Aloo)", nameHi: "आलू", category: "VEGGIES", emoji: "🥔" },
    { id: "ginger_garlic", nameEn: "Ginger & Garlic", nameHi: "अदरक-लहसुन", category: "VEGGIES", emoji: "🧄" },
    { id: "green_chili", nameEn: "Green Chili", nameHi: "हरी मिर्च", category: "VEGGIES", emoji: "🌶️" },
    { id: "peas", nameEn: "Green Peas (Matar)", nameHi: "हरी मटर", category: "VEGGIES", emoji: "🟢" },
    { id: "spinach", nameEn: "Fresh Spinach (Palak)", nameHi: "ताजा पालक", category: "VEGGIES", emoji: "🥬" },
    { id: "capsicum", nameEn: "Bell Pepper (Capsicum)", nameHi: "शिमला मिर्च", category: "VEGGIES", emoji: "🫑" },
    { id: "mushroom", nameEn: "Button Mushrooms", nameHi: "मशरूम", category: "VEGGIES", emoji: "🍄" },
    { id: "carrot", nameEn: "Carrots", nameHi: "गाजर", category: "VEGGIES", emoji: "🥕" },

    // Dairy & Protein
    { id: "paneer", nameEn: "Cottage Cheese (Paneer)", nameHi: "पनीर", category: "DAIRY_PROTEIN", emoji: "🧀" },
    { id: "milk", nameEn: "Milk", nameHi: "दूध", category: "DAIRY_PROTEIN", emoji: "🥛" },
    { id: "dahi", nameEn: "Yogurt / Curd (Dahi)", nameHi: "दही", category: "DAIRY_PROTEIN", emoji: "🥣" },
    { id: "cheese", nameEn: "Cheese (Cheddar/Mozzarella)", nameHi: "चीज़", category: "DAIRY_PROTEIN", emoji: "🧀" },
    { id: "butter", nameEn: "Butter / Ghee", nameHi: "मक्खन / घी", category: "DAIRY_PROTEIN", emoji: "🧈" },
    { id: "toor_dal", nameEn: "Yellow Dal (Toor/Moong)", nameHi: "अरहर / मूंग दाल", category: "DAIRY_PROTEIN", emoji: "🍲" },
    { id: "chole", nameEn: "Chickpeas (Chole)", nameHi: "काबुली चने", category: "DAIRY_PROTEIN", emoji: "🧆" },
    { id: "rajma", nameEn: "Red Kidney Beans (Rajma)", nameHi: "राजमा", category: "DAIRY_PROTEIN", emoji: "🫘" },
    { id: "egg", nameEn: "Fresh Eggs", nameHi: "अंडे", category: "DAIRY_PROTEIN", emoji: "🥚" },

    // Spices & Condiments
    { id: "mustard_cumin", nameEn: "Cumin & Mustard Seeds", nameHi: "जीरा व राई", category: "SPICES_SAUCES", emoji: "🧂" },
    { id: "turmeric_chili", nameEn: "Turmeric & Chili Powder", nameHi: "हल्दी व लाल मिर्च", category: "SPICES_SAUCES", emoji: "🌶️" },
    { id: "garam_masala", nameEn: "Garam Masala Spices", nameHi: "गरम मसाला", category: "SPICES_SAUCES", emoji: "🌿" },
    { id: "olive_oil", nameEn: "Cooking / Olive Oil", nameHi: "तेल", category: "SPICES_SAUCES", emoji: "🫒" },
    { id: "italian_herbs", nameEn: "Oregano & Chili Flakes", nameHi: "ऑरेगैनो व हर्ब्स", category: "SPICES_SAUCES", emoji: "🌿" },
    { id: "tomato_sauce", nameEn: "Tomato Purée / Sauce", nameHi: "टमाटर प्यूरी / सॉस", category: "SPICES_SAUCES", emoji: "🥫" }
  ],

  categories: {
    STAPLES: { en: "Grains & Flours", hi: "अनाज व आटा", emoji: "🌾" },
    VEGGIES: { en: "Vegetables", hi: "सब्जियां", emoji: "🥬" },
    DAIRY_PROTEIN: { en: "Dairy & Pulses", hi: "डेयरी व दालें", emoji: "🧀" },
    SPICES_SAUCES: { en: "Oils & Condiments", hi: "तेल व मसाले", emoji: "🫙" }
  },

  indianRecipes: [
    {
      id: "ind_poha",
      nameEn: "Kanda Poha",
      nameHi: "कांदा पोहा",
      descriptionEn: "Classic light flattened rice tossed with onions, green chilies, turmeric, and crunchy peanuts.",
      descriptionHi: "प्याज़, हरी मिर्च, हल्दी और कुरकुरी मूंगफली के साथ बना हल्का व स्वादिष्ट पोहा।",
      cuisine: "INDIAN",
      mealTypes: ["BREAKFAST"],
      prepTimeMinutes: 10,
      cookTimeMinutes: 10,
      caloriesApprox: 240,
      emoji: "🥣",
      tags: ["Quick 15m", "Light Breakfast", "Traditional"],
      requiredIngredientIds: ["poha", "onion", "green_chili", "mustard_cumin", "turmeric_chili", "olive_oil"],
      stepsEn: [
        "Rinse poha in a colander under running water for 30 seconds; drain completely and rest with a pinch of turmeric and salt.",
        "Heat 1 tbsp oil in a pan, crackle mustard seeds and cumin, then sauté chopped green chilies and sliced onions until translucent.",
        "Add a pinch of turmeric, salt to taste, and gently fold in the softened poha on low flame for 2-3 minutes.",
        "Squeeze fresh lemon juice, garnish with chopped coriander and roasted peanuts, and serve piping hot!"
      ],
      stepsHi: [
        "पोहे को छलनी में 30 सेकंड धोकर पानी निकाल दें; थोड़ा नमक और चुटकी भर हल्दी मिलाकर एक तरफ रख दें।",
        "कड़ाही में तेल गरम करके राई और जीरा तड़काएं, फिर कटी हरी मिर्च और प्याज़ डालकर पारदर्शी होने तक भूनें।",
        "हल्दी और स्वादानुसार नमक डालकर भीगा हुआ पोहा हल्के हाथों से मिलाएं और धीमी आंच पर 2-3 मिनट ढककर पकाएं।",
        "ऊपर से नींबू का रस निचोड़ें, हरा धनिया और भुनी मूंगफली डालकर गरमा-गरम चाय के साथ परोसें!"
      ],
      chefTipEn: "Do not soak poha in water; a quick rinse is all it takes to keep grains non-sticky and fluffy.",
      chefTipHi: "पोहे को पानी में भिगोकर न रखें; बस छलनी में धोएं ताकि दाने खिले-खिले और मुलायम रहें।"
    },
    {
      id: "ind_aloo_paratha",
      nameEn: "Stuffed Aloo Paratha",
      nameHi: "आलू पराठा",
      descriptionEn: "Golden griddled flatbread stuffed with spiced mashed potatoes and dollops of white butter.",
      descriptionHi: "मसालेदार उबले आलू की स्वादिष्ट भरावन से तैयार कुरकुरा पराठा और ऊपर मक्खन।",
      cuisine: "INDIAN",
      mealTypes: ["BREAKFAST", "LUNCH"],
      prepTimeMinutes: 15,
      cookTimeMinutes: 15,
      caloriesApprox: 320,
      emoji: "🫓",
      tags: ["Comfort Classic", "Crowd Favorite", "Filling"],
      requiredIngredientIds: ["wheat_flour", "potato", "onion", "green_chili", "garam_masala", "butter"],
      stepsEn: [
        "Boil, peel, and thoroughly mash potatoes; mix with finely chopped onion, green chili, garam masala, and salt.",
        "Knead a smooth, pliable wheat flour dough using water and rest for 10 minutes.",
        "Roll a small dough ball, place a generous potato stuffing sphere in center, seal tightly, and roll gently into an even circle.",
        "Roast on a hot tawa with generous butter or ghee on both sides until crispy and golden brown."
      ],
      stepsHi: [
        "उबले आलू को अच्छी तरह मैश करें; इसमें बारीक प्याज़, हरी मिर्च, गरम मसाला और नमक मिलाएं।",
        "गेहूं के आटे में पानी डालकर नरम व लचीला आटा गूंथ लें और 10 मिनट के लिए रख दें।",
        "लोई बेलकर बीच में आलू का भरावन रखें, चारों तरफ से बंद करें और हल्के हाथों से गोल पराठा बेलें।",
        "गर्म तवे पर दोनों तरफ मक्खन या देसी घी लगाकर सुनहरा व कुरकुरा होने तक सेकें।"
      ],
      chefTipEn: "Cool the boiled potatoes completely before mashing to prevent the paratha from tearing while rolling.",
      chefTipHi: "उबले आलू पूरी तरह ठंडे होने के बाद ही मैश करें, इससे पराठा बेलते समय फटेगा नहीं।"
    },
    {
      id: "ind_paneer_butter_masala",
      nameEn: "Paneer Butter Masala",
      nameHi: "पनीर बटर मसाला",
      descriptionEn: "Soft paneer cubes in a silky, mildly sweet and rich tomato-cashew creamy gravy.",
      descriptionHi: "मलाईदार टमाटर और मक्खन की स्वादिष्ट ग्रेवी में डूबे नरम पनीर के टुकड़े।",
      cuisine: "INDIAN",
      mealTypes: ["LUNCH", "DINNER"],
      prepTimeMinutes: 15,
      cookTimeMinutes: 20,
      caloriesApprox: 380,
      emoji: "🍛",
      tags: ["Restaurant Style", "Rich & Creamy", "Special"],
      requiredIngredientIds: ["paneer", "tomato", "onion", "ginger_garlic", "butter", "garam_masala", "turmeric_chili"],
      stepsEn: [
        "Sauté chopped onions, tomatoes, and ginger-garlic in 1 tsp butter until mushy; blend into a silky smooth puree.",
        "Melt remaining butter in the pan, temper with bay leaf, add the puree, red chili powder, turmeric, and cook until oil separates.",
        "Pour in 1/2 cup warm water, season with salt and garam masala, and simmer into a velvety rich gravy.",
        "Gently slide in fresh paneer cubes, swirl with fresh cream and crushed kasuri methi, and simmer for 3 minutes."
      ],
      stepsHi: [
        "कड़ाही में मक्खन डालकर कटे प्याज़, टमाटर और अदरक-लहसुन भूनें; ठंडा करके मिक्सी में महीन पीस लें।",
        "पैन में मक्खन गरम करें, तैयार प्यूरी, हल्दी व कश्मीरी लाल मिर्च डालकर तेल छूटने तक भूनें।",
        "आधा कप गुनगुना पानी, नमक और गरम मसाला मिलाकर ग्रेवी को धीमी आंच पर 5 मिनट उबालें।",
        "पनीर के टुकड़े डालें, ऊपर से थोड़ी मलाई और कसूरी मेथी मसलकर डालें, 3 मिनट पकाकर सर्व करें।"
      ],
      chefTipEn: "Soak paneer cubes in warm salted water for 10 minutes before adding to make them melt-in-mouth soft.",
      chefTipHi: "पनीर के टुकड़ों को डालने से पहले 10 मिनट गुनगुने नमकीन पानी में भिगो दें, पनीर एकदम रुई जैसा नरम रहेगा।"
    },
    {
      id: "ind_rajma_chawal",
      nameEn: "Punjabi Rajma Masala",
      nameHi: "पंजाबी राजमा मसाला",
      descriptionEn: "Melt-in-mouth kidney beans simmered in a luscious onion-tomato masala, served with rice.",
      descriptionHi: "धीमी आंच पर पके मसालेदार राजमा जो जीरा राइस के साथ लाजवाब लगते हैं।",
      cuisine: "INDIAN",
      mealTypes: ["LUNCH", "DINNER"],
      prepTimeMinutes: 15,
      cookTimeMinutes: 25,
      caloriesApprox: 340,
      emoji: "🫘",
      tags: ["North Indian Classic", "High Protein", "Sunday Special"],
      requiredIngredientIds: ["rajma", "rice", "onion", "tomato", "ginger_garlic", "garam_masala", "olive_oil"],
      stepsEn: [
        "Pressure cook soaked rajma with salt and whole spices for 5-6 whistles until completely soft.",
        "In a kadai, heat oil and brown the finely minced onions; add ginger-garlic paste and cook till fragrant.",
        "Stir in tomato puree, red chili, turmeric, and coriander powder; fry vigorously until oil leaves the sides.",
        "Add boiled rajma with its broth, mash a few beans with the ladle to thicken the gravy, and simmer for 10 minutes."
      ],
      stepsHi: [
        "रातभर भीगे राजमा को नमक डालकर कुकर में 5-6 सीटी आने तक पूरी तरह गलने तक उबालें।",
        "कड़ाही में तेल गरम करके बारीक प्याज़ को सुनहरा भूनें; फिर अदरक-लहसुन पेस्ट डालकर खुशबू आने तक भूनें।",
        "टमाटर की प्यूरी, हल्दी, लाल मिर्च और धनिया पाउडर डालकर मसाला तेल छोड़ने तक अच्छी तरह भूनें।",
        "उबले राजमा पानी सहित डालें, थोड़े दाने करछी से मैश करें ताकि तरी गाढ़ी बने, 10 मिनट धीमी आंच पर पकाएं।"
      ],
      chefTipEn: "Lightly mashing 15% of boiled kidney beans against the pan side gives that authentic dhaba thickness.",
      chefTipHi: "थोड़े से राजमा को करछी से दबाकर मैश कर दें, इससे तरी बिना किसी मिलावट के एकदम गाढ़ी और स्वादिष्ट बनेगी।"
    },
    {
      id: "ind_dal_tadka",
      nameEn: "Dal Tadka with Jeera Rice",
      nameHi: "दाल तड़का और जीरा राइस",
      descriptionEn: "Creamy yellow lentils finished with a smoking ghee tempering of cumin, garlic, and dried chilies.",
      descriptionHi: "लहसुन, जीरा और हींग के तड़के वाली अरहर दाल और सुगंधित जीरा राइस।",
      cuisine: "INDIAN",
      mealTypes: ["LUNCH", "DINNER"],
      prepTimeMinutes: 10,
      cookTimeMinutes: 20,
      caloriesApprox: 290,
      emoji: "🍲",
      tags: ["Everyday Comfort", "Healthy & Easy", "Pure Soul Food"],
      requiredIngredientIds: ["toor_dal", "rice", "onion", "tomato", "ginger_garlic", "butter", "mustard_cumin"],
      stepsEn: [
        "Pressure cook rinsed yellow toor dal with turmeric and salt for 3 whistles until creamy.",
        "In a small pan, melt 2 tbsp ghee/butter; add cumin seeds, sliced garlic, and dried red chilies until golden.",
        "Toss in chopped onions and tomatoes; cook for 3 minutes with a pinch of garam masala.",
        "Pour the smoking tadka sizzling over the boiled dal, cover immediately with lid to trap aroma, and serve with jeera rice."
      ],
      stepsHi: [
        "अरहर दाल को हल्दी और नमक डालकर कुकर में 3 सीटी आने तक अच्छी तरह पकाएं।",
        "तड़का पैन में देसी घी या मक्खन गरम करें; जीरा, बारीक कटा लहसुन और साबुत लाल मिर्च सुनहरी होने तक भूनें।",
        "कटा प्याज़ और टमाटर डालकर 3 मिनट भूनें और चुटकी भर गरम मसाला मिलाएं।",
        "उबलती हुई दाल पर गरमा-गरम छौंक लगाएं, ढक्कन तुरंत बंद करें ताकि खुशबू समा जाए, जीरा राइस के साथ परोसें।"
      ],
      chefTipEn: "Letting the garlic turn light golden-brown in ghee gives dal that signature restaurant smoky flavor.",
      chefTipHi: "लहसुन को घी में हल्का सुनहरा होने तक भूनें, इससे दाल में रेस्टोरेंट जैसा असली स्वाद और खुशबू आती है।"
    },
    {
      id: "ind_palak_paneer",
      nameEn: "Creamy Palak Paneer",
      nameHi: "पालक पनीर",
      descriptionEn: "Vibrant blanched spinach puree gently spiced and studded with soft paneer cubes.",
      descriptionHi: "ताज़ा हरी पालक की ग्रेवी और मसालों में पकाया गया स्वादिष्ट व पौष्टिक पनीर।",
      cuisine: "INDIAN",
      mealTypes: ["LUNCH", "DINNER"],
      prepTimeMinutes: 15,
      cookTimeMinutes: 15,
      caloriesApprox: 310,
      emoji: "🥬",
      tags: ["Nutritious", "Iron Rich", "Classic Green"],
      requiredIngredientIds: ["spinach", "paneer", "onion", "tomato", "ginger_garlic", "butter", "turmeric_chili"],
      stepsEn: [
        "Blanch fresh spinach leaves in boiling water for 2 minutes, then instantly plunge into ice water to retain bright green color.",
        "Blend blanched spinach with 1 green chili and ginger into a smooth, silky green puree.",
        "Heat butter in a pan, sauté onions, garlic, and tomato with mild cumin and turmeric powder.",
        "Pour in the spinach puree, add paneer cubes with salt and garam masala, and simmer on gentle heat for 4 minutes."
      ],
      stepsHi: [
        "पालक को उबलते पानी में 2 मिनट ब्लांच करें, फिर तुरंत ठंडे पानी में डालें ताकि हरा रंग बरकरार रहे।",
        "पालक, हरी मिर्च और अदरक को मिक्सी में पीसकर स्मूथ हरी प्यूरी बना लें।",
        "पैन में मक्खन गरम करें, बारीक प्याज़, लहसुन और टमाटर को जीरा व हल्दी के साथ भूनें।",
        "पालक प्यूरी और पनीर के टुकड़े डालें, स्वादानुसार नमक व गरम मसाला मिलाकर 4 मिनट धीमी आंच पर पकाएं।"
      ],
      chefTipEn: "Never cover the pan while simmering spinach puree, or it will lose its emerald vibrant hue.",
      chefTipHi: "पालक की ग्रेवी पकाते समय पैन को ढके नहीं, खुला पकाने से हरा रंग खूबसूरत और चमकदार बना रहता है।"
    },
    {
      id: "ind_besan_chilla",
      nameEn: "Crispy Besan Chilla",
      nameHi: "कुरकुरा बेसन चीला",
      descriptionEn: "Savory spiced gram flour crepes packed with chopped onions, tomatoes, and green chilies.",
      descriptionHi: "प्याज़, टमाटर और मसालों से भरपूर पौष्टिक, झटपट और स्वादिष्ट बेसन चीला।",
      cuisine: "INDIAN",
      mealTypes: ["BREAKFAST", "DINNER"],
      prepTimeMinutes: 10,
      cookTimeMinutes: 10,
      caloriesApprox: 210,
      emoji: "🥞",
      tags: ["Quick 15m", "High Protein", "Weight-Loss Friendly"],
      requiredIngredientIds: ["besan", "onion", "tomato", "green_chili", "turmeric_chili", "olive_oil"],
      stepsEn: [
        "Whisk gram flour (besan) with water into a smooth, pourable pancake-style batter without lumps.",
        "Mix in finely diced onions, juicy tomatoes, minced green chilies, ajwain, turmeric, and salt.",
        "Heat a non-stick tawa, ladle the batter, and spread evenly into a thin round circle.",
        "Drizzle a few drops of oil around edges, flip when bubbles form, and cook both sides crisp and golden."
      ],
      stepsHi: [
        "एक बर्तन में बेसन, थोड़ा पानी मिलाकर चिकना और बिना गुठली वाला घोल तैयार करें।",
        "घोल में बारीक कटा प्याज़, टमाटर, हरी मिर्च, अजवाइन, हल्दी और नमक अच्छी तरह मिलाएं।",
        "तवा गर्म करके एक कलछी घोल डालें और गोल आकार में पतला फैलाएं।",
        "किनारों पर हल्का तेल लगाएं, नीचे से सिकने पर पलटें और दोनों तरफ से कुरकुरा होने तक सेकें।"
      ],
      chefTipEn: "Adding a pinch of ajwain (carom seeds) aids digestion and provides authentic street-style fragrance.",
      chefTipHi: "घोल में थोड़ी सी अजवाइन मसलकर डालें, इससे पाचन भी अच्छा रहता है और स्वाद लाजवाब आता है।"
    },
    {
      id: "ind_pav_bhaji",
      nameEn: "Mumbai Style Pav Bhaji",
      nameHi: "मुंबई पाव भाजी",
      descriptionEn: "Spicy mashed mixed vegetable mash loaded with butter, served with toasted buttery pav buns.",
      descriptionHi: "मक्खन और खास मसालों में घुली मिली-जुली सब्जियां और गरमा-गरम पाव।",
      cuisine: "INDIAN",
      mealTypes: ["LUNCH", "DINNER"],
      prepTimeMinutes: 15,
      cookTimeMinutes: 20,
      caloriesApprox: 410,
      emoji: "🥖",
      tags: ["Street Food", "Buttery Indulgence", "Family Feast"],
      requiredIngredientIds: ["potato", "peas", "capsicum", "tomato", "onion", "butter", "bread"],
      stepsEn: [
        "Boil potatoes, peas, and carrots; mash them thoroughly with a potato masher until semi-smooth.",
        "Melt generous butter on a flat tawa or pan; sauté finely diced onions, capsicum, and ginger-garlic paste.",
        "Add tomatoes and 2 tbsp pav bhaji masala, cook till mushy, then combine with mashed vegetables and water.",
        "Simmer while mashing repeatedly, top with a heavy slab of butter, and serve with butter-toasted bread/pav."
      ],
      stepsHi: [
        "आलू, मटर और गाजर को कुकर में उबालें और मैशर से अच्छी तरह मैश कर लें।",
        "तवे या कड़ाही में भरपूर मक्खन पिघलाएं; बारीक कटी शिमला मिर्च, प्याज़ और अदरक-लहसुन भूनें।",
        "टमाटर और पाव भाजी मसाला डालकर भूनें, फिर मैश की हुई सब्जियां और थोड़ा पानी मिलाकर पकाएं।",
        "करछी से लगातार दबाते हुए 8 मिनट उबालें, ऊपर से मक्खन का टुकड़ा रखें और मक्खन में सिके पाव/ब्रेड के साथ परोसें।"
      ],
      chefTipEn: "Finely chopped green capsicum fried in butter right at the start gives that iconic Juhu Beach aroma.",
      chefTipHi: "शुरुआत में ही मक्खन में बारीक शिमला मिर्च भूनें, यही मुंबई चौपाटी वाले स्वाद का असली राज़ है।"
    },
    {
      id: "ind_chole_masala",
      nameEn: "Amritsari Chole",
      nameHi: "अमृतसरी छोले",
      descriptionEn: "Robust, dark spiced chickpeas cooked with aromatic spices, onions, and tangy amchur.",
      descriptionHi: "अनारदाना, गरम मसाले और चटपटी तरी में बने गाढ़े व स्वादिष्ट अमृतसरी छोले।",
      cuisine: "INDIAN",
      mealTypes: ["LUNCH", "DINNER"],
      prepTimeMinutes: 15,
      cookTimeMinutes: 25,
      caloriesApprox: 360,
      emoji: "🧆",
      tags: ["High Protein", "Festive", "Rich Gravy"],
      requiredIngredientIds: ["chole", "onion", "tomato", "ginger_garlic", "garam_masala", "olive_oil"],
      stepsEn: [
        "Pressure cook soaked chickpeas with tea bag, bay leaf, and salt for 6 whistles until melt-in-mouth soft.",
        "Heat oil in a heavy-bottom pot, brown onion paste slowly, then add ginger-garlic and green chili.",
        "Add tomato puree and chole masala spices; fry on medium flame until thick and dark reddish-brown.",
        "Tip in boiled chickpeas with liquid, simmer for 15 minutes to infuse flavours, and garnish with ginger juliennes."
      ],
      stepsHi: [
        "रातभर भीगे छोले में चायपत्ती की पोटली और नमक डालकर 6 सीटी तक एकदम नरम होने तक उबालें।",
        "कड़ाही में तेल गरम करके प्याज़ का पेस्ट गहरा सुनहरा भूनें; फिर अदरक-लहसुन पेस्ट और हरी मिर्च डालें।",
        "टमाटर प्यूरी और छोले मसाला डालकर मसाला गाढ़ा और तेल छोड़ने तक अच्छी तरह भूनें।",
        "उबले छोले पानी सहित मिलाएं, 15 मिनट धीमी आंच पर पकाएं और ऊपर से लंबी कटी अदरक व धनिया से सजाएं।"
      ],
      chefTipEn: "Boiling chickpeas with a tea bag or dried amla gives the authentic dark color and earthy depth.",
      chefTipHi: "छोले उबालते समय एक टी-बैग डाल दें, इससे छोलों का रंग खूबसूरत डार्क और स्वाद लाजवाब बनता है।"
    },
    {
      id: "ind_veg_khichdi",
      nameEn: "Comforting Moong Dal Khichdi",
      nameHi: "मूंग दाल खिचड़ी",
      descriptionEn: "Wholesome, soothing rice and yellow moong pot meal tempered with ghee, cumin, and hing.",
      descriptionHi: "चावल और मूंग दाल का पौष्टिक, हल्का व पाचक भोजन, ऊपर से देसी घी का छौंक।",
      cuisine: "INDIAN",
      mealTypes: ["LUNCH", "DINNER"],
      prepTimeMinutes: 10,
      cookTimeMinutes: 15,
      caloriesApprox: 260,
      emoji: "🍲",
      tags: ["Gentle on Stomach", "Soul Food", "Under 25m"],
      requiredIngredientIds: ["rice", "toor_dal", "potato", "peas", "mustard_cumin", "butter", "turmeric_chili"],
      stepsEn: [
        "Wash equal parts rice and yellow moong dal together; soak for 15 minutes.",
        "Heat ghee in a pressure cooker; splutter cumin seeds, hing (asafoetida), and add diced potatoes and peas.",
        "Add soaked rice-dal, turmeric powder, and salt; pour 4 cups water for a soft porridge-like texture.",
        "Pressure cook for 3 whistles on medium flame; stir gently and serve with fresh yogurt and pickle."
      ],
      stepsHi: [
        "चावल और मूंग दाल को बराबर मात्रा में मिलाकर धो लें और 15 मिनट पानी में भिगो दें।",
        "प्रेशर कुकर में देसी घी गरम करें; जीरा, हींग तड़काएं और कटे आलू व मटर डालकर 1 मिनट भूनें।",
        "दाल-चावल, हल्दी, नमक और 4 कप पानी डालें ताकि खिचड़ी एकदम मुलायम व रसीली बने।",
        "कुकर में 3 सीटी लगाएं; भाप निकलने पर खोलें, ऊपर से देसी घी डालकर ताज़ा दही व पापड़ के साथ खाएं।"
      ],
      chefTipEn: "Roasting the yellow moong dal dry for 2 minutes before cooking elevates the nutty aroma tremendously.",
      chefTipHi: "मूंग दाल को पकाने से पहले 2 मिनट सूखा भून लें, इससे खिचड़ी में सोंधी खुशबू आ जाती है।"
    },
    {
      id: "ind_matar_paneer",
      nameEn: "Desi Matar Paneer",
      nameHi: "मटर पनीर",
      descriptionEn: "Tender green peas and soft cottage cheese simmered in a homestyle spiced onion-tomato curry.",
      descriptionHi: "मीठी हरी मटर और पनीर के टुकड़ों की हर घर में पसंद की जाने वाली स्वादिष्ट करी।",
      cuisine: "INDIAN",
      mealTypes: ["LUNCH", "DINNER"],
      prepTimeMinutes: 15,
      cookTimeMinutes: 18,
      caloriesApprox: 330,
      emoji: "🍛",
      tags: ["North Indian Favorite", "Protein Rich", "Family Dinner"],
      requiredIngredientIds: ["paneer", "peas", "onion", "tomato", "ginger_garlic", "garam_masala", "olive_oil"],
      stepsEn: [
        "Puree sauteed onions, ginger-garlic, and tomatoes into a vibrant base.",
        "Heat oil in a pan, bloom cumin seeds, pour in the puree, and cook with turmeric, coriander, and chili powder.",
        "Add sweet green peas with 1 cup water, cover and simmer until peas are tender and soft.",
        "Fold in paneer cubes, sprinkle garam masala, and cook on gentle flame for 3 minutes before serving."
      ],
      stepsHi: [
        "प्याज़, अदरक-लहसुन और टमाटर को हल्का भूनकर मिक्सी में पीसकर पेस्ट बना लें।",
        "कड़ाही में तेल गरम करें, जीरा तड़काएं और पिसा मसाला डालकर हल्दी, धनिया, मिर्च के साथ तेल छोड़ने तक भूनें।",
        "हरी मटर और एक कप पानी डालें, ढककर मटर के गलने तक 5 मिनट पकाएं।",
        "पनीर के टुकड़े और गरम मसाला डालें, 3 मिनट धीमी आंच पर पकाएं और रोटियों के साथ परोसें।"
      ],
      chefTipEn: "Add a pinch of sugar when cooking peas to preserve their natural sweetness and vibrant emerald color.",
      chefTipHi: "मटर पकाते समय चुटकी भर चीनी डाल दें, इससे मटर का मीठापन और गहरा हरा रंग बरकरार रहता है।"
    },
    {
      id: "ind_suji_upma",
      nameEn: "Vegetable Rava Upma",
      nameHi: "वेजिटेबल रवा उपमा",
      descriptionEn: "Fluffy roasted semolina tempered with mustard seeds, curry leaves, veggies, and crunchy cashews.",
      descriptionHi: "भुनी सूजी, राई, कढ़ी पत्ता और ताजी सब्जियों से बना हल्का, स्वादिष्ट व पौष्टिक उपमा।",
      cuisine: "INDIAN",
      mealTypes: ["BREAKFAST"],
      prepTimeMinutes: 10,
      cookTimeMinutes: 12,
      caloriesApprox: 230,
      emoji: "🥣",
      tags: ["South Indian Classic", "Quick 15m", "Zero Fuss"],
      requiredIngredientIds: ["suji", "onion", "peas", "carrot", "green_chili", "mustard_cumin", "butter"],
      stepsEn: [
        "Dry roast semolina (rava/suji) on low flame for 4-5 minutes until warm and fragrant; set aside.",
        "Heat ghee/oil in a pan, pop mustard seeds, add green chili, curry leaves, and saute sliced onions and diced veggies.",
        "Pour in 2.5 cups of water with salt and bring to a rolling rolling boil.",
        "Slowly pour in the roasted suji in a steady stream while whisking continuously to avoid lumps; cover and cook for 3 minutes."
      ],
      stepsHi: [
        "सूजी को धीमी आंच पर 4-5 मिनट खुशबू आने तक सूखा भून लें और एक थाली में निकाल लें।",
        "कड़ाही में घी गरम करें, राई, कटी हरी मिर्च, कढ़ी पत्ता और बारीक कटी सब्जियां 2 मिनट भूनें।",
        "ढाई कप पानी और स्वादानुसार नमक डालकर पानी में तेज़ उबाल आने दें।",
        "उबलते पानी में भुनी सूजी धीरे-धीरे डालते हुए लगातार चलाते रहें ताकि गांठ न पड़े; 3 मिनट ढककर पकाएं।"
      ],
      chefTipEn: "Always add suji in a thin stream into boiling water while stirring with the other hand for lump-free perfection.",
      chefTipHi: "उबलते पानी में सूजी धीरे-धीरे डालें और लगातार चलाते रहें, उपमा कभी चिपचिपा नहीं बनेगा और गांठें नहीं पड़ेंगी।"
    }
  ],

  continentalRecipes: [
    {
      id: "cont_pancakes",
      nameEn: "Classic Fluffy Pancakes",
      nameHi: "क्लासिक फ्लफी पैनकेक्स",
      descriptionEn: "Golden, airy breakfast pancakes served with melting butter and sweet syrup.",
      descriptionHi: "मक्खन और शहद के साथ परोसे जाने वाले बेहद नरम, फूले हुए और स्वादिष्ट पैनकेक्स।",
      cuisine: "CONTINENTAL",
      mealTypes: ["BREAKFAST"],
      prepTimeMinutes: 10,
      cookTimeMinutes: 10,
      caloriesApprox: 280,
      emoji: "🥞",
      tags: ["Fluffy & Sweet", "Weekend Breakfast", "Kids Favorite"],
      requiredIngredientIds: ["wheat_flour", "milk", "butter", "egg"],
      stepsEn: [
        "In a mixing bowl, whisk flour, sugar, baking powder, and a tiny pinch of salt.",
        "In another bowl, whisk milk, melted butter, and an egg until combined.",
        "Fold the wet ingredients into the dry mixture gently just until combined (small lumps are totally okay!).",
        "Pour 1/4 cup batter onto a buttered non-stick pan; flip when bubbles burst and cook golden on both sides."
      ],
      stepsHi: [
        "एक कटोरे में आटा/मैदा, थोड़ी चीनी, बेकिंग पाउडर और चुटकी भर नमक मिलाएं।",
        "दूसरे कटोरे में दूध, पिघला मक्खन और अंडा अच्छी तरह फेंटें।",
        "सूखे और गीले मिश्रण को हल्के हाथों से मिलाएं (हल्की गांठें रह जाएं तो कोई बात नहीं, ज़्यादा न फेंटें)।",
        "मक्खन लगे गर्म पैन पर घोल डालें, बुलबुले फूटने पर पलटें और दोनों तरफ से सुनहरा होने तक सेकें।"
      ],
      chefTipEn: "Do not overmix the batter! Leaving tiny lumps guarantees the fluffiest, cloud-like pancakes.",
      chefTipHi: "घोल को ज़रूरत से ज़्यादा न फेंटें; हल्की गांठें रहने से पैनकेक एकदम रुई जैसे फूले हुए बनते हैं।"
    },
    {
      id: "cont_tomato_pasta",
      nameEn: "Creamy Tomato Basil Pasta",
      nameHi: "क्रीमी टोमैटो बेसिल पास्ता",
      descriptionEn: "Al dente pasta tossed in a rich garlic tomato sauce with Italian herbs and melted cheese.",
      descriptionHi: "टमाटर प्यूरी, लहसुन, ऑरेगैनो और पिघली हुई चीज़ में लिपटा स्वादिष्ट इतालवी पास्ता।",
      cuisine: "CONTINENTAL",
      mealTypes: ["LUNCH", "DINNER"],
      prepTimeMinutes: 10,
      cookTimeMinutes: 15,
      caloriesApprox: 390,
      emoji: "🍝",
      tags: ["Italian Classic", "Comfort Food", "Cheesy & Saucy"],
      requiredIngredientIds: ["pasta", "tomato_sauce", "ginger_garlic", "cheese", "olive_oil", "italian_herbs"],
      stepsEn: [
        "Boil pasta in salted boiling water for 8-9 minutes until al dente; reserve 1/2 cup pasta cooking water before draining.",
        "Warm olive oil in a skillet, sauté minced garlic until fragrant, then pour in rich tomato puree.",
        "Season with Italian herbs, black pepper, and salt; simmer sauce for 5 minutes until glossy and thick.",
        "Toss pasta and reserved pasta water into the sauce, fold in grated cheese, and stir until creamy and emulsified."
      ],
      stepsHi: [
        "उबलते नमकीन पानी में पास्ता को 8-9 मिनट पकाएं; छानने से पहले आधा कप पास्ता का पानी अलग रख लें।",
        "पैन में ऑलिव ऑयल गर्म करें, बारीक लहसुन भूनें और टमाटर की प्यूरी डालें।",
        "ऑरेगैनो, काली मिर्च और नमक डालकर सॉस को 5 मिनट तक गाढ़ा व चमकदार होने तक पकाएं।",
        "उबला पास्ता और बचा हुआ पास्ता पानी सॉस में मिलाएं, ऊपर से चीज़ डालकर मलाईदार होने तक टॉस करें।"
      ],
      chefTipEn: "Starchy pasta water is the secret ingredient that binds tomato sauce and cheese into a velvety emulsion.",
      chefTipHi: "पास्ता उबालने वाला नमकीन पानी सॉस में मिलाने से पास्ता और चीज़ आपस में रेशमी तरीके से मिल जाते हैं।"
    },
    {
      id: "cont_grilled_cheese",
      nameEn: "Gourmet Grilled Cheese",
      nameHi: "चीज़ टोस्ट सैंडविच",
      descriptionEn: "Crispy golden butter-toasted artisan bread filled with an irresistible molten cheese pull.",
      descriptionHi: "मक्खन में क्रिस्पी सिकी ब्रेड और अंदर से पिघलती हुई गर्म व स्वादिष्ट चीज़।",
      cuisine: "CONTINENTAL",
      mealTypes: ["BREAKFAST", "LUNCH"],
      prepTimeMinutes: 5,
      cookTimeMinutes: 8,
      caloriesApprox: 340,
      emoji: "🥪",
      tags: ["Under 15m", "Quick Comfort", "Cheese Pull"],
      requiredIngredientIds: ["bread", "cheese", "butter", "italian_herbs"],
      stepsEn: [
        "Butter the outer sides of two bread slices generously from crust to crust.",
        "Layer thick cheddar or mozzarella cheese between the unbuttered sides, sprinkling a pinch of chili flakes and oregano.",
        "Place on a skillet heated over medium-low flame and press down gently with a spatula.",
        "Grill for 3-4 minutes per side until the exterior is deeply golden and crackling while cheese fully melts."
      ],
      stepsHi: [
        "ब्रेड के दोनों बाहरी किनारों पर अच्छी तरह मक्खन लगाएं।",
        "अंदरूनी हिस्से पर भरपूर चीज़ रखें और थोड़ा ऑरेगैनो व चिली फ्लेक्स छिड़कें।",
        "धीमी-मध्यम आंच पर तवे पर रखें और करछी से हल्का-हल्का दबाएं।",
        "दोनों तरफ से 3-4 मिनट तक ब्रेड के सुनहरा व कुरकुरा होने और चीज़ के पिघलने तक सेकें।"
      ],
      chefTipEn: "Cook low and slow! High heat burns the bread before the cheese in the middle has melted.",
      chefTipHi: "धीमी आंच पर सेकें! तेज़ आंच करने से ब्रेड जल जाएगी और अंदर की चीज़ ठीक से पिघल नहीं पाएगी।"
    },
    {
      id: "cont_margherita_pizza",
      nameEn: "Crispy Pan Margherita Pizza",
      nameHi: "क्रंची पैन मार्गेरीटा पिज़्ज़ा",
      descriptionEn: "Simple yet divine flat crust layered with zesty tomato sauce, melted cheese, and basil.",
      descriptionHi: "मसालेदार टोमैटो सॉस, ढेर सारी पिघली चीज़ और हर्ब्स से भरपूर क्रिस्पी तवा पिज़्ज़ा।",
      cuisine: "CONTINENTAL",
      mealTypes: ["LUNCH", "DINNER"],
      prepTimeMinutes: 15,
      cookTimeMinutes: 12,
      caloriesApprox: 420,
      emoji: "🍕",
      tags: ["Party Favorite", "Crowd Pleaser", "Cheesy Delight"],
      requiredIngredientIds: ["wheat_flour", "tomato_sauce", "cheese", "olive_oil", "italian_herbs", "tomato"],
      stepsEn: [
        "Roll prepared pizza dough or flatbread base into a 9-inch circle on a light dusting of flour.",
        "Brush a heavy pan with olive oil, place the dough on low heat, and prick with a fork to prevent bubbling.",
        "Spread a layer of aromatic tomato sauce, add tomato slices, and smother generously with shredded mozzarella.",
        "Cover with a domed lid and cook on medium-low for 8-10 minutes until cheese bubbles and crust is crispy."
      ],
      stepsHi: [
        "आटे या पिज़्ज़ा बेस को बेलकर गोल आकार दें।",
        "पैन में हल्का ऑलिव ऑयल लगाएं, बेस को रखें और कांटे से छोटे-छोटे छेद कर दें।",
        "ऊपर टोमैटो सॉस फैलाएं, टमाटर के पतले टुकड़े रखें और खूब सारी चीज़ छिड़कें।",
        "पैन को ढक्कन से ढकें और मध्यम-धीमी आंच पर 8-10 मिनट चीज़ के पिघलने व नीचे से क्रिस्पी होने तक पकाएं।"
      ],
      chefTipEn: "Covering the skillet with a tight lid traps convective steam to melt cheese without needing an oven.",
      chefTipHi: "पैन को भारी ढक्कन से अच्छी तरह ढकें, इससे बिना ओवन के भी ऊपर की चीज़ पूरी तरह पिघल जाती है।"
    },
    {
      id: "cont_mushroom_toast",
      nameEn: "Garlic Butter Mushroom Toast",
      nameHi: "गार्लिक बटर मशरूम टोस्ट",
      descriptionEn: "Earthy button mushrooms sautéed in fragrant garlic, butter, and herbs piled on crusty toast.",
      descriptionHi: "लहसुन, मक्खन और ताज़ी हर्ब्स में भुने जूसी मशरूम और कुरकुरी टोस्टेड ब्रेड।",
      cuisine: "CONTINENTAL",
      mealTypes: ["BREAKFAST", "LUNCH"],
      prepTimeMinutes: 10,
      cookTimeMinutes: 10,
      caloriesApprox: 260,
      emoji: "🍄",
      tags: ["Gourmet in 15m", "Quick Savory", "Cafe Style"],
      requiredIngredientIds: ["mushroom", "bread", "butter", "ginger_garlic", "italian_herbs", "cheese"],
      stepsEn: [
        "Clean mushrooms with a damp cloth, slice them thickly, and toast bread slices until deeply golden.",
        "Melt butter and a splash of olive oil in a wide pan over high heat until sizzling.",
        "Add mushrooms in a single layer; sear undisturbed for 3 minutes until caramelized before tossing with minced garlic.",
        "Season with Italian herbs, salt, and pepper; spoon the juicy mushrooms onto hot toast and sprinkle with cheese."
      ],
      stepsHi: [
        "मशरूम को साफ कपड़े से पोंछकर मोटे टुकड़ों में काटें और ब्रेड को कुरकुरा टोस्ट कर लें।",
        "पैन में मक्खन और थोड़ा तेल डालकर तेज़ आंच पर गरम करें।",
        "मशरूम डालें और 3 मिनट बिना हिलाए भूनें ताकि वो कैरेमलाइज़ हो जाएं, फिर कटा लहसुन डालकर चलाएं।",
        "हर्ब्स, नमक और काली मिर्च मिलाएं; गरमा-गरम टोस्ट पर रसीले मशरूम रखें और चीज़ छिड़कें।"
      ],
      chefTipEn: "Do not salt mushrooms until they have browned; salting too early releases water and steams them.",
      chefTipHi: "मशरूम भूनने के बाद ही नमक डालें; पहले नमक डालने से पानी छूट जाता है और मशरूम कुरकुरे नहीं बनते।"
    },
    {
      id: "cont_french_toast",
      nameEn: "Classic Golden French Toast",
      nameHi: "गोल्डन फ्रेंच टोस्ट",
      descriptionEn: "Thick bread soaked in a spiced egg-milk custard and pan-fried to rich caramelized perfection.",
      descriptionHi: "अंडे और दूध के घोल में डूबी और मक्खन में सुनहरी सिकी स्वादिष्ट फ्रेंच टोस्ट।",
      cuisine: "CONTINENTAL",
      mealTypes: ["BREAKFAST"],
      prepTimeMinutes: 5,
      cookTimeMinutes: 8,
      caloriesApprox: 290,
      emoji: "🍞",
      tags: ["Quick 15m", "Sweet & Golden", "Breakfast Classic"],
      requiredIngredientIds: ["bread", "egg", "milk", "butter"],
      stepsEn: [
        "In a shallow dish, beat egg, milk, sugar, and a hint of cinnamon together until smooth.",
        "Dip thick bread slices into the custard for 15 seconds per side until fully absorbed but not falling apart.",
        "Melt butter in a skillet over medium heat until foamy.",
        "Cook the bread for 3-4 minutes on each side until puffed, golden brown, and delightfully crisp on the edges."
      ],
      stepsHi: [
        "चौड़े बर्तन में अंडा, दूध, थोड़ी चीनी और चुटकी भर दालचीनी पाउडर अच्छी तरह फेंटें।",
        "ब्रेड स्लाइस को घोल में दोनों तरफ 15 सेकंड डुबोएं ताकि मिश्रण अंदर तक समा जाए।",
        "तवे पर मध्यम आंच पर मक्खन पिघलाएं।",
        "ब्रेड को दोनों तरफ से 3-4 मिनट तक सुनहरा और किनारों से क्रिस्पी होने तक सेकें।"
      ],
      chefTipEn: "Day-old stale bread absorbs the custard beautifully without getting soggy or tearing.",
      chefTipHi: "एक दिन पुरानी ब्रेड का इस्तेमाल करें, वो घोल को अच्छे से सोखती है और सेकते समय टूटती नहीं है।"
    },
    {
      id: "cont_minestrone_soup",
      nameEn: "Hearty Italian Minestrone Soup",
      nameHi: "इटैलियन मिनस्ट्रोन वेज सूप",
      descriptionEn: "Rustic vegetable, bean, and pasta soup simmered slowly in an aromatic tomato-herb broth.",
      descriptionHi: "ताज़ी सब्जियों, बीन्स और पास्ता से भरपूर गर्म, पौष्टिक व सेहतमंद इतालवी सूप।",
      cuisine: "CONTINENTAL",
      mealTypes: ["LUNCH", "DINNER"],
      prepTimeMinutes: 15,
      cookTimeMinutes: 20,
      caloriesApprox: 220,
      emoji: "🍲",
      tags: ["Healthy & Light", "Winter Warmer", "Loaded Veggies"],
      requiredIngredientIds: ["carrot", "potato", "peas", "tomato", "pasta", "olive_oil", "italian_herbs"],
      stepsEn: [
        "Heat olive oil in a deep pot; sauté diced carrots, potatoes, onions, and garlic for 5 minutes.",
        "Stir in chopped tomatoes, tomato paste, Italian oregano, and vegetable stock or water.",
        "Bring to a boil, then reduce heat and simmer for 10 minutes until vegetables become fork-tender.",
        "Add small pasta and green peas, cook for 7 more minutes until pasta is tender, and serve with grated cheese."
      ],
      stepsHi: [
        "गहरे बर्तन में ऑलिव ऑयल गर्म करें; कटी गाजर, आलू, प्याज़ और लहसुन को 5 मिनट भूनें।",
        "कटे टमाटर, हर्ब्स और 3 कप पानी या वेज स्टॉक डालें।",
        "उबाल आने पर आंच धीमी करें और सब्जियों के गलने तक 10 मिनट पकाएं।",
        "छोटा पास्ता और हरी मटर डालें, पास्ता के पकने तक 7 मिनट और उबालें, ऊपर से चीज़ डालकर सर्व करें।"
      ],
      chefTipEn: "A piece of cheese rind simmered in the soup broth adds an incredible savory depth of umami flavor.",
      chefTipHi: "सूप उबलते समय चीज़ का टुकड़ा डाल दें, इससे सूप का स्वाद रेस्टोरेंट जैसा समृद्ध बन जाता है।"
    },
    {
      id: "cont_veggie_quesadilla",
      nameEn: "Cheesy Veggie Quesadilla",
      nameHi: "चीज़ी वेजी केसाडिला",
      descriptionEn: "Crispy folded tortillas packed with sautéed peppers, sweet corn, melted cheese, and salsa.",
      descriptionHi: "शिमला मिर्च, प्याज़ और ढेर सारी चीज़ से भरी मैक्सिकन कुरकुरी केसाडिला।",
      cuisine: "CONTINENTAL",
      mealTypes: ["LUNCH", "DINNER"],
      prepTimeMinutes: 10,
      cookTimeMinutes: 10,
      caloriesApprox: 370,
      emoji: "🌮",
      tags: ["Mexican Treat", "Crunchy & Cheesy", "Quick Dinner"],
      requiredIngredientIds: ["wheat_flour", "capsicum", "onion", "cheese", "butter", "italian_herbs"],
      stepsEn: [
        "Quickly sauté sliced bell peppers and onions in a drop of oil with salt and chili seasoning until tender-crisp.",
        "Warm a flatbread or flour tortilla on a dry skillet over medium heat.",
        "Scatter shredded cheese over one half, layer the sautéed peppers and onions, and fold the tortilla into a half-moon.",
        "Grill each side for 2-3 minutes with a touch of butter until golden, crunchy, and oozing cheese."
      ],
      stepsHi: [
        "कटी शिमला मिर्च और प्याज़ को थोड़े तेल और हर्ब्स के साथ 2 मिनट हल्का क्रंची भूनें।",
        "तवे पर रोटी या टॉर्टिला को हल्का गर्म करें।",
        "आधे हिस्से पर कद्दूकस की हुई चीज़ और भुनी सब्जियां फैलाएं, फिर दूसरे आधे हिस्से को मोड़कर बंद करें।",
        "हल्का मक्खन लगाकर दोनों तरफ से 2-3 मिनट सुनहरा और कुरकुरा होने तक सेकें।"
      ],
      chefTipEn: "Put cheese both below and above the veggies so the cheese acts as glue holding the quesadilla together.",
      chefTipHi: "सब्जियों के नीचे और ऊपर दोनों तरफ चीज़ रखें, इससे काटते समय केसाडिला खुलेगी नहीं।"
    },
    {
      id: "cont_garlic_butter_rice",
      nameEn: "Garlic Butter Herb Rice",
      nameHi: "गार्लिक बटर हर्ब राइस",
      descriptionEn: "Aromatic basmati rice cooked in rich golden garlic butter, vegetable broth, and fresh herbs.",
      descriptionHi: "मक्खन में भुने लहसुन, सब्जियों और हर्ब्स के साथ पका सुगंधित व स्वादिष्ट चावल।",
      cuisine: "CONTINENTAL",
      mealTypes: ["LUNCH", "DINNER"],
      prepTimeMinutes: 10,
      cookTimeMinutes: 18,
      caloriesApprox: 310,
      emoji: "🍚",
      tags: ["One Pot Meal", "Aromatic & Savory", "Quick Dinner"],
      requiredIngredientIds: ["rice", "ginger_garlic", "butter", "carrot", "peas", "olive_oil", "italian_herbs"],
      stepsEn: [
        "Rinse basmati rice thoroughly until water runs clear; drain completely.",
        "In a pot, melt 2 tbsp butter with 1 tbsp olive oil; sauté finely minced garlic on gentle heat until pale golden.",
        "Toss in diced carrots and peas for 2 minutes, then stir in the drained rice to coat each grain in garlic butter.",
        "Pour in 2 cups of salted water and herbs; bring to boil, cover tightly, and steam on low for 15 minutes."
      ],
      stepsHi: [
        "बासमती चावल को अच्छी तरह धोकर पानी निकाल दें।",
        "पैन में मक्खन और थोड़ा तेल गरम करें; बारीक कटा लहसुन हल्का सुनहरा होने तक भूनें।",
        "कटी गाजर और मटर डालकर 2 मिनट चलाएं, फिर चावल डालकर मक्खन में अच्छी तरह लपेटें।",
        "2 कप पानी, नमक और हर्ब्स डालें; उबाल आने पर ढक्कन बंद करें और धीमी आंच पर 15 मिनट दम दें।"
      ],
      chefTipEn: "Rest the cooked rice covered for 5 minutes off the flame before fluffing with a fork.",
      chefTipHi: "गैस बंद करने के बाद 5 मिनट ढक्कन न खोलें, फिर कांटे से हल्के हाथों चलाएं, चावल का हर दाना अलग-अलग रहेगा।"
    },
    {
      id: "cont_greek_salad",
      nameEn: "Mediterranean Crunch Bowl",
      nameHi: "मेडिटेरेनियन वेज क्रंच बाउल",
      descriptionEn: "Crisp cucumbers, juicy tomatoes, bell peppers, and crumbled cheese tossed in lemon herb dressing.",
      descriptionHi: "टमाटर, शिमला मिर्च, चीज़ और नींबू-ऑलिव ऑयल ड्रेसिंग का ताज़ा व पौष्टिक सलाद।",
      cuisine: "CONTINENTAL",
      mealTypes: ["LUNCH", "DINNER"],
      prepTimeMinutes: 12,
      cookTimeMinutes: 0,
      caloriesApprox: 190,
      emoji: "🥗",
      tags: ["No Cook 15m", "Ultra Healthy", "Fresh & Vibrant"],
      requiredIngredientIds: ["tomato", "capsicum", "onion", "cheese", "olive_oil", "italian_herbs"],
      stepsEn: [
        "Chop juicy tomatoes, crisp bell peppers, and red onions into bite-sized chunky cubes.",
        "In a small jar, shake extra virgin olive oil, fresh lemon juice, oregano, salt, and crushed black pepper.",
        "Combine all chopped vegetables in a wide salad bowl and drizzle the tangy herb dressing over.",
        "Toss gently, crown with generous chunks of cheese (feta or paneer), and serve chilled."
      ],
      stepsHi: [
        "टमाटर, शिमला मिर्च और प्याज़ को चौकोर बड़े टुकड़ों में काट लें।",
        "एक छोटी कटोरी में ऑलिव ऑयल, नींबू का रस, ऑरेगैनो, नमक और काली मिर्च मिलाकर ड्रेसिंग बनाएं।",
        "एक बड़े कटोरे में कटी सब्जियां डालें और ऊपर से तैयार की हुई ड्रेसिंग डालें।",
        "हल्के हाथों से मिलाएं, ऊपर से चीज़ या पनीर के टुकड़े डालकर ताज़ा परोसें।"
      ],
      chefTipEn: "Keep the vegetable chunks large and rustic so they don't lose their crisp refreshing crunch.",
      chefTipHi: "सब्जियों को बहुत बारीक न काटें, बड़े टुकड़े रखने से सलाद में क्रंच और ताज़गी बनी रहती है।"
    },
    {
      id: "cont_spinach_corn_pasta",
      nameEn: "Creamy Spinach Alfredo Pasta",
      nameHi: "क्रीमी पालक अल्फ्रेडो पास्ता",
      descriptionEn: "Penne or macaroni folded in a silken white garlic sauce loaded with tender spinach and cheese.",
      descriptionHi: "मक्खन, दूध और चीज़ की सफेद सॉस में ताज़ा पालक और पास्ता का लाजवाब स्वाद।",
      cuisine: "CONTINENTAL",
      mealTypes: ["LUNCH", "DINNER"],
      prepTimeMinutes: 12,
      cookTimeMinutes: 15,
      caloriesApprox: 410,
      emoji: "🍝",
      tags: ["Cheesy White Sauce", "Comforting", "Dinner Date"],
      requiredIngredientIds: ["pasta", "spinach", "milk", "butter", "wheat_flour", "cheese", "ginger_garlic"],
      stepsEn: [
        "Boil pasta until tender; wash and roughly shred fresh spinach leaves.",
        "Melt 2 tbsp butter in a skillet, sauté garlic, then stir in 1 tbsp flour and cook for 1 minute without browning.",
        "Slowly pour in warm milk while whisking vigorously until a thick, lump-free béchamel sauce forms.",
        "Stir in the shredded spinach to wilt, add cooked pasta and grated cheese, and season with black pepper."
      ],
      stepsHi: [
        "पास्ता को उबाल लें; पालक को धोकर टुकड़ों में काट लें।",
        "पैन में मक्खन गरम करें, लहसुन भूनें, फिर 1 चम्मच आटा डालकर 1 मिनट भूनें।",
        "गुनगुना दूध धीरे-धीरे डालते हुए लगातार फेंटें ताकि चिकनी और गाढ़ी सफेद सॉस बन जाए।",
        "पालक डालकर 1 मिनट चलाएं, फिर उबला पास्ता और चीज़ डालकर काली मिर्च के साथ टॉस करें।"
      ],
      chefTipEn: "Add milk warm rather than cold straight from the fridge to prevent the flour roux from seizing into lumps.",
      chefTipHi: "सॉस बनाते समय दूध गुनगुना डालें, ठंडा दूध डालने से आटे की गांठें पड़ सकती हैं।"
    },
    {
      id: "cont_mushroom_risotto",
      nameEn: "Creamy Garlic Herb Rice Bowl",
      nameHi: "क्रीमी मशरूम राइस बाउल",
      descriptionEn: "Tender rice simmered gently in vegetable stock with caramelized mushrooms, butter, and cheese.",
      descriptionHi: "मशरूम, मक्खन और चीज़ के साथ धीमी आंच पर पका मलाईदार राइस बाउल।",
      cuisine: "CONTINENTAL",
      mealTypes: ["LUNCH", "DINNER"],
      prepTimeMinutes: 10,
      cookTimeMinutes: 20,
      caloriesApprox: 350,
      emoji: "🍚",
      tags: ["Restaurant Style", "Warm & Cozy", "Gourmet"],
      requiredIngredientIds: ["rice", "mushroom", "butter", "ginger_garlic", "cheese", "olive_oil"],
      stepsEn: [
        "Brown sliced button mushrooms in 1 tbsp butter over high heat; remove half for the final garnish.",
        "In the same pan, sauté finely minced garlic and onions in butter until translucent.",
        "Add pre-cooked rice and 1/2 cup warm vegetable stock or milk; simmer gently on low heat while stirring.",
        "Fold in grated cheese and remaining butter until creamy and glossy; top with the reserved seared mushrooms."
      ],
      stepsHi: [
        "मशरूम को तेज़ आंच पर मक्खन में सुनहरा भूनें; आधा मशरूम गार्निश के लिए अलग रख लें।",
        "उसी पैन में बारीक लहसुन और प्याज़ डालकर पारदर्शी होने तक भूनें।",
        "पके हुए चावल और आधा कप गुनगुना दूध या वेज स्टॉक डालें; धीमी आंच पर लगातार चलाते हुए पकाएं।",
        "कद्दूकस की चीज़ और एक चम्मच मक्खन मिलाएं जिससे क्रीमी टेक्सचर बने; ऊपर भुने मशरूम सजाकर परोसें।"
      ],
      chefTipEn: "Stirring vigorously in the final minute activates the starches for authentic velvety creaminess.",
      chefTipHi: "अंत में एक मिनट तेज़ी से चलाएं, इससे चावल का स्टार्च और चीज़ मिलकर क्रीमी रेस्टोरेंट स्टाइल स्वाद देते हैं।"
    }
  ],

  // Indian States Top 3 Famous Dishes
  indianStates: [
    {
      id: "punjab",
      nameEn: "Punjab",
      nameHi: "पंजाब",
      taglineEn: "Land of rich gravies, dollops of white butter & golden flatbreads",
      taglineHi: "मक्खन, लस्सी और सरसों के साग की धरती",
      emoji: "🌾",
      dishes: [
        {
          id: "pb_sarson_saag",
          nameEn: "Sarson da Saag & Makki di Roti",
          nameHi: "सरसों का साग व मक्के की रोटी",
          descriptionEn: "Classic Punjabi winter greens simmered with maize flour, ginger, garlic, and fresh white butter.",
          descriptionHi: "सरसों, बथुआ और पालक का पारंपरिक पंजाबी साग और कुरकुरी मक्के की रोटी।",
          cuisine: "INDIAN",
          mealTypes: ["LUNCH", "DINNER"],
          prepTimeMinutes: 20,
          cookTimeMinutes: 30,
          caloriesApprox: 360,
          emoji: "🥬",
          tags: ["State Pride", "Winter Classic", "Rich in Iron"],
          requiredIngredientIds: ["spinach", "wheat_flour", "ginger_garlic", "green_chili", "butter", "mustard_cumin"],
          stepsEn: [
            "Wash mustard and spinach leaves thoroughly, then pressure cook with ginger, garlic, and green chilies for 3 whistles.",
            "Mash cooked greens with a wooden churner (madhani) while sprinkling 2 tbsp maize flour to bind the gravy.",
            "In a pan, melt white butter or ghee, fry chopped onions and garlic until fragrant, and pour over the simmering saag.",
            "Knead maize flour dough with warm water, pat into flat rotis, roast on a tawa with butter, and serve piping hot."
          ],
          stepsHi: [
            "सरसों और पालक को अच्छी तरह धोकर अदरक, लहसुन और हरी मिर्च के साथ कुकर में 3 सीटी तक उबालें।",
            "उबले साग को मथानी से अच्छी तरह घोटें और बाइंडिंग के लिए 2 चम्मच मक्के का आटा मिलाएं।",
            "कड़ाही में मक्खन या देसी घी गरम करें, बारीक प्याज़ और लहसुन भूनकर साग में छौंक लगाएं।",
            "मक्के के आटे को गुनगुने पानी से गूंथकर रोटी बनाएं, तवे पर मक्खन लगाकर सेकें और साग के साथ परोसें।"
          ],
          chefTipEn: "Slow-simmering the saag for at least 25 minutes enhances its natural earthy sweetness.",
          chefTipHi: "साग को कम से कम 25 मिनट धीमी आंच पर पकाएं, इससे साग में सोंधा और असली पारंपरिक स्वाद आता है।"
        },
        {
          id: "pb_dal_makhani",
          nameEn: "Slow-Cooked Dal Makhani",
          nameHi: "शाही दाल मखनी",
          descriptionEn: "Whole black urad lentils and kidney beans slow-simmered overnight with tomatoes, butter, and cream.",
          descriptionHi: "साबुत उड़द और राजमा को मक्खन, मलाई और कश्मीरी मिर्च के साथ धीमी आंच पर पकाई गई क्रीमी दाल।",
          cuisine: "INDIAN",
          mealTypes: ["DINNER", "LUNCH"],
          prepTimeMinutes: 15,
          cookTimeMinutes: 40,
          caloriesApprox: 410,
          emoji: "🍲",
          tags: ["Dhaba Classic", "Rich & Creamy", "Party Special"],
          requiredIngredientIds: ["rajma", "tomato", "ginger_garlic", "butter", "milk", "garam_masala"],
          stepsEn: [
            "Boil soaked black lentils and rajma with ginger, salt, and water for 6-7 whistles until completely velvety.",
            "Heat butter in a heavy pot, add fresh tomato puree and degi mirch, and cook until butter leaves the sides.",
            "Stir in the boiled lentils with water; mash partially against the sides and simmer on very low heat for 30 minutes.",
            "Swirl in fresh cream, generous butter cubes, and crushed kasuri methi; serve with garlic naan or jeera rice."
          ],
          stepsHi: [
            "भीगी साबुत उड़द और राजमा को नमक व अदरक के साथ कुकर में 6-7 सीटी आने तक एकदम गलने तक उबालें।",
            "कड़ाही में भरपूर मक्खन गर्म करें, ताज़ी टमाटर प्यूरी और कश्मीरी मिर्च डालकर मक्खन छूटने तक भूनें।",
            "उबली दाल डालें, करछी से हल्का मैश करें और धीमी आंच पर 30 मिनट तक लगातार कढ़ने दें।",
            "ऊपर से ताज़ी मलाई, मक्खन का बड़ा टुकड़ा और कसूरी मेथी मसलकर डालें; नान या चावल के साथ खाएं।"
          ],
          chefTipEn: "The secret to authentic dal makhani is slow simmering on lowest flame—the longer it simmers, the creamier it gets.",
          chefTipHi: "दाल मखनी का असली राज़ है धीमी आंच पर देर तक कढ़ाना, जितना धीमी आंच पर पकेगी उतनी ही मलाईदार बनेगी।"
        },
        {
          id: "pb_amritsari_kulcha",
          nameEn: "Crispy Amritsari Aloo Kulcha",
          nameHi: "अमृतसरी आलू कुलचा",
          descriptionEn: "Flaky layered tandoori-style stuffed bread loaded with spiced potatoes, onions, and coriander.",
          descriptionHi: "मसालेदार आलू, प्याज़ और अनारदाने से भरा परतदार कुरकुरा अमृतसरी कुलचा।",
          cuisine: "INDIAN",
          mealTypes: ["BREAKFAST", "LUNCH"],
          prepTimeMinutes: 20,
          cookTimeMinutes: 15,
          caloriesApprox: 340,
          emoji: "🫓",
          tags: ["Street Food", "Crunchy & Flaky", "Amritsar Pride"],
          requiredIngredientIds: ["wheat_flour", "potato", "onion", "butter", "garam_masala", "green_chili"],
          stepsEn: [
            "Knead soft dough with flour, yogurt, pinch of baking soda, and rest for 20 minutes.",
            "Mix mashed potatoes, minced onions, crushed pomegranate seeds (anardana), green chilies, and garam masala.",
            "Roll dough with layered butter folds to create flakiness, pack with potato filling, and roll out with coriander leaves on top.",
            "Stick onto a hot iron tawa, invert tawa directly over flame to get tandoori charred spots, and crush with butter."
          ],
          stepsHi: [
            "आटे/मैदे में दही, थोड़ा बेकिंग सोडा और पानी मिलाकर नरम आटा गूंथें और 20 मिनट रखें।",
            "उबले आलू, बारीक प्याज़, अनारदाना, हरी मिर्च और गरम मसाला मिलाकर चटपटा भरावन तैयार करें।",
            "आटे में मक्खन की परतें बनाकर लोई में आलू भरें और ऊपर हरा धनिया लगाकर बेलें।",
            "लोहे के तवे पर चिपकाएं, तवा उल्टा करके सीधी आंच पर तंदूर जैसा सेकें और हाथ से फोड़कर मक्खन लगाएं।"
          ],
          chefTipEn: "Crushing the hot kulcha lightly between both hands releases steam and shows off all the crispy buttery layers.",
          chefTipHi: "सिका हुआ गरम कुलचा दोनों हाथों से हल्का सा दबाएं, इससे कुलचे की सारी कुरकुरी परतें खुल जाती हैं।"
        }
      ]
    },
    {
      id: "rajasthan",
      nameEn: "Rajasthan",
      nameHi: "राजस्थान",
      taglineEn: "Royal culinary heritage with aromatic spices and ghee",
      taglineHi: "शाही स्वाद, दाल बाटी चूरमा और रजवाड़ी मसालों का संगम",
      emoji: "🏰",
      dishes: [
        {
          id: "rj_dal_baati",
          nameEn: "Dal Baati Churma",
          nameHi: "दाल बाटी चूरमा",
          descriptionEn: "Traditional baked wheat dumplings dipped in pure ghee, served with spicy panchmel dal and sweet churma.",
          descriptionHi: "देसी घी में डूबी खस्ता बाटी, पंचमेल दाल और मिठास से भरपूर चूरमा।",
          cuisine: "INDIAN",
          mealTypes: ["LUNCH", "DINNER"],
          prepTimeMinutes: 20,
          cookTimeMinutes: 30,
          caloriesApprox: 460,
          emoji: "🫓",
          tags: ["Royal Heritage", "State Dish", "Festive Feast"],
          requiredIngredientIds: ["wheat_flour", "toor_dal", "butter", "mustard_cumin", "turmeric_chili", "garam_masala"],
          stepsEn: [
            "Knead coarse wheat flour with ghee, ajwain, and water into a firm dough; roll into tight round balls (baatis).",
            "Bake the baatis in an oven or bati cooker on medium heat until golden and cracked on the surface.",
            "Cook mix of 5 dals (toor, moong, chana, urad, masoor) and temper with ghee, cumin, garlic, and red chilies.",
            "Dip hot crushed baatis directly into a bowl of warm desi ghee and serve with dal and sweet jaggery churma."
          ],
          stepsHi: [
            "दरदरे गेहूं के आटे में घी का मोयन, अजवाइन और नमक डालकर सख्त आटा गूंथें और गोल बाटियां बनाएं।",
            "बाटियों को बाटी ओवन या तंदूर में धीमी आंच पर ऊपर दरारें आने और सुनहरी होने तक सेकें।",
            "पंचमेल दाल को कुकर में उबालें और घी में जीरा, लहसुन और लाल मिर्च का ज़ायकेदार तड़का लगाएं।",
            "गरमा-गरम बाटी को हल्का तोड़कर देसी घी में डुबोएं और तीखी दाल व मीठे चूरमे के साथ परोसें।"
          ],
          chefTipEn: "Cracking on the outer surface of baati indicates it is baked perfectly right through to the core.",
          chefTipHi: "बाटी के ऊपर हल्की दरारें दिखना इस बात की पहचान है कि बाटी अंदर तक अच्छी तरह पक चुकी है।"
        },
        {
          id: "rj_gatte_curry",
          nameEn: "Rajasthani Gatte ki Sabzi",
          nameHi: "राजस्थानी गट्टे की सब्ज़ी",
          descriptionEn: "Gram flour spiced dumplings simmered in a luscious tangy yogurt gravy with royal spices.",
          descriptionHi: "मसालेदार बेसन के नरम गट्टे और दही की खट्टी-मीठी स्वादिष्ट रजवाड़ी तरी।",
          cuisine: "INDIAN",
          mealTypes: ["LUNCH", "DINNER"],
          prepTimeMinutes: 15,
          cookTimeMinutes: 20,
          caloriesApprox: 290,
          emoji: "🍲",
          tags: ["No Onion Garlic Option", "Rich Yogurt Gravy", "Authentic"],
          requiredIngredientIds: ["besan", "dahi", "mustard_cumin", "turmeric_chili", "garam_masala", "olive_oil"],
          stepsEn: [
            "Knead besan with yogurt, oil, spices, and carom seeds into a dough; roll into cylindrical logs.",
            "Boil the logs in bubbling salted water for 10 minutes until bubbles form on surface; slice into bite-sized pieces.",
            "Whisk yogurt with turmeric, coriander, chili powder, and salt until smooth.",
            "Heat oil with cumin and hing, pour yogurt mixture while stirring continuously, slide in gattas, and simmer for 6 minutes."
          ],
          stepsHi: [
            "बेसन में दही, तेल, अजवाइन और मसाले मिलाकर नरम आटा गूंथें और लंबी गोल नलियां (सिलेंडर) बनाएं।",
            "उबलते पानी में 10 मिनट तक उबालें जब तक ऊपर छोटे दाने न दिखें; ठंडा करके छोटे टुकड़ों में काटें।",
            "ताज़ा दही में हल्दी, धनिया पाउडर, लाल मिर्च और नमक मिलाकर अच्छी तरह फेंटें।",
            "कड़ाही में तेल गरम करके जीरा-हींग तड़काएं, दही का मिश्रण लगातार चलाते हुए डालें, गट्टे डालकर 6 मिनट पकाएं।"
          ],
          chefTipEn: "Save the gatta boiling water to thin the yogurt gravy; it carries great flavor and naturally thickens the sauce.",
          chefTipHi: "गट्टे उबालने वाला पानी फेंकें नहीं, उसी पानी को ग्रेवी में डालें, इससे तरी गाढ़ी और स्वादिष्ट बनती है।"
        },
        {
          id: "rj_pyaaz_kachori",
          nameEn: "Jodhpur Pyaaz Kachori",
          nameHi: "जोधपुरी प्याज़ कचौरी",
          descriptionEn: "Crispy, flaky deep-fried pastry pocket stuffed with spicy caramelized onion and fennel masala.",
          descriptionHi: "सौंफ, धनिये और भुने प्याज़ के चटपटे मसाले से भरी खस्ता जोधपुरी कचौरी।",
          cuisine: "INDIAN",
          mealTypes: ["BREAKFAST", "LUNCH"],
          prepTimeMinutes: 15,
          cookTimeMinutes: 20,
          caloriesApprox: 320,
          emoji: "🥟",
          tags: ["Crispy Snack", "Iconic Jodhpur", "Spicy"],
          requiredIngredientIds: ["wheat_flour", "onion", "potato", "garam_masala", "turmeric_chili", "olive_oil"],
          stepsEn: [
            "Knead refined or wheat flour with ghee and salt into a semi-soft dough and rest under a moist cloth.",
            "Coarsely crush fennel and coriander seeds; sauté chopped onions, boiled potatoes, and amchur until fragrant.",
            "Roll dough into small circles, spoon generous onion filling inside, seal the top, and flatten gently with palms.",
            "Fry on low heat in oil for 12-15 minutes until puffed, golden, and supremely flaky."
          ],
          stepsHi: [
            "आटे/मैदे में घी का मोयन और नमक डालकर नरम आटा गूंथें और गीले कपड़े से ढककर रखें।",
            "सौंफ और साबुत धनिया कूट लें; कड़ाही में प्याज़, उबले आलू, अमचूर और मसाले डालकर चटपटा मसाला भूनें।",
            "लोई बेलकर बीच में प्याज़ का मसाला भरें, मुंह अच्छी तरह बंद करें और हथेली से दबाकर कचौरी का आकार दें।",
            "धीमी आंच पर तेल में 12-15 मिनट तक सुनहरी और एकदम खस्ता होने तक तलें।"
          ],
          chefTipEn: "Frying on lowest flame is crucial; high flame makes kachoris soft and soggy instead of crispy.",
          chefTipHi: "कचौरी को हमेशा बिल्कुल धीमी आंच पर तलें, तेज़ आंच करने से कचौरी खस्ता नहीं बनेगी और नरम पड़ जाएगी।"
        }
      ]
    },
    {
      id: "gujarat",
      nameEn: "Gujarat",
      nameHi: "गुजरात",
      taglineEn: "Mastery of sweet-tangy balance, steamed delights & tea-time snacks",
      taglineHi: "खट्टा-मीठा स्वाद, भाप में पके व्यंजन और ढोकले की मिठास",
      emoji: "🪁",
      dishes: [
        {
          id: "gj_khaman_dhokla",
          nameEn: "Nylon Khaman Dhokla",
          nameHi: "नायलॉन खमन ढोकला",
          descriptionEn: "Melt-in-mouth spongy steamed gram flour cakes drenched in mustard, sesame, and sweet lemon syrup.",
          descriptionHi: "राई, कढ़ी पत्ता और नींबू-पानी के तड़के वाला रुई जैसा स्पंजी और रसदार खमन ढोकला।",
          cuisine: "INDIAN",
          mealTypes: ["BREAKFAST"],
          prepTimeMinutes: 10,
          cookTimeMinutes: 15,
          caloriesApprox: 210,
          emoji: "🥮",
          tags: ["Steamed & Light", "Low Calorie", "Gujarati Icon"],
          requiredIngredientIds: ["besan", "green_chili", "mustard_cumin", "olive_oil", "turmeric_chili"],
          stepsEn: [
            "Whisk besan with water, lemon juice, sugar, turmeric, and ginger-chili paste into a silky batter.",
            "Stir in fruit salt (eno) and immediately pour into a greased steaming tray.",
            "Steam on high heat for 15 minutes until spongy and a toothpick inserted comes out clean.",
            "Pour a sizzling tempering of mustard seeds, sesame, curry leaves, water, and sugar over the warm sliced dhoklas."
          ],
          stepsHi: [
            "बेसन, पानी, नींबू का रस, थोड़ी चीनी, हल्दी और अदरक-मिर्च पेस्ट मिलाकर चिकना घोल तैयार करें।",
            "घोल में ईनो फ्रूट साल्ट मिलाएं और तुरंत ग्रीस की हुई थाली में पलट दें।",
            "तेज़ आंच पर 15 मिनट स्टीम करें जब तक ढोकला रुई जैसा फूल न जाए।",
            "पैन में राई, तिल, कढ़ी पत्ता, हरी मिर्च, पानी और चीनी का तड़का बनाएं और कटे हुए ढोकले पर फैलाएं।"
          ],
          chefTipEn: "Pouring warm sugar-lemon water over hot dhokla makes it juicy and prevents that dry throat feeling.",
          chefTipHi: "ढोकले के ऊपर गुनगुना तड़के का पानी डालें, इससे ढोकला अंदर तक रसदार बना रहता है और गले में अटकता नहीं।"
        },
        {
          id: "gj_sev_tameta",
          nameEn: "Sev Tameta Nu Shaak",
          nameHi: "काठियावाड़ी सेव टमेटा",
          descriptionEn: "Quick tangy tomato curry with jaggery and spices, finished with crispy ratlami sev noodles.",
          descriptionHi: "टमाटर और गुड़ की चटपटी रसीली काठियावाड़ी करी, ऊपर से कुरकुरी तीखी सेव।",
          cuisine: "INDIAN",
          mealTypes: ["LUNCH", "DINNER"],
          prepTimeMinutes: 10,
          cookTimeMinutes: 12,
          caloriesApprox: 260,
          emoji: "🍅",
          tags: ["15-Min Dinner", "Sweet & Tangy", "Kathiyawadi"],
          requiredIngredientIds: ["tomato", "onion", "ginger_garlic", "turmeric_chili", "mustard_cumin", "olive_oil"],
          stepsEn: [
            "Heat oil with mustard seeds, cumin, hing, and grated ginger-garlic.",
            "Add chopped ripe tomatoes, turmeric, red chili, and a small piece of jaggery (gud) for balance.",
            "Cover and cook tomatoes for 6 minutes until soft and pulpy, then add 1/2 cup warm water.",
            "Right before serving, turn off flame, dump in crispy sev, garnish with fresh coriander, and enjoy with hot rotis."
          ],
          stepsHi: [
            "कड़ाही में तेल गरम करके राई, जीरा, हींग और अदरक-लहसुन पेस्ट तड़काएं।",
            "कटे हुए पके टमाटर, हल्दी, कश्मीरी लाल मिर्च और छोटा टुकड़ा गुड़ डालकर मिलाएं।",
            "टमाटर को ढककर 6 मिनट तक गलने तक पकाएं, फिर आधा कप गुनगुना पानी डालकर एक उबाल लें।",
            "गैस बंद करके परोसने से ठीक पहले ऊपर से ढेर सारी बेसन की सेव और हरा धनिया डालें।"
          ],
          chefTipEn: "Add the sev only 30 seconds before eating so it retains its delightful crunch against the juicy tomato gravy.",
          chefTipHi: "सेव हमेशा खाना खाते समय ही डालें, पहले से डालने पर सेव नरम पड़ जाती है और क्रंच खत्म हो जाता है।"
        },
        {
          id: "gj_methi_thepla",
          nameEn: "Soft Methi Thepla",
          nameHi: "मेथी थेपला",
          descriptionEn: "Spiced whole wheat and gram flour flatbread infused with fresh fenugreek leaves, yogurt, and sesame.",
          descriptionHi: "ताज़ी हरी मेथी, तिल और दही के मोयन से बने बेहद नरम और स्वादिष्ट गुजराती थेपले।",
          cuisine: "INDIAN",
          mealTypes: ["BREAKFAST", "LUNCH"],
          prepTimeMinutes: 15,
          cookTimeMinutes: 10,
          caloriesApprox: 190,
          emoji: "🫓",
          tags: ["Travel Friendly", "Nutritious", "Healthy Green"],
          requiredIngredientIds: ["wheat_flour", "besan", "spinach", "dahi", "mustard_cumin", "turmeric_chili", "olive_oil"],
          stepsEn: [
            "Finely chop fresh methi leaves; mix with wheat flour, 2 tbsp besan, sesame seeds, turmeric, and chili powder.",
            "Knead using fresh yogurt and oil without using excess water to keep the theplas soft for days.",
            "Roll into paper-thin circles using dry flour dusting.",
            "Roast on a hot griddle on medium-high flame with oil on both sides until light golden spots appear."
          ],
          stepsHi: [
            "ताज़ी मेथी को बारीक काटें; गेहूं का आटा, 2 चम्मच बेसन, सफेद तिल, हल्दी और मिर्च मिलाएं।",
            "दही और 2 चम्मच तेल डालकर नरम आटा गूंथें (पानी कम से कम इस्तेमाल करें ताकि लंबे समय तक चले)।",
            "सूखा आटा लगाकर एकदम पतले गोल थेपले बेलें।",
            "तेज़ तवे पर दोनों तरफ हल्का तेल लगाकर फटाफट सेकें ताकि वो मुलायम रहें।"
          ],
          chefTipEn: "Kneading with yogurt instead of water keeps theplas soft and fresh for up to 4 days during travel.",
          chefTipHi: "पानी की जगह दही से आटा गूंथने से थेपले 4 दिन के सफर में भी एकदम ताज़ा और रुई जैसे नरम रहते हैं।"
        }
      ]
    },
    {
      id: "maharashtra",
      nameEn: "Maharashtra",
      nameHi: "महाराष्ट्र",
      taglineEn: "Fiery Kolhapuri masalas, kokum tang & sweet festive puran poli",
      taglineHi: "झणझणीत मिसळ, पुरणपोळी आणि अस्सल मराठी स्वाद",
      emoji: "🥥",
      dishes: [
        {
          id: "mh_misal_pav",
          nameEn: "Kolhapuri Misal Pav",
          nameHi: "कोल्हापुरी मिसल पाव",
          descriptionEn: "Fiery sprouted moth bean curry layered with crunchy farsan, chopped onions, lemon, and soft pav buns.",
          descriptionHi: "अंकुरित मटकी की तीखी रस्सेदार उसल, ऊपर से कुरकुरा फरसाण, प्याज़ और लादी पाव।",
          cuisine: "INDIAN",
          mealTypes: ["BREAKFAST", "LUNCH"],
          prepTimeMinutes: 15,
          cookTimeMinutes: 20,
          caloriesApprox: 380,
          emoji: "🍲",
          tags: ["Fiery & Spicy", "Street King", "High Protein"],
          requiredIngredientIds: ["onion", "tomato", "ginger_garlic", "bread", "mustard_cumin", "turmeric_chili", "olive_oil"],
          stepsEn: [
            "Pressure cook sprouted moth beans with salt and turmeric for 2 whistles.",
            "Roast dry coconut, onions, and garlic until blackened; grind into an authentic Kolhapuri masala paste.",
            "Sauté paste in plenty of oil with goda masala, pour in water and boiled sprouts to form the flaming red 'kat' (tarri).",
            "To serve, ladle sprouts in a bowl, drench in hot tarri, pile crunchy farsan and raw onion on top, and eat with pav."
          ],
          stepsHi: [
            "अंकुरित मटकी को नमक और हल्दी के साथ कुकर में 2 सीटी तक उबालें।",
            "सूखा नारियल, प्याज़ और लहसुन को तवे पर काला होने तक भूनें और पीसकर कोल्हापुरी मसाला बनाएं।",
            "कड़ाही में भरपूर तेल में मसाला भूनें, उबली मटकी और पानी डालकर लाल तरी (कट) बनने तक 10 मिनट उबालें।",
            "बाउल में उसल निकालें, ऊपर से तीखी तरी डालें, फरसाण और बारीक प्याज़ सजाकर लादी पाव के साथ खाएं।"
          ],
          chefTipEn: "Roasting desiccated coconut until deep brown is the secret to the distinctive dark, rich aroma of Maharashtrian tarri.",
          chefTipHi: "नारियल को तवे पर गहरा भूरा होने तक भूनें, यही मराठी मिसल की असली खुशबू और रंग का राज़ है।"
        },
        {
          id: "mh_puran_poli",
          nameEn: "Traditional Puran Poli",
          nameHi: "मराठी पुरणपोळी",
          descriptionEn: "Festive sweet flatbread stuffed with cooked yellow chana dal sweetened with jaggery, nutmeg, and cardamom.",
          descriptionHi: "चना दाल, गुड़, जायफल और इलायची की मीठी भरावन से बनी पारंपरिक पुरणपोळी और ऊपर देसी घी।",
          cuisine: "INDIAN",
          mealTypes: ["LUNCH", "DINNER"],
          prepTimeMinutes: 25,
          cookTimeMinutes: 20,
          caloriesApprox: 310,
          emoji: "🫓",
          tags: ["Festive Special", "Sweet Tradition", "Melt in Mouth"],
          requiredIngredientIds: ["wheat_flour", "toor_dal", "butter", "milk"],
          stepsEn: [
            "Boil soaked chana dal until tender; drain completely and cook with equal parts grated jaggery.",
            "Mash dal-jaggery mixture in a pan with cardamom and nutmeg powder until thick paste (puran) forms; pass through sieve.",
            "Knead soft, stretchy dough with flour, turmeric, oil, and water.",
            "Stuff dough with double amount of puran, roll thin with flour dusting, roast on tawa with ghee, and serve with milk."
          ],
          stepsHi: [
            "चना दाल को नरम होने तक उबालें; पानी छान लें और कड़ाही में बराबर मात्रा में गुड़ डालकर पकाएं।",
            "दाल और गुड़ को अच्छी तरह मैश करें, इलायची और जायफल पाउडर डालकर गाढ़ा पुरण बनाएं और छान लें।",
            "आटे में चुटकी भर हल्दी, तेल और पानी डालकर एकदम लचीला व नरम आटा गूंथें।",
            "लोई में पुरण का गोला भरें, पतला बेलें और तवे पर देसी घी लगाकर दोनों तरफ से सेकें।"
          ],
          chefTipEn: "A pinch of freshly grated nutmeg (jaiphal) balances the sweetness and gives the iconic wedding aroma.",
          chefTipHi: "पूरन में चुटकी भर ताज़ा जायफल घिसकर डालें, इससे मिठास संतुलित होती है और खुशबू लाजवाब आती है।"
        },
        {
          id: "mh_pithla_bhakri",
          nameEn: "Pithla Bhakri",
          nameHi: "पिठलं भाकरी",
          descriptionEn: "Rustic spiced besan porridge tempered with green chilies, garlic, and cumin, served with jowar bhakri.",
          descriptionHi: "लहसुन, हरी मिर्च और जीरे के तड़के वाला गरमा-गरम बेसन पिठलं और ज्वार की भाकरी।",
          cuisine: "INDIAN",
          mealTypes: ["LUNCH", "DINNER"],
          prepTimeMinutes: 10,
          cookTimeMinutes: 12,
          caloriesApprox: 270,
          emoji: "🍲",
          tags: ["Rustic Village Food", "Quick 15m", "Soul Food"],
          requiredIngredientIds: ["besan", "onion", "green_chili", "ginger_garlic", "mustard_cumin", "olive_oil"],
          stepsEn: [
            "Whisk besan with water, turmeric, and salt into a thin, lump-free liquid slurry.",
            "Heat oil in a pan, crackle mustard seeds, cumin, hing, lots of crushed garlic, and spicy green chilies.",
            "Add sliced onions, sauté until translucent, and slowly pour in the besan slurry while stirring briskly.",
            "Cover and cook on low heat for 5 minutes until glossy and thick; serve with hot jowar bhakri and garlic thecha."
          ],
          stepsHi: [
            "बेसन में पानी, हल्दी और नमक मिलाकर बिना गुठली का पतला घोल तैयार कर लें।",
            "कड़ाही में तेल गरम करें, राई, जीरा, हींग, ढेर सारा कुटा लहसुन और तीखी हरी मिर्च तड़काएं।",
            "कटा प्याज़ डालकर भूनें, फिर बेसन का घोल डालते हुए लगातार चलाएं ताकि गांठ न पड़े।",
            "ढककर 5 मिनट धीमी आंच पर पकने दें जब तक पिठलं चमकदार न हो जाए; गरमा-गरम भाकरी और ठेचे के साथ खाएं।"
          ],
          chefTipEn: "Crushing garlic and green chilies together in a mortar pestle releases oils that give pithla its authentic countryside punch.",
          chefTipHi: "लहसुन और हरी मिर्च को ओखली में दरदरा कूटकर तड़काएं, यही गांव वाले असली पिठले का स्वाद देता है।"
        }
      ]
    },
    {
      id: "tamil_nadu",
      nameEn: "Tamil Nadu",
      nameHi: "तमिलनाडु",
      taglineEn: "Crispy dosas, fragrant sambar, curry leaf aromatics & filter coffee culture",
      taglineHi: "कुरकुरा डोसा, सांभर, कढ़ी पत्ता और फिल्टर कॉफी की सुगंध",
      emoji: "🥥",
      dishes: [
        {
          id: "tn_masala_dosa",
          nameEn: "Crispy Mysore Masala Dosa",
          nameHi: "मसाला डोसा व सांभर",
          descriptionEn: "Golden fermented rice-lentil crepe smeared with spicy red chutney and stuffed with seasoned potato sabzi.",
          descriptionHi: "चावल और उड़द दाल का कुरकुरा डोसा, अंदर आलू का मसाला और साथ में गरमा-गरम सांभर।",
          cuisine: "INDIAN",
          mealTypes: ["BREAKFAST", "DINNER"],
          prepTimeMinutes: 15,
          cookTimeMinutes: 15,
          caloriesApprox: 330,
          emoji: "🥞",
          tags: ["South Indian King", "Golden & Crispy", "Worldwide Hit"],
          requiredIngredientIds: ["rice", "potato", "onion", "mustard_cumin", "butter", "green_chili"],
          stepsEn: [
            "Boil potatoes and temper with mustard seeds, curry leaves, green chilies, onions, and turmeric for the potato filling.",
            "Heat a cast-iron tawa, splash with water, wipe clean, and spread a ladle of fermented dosa batter in thin concentric spirals.",
            "Drizzle melted butter or ghee around edges until batter turns reddish golden and crispy.",
            "Place potato filling in center, fold into a roll or triangle, and serve hot with tangy sambar and coconut chutney."
          ],
          stepsHi: [
            "उबले आलू को राई, कढ़ी पत्ता, हरी मिर्च, प्याज़ और हल्दी के तड़के में मैश करके आलू मसाला बनाएं।",
            "तवे पर पानी छिड़क कर पोंछें, एक कलछी डोसा बैटर डालकर गोल-गोल पतला फैलाएं।",
            "किनारों पर मक्खन या घी डालें और नीचे से सुनहरा व कुरकुरा होने तक सेकें।",
            "बीच में आलू का मसाला रखें, डोसे को मोड़ें और गरमा-गरम सांभर व नारियल चटनी के साथ परोसें।"
          ],
          chefTipEn: "Adding 1 tbsp chana dal to the rice while soaking gives that enticing golden restaurant crunch to the dosa.",
          chefTipHi: "चावल भिगोते समय एक चम्मच चना दाल मिला दें, इससे डोसा तवे पर एकदम सुनहरा और रेस्टोरेंट जैसा क्रिस्पी बनता है।"
        },
        {
          id: "tn_chettinad_curry",
          nameEn: "Chettinad Mushroom Curry",
          nameHi: "चेट्टीनाड मशरूम करी",
          descriptionEn: "Mushrooms cooked in a freshly roasted spice blend of star anise, black pepper, coconut, and curry leaves.",
          descriptionHi: "काली मिर्च, सौंफ, चकरी फूल और भुने नारियल के खास चेट्टीनाड मसाले में पके रसीले मशरूम।",
          cuisine: "INDIAN",
          mealTypes: ["LUNCH", "DINNER"],
          prepTimeMinutes: 15,
          cookTimeMinutes: 18,
          caloriesApprox: 280,
          emoji: "🍄",
          tags: ["Aromatic Spices", "Chettinad Special", "Peppery Delight"],
          requiredIngredientIds: ["mushroom", "onion", "tomato", "ginger_garlic", "olive_oil", "turmeric_chili"],
          stepsEn: [
            "Dry roast black peppercorns, fennel seeds, coriander seeds, dry red chilies, and coconut; grind into a fragrant paste.",
            "Heat oil in a pan, bloom kalpasi and cinnamon, then saute chopped shallots and tomatoes.",
            "Stir in the Chettinad masala paste with ginger-garlic and cook until aromatic oils separate.",
            "Toss in sliced mushrooms and 1 cup water, simmer for 7 minutes, and finish with fresh curry leaves."
          ],
          stepsHi: [
            "काली मिर्च, सौंफ, साबुत धनिया, लाल मिर्च और नारियल को सूखा भूनकर मिक्सी में पीसकर चेट्टीनाड मसाला बनाएं।",
            "पैन में तेल गरम करके दालचीनी और कढ़ी पत्ता तड़काएं, फिर छोटे प्याज़ और टमाटर भूनें।",
            "तैयार चेट्टीनाड मसाला पेस्ट और अदरक-लहसुन डालकर तेल छूटने तक अच्छी तरह पकाएं।",
            "कटे मशरूम और एक कप पानी मिलाएं, 7 मिनट धीमी आंच पर पकाएं और ऊपर से कढ़ी पत्ता डालें।"
          ],
          chefTipEn: "Freshly crushed black pepper is the heart of Chettinad cuisine; avoid pre-packaged powder for true depth.",
          chefTipHi: "चेट्टीनाड खाने का असली दम ताज़ी कुटी काली मिर्च है, पिसे हुए बाज़ारू पाउडर की जगह साबुत मिर्च कूटकर डालें।"
        },
        {
          id: "tn_ven_pongal",
          nameEn: "Ghee Ven Pongal",
          nameHi: "घी वेन पोंगल",
          descriptionEn: "Melt-in-mouth comforting porridge of rice and moong dal laced with golden fried cashews, ginger, and black pepper.",
          descriptionHi: "चावल और मूंग दाल का मलाईदार पोंगल, जिसमें काजू, अदरक, जीरा और काली मिर्च का भरपूर देसी घी तड़का होता है।",
          cuisine: "INDIAN",
          mealTypes: ["BREAKFAST"],
          prepTimeMinutes: 10,
          cookTimeMinutes: 15,
          caloriesApprox: 310,
          emoji: "🍲",
          tags: ["Temple Classic", "Comforting", "Under 25m"],
          requiredIngredientIds: ["rice", "toor_dal", "butter", "ginger_garlic", "mustard_cumin"],
          stepsEn: [
            "Dry roast yellow moong dal for 3 minutes until aromatic; mix with washed rice.",
            "Pressure cook rice and dal with 4.5 cups water and salt for 4 whistles until super soft and mashable.",
            "In a small pan, melt plenty of ghee; fry cashew nuts until golden, then add cumin seeds, whole peppercorns, and ginger juliennes.",
            "Pour the sizzling ghee tempering over the mashed pongal, mix gently, and serve with hot sambar."
          ],
          stepsHi: [
            "मूंग दाल को 3 मिनट खुशबू आने तक सूखा भूनें; धुले चावल के साथ मिलाएं।",
            "साढ़े चार कप पानी और नमक डालकर कुकर में 4 सीटी तक दाल-चावल को एकदम नरम व मैश होने तक पकाएं।",
            "तड़का पैन में भरपूर देसी घी गरम करें; काजू को सुनहरा भूनें, फिर जीरा, साबुत काली मिर्च और बारीक अदरक तड़काएं।",
            "उबलते पोंगल पर छौंक लगाएं, हल्के हाथों से मिलाएं और गरमा-गरम सांभर व नारियल चटनी के साथ खाएं।"
          ],
          chefTipEn: "Slightly mashing the cooked dal and rice before adding the ghee tempering produces the heavenly temple prasadam texture.",
          chefTipHi: "तड़का लगाने से पहले करछी से दाल-चावल को हल्का सा घोंट लें, इससे मंदिर के प्रसाद जैसी मलाईदार बनावट आती है।"
        }
      ]
    },
    {
      id: "kerala",
      nameEn: "Kerala",
      nameHi: "केरल",
      taglineEn: "God's own country with coconut milk curries, appams & steamed puttu",
      taglineHi: "नारियल का दूध, अप्पम, कडाला करी और मसालों का स्वर्ग",
      emoji: "🌴",
      dishes: [
        {
          id: "kl_appam_stew",
          nameEn: "Appam with Vegetable Stew",
          nameHi: "अप्पम और वेज स्टू",
          descriptionEn: "Lacy fermented rice crepes with a soft pillowy center served with mild fragrant coconut milk vegetable stew.",
          descriptionHi: "किनारों से जालीदार व बीच से नरम अप्पम और नारियल के दूध में पकी हल्की व सुगंधित सब्जियों का स्टू।",
          cuisine: "INDIAN",
          mealTypes: ["BREAKFAST", "DINNER"],
          prepTimeMinutes: 15,
          cookTimeMinutes: 20,
          caloriesApprox: 270,
          emoji: "🥞",
          tags: ["Kerala Pride", "Melt in Mouth", "Mild & Aromatic"],
          requiredIngredientIds: ["rice", "potato", "carrot", "peas", "onion", "ginger_garlic", "olive_oil"],
          stepsEn: [
            "Sauté whole spices (cinnamon, cloves, cardamom), sliced ginger, and onions in coconut oil until aromatic.",
            "Add diced potatoes, carrots, and green peas with thin coconut milk; simmer until tender.",
            "Pour in thick first-press coconut milk, season with salt and curry leaves, and remove from heat without boiling.",
            "Swirl appam batter in an appachatti pan, cover for 2 minutes until lace edges form, and serve with hot stew."
          ],
          stepsHi: [
            "नारियल तेल में साबुत मसाले (दालचीनी, लौंग, इलायची), अदरक और प्याज़ डालकर खुशबू आने तक भूनें।",
            "कटे आलू, गाजर और मटर डालें, पतला नारियल का दूध डालकर सब्जियों के गलने तक 8 मिनट पकाएं।",
            "गाढ़ा नारियल का दूध, नमक और कढ़ी पत्ता मिलाएं और बिना उबाले तुरंत आंच से उतार लें।",
            "अप्पम कड़ाही में घोल डालकर गोल घुमाएं, 2 मिनट ढककर किनारों पर जाली बनने तक पकाएं और स्टू के साथ खाएं।"
          ],
          chefTipEn: "Never boil the stew after pouring thick coconut milk, or the delicate coconut milk will curdle.",
          chefTipHi: "गाढ़ा नारियल दूध डालने के बाद स्टू को कभी उबालें नहीं, सिर्फ हल्का गरम करके उतारें वरना दूध फट सकता है।"
        },
        {
          id: "kl_kadala_curry",
          nameEn: "Kerala Kadala Curry",
          nameHi: "कडाला करी (काला चना)",
          descriptionEn: "Black chickpeas simmered in a roasted coconut, coriander, and shallot gravy tempered with mustard seeds.",
          descriptionHi: "काले चने और भुने हुए नारियल-मसालों की स्वादिष्ट तीखी पारंपरिक केरल करी।",
          cuisine: "INDIAN",
          mealTypes: ["BREAKFAST", "LUNCH"],
          prepTimeMinutes: 15,
          cookTimeMinutes: 25,
          caloriesApprox: 320,
          emoji: "🫘",
          tags: ["High Protein", "Kerala Breakfast", "Roasted Coconut"],
          requiredIngredientIds: ["chole", "onion", "tomato", "ginger_garlic", "turmeric_chili", "mustard_cumin"],
          stepsEn: [
            "Pressure cook soaked black chickpeas with salt for 5 whistles until soft.",
            "Slowly roast grated fresh coconut, shallots, fennel, and coriander on low heat until dark mahogany brown; grind into paste.",
            "Heat coconut oil, splutter mustard seeds and curry leaves, then sauté onions and tomato.",
            "Add the boiled black chickpeas and coconut paste, simmer for 10 minutes until thick, and serve with puttu or appam."
          ],
          stepsHi: [
            "भीगे काले चने को नमक डालकर कुकर में 5 सीटी आने तक अच्छी तरह उबालें।",
            "कद्दूकस नारियल, छोटे प्याज़, सौंफ और धनिया को तवे पर गहरा भूरा होने तक भूनें और पीसकर पेस्ट बनाएं।",
            "नारियल तेल में राई और कढ़ी पत्ता तड़काएं, फिर प्याज़ और टमाटर भूनें।",
            "उबले चने और भुना हुआ नारियल पेस्ट मिलाएं, 10 मिनट गाढ़ा होने तक उबालें और पुट्टू के साथ परोसें।"
          ],
          chefTipEn: "Roasting the coconut until it turns chocolate brown is essential for the authentic smoky dark hue.",
          chefTipHi: "नारियल को तब तक भूनें जब तक वो गहरा चॉकलेटी भूरा न हो जाए, यही कडाला करी के असली रंग और स्वाद का राज़ है।"
        },
        {
          id: "kl_veg_kurma",
          nameEn: "Malabar Veg Kurma",
          nameHi: "मालाबार वेज कुर्मा",
          descriptionEn: "Mixed garden vegetables cooked in a creamy cashew and coconut paste delicately spiced with green chilies and spices.",
          descriptionHi: "काजू, नारियल और हरी मिर्च के मलाईदार पेस्ट में पकी मिली-जुली सब्जियां।",
          cuisine: "INDIAN",
          mealTypes: ["LUNCH", "DINNER"],
          prepTimeMinutes: 15,
          cookTimeMinutes: 18,
          caloriesApprox: 290,
          emoji: "🍲",
          tags: ["Creamy & Mild", "Parotta Companion", "Garden Veggies"],
          requiredIngredientIds: ["potato", "carrot", "peas", "onion", "ginger_garlic", "butter", "olive_oil"],
          stepsEn: [
            "Boil diced potatoes, carrots, cauliflower, and green peas until tender-crisp.",
            "Blend grated coconut, soaked cashews, fennel seeds, and green chilies into a fine white paste.",
            "Heat ghee/oil, bloom whole spices (cardamom, cloves), sauté onions and ginger-garlic until translucent.",
            "Add boiled veggies and coconut-cashew paste with 1 cup water, simmer for 5 minutes, and serve with parotta or ghee rice."
          ],
          stepsHi: [
            "आलू, गाजर, फूलगोभी और हरी मटर को हल्का नरम होने तक उबाल लें।",
            "नारियल, भीगे काजू, सौंफ और हरी मिर्च को मिक्सी में पीसकर महीन सफेद पेस्ट बना लें।",
            "घी में साबुत मसाले (इलायची, लौंग) तड़काएं, प्याज़ और अदरक-लहसुन डालकर पारदर्शी होने तक भूनें।",
            "उबली सब्जियां और काजू-नारियल का पेस्ट मिलाएं, 5 मिनट धीमी आंच पर पकाएं और परांठे या चावल के साथ खाएं।"
          ],
          chefTipEn: "Soaked cashews blended with coconut give kurma a luxurious silkiness without needing heavy cream.",
          chefTipHi: "काजू को नारियल के साथ पीसकर डालने से बिना क्रीम के भी ग्रेवी एकदम मखमली और गाढ़ी बनती है।"
        }
      ]
    },
    {
      id: "west_bengal",
      nameEn: "West Bengal",
      nameHi: "पश्चिम बंगाल",
      taglineEn: "Panch phoron aroma, mustard oil magic, luchi & iconic sweet delicacies",
      taglineHi: "पाँच फोड़न, सरसों का तेल, गरम लूची और मिष्टी दोई का जादू",
      emoji: "🪔",
      dishes: [
        {
          id: "wb_luchi_cholar_dal",
          nameEn: "Luchi with Cholar Dal",
          nameHi: "लूची और छोलार दाल",
          descriptionEn: "Puffed deep-fried refined flour flatbreads paired with fragrant Bengal gram dal tempered with coconut chips.",
          descriptionHi: "फूली-फूली कुरकुरी लूची और नारियल के टुकड़ों, हींग व अदरक के तड़के वाली स्वादिष्ट छोलार दाल।",
          cuisine: "INDIAN",
          mealTypes: ["BREAKFAST", "LUNCH"],
          prepTimeMinutes: 15,
          cookTimeMinutes: 20,
          caloriesApprox: 360,
          emoji: "🫓",
          tags: ["Sunday Tradition", "Bengali Pride", "Puffed Bread"],
          requiredIngredientIds: ["wheat_flour", "toor_dal", "butter", "ginger_garlic", "mustard_cumin", "olive_oil"],
          stepsEn: [
            "Boil soaked chana dal with turmeric, salt, and ginger paste until tender but holding its shape.",
            "In ghee, fry tiny coconut slivers until golden; set aside for garnish.",
            "In the same ghee, crackle cumin seeds, bay leaf, cinnamon, and hing; pour in boiled dal with sugar and garam masala.",
            "Roll small flour balls thin, flash fry in hot oil until puffed white like balloons, and serve immediately with dal."
          ],
          stepsHi: [
            "चना दाल को हल्दी, नमक और अदरक पेस्ट के साथ कुकर में दाल के दाने साबुत रहने तक उबालें।",
            "देसी घी में नारियल के छोटे-छोटे पतले टुकड़ों को सुनहरा तलकर अलग निकाल लें।",
            "उसी घी में जीरा, तेजपत्ता, दालचीनी और हींग तड़काएं; उबली दाल, थोड़ी चीनी और गरम मसाला डालकर 5 मिनट पकाएं।",
            "मैदे की लोई बेलकर तेज़ गरम तेल में डालें, गेंद जैसी फूलने पर तुरंत निकालें और छोलार दाल के साथ परोसें।"
          ],
          chefTipEn: "Frying the luchis in very hot oil for just a few seconds keeps them pristine white and puffed.",
          chefTipHi: "लूची को बहुत तेज़ गर्म तेल में सिर्फ कुछ सेकंड तलें, इससे लूची लाल नहीं होती और सफेद व फूली हुई बनती है।"
        },
        {
          id: "wb_shukto",
          nameEn: "Traditional Bengali Shukto",
          nameHi: "पारंपरिक बंगाली शुक्तो",
          descriptionEn: "Soulful mixed vegetable stew combining bitter gourd, plantain, drumstick, and sweet potatoes with milk and radhuni.",
          descriptionHi: "करेला, कच्चा केला, सहजन और सब्जियों का दूध व राधुनी मसाले में बना पारंपरिक पाचक व्यंजन।",
          cuisine: "INDIAN",
          mealTypes: ["LUNCH"],
          prepTimeMinutes: 15,
          cookTimeMinutes: 20,
          caloriesApprox: 230,
          emoji: "🍲",
          tags: ["Authentic Feast", "Digestive Starter", "Heritage Dish"],
          requiredIngredientIds: ["potato", "carrot", "milk", "ginger_garlic", "mustard_cumin", "olive_oil"],
          stepsEn: [
            "Cut vegetables into long batons; shallow fry bitter gourd and lentil bori (dumplings) in mustard oil until crisp.",
            "In the same oil, temper panch phoron or radhuni, bay leaf, and ginger paste.",
            "Add remaining vegetables (potatoes, plantain, drumsticks) and sauté for 5 minutes with salt.",
            "Pour in 1 cup warm milk and water, simmer until vegetables are fork-tender, and stir in fried bitter gourd and ghee."
          ],
          stepsHi: [
            "सब्जियों को लंबा-लंबा काटें; सरसों के तेल में करेले के टुकड़े और दाल की बड़ी को कुरकुरा तलकर निकाल लें।",
            "उसी तेल में पाँच फोड़न या राधुनी, तेजपत्ता और अदरक का पेस्ट तड़काएं।",
            "बाकी सब्जियां डालकर 5 मिनट भूनें और स्वादानुसार नमक मिलाएं।",
            "एक कप गुनगुना दूध और पानी डालकर सब्जियां गलने तक पकाएं; अंत में तले हुए करेले, बड़ी और एक चम्मच घी मिलाएं।"
          ],
          chefTipEn: "Shukto is always served as the very first course of a traditional Bengali meal to awaken the palate.",
          chefTipHi: "शुक्तो को बंगाली भोजन में सबसे पहले परोसा जाता है, इसका हल्का कड़वापन पाचन और भूख बढ़ाता है।"
        },
        {
          id: "wb_mishti_doi",
          nameEn: "Baked Mishti Doi",
          nameHi: "पारंपरिक मिष्टी दोई",
          descriptionEn: "Rich, caramelized sweetened fermented yogurt infused with cardamom and baked in earthen clay pots.",
          descriptionHi: "कैरेमलाइज़्ड गुड़ और इलायची के स्वाद वाला गाढ़ा व मलाईदार मीठा बंगाली दही।",
          cuisine: "INDIAN",
          mealTypes: ["DINNER", "LUNCH"],
          prepTimeMinutes: 15,
          cookTimeMinutes: 25,
          caloriesApprox: 240,
          emoji: "🥣",
          tags: ["Sweet Icon", "Clay Pot Magic", "Dessert Delight"],
          requiredIngredientIds: ["milk", "dahi", "butter"],
          stepsEn: [
            "Reduce whole milk by half in a wide pot over low-medium heat while stirring continuously.",
            "In a small pan, melt sugar or date palm jaggery (nolen gur) until it caramelizes into deep amber syrup.",
            "Whisk the warm reduced milk into the caramel syrup along with a hint of cardamom powder; cool to lukewarm.",
            "Stir in hung yogurt starter culture, pour into clay earthen pots, wrap with foil, and set in a warm place for 6-8 hours."
          ],
          stepsHi: [
            "दूध को कड़ाही में धीमी आंच पर लगातार चलाते हुए आधा रहने तक गाढ़ा कर लें।",
            "दूसरे पैन में चीनी या खजूर का गुड़ डालकर धीमी आंच पर गहरा सुनहरा कैरेमल सिरप बनाएं।",
            "गाढ़े गुनगुने दूध में कैरेमल सिरप और इलायची पाउडर अच्छी तरह मिलाएं।",
            "हल्का गुनगुना रहने पर एक चम्मच ताज़ा दही मिलाएं, मिट्टी की मटकी में भरकर 6-8 घंटे जमने के लिए रख दें।"
          ],
          chefTipEn: "Setting the yogurt in porous clay pots absorbs excess moisture for spoon-thick density.",
          chefTipHi: "मिट्टी के कुल्हड़ में जमाने से मिट्टी अतिरिक्त पानी सोख लेती है, जिससे मिष्टी दोई एकदम गाढ़ी और मखमली जमती है।"
        }
      ]
    },
    {
      id: "bihar",
      nameEn: "Bihar",
      nameHi: "बिहार",
      taglineEn: "Smoky roasted gram flour (sattu), earth-cooked handi curries & litti chokha",
      taglineHi: "सत्तू का सोंधापन, चोखा, लिट्टी और मिट्टी की हांडी का ज़ायका",
      emoji: "🏺",
      dishes: [
        {
          id: "bh_litti_chokha",
          nameEn: "Traditional Litti Chokha",
          nameHi: "पारंपरिक लिट्टी चोखा",
          descriptionEn: "Whole wheat dough balls stuffed with spiced roasted gram flour (sattu), roasted over charcoal and dipped in pure ghee.",
          descriptionHi: "अजवाइन और अचार के तेल से सने सत्तू की भरी हुई लिट्टी और भुने बैंगन-टमाटर का चोखा।",
          cuisine: "INDIAN",
          mealTypes: ["LUNCH", "DINNER"],
          prepTimeMinutes: 20,
          cookTimeMinutes: 25,
          caloriesApprox: 390,
          emoji: "🫓",
          tags: ["State Pride", "Smoky Flavor", "High Fiber"],
          requiredIngredientIds: ["wheat_flour", "besan", "onion", "tomato", "potato", "green_chili", "butter"],
          stepsEn: [
            "Roast whole brinjal (eggplant) and tomatoes over direct flame until skins are charred; peel and mash with garlic, green chilies, and mustard oil for chokha.",
            "Mix sattu with crushed garlic, green chilies, kalonji, ajwain, lemon juice, and a spoonful of mango pickle oil.",
            "Knead tight wheat flour dough, stuff balls with sattu mixture, and seal carefully into rounds.",
            "Roast on an oven rack or tawa until charred and baked through; break open slightly and submerge in hot melted desi ghee."
          ],
          stepsHi: [
            "बैंगन और टमाटर को सीधी आंच पर छिलका काला होने तक भूनें; छीलकर लहसुन, हरी मिर्च, नमक और कच्चे सरसों तेल के साथ मैश कर चोखा बनाएं।",
            "सत्तू में बारीक लहसुन, हरी मिर्च, अजवाइन, मंगरैल, नींबू का रस और आम के अचार का तेल मिलाकर चटपटा मसाला बनाएं।",
            "सख्त आटा गूंथकर लोई में सत्तू भरें और गोल लिट्टी का आकार दें।",
            "कंडे की आग या तंदूर/अवन में चारों तरफ से चित्तीदार सिकने तक पकाएं; हल्का सा फोड़कर गरमा-गरम देसी घी में डुबोएं।"
          ],
          chefTipEn: "Adding a spoonful of mustard oil from a jar of mango pickle to the sattu stuffing creates the irreplaceable punch.",
          chefTipHi: "सत्तू के मसाले में आम के अचार का थोड़ा सा तेल डालें, यही लिट्टी के असली बिहारी स्वाद का गुप्त राज़ है।"
        },
        {
          id: "bh_sattu_paratha",
          nameEn: "Bihari Sattu Paratha",
          nameHi: "बिहारी सत्तू पराठा",
          descriptionEn: "Nutritious roasted flatbread filled with piquant spiced gram flour, garlic, and ajwain, griddled with ghee.",
          descriptionHi: "अदरक, लहसुन, अजवाइन और सत्तू के चटपटे भरावन से बना सेहतमंद व स्वादिष्ट पराठा।",
          cuisine: "INDIAN",
          mealTypes: ["BREAKFAST", "LUNCH"],
          prepTimeMinutes: 15,
          cookTimeMinutes: 10,
          caloriesApprox: 290,
          emoji: "🫓",
          tags: ["High Protein", "Breakfast Favorite", "Easy Digest"],
          requiredIngredientIds: ["wheat_flour", "besan", "onion", "green_chili", "ginger_garlic", "butter"],
          stepsEn: [
            "In a bowl, mix sattu with minced onions, green chilies, grated ginger, garlic, ajwain, mustard oil, and salt.",
            "Knead a pliable wheat flour dough with a pinch of salt and water; rest for 10 minutes.",
            "Roll a dough ball, tuck in a generous scoop of sattu mix, seal edges, and roll out evenly into a round paratha.",
            "Cook on a hot tawa with ghee on both sides until golden brown and crispy; serve with curd and coriander chutney."
          ],
          stepsHi: [
            "बाउल में सत्तू, बारीक प्याज़, हरी मिर्च, कद्दूकस अदरक-लहसुन, अजवाइन, सरसों तेल और नमक अच्छी तरह मिलाएं।",
            "गेहूं के आटे में थोड़ा नमक डालकर नरम आटा गूंथें और 10 मिनट के लिए रख दें।",
            "लोई बेलकर बीच में सत्तू का मसाला भरें, बंद करें और हल्के हाथों से गोल पराठा बेलें।",
            "गरम तवे पर दोनों तरफ देसी घी लगाकर सुनहरा व कुरकुरा होने तक सेकें; दही व चटनी के साथ परोसें।"
          ],
          chefTipEn: "Sprinkle a few drops of water into the sattu filling before stuffing so it stays moist and doesn't crumble out.",
          chefTipHi: "सत्तू के मिश्रण में हल्का सा पानी का छींटा मारें, इससे मसाला सूखा नहीं रहेगा और पराठा बेलते समय बाहर नहीं बिखरेगा।"
        },
        {
          id: "bh_handi_paneer",
          nameEn: "Champaran Handi Paneer",
          nameHi: "चंपारण हांडी पनीर",
          descriptionEn: "Succulent paneer cubes slow-dum cooked in an earthen clay pot sealed with dough, loaded with whole garlic bulbs and mustard oil.",
          descriptionHi: "मिट्टी की हांडी में आटे की सील लगाकर धीमी आंच पर दम दिया गया साबुत लहसुन और सरसों तेल वाला स्वादिष्ट पनीर।",
          cuisine: "INDIAN",
          mealTypes: ["LUNCH", "DINNER"],
          prepTimeMinutes: 20,
          cookTimeMinutes: 30,
          caloriesApprox: 370,
          emoji: "🏺",
          tags: ["Earthen Pot Magic", "Champaran Ahuna", "Dum Cooked"],
          requiredIngredientIds: ["paneer", "onion", "ginger_garlic", "tomato", "turmeric_chili", "garam_masala", "olive_oil"],
          stepsEn: [
            "Marinate paneer cubes and sliced onions with raw mustard oil, whole garlic bulbs, turmeric, chili, and garam masala.",
            "Coat the inside of a clay earthen pot (handi) with mustard oil and transfer the marinated mixture inside.",
            "Seal the lid of the handi airtight using a strip of wheat flour dough.",
            "Place over very low flame and slow-cook for 25-30 minutes, shaking the pot occasionally without opening the seal."
          ],
          stepsHi: [
            "पनीर के टुकड़े, कटे प्याज़, साबुत लहसुन की गांठ, सरसों का तेल, हल्दी, मिर्च और गरम मसाले को एक साथ मैरीनेट करें।",
            "मिट्टी की हांडी के अंदर सरसों का तेल लगाएं और मैरीनेट किया हुआ पनीर-मसाला हांडी में भरें।",
            "हांडी के ढक्कन को गूंथे हुए आटे की पट्टी से चारों तरफ से एयरटाइट सील कर दें।",
            "बिल्कुल धीमी आंच पर 25-30 मिनट तक पकने दें; बीच-बीच में हांडी को कपड़े से पकड़कर हल्का हिलाएं।"
          ],
          chefTipEn: "Whole garlic bulbs cooked inside the sealed clay pot become sweet, buttery, and melt in your mouth.",
          chefTipHi: "हांडी में साबुत लहसुन की गांठ डालें, दम लगने के बाद लहसुन मक्खन की तरह मुलायम और मीठा हो जाता है।"
        }
      ]
    }
  ],

  // World Countries Top 3 Famous Dishes
  worldCountries: [
    {
      id: "italy",
      nameEn: "Italy",
      nameHi: "इटली",
      taglineEn: "Homeland of stone-baked pizzas, velvety pasta sauces & fragrant basil",
      taglineHi: "पिज़्ज़ा, पास्ता, ऑलिव ऑयल और ताज़े बेसिल की विश्व-प्रसिद्ध धरती",
      flagEmoji: "🇮🇹",
      dishes: [
        {
          id: "it_margherita",
          nameEn: "Classic Neapolitan Margherita",
          nameHi: "क्लासिक मार्गेरीटा पिज़्ज़ा",
          descriptionEn: "Crisp airy crust crowned with crushed San Marzano tomato sauce, fresh creamy mozzarella, and fragrant sweet basil.",
          descriptionHi: "पतले क्रस्ट पर टोमैटो सॉस, पिघली हुई मोज़ेरेला चीज़ और ताज़ी बेसिल की पत्तियों वाला प्रसिद्ध इतालवी पिज़्ज़ा।",
          cuisine: "CONTINENTAL",
          mealTypes: ["LUNCH", "DINNER"],
          prepTimeMinutes: 15,
          cookTimeMinutes: 12,
          caloriesApprox: 410,
          emoji: "🍕",
          tags: ["World Icon", "Italian Flag Colors", "Cheesy"],
          requiredIngredientIds: ["wheat_flour", "tomato_sauce", "cheese", "olive_oil", "italian_herbs", "tomato"],
          stepsEn: [
            "Stretch rested pizza dough by hand from the center outward, leaving a thick, airy outer crust border (cornicione).",
            "Spread crushed sweet tomato sauce lightly across the base.",
            "Scatter fresh mozzarella cheese chunks and drizzle with extra virgin olive oil.",
            "Bake on maximum heat (or heavy skillet with lid) until cheese bubbles, crust blisters, and garnish with fresh basil."
          ],
          stepsHi: [
            "पिज़्ज़ा बेस को हाथों से बीच से दबाते हुए गोल फैलाएं और किनारों को हल्का मोटा व फूला रहने दें।",
            "बेस के ऊपर खुशबूदार टोमैटो सॉस की पतली परत फैलाएं।",
            "ऊपर से ताज़ी मोज़ेरेला चीज़ के टुकड़े रखें और थोड़ा एक्स्ट्रा वर्जिन ऑलिव ऑयल छिड़कें।",
            "तेज़ आंच पर पैन में ढककर 10 मिनट चीज़ के पिघलने व क्रस्ट के क्रिस्पी होने तक बेक करें; ताज़ी बेसिल से सजाएं।"
          ],
          chefTipEn: "Add the fresh basil leaves only during the final 30 seconds of cooking so their delicate sweet aroma doesn't burn.",
          chefTipHi: "बेसिल की पत्तियों को पकने के आखिरी 30 सेकंड में डालें ताकि उनकी ताज़गी और खुशबू बनी रहे।"
        },
        {
          id: "it_alfredo",
          nameEn: "Fettuccine Alfredo",
          nameHi: "क्रीमी फेटुचिनी अल्फ्रेडो",
          descriptionEn: "Tender pasta ribbons coated in a silky emulsion of European butter, heavy cream, garlic, and aged parmesan.",
          descriptionHi: "मक्खन, मलाई, लहसुन और परमेसन चीज़ की मखमली सफेद सॉस में डूबा पास्ता।",
          cuisine: "CONTINENTAL",
          mealTypes: ["LUNCH", "DINNER"],
          prepTimeMinutes: 10,
          cookTimeMinutes: 15,
          caloriesApprox: 430,
          emoji: "🍝",
          tags: ["Creamy & Rich", "Rome Specialty", "Under 25m"],
          requiredIngredientIds: ["pasta", "butter", "milk", "cheese", "ginger_garlic", "italian_herbs"],
          stepsEn: [
            "Boil fettuccine pasta in salted water until al dente; reserve 1/2 cup pasta cooking water.",
            "Melt butter in a skillet over medium heat, sauté minced garlic for 1 minute until fragrant.",
            "Whisk in cream/milk, grated cheese, and ground black pepper; simmer gently until smooth.",
            "Toss drained pasta and a splash of reserved pasta water into the sauce until every ribbon is richly coated."
          ],
          stepsHi: [
            "पास्ता को उबलते नमकीन पानी में 8 मिनट पकाएं; छानने से पहले आधा कप पास्ता पानी अलग रख लें।",
            "पैन में मक्खन पिघलाएं, बारीक कटा लहसुन 1 मिनट खुशबू आने तक भूनें।",
            "मलाई/दूध, कद्दूकस की हुई चीज़ और काली मिर्च पाउडर मिलाएं; धीमी आंच पर सॉस गाढ़ी होने तक चलाएं।",
            "उबला पास्ता और थोड़ा पास्ता पानी सॉस में डालें और चीज़ में अच्छी तरह कोट होने तक टॉस करें।"
          ],
          chefTipEn: "Whisking a splash of starchy pasta water into the cheese sauce prevents it from breaking or turning greasy.",
          chefTipHi: "सॉस में पास्ता उबालने वाला पानी डालने से चीज़ अलग नहीं होती और सॉस एकदम मखमली बनती है।"
        },
        {
          id: "it_bruschetta",
          nameEn: "Tomato Basil Bruschetta",
          nameHi: "टोमैटो बेसिल ब्रुशेटा",
          descriptionEn: "Crusty toasted Italian bread rubbed with raw garlic, topped with marinated diced tomatoes, basil, and olive oil.",
          descriptionHi: "लहसुन लगे कुरकुरे टोस्ट पर ऑलिव ऑयल, काली मिर्च और बेसिल में मैरीनेट किए हुए ताज़े टमाटर।",
          cuisine: "CONTINENTAL",
          mealTypes: ["BREAKFAST", "LUNCH"],
          prepTimeMinutes: 10,
          cookTimeMinutes: 5,
          caloriesApprox: 180,
          emoji: "🥖",
          tags: ["Quick 15m", "Fresh Starter", "Light"],
          requiredIngredientIds: ["bread", "tomato", "ginger_garlic", "olive_oil", "italian_herbs"],
          stepsEn: [
            "Dice sweet ripe tomatoes; toss with shredded fresh basil, extra virgin olive oil, salt, and black pepper.",
            "Toast thick slices of rustic bread on a hot skillet until golden and crisp.",
            "Immediately rub a cut clove of raw garlic over the warm, rough surface of each toast.",
            "Spoon the vibrant tomato mixture generously over the bread and drizzle with balsamic glaze or olive oil."
          ],
          stepsHi: [
            "पके टमाटर को बारीक चौकोर काटें; ताज़ी बेसिल, ऑलिव ऑयल, नमक और काली मिर्च मिलाकर 5 मिनट रखें।",
            "ब्रेड के टुकड़ों को तवे पर दोनों तरफ से सुनहरा और कुरकुरा टोस्ट करें।",
            "गरम ब्रेड की सतह पर लहसुन की कली को रगड़ें ताकि उसकी भीनी खुशबू ब्रेड में समा जाए।",
            "टमाटर का मिश्रण ब्रेड पर रखें, ऊपर से हल्का ऑलिव ऑयल डालें और तुरंत कुरकुरा परोसें।"
          ],
          chefTipEn: "Rubbing garlic directly onto the warm toasted bread crust imparts a subtle, divine aroma without overpowering.",
          chefTipHi: "टोस्ट की खुरदुरी सतह पर कच्चा लहसुन रगड़ने से बिना तीखेपन के बहुत ही शानदार इतालवी खुशबू आती है।"
        }
      ]
    },
    {
      id: "mexico",
      nameEn: "Mexico",
      nameHi: "मेक्सिको",
      taglineEn: "Zesty salsas, cheesy quesadillas, avocado guacamole & crunchy tacos",
      taglineHi: "चटपटा साल्सा, एवोकाडो गुआकामोल, क्रंची टैकोस और मैक्सिकन स्वाद",
      flagEmoji: "🇲🇽",
      dishes: [
        {
          id: "mx_burrito_bowl",
          nameEn: "Loaded Mexican Burrito Bowl",
          nameHi: "लोडेड मैक्सिकन बुरिटो बाउल",
          descriptionEn: "Cilantro lime rice layered with spiced black beans, corn, grilled peppers, melted cheese, and tangy salsa.",
          descriptionHi: "नींबू-धनिया वाले चावल, बीन्स, भुनी शिमला मिर्च, स्वीट कॉर्न, चीज़ और चटपटे साल्सा का स्वादिष्ट बाउल।",
          cuisine: "CONTINENTAL",
          mealTypes: ["LUNCH", "DINNER"],
          prepTimeMinutes: 15,
          cookTimeMinutes: 15,
          caloriesApprox: 370,
          emoji: "🥗",
          tags: ["Healthy Bowl", "High Fiber", "Vibrant"],
          requiredIngredientIds: ["rice", "rajma", "capsicum", "onion", "tomato", "cheese", "olive_oil"],
          stepsEn: [
            "Toss cooked basmati rice with fresh lime juice, chopped cilantro, and a touch of olive oil.",
            "Sauté sliced bell peppers, onions, and boiled beans in a pan with cumin, paprika, and salt.",
            "In a wide serving bowl, create a base of fragrant cilantro-lime rice.",
            "Arrange the seasoned beans, grilled veggies, fresh diced tomato salsa, and shredded cheese in colorful sections."
          ],
          stepsHi: [
            "पके हुए चावल में नींबू का रस, बारीक हरा धनिया और थोड़ा सा ऑलिव ऑयल मिलाकर टॉस करें।",
            "पैन में शिमला मिर्च, प्याज़ और उबले राजमा/बीन्स को जीरा, लाल मिर्च और नमक के साथ 3 मिनट भूनें।",
            "बाउल में नीचे नींबू-धनिया चावल की परत लगाएं।",
            "ऊपर भुनी सब्जियां, बीन्स, टमाटर का चटपटा साल्सा और कद्दूकस की हुई चीज़ सजाकर परोसें।"
          ],
          chefTipEn: "Season each component individually with lime and salt to build layers of mouthwatering flavor.",
          chefTipHi: "चावल और सब्जियों दोनों में अलग-अलग थोड़ा नींबू और नमक डालें, इससे हर बाइट में संतुलित स्वाद आता है।"
        },
        {
          id: "mx_tacos",
          nameEn: "Crispy Street Veggie Tacos",
          nameHi: "क्रंची वेजी टैकोस",
          descriptionEn: "Crisp taco shells loaded with spiced beans, crunchy shredded lettuce, cheese, and zesty tomato pico de gallo.",
          descriptionHi: "कुरकुरी टैको शेल्स में मसालेदार बीन्स, ताज़ा सलाद, ढेर सारी चीज़ और टमाटर-प्याज़ का साल्सा।",
          cuisine: "CONTINENTAL",
          mealTypes: ["LUNCH", "DINNER"],
          prepTimeMinutes: 12,
          cookTimeMinutes: 8,
          caloriesApprox: 290,
          emoji: "🌮",
          tags: ["Party Hit", "Crunchy & Cheesy", "Kids Favorite"],
          requiredIngredientIds: ["wheat_flour", "rajma", "tomato", "onion", "cheese", "olive_oil"],
          stepsEn: [
            "Warm hard taco shells or small flour tortillas in a dry skillet until fragrant and crisp.",
            "Mash cooked kidney beans with cumin, chili powder, and garlic into a warm filling.",
            "Spoon seasoned beans into the bottom of each taco shell.",
            "Top with crisp lettuce, fresh diced tomato pico de gallo, shredded cheese, and a squeeze of lime."
          ],
          stepsHi: [
            "टैको शेल्स या छोटी रोटियों को तवे पर हल्का गर्म और कुरकुरा कर लें।",
            "उबले राजमा/बीन्स को जीरा, मिर्च और लहसुन के साथ हल्का मैश करके मसालेदार भरावन बनाएं।",
            "प्रत्येक टैको शेल के अंदर 2 चम्मच तैयार बीन्स भरें।",
            "ऊपर से कटा सलाद, टमाटर-प्याज़ का साल्सा, कद्दूकस की चीज़ और नींबू का रस डालकर कुरकुरा परोसें।"
          ],
          chefTipEn: "Warming the shells in a skillet crisps them up and prevents them from cracking when you bite in.",
          chefTipHi: "टैको शेल्स को भरने से पहले तवे पर 1 मिनट हल्का गर्म करें, इससे वो खाते समय बीच से टूटती नहीं हैं।"
        },
        {
          id: "mx_guacamole",
          nameEn: "Fresh Guacamole & Nachos",
          nameHi: "गुआकामोल व नाचोज़",
          descriptionEn: "Creamy mashed ripe avocados blended with lime juice, diced onions, tomatoes, and cilantro, served with chips.",
          descriptionHi: "पके एवोकाडो, नींबू का रस, बारीक प्याज़, टमाटर और धनिये का क्रीमी डिप और साथ में क्रंची नाचोज़।",
          cuisine: "CONTINENTAL",
          mealTypes: ["BREAKFAST", "LUNCH"],
          prepTimeMinutes: 10,
          cookTimeMinutes: 0,
          caloriesApprox: 240,
          emoji: "🥑",
          tags: ["No Cook 10m", "Healthy Fats", "Super Fresh"],
          requiredIngredientIds: ["onion", "tomato", "green_chili", "olive_oil"],
          stepsEn: [
            "Halve ripe avocados, remove the pit, and scoop the creamy green flesh into a wide bowl.",
            "Coarsely mash with a fork, leaving satisfying chunks for texture.",
            "Fold in finely diced red onion, ripe tomato, minced green chili, and fresh coriander.",
            "Squeeze fresh lime juice, season generously with sea salt, and serve with crispy nachos."
          ],
          stepsHi: [
            "पके एवोकाडो को बीच से काटें, गुठली निकालें और गूदे को एक कटोरे में निकाल लें।",
            "कांटे (फोर्क) से हल्का मैश करें (हल्के टुकड़े रहने दें ताकि टेक्सचर अच्छा आए)।",
            "बारीक कटा प्याज़, टमाटर, हरी मिर्च और हरा धनिया मिलाएं।",
            "नींबू का रस और स्वादानुसार नमक डालकर हल्के हाथों से मिलाएं और कुरकुरे नाचोज़ के साथ खाएं।"
          ],
          chefTipEn: "Do not puree in a blender; rustic fork mashing creates that authentic Mexican texture.",
          chefTipHi: "मिक्सी में न पीसें; कांटे से हाथ से मैश करें, यही असली मैक्सिकन गुआकामोल की पहचान है।"
        }
      ]
    },
    {
      id: "china",
      nameEn: "China",
      nameHi: "चीन",
      taglineEn: "Wok-heir sizzle, garlic ginger aromatics, savory noodles & dim sums",
      taglineHi: "हक्का नूडल्स, डिम सम, सोया सॉस और वोक में बनी क्रंची सब्जियां",
      flagEmoji: "🇨🇳",
      dishes: [
        {
          id: "cn_hakka_noodles",
          nameEn: "Wok-Tossed Veg Hakka Noodles",
          nameHi: "वेज हक्का नूडल्स",
          descriptionEn: "Springy noodles flash-stir-fried on smoking high heat with crunchy julienned vegetables, garlic, and soy sauce.",
          descriptionHi: "तेज़ आंच पर लहसुन, पत्तागोभी, शिमला मिर्च और सोया सॉस के साथ टॉस किए हुए स्वादिष्ट नूडल्स।",
          cuisine: "CONTINENTAL",
          mealTypes: ["LUNCH", "DINNER"],
          prepTimeMinutes: 12,
          cookTimeMinutes: 8,
          caloriesApprox: 310,
          emoji: "🥢",
          tags: ["Street Favorite", "Quick 20m", "Smoky Wok"],
          requiredIngredientIds: ["pasta", "capsicum", "carrot", "onion", "ginger_garlic", "olive_oil"],
          stepsEn: [
            "Boil noodles al dente, drain, rinse with cold water, and toss with 1 tsp oil to keep strands separate.",
            "Heat oil in a wide wok until smoking hot; flash-fry minced garlic, ginger, and sliced green chilies for 30 seconds.",
            "Toss in julienned carrots, bell peppers, and cabbage on highest flame for 2 minutes to keep them crunchy.",
            "Add noodles, soy sauce, vinegar, black pepper, and salt; toss vigorously on high heat for 2 minutes."
          ],
          stepsHi: [
            "नूडल्स को उबालकर ठंडे पानी से धोएं और 1 चम्मच तेल लगाकर अलग रख लें ताकि चिपके नहीं।",
            "कड़ाही या वोक में तेल तेज़ गरम करें; बारीक लहसुन, अदरक और हरी मिर्च 30 सेकंड तेज़ आंच पर भूनें।",
            "लंबी कटी गाजर, शिमला मिर्च और प्याज़ डालकर तेज़ आंच पर 2 मिनट हल्का क्रंची भूनें।",
            "नूडल्स, सोया सॉस, सिरका, काली मिर्च और नमक डालें; तेज़ आंच पर 2 मिनट उछालते हुए टॉस करें।"
          ],
          chefTipEn: "Cook entirely on highest possible flame! Fast stir-frying locks in vegetable crunch and imparts 'wok hei' smokiness.",
          chefTipHi: "पूरी कुकिंग तेज़ आंच पर करें; इससे सब्जियों का क्रंच बना रहता है और स्ट्रीट स्टाइल सोंधापन आता है।"
        },
        {
          id: "cn_dim_sum",
          nameEn: "Steamed Veg Dim Sum / Momos",
          nameHi: "स्टीम्ड वेज डिम सम / मोमो",
          descriptionEn: "Delicate translucent steamed parcels packed with finely shredded vegetables, ginger, and sesame.",
          descriptionHi: "बारीक सब्जियों, अदरक और काली मिर्च की भरावन से बने भाप में पके नरम व रसीले डिम सम।",
          cuisine: "CONTINENTAL",
          mealTypes: ["LUNCH", "DINNER"],
          prepTimeMinutes: 20,
          cookTimeMinutes: 10,
          caloriesApprox: 210,
          emoji: "🥟",
          tags: ["Steamed & Light", "Translucent & Juicy", "Healthy Snack"],
          requiredIngredientIds: ["wheat_flour", "capsicum", "carrot", "onion", "ginger_garlic", "olive_oil"],
          stepsEn: [
            "Finely mince cabbage, carrots, bell peppers, and onions; sauté with garlic and pepper for 2 minutes, then cool.",
            "Knead smooth dough with flour, pinch of salt, and water; roll into thin 3-inch translucent discs.",
            "Spoon vegetable filling into center, pleat edges together with fingers, and seal tightly at the top.",
            "Steam in a greased steamer for 8-10 minutes until wrappers become glossy and translucent; serve with spicy dip."
          ],
          stepsHi: [
            "गाजर, पत्तागोभी, शिमला मिर्च और प्याज़ को बारीक काटें; लहसुन व काली मिर्च के साथ 2 मिनट भूनकर ठंडा करें।",
            "मैदे/आटे में थोड़ा नमक डालकर चिकना आटा गूंथें और एकदम पतली 3 इंच की गोल पूरियां बेलें।",
            "बीच में सब्जियों का भरावन रखें, उंगलियों से किनारों पर प्लेट्स बनाते हुए ऊपर से अच्छी तरह बंद करें।",
            "ग्रीस किए स्टीमर में 8-10 मिनट तक भाप में पकाएं जब तक वो चमकदार और पारदर्शी न हो जाएं।"
          ],
          chefTipEn: "Roll the outer edges of the wrapper thinner than the center so the pleats don't get doughy after steaming.",
          chefTipHi: "किनारों को बीच की तुलना में ज्यादा पतला बेलें, इससे स्टीम होने पर प्लेट्स मोटी और कच्ची नहीं लगेंगी।"
        },
        {
          id: "cn_kung_pao",
          nameEn: "Kung Pao Tofu & Veggies",
          nameHi: "कुंग पाओ वेजिटेबल्स",
          descriptionEn: "Crispy pan-seared paneer or tofu tossed with crunchy bell peppers, peanuts, and a sweet-savory Sichuan sauce.",
          descriptionHi: "कुरकुरी भुनी शिमला मिर्च, मूंगफली और पनीर/टोफू की चटपटी मीठी-तीखी सिचुआन सॉस वाली डिश।",
          cuisine: "CONTINENTAL",
          mealTypes: ["LUNCH", "DINNER"],
          prepTimeMinutes: 15,
          cookTimeMinutes: 12,
          caloriesApprox: 340,
          emoji: "🥘",
          tags: ["Sweet & Spicy", "Peanut Crunch", "High Protein"],
          requiredIngredientIds: ["paneer", "capsicum", "onion", "ginger_garlic", "olive_oil"],
          stepsEn: [
            "Pan-sear diced paneer or tofu in a drop of oil until golden on all sides; set aside.",
            "In a wok, fry dried red chilies, garlic, and ginger until fragrant, then toss in bell pepper cubes and roasted peanuts.",
            "Whisk soy sauce, vinegar, 1 tsp sugar, and 1 tsp cornstarch with 1/3 cup water for the sauce.",
            "Pour sauce into the sizzling wok; when it thickens and turns glossy, toss in the golden paneer and serve with fried rice."
          ],
          stepsHi: [
            "पनीर या टोफू के टुकड़ों को पैन में हल्का तेल लगाकर चारों तरफ से सुनहरा होने तक सेकें।",
            "वोक में सूखी लाल मिर्च, लहसुन और अदरक भूनें, फिर कटी शिमला मिर्च, प्याज़ और भुनी मूंगफली डालकर तेज़ आंच पर टॉस करें।",
            "सोया सॉस, सिरका, 1 चम्मच चीनी और थोड़ा कॉर्नफ्लोर पानी में घोलकर सॉस बनाएं।",
            "सॉस को वोक में डालें, गाढ़ी व चमकदार होने पर भुना पनीर मिलाएं और गरमा-गरम राइस के साथ परोसें।"
          ],
          chefTipEn: "Roasted peanuts added at the very end give that signature irresistible crunchy texture contrast.",
          chefTipHi: "भुनी मूंगफली को अंत में डालें, इससे इसका कुरकुरापन बना रहता है और हर बाइट में क्रंच मिलता है।"
        }
      ]
    },
    {
      id: "japan",
      nameEn: "Japan",
      nameHi: "जापान",
      taglineEn: "Zen culinary perfection, umami broth ramen, delicate sushi & crispy tempura",
      taglineHi: "उमामी मिसो रामेन, वेज सुशी रोल्स और कुरकुरा टेम्पुरा",
      flagEmoji: "🇯🇵",
      dishes: [
        {
          id: "jp_miso_ramen",
          nameEn: "Japanese Vegetable Miso Ramen",
          nameHi: "वेज मिसो रामेन नूडल सूप",
          descriptionEn: "Springy ramen noodles immersed in a deeply savory, aromatic garlic miso broth topped with corn, tofu, and greens.",
          descriptionHi: "लहसुन, अदरक और सोया-मिसो के सूप में तैरते नूडल्स, ऊपर स्वीट कॉर्न, पनीर और हरी सब्जियां।",
          cuisine: "CONTINENTAL",
          mealTypes: ["LUNCH", "DINNER"],
          prepTimeMinutes: 15,
          cookTimeMinutes: 15,
          caloriesApprox: 320,
          emoji: "🍜",
          tags: ["Warm & Soothing", "Soul Food", "Rich Umami"],
          requiredIngredientIds: ["pasta", "mushroom", "paneer", "ginger_garlic", "spinach", "olive_oil"],
          stepsEn: [
            "Boil ramen noodles in water until tender-chewy; drain and divide into serving bowls.",
            "Sauté minced garlic, ginger, and mushrooms in sesame or olive oil for 3 minutes until caramelized.",
            "Pour in 3 cups vegetable broth; whisk in 2 tbsp miso paste or soy sauce, simmering gently for 5 minutes.",
            "Ladle the steaming umami broth over the noodles, crown with pan-seared paneer/tofu, sweet corn, and baby spinach."
          ],
          stepsHi: [
            "रामेन नूडल्स को उबालकर छान लें और सर्विंग बाउल में निकाल लें।",
            "पैन में थोड़ा तेल गरम करें; बारीक लहसुन, अदरक और मशरूम को 3 मिनट हल्का सुनहरा भूनें।",
            "3 कप वेज स्टॉक या पानी डालें; 2 चम्मच सोया सॉस व मिसो पेस्ट घोलकर 5 मिनट धीमी आंच पर पकाएं।",
            "गरमा-गरम खुशबूदार सूप को नूडल्स के ऊपर डालें, ऊपर भुना पनीर, कॉर्न और पालक सजाकर परोसें।"
          ],
          chefTipEn: "Dissolve miso paste in a ladle of warm broth first before stirring in to avoid any lumps.",
          chefTipHi: "मिसो पेस्ट को पहले करछी में थोड़ा सूप लेकर घोलें, फिर पूरे सूप में मिलाएं ताकि गांठ न रहे।"
        },
        {
          id: "jp_maki_sushi",
          nameEn: "Avocado Cucumber Maki Rolls",
          nameHi: "वेजी सुशी रोल्स",
          descriptionEn: "Seasoned short-grain sushi rice rolled in crisp nori seaweed sheets with creamy avocado, cucumber, and sesame.",
          descriptionHi: "चावल, मलाईदार एवोकाडो, खीरा और तिल को लपेटकर तैयार किए गए ताज़े व स्वादिष्ट जापानी सुशी रोल्स।",
          cuisine: "CONTINENTAL",
          mealTypes: ["LUNCH", "DINNER"],
          prepTimeMinutes: 20,
          cookTimeMinutes: 10,
          caloriesApprox: 230,
          emoji: "🍣",
          tags: ["Clean Eating", "Zero Oil", "Healthy Delight"],
          requiredIngredientIds: ["rice", "olive_oil"],
          stepsEn: [
            "Cook short-grain sushi rice; season while warm with 1 tbsp rice vinegar, 1 tsp sugar, and salt.",
            "Place a nori sheet or flat wrap on a bamboo rolling mat and spread seasoned rice evenly, leaving a 1-inch border at top.",
            "Arrange thin batons of creamy avocado, crisp cucumber, and bell peppers in a neat line across the rice.",
            "Roll tightly using the mat, moisten the edge to seal, slice into 8 neat rounds with a sharp wet knife, and serve with soy sauce."
          ],
          stepsHi: [
            "चावल को नरम पकाएं; गुनगुने चावल में 1 चम्मच सिरका, थोड़ी चीनी और नमक मिलाकर ठंडा करें।",
            "रोलिंग मैट पर शीट बिछाएं और ऊपर चावल की पतली परत एकसमान फैलाएं (ऊपर 1 इंच जगह छोड़ें)।",
            "चावल के बीच में लंबे पतले एवोकाडो, खीरे और शिमला मिर्च के टुकड़े एक सीध में रखें।",
            "मैट की मदद से कसकर रोल बनाएं, किनारे पर हल्का पानी लगाकर चिपकाएं और गीले चाकू से 8 टुकड़ों में काटें।"
          ],
          chefTipEn: "Wiping the knife blade with a damp cloth between cuts keeps the sushi slices clean, sharp, and pristine.",
          chefTipHi: "हर बार काटने से पहले चाकू को गीले कपड़े से पोंछ लें, इससे सुशी के टुकड़े एकदम साफ और गोल कटते हैं।"
        },
        {
          id: "jp_tempura",
          nameEn: "Crispy Vegetable Tempura",
          nameHi: "क्रंची वेज टेम्पुरा",
          descriptionEn: "Assorted fresh vegetables dipped in an ice-cold light airy batter and flash-fried to lace-like crispiness.",
          descriptionHi: "बर्फ जैसे ठंडे घोल में डूबी और कुरकुरी तली हुई हल्की-फुल्की स्वादिष्ट ताज़ी सब्जियां।",
          cuisine: "CONTINENTAL",
          mealTypes: ["LUNCH", "DINNER"],
          prepTimeMinutes: 15,
          cookTimeMinutes: 10,
          caloriesApprox: 260,
          emoji: "🍤",
          tags: ["Lacy & Crispy", "Ice Cold Batter", "Golden Crunch"],
          requiredIngredientIds: ["wheat_flour", "potato", "carrot", "capsicum", "mushroom", "olive_oil"],
          stepsEn: [
            "Slice potatoes, bell peppers, carrots, and mushrooms into thin diagonal slices; pat completely dry.",
            "Whisk ice-cold water, flour, and a pinch of baking powder just until barely combined with visible flour lumps.",
            "Dip vegetable slices lightly into the cold batter, letting excess drip off.",
            "Slide immediately into hot oil at 180°C and fry for 2-3 minutes until pale golden and super crunchy."
          ],
          stepsHi: [
            "आलू, शिमला मिर्च, गाजर और मशरूम को पतला-पतला काटें और कपड़े से पोंछकर सुखा लें।",
            "बर्फ के ठंडे पानी में आटा/मैदा और चुटकी भर बेकिंग पाउडर हल्के हाथों से मिलाएं (हल्की गांठें रहने दें)।",
            "सब्जियों को ठंडे घोल में डुबोएं और अतिरिक्त घोल निकाल दें।",
            "गरम तेल में तुरंत डालें और 2-3 मिनट हल्का सुनहरा व सुपर क्रिस्पी होने तक तलें।"
          ],
          chefTipEn: "Ice-cold water in hot oil creates a thermal shock that yields impossibly crisp, non-greasy tempura.",
          chefTipHi: "घोल के लिए बिल्कुल ठंडा बर्फ का पानी इस्तेमाल करें, इससे टेम्पुरा तेल नहीं सोखता और बेहद कुरकुरा बनता है।"
        }
      ]
    },
    {
      id: "usa",
      nameEn: "USA",
      nameHi: "अमेरिका",
      taglineEn: "Hearty diners, golden baked mac and cheese, burgers & bagel spreads",
      taglineHi: "चीज़बर्गर, बेक्ड मैक एंड चीज़ और अमेरिकन क्लासिक स्वाद",
      flagEmoji: "🇺🇸",
      dishes: [
        {
          id: "us_mac_and_cheese",
          nameEn: "Baked Golden Mac & Cheese",
          nameHi: "बेक्ड मैक एंड चीज़",
          descriptionEn: "Tender elbow macaroni smothered in a bubbling cheddar-gruyère cheese sauce topped with toasted butter crumbs.",
          descriptionHi: "मक्खन, दूध और ढेर सारी पिघली हुई चेद्दार चीज़ में बेक किया हुआ क्रीमी मैकरोनी पास्ता।",
          cuisine: "CONTINENTAL",
          mealTypes: ["LUNCH", "DINNER"],
          prepTimeMinutes: 15,
          cookTimeMinutes: 20,
          caloriesApprox: 440,
          emoji: "🧀",
          tags: ["All-Time Comfort", "Ultra Cheesy", "Kids Favorite"],
          requiredIngredientIds: ["pasta", "cheese", "milk", "butter", "wheat_flour"],
          stepsEn: [
            "Boil elbow macaroni in salted water until just tender; drain.",
            "Melt 2 tbsp butter in a pot, whisk in 2 tbsp flour and cook for 1 minute; slowly pour in 2 cups milk until thickened.",
            "Turn off heat and stir in generous shredded cheddar cheese until molten and velvety smooth.",
            "Fold in the cooked macaroni, pour into a baking dish, scatter more cheese on top, and bake for 15 minutes until bubbling golden."
          ],
          stepsHi: [
            "मैकरोनी पास्ता को नमकीन पानी में नरम होने तक उबालें और छान लें।",
            "पैन में मक्खन गरम करें, 2 चम्मच आटा डालकर 1 मिनट भूनें; 2 कप दूध धीरे-धीरे डालते हुए गाढ़ी सॉस बनाएं।",
            "गैस बंद करें और ढेर सारी कद्दूकस की हुई चीज़ डालकर मलाईदार पिघलने तक मिलाएं।",
            "उबला पास्ता मिलाएं, बेकिंग डिश या पैन में ऊपर चीज़ डालकर पिघलने व सुनहरा होने तक बेक करें।"
          ],
          chefTipEn: "Grate your own cheese block rather than buying pre-shredded packs for better melting.",
          chefTipHi: "हमेशा ब्लॉक चीज़ को खुद कद्दूकस करें, बाज़ार की कद्दूकस चीज़ में पाउडर होता है जो ठीक से पिघलने नहीं देता।"
        },
        {
          id: "us_veggie_burger",
          nameEn: "Classic American Diner Burger",
          nameHi: "क्लासिक वेज बर्गर",
          descriptionEn: "Crispy golden spiced vegetable patty layered with melted cheese, crisp lettuce, tomato, and tangy sauce in toasted buns.",
          descriptionHi: "मक्खन में सिके बर्गर बन्स में क्रिस्पी वेज टिक्की, पिघली हुई चीज़, टमाटर, सलाद पत्ता और बर्गर सॉस।",
          cuisine: "CONTINENTAL",
          mealTypes: ["LUNCH", "DINNER"],
          prepTimeMinutes: 15,
          cookTimeMinutes: 12,
          caloriesApprox: 390,
          emoji: "🍔",
          tags: ["Diner Classic", "Crispy Patty", "Melting Cheese"],
          requiredIngredientIds: ["potato", "peas", "carrot", "bread", "cheese", "butter", "onion", "tomato"],
          stepsEn: [
            "Mash boiled potatoes, peas, and carrots with herbs and breadcrumbs; shape into round thick patties.",
            "Pan-fry the patties in a drop of butter until crackling crisp on both sides; lay a cheese slice on top to melt.",
            "Toast soft burger buns on griddle with butter until light golden.",
            "Assemble buns with secret mayo-ketchup sauce, crisp lettuce, the cheesy hot patty, tomato slices, and pickle."
          ],
          stepsHi: [
            "उबले आलू, मटर और गाजर को मसालों व ब्रेड क्रम्ब्स के साथ मैश करके गोल टिक्की बनाएं।",
            "तवे पर मक्खन लगाकर टिक्की को दोनों तरफ से कुरकुरा सेकें; ऊपर चीज़ स्लाइस रखकर पिघलने दें।",
            "बर्गर बन्स को तवे पर मक्खन में हल्का सुनहरा सेक लें।",
            "बन पर सॉस लगाएं, सलाद पत्ता, चीज़ वाली गरम टिक्की, टमाटर और प्याज़ के लच्छे रखकर बर्गर तैयार करें।"
          ],
          chefTipEn: "Toasting the burger bun interiors prevents the sauces from making the bread soggy.",
          chefTipHi: "बर्गर बन्स को अंदर की तरफ से मक्खन में अच्छी तरह सेकें, इससे सॉस लगने पर भी बन नरम नहीं पड़ता।"
        },
        {
          id: "us_bagel_spread",
          nameEn: "New York Style Toasted Bagel",
          nameHi: "बेगल व क्रीम चीज़",
          descriptionEn: "Warm toasted chewy bagel halves generously smeared with herb cream cheese, fresh cucumber, and tomatoes.",
          descriptionHi: "कुरकुरा टोस्ट किया हुआ बेगल और उस पर हर्ब्स वाली मलाईदार क्रीम चीज़, ताज़ा खीरा व टमाटर।",
          cuisine: "CONTINENTAL",
          mealTypes: ["BREAKFAST"],
          prepTimeMinutes: 5,
          cookTimeMinutes: 5,
          caloriesApprox: 270,
          emoji: "🥯",
          tags: ["NYC Breakfast", "5-Min Quick", "Creamy & Chewy"],
          requiredIngredientIds: ["bread", "cheese", "tomato", "butter"],
          stepsEn: [
            "Slice a fresh bagel or thick artisan bread horizontally in half.",
            "Toast on a hot skillet or toaster until the edges are golden brown and crackling.",
            "Slather a generous thick layer of herb cream cheese or soft butter across both halves.",
            "Top with thin rounds of tomato, cucumber, a sprinkle of black pepper, and sandwich together."
          ],
          stepsHi: [
            "बेगल या मोटी ब्रेड को बीच से काटकर दो आधे टुकड़े करें।",
            "तवे या टोस्टर में दोनों टुकड़ों को किनारों से सुनहरा और कुरकुरा टोस्ट कर लें।",
            "दोनों हिस्सों पर भरपूर क्रीम चीज़ या नरम मक्खन की मोटी परत लगाएं।",
            "ऊपर पतले कटे टमाटर और खीरे के टुकड़े रखें, हल्की काली मिर्च छिड़कें और गरमा-गरम आनंद लें।"
          ],
          chefTipEn: "Toast only the cut side on a hot pan with a dab of butter for authentic bagel shop texture.",
          chefTipHi: "कटे हुए हिस्से को मक्खन वाले तवे पर सेकें, इससे अंदर से क्रंच और बाहर से चबाने वाला टेक्सचर मिलता है।"
        }
      ]
    },
    {
      id: "france",
      nameEn: "France",
      nameHi: "फ्रांस",
      taglineEn: "Culinary sophistication, buttery viennoiserie, herb ratatouille & slow cooking",
      taglineHi: "रातातूई, फ्रेंच अनियन सूप और मक्खन की खुशबूदार फ्रेंच रसोई",
      flagEmoji: "🇫🇷",
      dishes: [
        {
          id: "fr_ratatouille",
          nameEn: "Provençal Ratatouille",
          nameHi: "पारंपरिक रातातूई वेज रोस्ट",
          descriptionEn: "Vibrant spiral of thinly sliced zucchini, eggplant, and ripe tomatoes baked slowly over a garlicky bell pepper sauce.",
          descriptionHi: "लहसुन और हर्ब्स की टोमैटो सॉस पर गोल-गोल सजी हुई बेक्ड सब्जियों की प्रसिद्ध फ्रांसीसी डिश।",
          cuisine: "CONTINENTAL",
          mealTypes: ["LUNCH", "DINNER"],
          prepTimeMinutes: 20,
          cookTimeMinutes: 25,
          caloriesApprox: 210,
          emoji: "🥘",
          tags: ["French Icon", "Visual Masterpiece", "Healthy"],
          requiredIngredientIds: ["tomato", "capsicum", "onion", "ginger_garlic", "olive_oil", "italian_herbs"],
          stepsEn: [
            "Simmer diced tomatoes, onions, garlic, and bell peppers into a thick, seasoned piperade sauce on the bottom of a pan.",
            "Slice vegetables (zucchini, eggplant, tomatoes) into paper-thin uniform rounds.",
            "Arrange the vegetable rounds in a tight alternating colorful spiral over the sauce base.",
            "Drizzle generously with olive oil and thyme; cover with parchment and bake for 25 minutes until tender and caramelized."
          ],
          stepsHi: [
            "पैन के तले पर टमाटर, प्याज़, लहसुन और शिमला मिर्च को पकाकर गाढ़ी सुगंधित सॉस फैलाएं।",
            "सब्जियों (बैंगन, शिमला मिर्च, टमाटर) को एकसमान पतले गोल टुकड़ों में काट लें।",
            "सॉस के ऊपर सब्जियों के टुकड़ों को एक के बाद एक गोल चक्र (स्पाइरल) में सुंदर सजाएं।",
            "ऊपर से ऑलिव ऑयल, नमक और हर्ब्स छिड़कें; ढककर धीमी आंच पर 25 मिनट सब्जियों के नरम होने तक पकाएं।"
          ],
          chefTipEn: "A circle of parchment paper laid directly over the vegetables keeps them steaming gently without burning.",
          chefTipHi: "सब्जियों के ऊपर बटर पेपर रखकर ढकें, इससे सब्जियां बिना जले अपनी भाप में एकदम नरम पकती हैं।"
        },
        {
          id: "fr_onion_soup",
          nameEn: "French Onion Herb Soup",
          nameHi: "क्रीमी फ्रेंच अनियन सूप",
          descriptionEn: "Deeply caramelized sweet onions simmered in a savory rich herb broth topped with a crusty toasted bread and melted cheese.",
          descriptionHi: "धीमी आंच पर कैरेमलाइज़्ड मीठे प्याज़ का सूप, ऊपर क्रिस्पी टोस्ट और पिघली हुई परमेसन चीज़।",
          cuisine: "CONTINENTAL",
          mealTypes: ["DINNER", "LUNCH"],
          prepTimeMinutes: 15,
          cookTimeMinutes: 25,
          caloriesApprox: 260,
          emoji: "🍲",
          tags: ["Parisian Classic", "Warm & Cozy", "Rich Broth"],
          requiredIngredientIds: ["onion", "butter", "bread", "cheese", "ginger_garlic", "olive_oil"],
          stepsEn: [
            "Thinly slice sweet onions; cook slowly in butter over medium-low heat for 20 minutes until deeply golden and sweet.",
            "Stir in minced garlic, a pinch of flour, and fresh thyme; cook for 1 minute.",
            "Pour in 3 cups hot vegetable broth; simmer gently for 10 minutes to develop depth.",
            "Ladle soup into bowls, float a slice of toasted crusty bread on top, smother with cheese, and broil until bubbling."
          ],
          stepsHi: [
            "प्याज़ को पतला लंबा काटें; मक्खन में धीमी-मध्यम आंच पर 20 मिनट तक गहरा सुनहरा कैरेमल होने तक भूनें।",
            "बारीक लहसुन, चुटकी भर आटा और हर्ब्स डालकर 1 मिनट चलाएं।",
            "3 कप गर्म वेज स्टॉक या पानी डालें; धीमी आंच पर 10 मिनट तक सूप को उबलने दें।",
            "कटोरे में सूप निकालें, ऊपर सिका हुआ ब्रेड का टुकड़ा रखें, ढेर सारी चीज़ फैलाएं और चीज़ पिघलने तक ढककर गर्म करें।"
          ],
          chefTipEn: "Patience is key—slow caramelization of onions creates the deep sweetness that defines French onion soup.",
          chefTipHi: "जल्दबाज़ी न करें; प्याज़ को धीमी आंच पर 20 मिनट भूनना ही इस सूप की असली मिठास और स्वाद का राज़ है।"
        },
        {
          id: "fr_crepes",
          nameEn: "Classic French Crepes",
          nameHi: "गोल्डन फ्रेंच क्रेप्स",
          descriptionEn: "Paper-thin delicate French pancakes griddled with butter, dusted with sugar and drizzled with chocolate or lemon.",
          descriptionHi: "मक्खन में सिके कागज़ जैसे पतले और नरम फ्रेंच क्रेप्स, ऊपर शहद, चॉकलेट या मीठा मक्खन।",
          cuisine: "CONTINENTAL",
          mealTypes: ["BREAKFAST"],
          prepTimeMinutes: 10,
          cookTimeMinutes: 10,
          caloriesApprox: 220,
          emoji: "🥞",
          tags: ["Delicate & Thin", "French Bakery", "Breakfast Treat"],
          requiredIngredientIds: ["wheat_flour", "milk", "butter", "egg"],
          stepsEn: [
            "Whisk flour, milk, melted butter, and egg into a silky, thin, water-like batter; rest 10 minutes.",
            "Heat a wide non-stick crepe pan, brush lightly with melted butter.",
            "Pour 1/4 cup batter and immediately tilt the pan in a circular motion to coat the entire surface paper-thin.",
            "Cook for 60 seconds until edges lift easily, flip briefly for 30 seconds, fold into quarters, and dust with sugar."
          ],
          stepsHi: [
            "आटा/मैदा, दूध, पिघला मक्खन और अंडा मिलाकर बिल्कुल पतला, पानी जैसा चिकना घोल बनाएं और 10 मिनट रखें।",
            "चौड़े नॉन-स्टिक पैन को हल्का गर्म करें और ज़रा सा मक्खन लगाएं।",
            "चौथाई कप घोल डालें और पैन को तुरंत गोल घुमाएं ताकि घोल कागज़ की तरह पतला फैल जाए।",
            "60 सेकंड पकने पर किनारे छूटने लगें तो पलटें और दूसरी तरफ 30 सेकंड सेकें; मोड़कर शहद या चॉकलेट के साथ परोसें।"
          ],
          chefTipEn: "Resting the crepe batter for 10 minutes relaxes the flour gluten, ensuring tender crepes that never tear.",
          chefTipHi: "घोल बनाने के बाद 10 मिनट आराम दें, इससे क्रेप्स बहुत मुलायम बनते हैं और पलटते समय टूटते नहीं।"
        }
      ]
    },
    {
      id: "thailand",
      nameEn: "Thailand",
      nameHi: "थाईलैंड",
      taglineEn: "Harmony of sweet, sour, salty and spicy flavors with lemongrass and coconut",
      taglineHi: "थाई ग्रीन करी, पैड थाई नूडल्स, लेमनग्रास और नारियल के दूध का जादू",
      flagEmoji: "🇹🇭",
      dishes: [
        {
          id: "th_pad_thai",
          nameEn: "Authentic Veg Pad Thai",
          nameHi: "थाई पैड थाई नूडल्स",
          descriptionEn: "Flat rice noodles stir-fried with tofu, bean sprouts, crushed peanuts, and a sweet-tangy tamarind lime sauce.",
          descriptionHi: "इमली, नींबू और गुड़ की चटपटी खट्टी-मीठी सॉस में भुनी मूंगफली और सब्जियों के साथ बने थाई नूडल्स।",
          cuisine: "CONTINENTAL",
          mealTypes: ["LUNCH", "DINNER"],
          prepTimeMinutes: 15,
          cookTimeMinutes: 10,
          caloriesApprox: 340,
          emoji: "🍜",
          tags: ["Street Legend", "Sweet & Tangy", "Peanut Crunch"],
          requiredIngredientIds: ["pasta", "paneer", "carrot", "onion", "green_chili", "ginger_garlic", "olive_oil"],
          stepsEn: [
            "Soak flat rice noodles in warm water for 15 minutes until pliable but firm.",
            "Whisk tamarind paste, brown sugar or jaggery, soy sauce, and lime juice for the authentic Pad Thai sauce.",
            "Heat oil in a wok; stir-fry diced paneer/tofu, garlic, and shredded carrots for 2 minutes.",
            "Toss in the soaked noodles with sauce on high heat; fold in roasted crushed peanuts, fresh lime, and serve hot."
          ],
          stepsHi: [
            "चावल के चपटे नूडल्स को गुनगुने पानी में 15 मिनट भिगो दें ताकि वो नरम हो जाएं।",
            "इमली का पल्प, थोड़ा गुड़, सोया सॉस और नींबू का रस मिलाकर प्रामाणिक पैड थाई सॉस तैयार करें।",
            "वोक में तेल गरम करें; पनीर/टोफू के टुकड़े, लहसुन और लंबी कटी गाजर को 2 मिनट तेज़ आंच पर भूनें।",
            "भीगे नूडल्स और तैयार सॉस डालें; ऊपर से दरदरी भुनी मूंगफली व नींबू का रस डालकर गरमा-गरम परोसें।"
          ],
          chefTipEn: "Tamarind paste is the secret to true Thai flavor—do not substitute solely with lemon or vinegar.",
          chefTipHi: "असली थाई स्वाद के लिए इमली का पल्प ज़रूर डालें, यही इस डिश को वो खास खट्टा-मीठा स्वाद देता है।"
        },
        {
          id: "th_green_curry",
          nameEn: "Thai Green Coconut Curry",
          nameHi: "थाई ग्रीन करी व राइस",
          descriptionEn: "Vibrant aromatic green curry paste simmered with silky coconut milk, bamboo shoots, bell peppers, and basil.",
          descriptionHi: "नारियल के दूध, लेमनग्रास, हरी मिर्च और ताज़ी बेसिल में पकी हल्की मीठी व मसालेदार थाई ग्रीन करी।",
          cuisine: "CONTINENTAL",
          mealTypes: ["LUNCH", "DINNER"],
          prepTimeMinutes: 15,
          cookTimeMinutes: 15,
          caloriesApprox: 360,
          emoji: "🍛",
          tags: ["Aromatic Herb Curry", "Coconut Cream", "Thai Favorite"],
          requiredIngredientIds: ["rice", "capsicum", "mushroom", "ginger_garlic", "onion", "olive_oil"],
          stepsEn: [
            "Blend green chilies, lemongrass or lemon zest, ginger, garlic, coriander roots, and cumin into a green curry paste.",
            "Heat 2 tbsp thick coconut milk in a pan until oil separates; fry 2 tbsp green curry paste until fragrant.",
            "Add diced bell peppers, mushrooms, and zucchini, then pour in remaining coconut milk and a splash of water.",
            "Simmer for 8 minutes, season with soy sauce and lime juice, toss in fresh basil, and serve with jasmine rice."
          ],
          stepsHi: [
            "हरी मिर्च, नींबू का छिलका (जेस्ट), अदरक, लहसुन और हरे धनिये को पीसकर ताज़ा ग्रीन करी पेस्ट बनाएं।",
            "पैन में 2 चम्मच गाढ़ा नारियल दूध गरम करें; तैयार पेस्ट डालकर खुशबू आने तक 1 मिनट भूनें।",
            "कटी शिमला मिर्च, मशरूम और सब्जियां डालें, फिर बचा हुआ नारियल दूध और थोड़ा पानी मिलाएं।",
            "धीमी आंच पर 8 मिनट पकाएं, सोया सॉस और नींबू का रस डालें, ऊपर ताज़ी बेसिल पत्तियां डालकर चावल के साथ खाएं।"
          ],
          chefTipEn: "Frying the curry paste in the coconut cream 'cracks' the oil to release the deep botanical aromatics.",
          chefTipHi: "पेस्ट को नारियल के गाढ़े दूध में भूनें, इससे मसालों का तेल निकलकर करी में मनमोहक खुशबू भर देता है।"
        },
        {
          id: "th_corn_fritters",
          nameEn: "Crispy Thai Corn Cakes",
          nameHi: "थाई स्वीट कॉर्न फ्रिटर्स",
          descriptionEn: "Golden sweet corn fritters seasoned with red curry spices, kaffir lime leaves, and sweet chili dipping sauce.",
          descriptionHi: "मीठी मकई, थाई मसालों और हर्ब्स से बने कुरकुरे सुनहरे कॉर्न फ्रिटर्स और स्वीट चिली सॉस।",
          cuisine: "CONTINENTAL",
          mealTypes: ["BREAKFAST", "LUNCH"],
          prepTimeMinutes: 10,
          cookTimeMinutes: 10,
          caloriesApprox: 230,
          emoji: "🌽",
          tags: ["Quick Crunch", "Sweet Corn Treat", "Finger Food"],
          requiredIngredientIds: ["wheat_flour", "onion", "green_chili", "olive_oil"],
          stepsEn: [
            "Coarsely crush 1 cup sweet corn kernels, leaving some whole for texture.",
            "Mix with 2 tbsp flour, minced chili, finely chopped curry leaves, a pinch of sugar, and salt into a thick batter.",
            "Heat oil in a skillet over medium heat.",
            "Drop spoonfuls of corn batter, flatten slightly, and shallow fry for 3-4 minutes per side until deeply golden and crunchy."
          ],
          stepsHi: [
            "मीठी मकई के दानों को मिक्सी में हल्का दरदरा पीसें (कुछ दाने साबुत रहने दें)।",
            "कटोरे में कॉर्न, 2 चम्मच आटा, बारीक मिर्च, कढ़ी पत्ता, थोड़ी चीनी और नमक मिलाकर गाढ़ा मिश्रण बनाएं।",
            "तवे या पैन में मध्यम आंच पर तेल गरम करें।",
            "एक-एक चम्मच मिश्रण पैन में डालें, हल्का चपटा करें और दोनों तरफ से 3-4 मिनट सुनहरा व कुरकुरा होने तक सेकें।"
          ],
          chefTipEn: "Keeping 30% of the corn kernels whole gives an explosion of sweet, juicy pops in every crispy bite.",
          chefTipHi: "थोड़े मकई के दाने साबुत रखने से हर बाइट में मीठा जूसी स्वाद और बाहर से क्रंच मिलता है।"
        }
      ]
    }
  ]
};

// Helper: All recipes flattened
APP_DATA.allRecipes = [
  ...APP_DATA.indianRecipes,
  ...APP_DATA.continentalRecipes,
  ...APP_DATA.indianStates.flatMap(s => s.dishes),
  ...APP_DATA.worldCountries.flatMap(c => c.dishes)
];

// Deduplicate recipes by id
APP_DATA.recipeMap = {};
APP_DATA.allRecipes.forEach(r => {
  APP_DATA.recipeMap[r.id] = r;
});

// Explicitly bind to window and Node exports
if (typeof window !== "undefined") {
  window.APP_DATA = APP_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = APP_DATA;
}
