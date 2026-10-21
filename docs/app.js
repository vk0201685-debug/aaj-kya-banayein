// ==========================================
// Aaj Kya Banayein - Complete App Engine
// ==========================================

const i18n = {
  en: {
    appTitle: "Aaj Kya Banayein",
    appSubtitle: "Daily Meal Planner & Recipe Guide",
    btnDownload: "Download App",
    bannerTitle: "Android App Available!",
    bannerSub: "Works offline, super-fast with zero internet needed",
    bannerBtn: "Download APK (v1.0.0)",
    navPlanner: "Meal Planner",
    navRegional: "Famous Dishes",
    navPantry: "Pantry Matcher",
    navSpin: "Spin Wheel",
    heroPlannerTitle: "Weekly Meal Plan",
    heroPlannerToday: "Today's Meal Menu",
    shuffleWeek: "Shuffle Week",
    heroRegionalTitle: "State & World Famous Dishes",
    heroRegionalDesc: "Famous traditional dishes from regions & countries",
    indianStatesTab: "Indian States",
    worldCountriesTab: "World Countries",
    topThreeDishes: "🏆 Top 3 Famous Dishes",
    heroPantryTitle: "What's in your pantry?",
    heroPantryDesc: "Select ingredients you have to find matching recipes",
    selectEssentials: "Select Essentials",
    clearAll: "Clear All",
    matchedDishes: "🍳 Recipes You Can Cook",
    heroSpinTitle: "Can't decide what to cook?",
    heroSpinDesc: "Spin the wheel and leave the decision to luck!",
    filterAll: "All Meals",
    breakfast: "Breakfast",
    lunch: "Lunch",
    dinner: "Dinner",
    spinButton: "Spin Wheel",
    viewRecipe: "View 4-Step Recipe",
    ingredientsCount: "ingredients required",
    cookTime: "mins",
    calories: "kcal"
  },
  hi: {
    appTitle: "आज क्या बनाएं",
    appSubtitle: "दैनिक भोजन योजना और आसान रेसिपी गाइड",
    btnDownload: "ऐप डाउनलोड करें",
    bannerTitle: "Android ऐप उपलब्ध है!",
    bannerSub: "ऑफलाइन काम करता है, सुपर-फास्ट और बिना इंटरनेट रेसिपी देखें",
    bannerBtn: "Download APK (v1.0.0)",
    navPlanner: "भोजन योजना",
    navRegional: "प्रसिद्ध स्वाद",
    navPantry: "रसोई सामग्री",
    navSpin: "पहिया घुमाएं",
    heroPlannerTitle: "साप्ताहिक भोजन तालिका",
    heroPlannerToday: "आज का भोजन मेनू",
    shuffleWeek: "पूरा सप्ताह बदलें",
    heroRegionalTitle: "राज्य व विश्व प्रसिद्ध व्यंजन",
    heroRegionalDesc: "विभिन्न राज्यों और देशों के प्रसिद्ध पारंपरिक व्यंजन",
    indianStatesTab: "भारतीय राज्य",
    worldCountriesTab: "दुनिया के देश",
    topThreeDishes: "🏆 शीर्ष 3 प्रसिद्ध व्यंजन",
    heroPantryTitle: "आपकी रसोई में क्या है?",
    heroPantryDesc: "घर पर मौजूद सामग्री चुनें और मैचिंग रेसिपी पाएं",
    selectEssentials: "ज़रूरी सामग्री चुनें",
    clearAll: "सभी हटाएं",
    matchedDishes: "🍳 आप ये व्यंजन बना सकते हैं",
    heroSpinTitle: "समझ नहीं आ रहा क्या बनाएं?",
    heroSpinDesc: "पहिया घुमाएं और अपनी पसंद का फैसला छोड़ दें किस्मत पर!",
    filterAll: "सभी भोजन",
    breakfast: "नाश्ता",
    lunch: "दोपहर",
    dinner: "रात",
    spinButton: "पहिया घुमाएं",
    viewRecipe: "4-स्टेप रेसिपी देखें",
    ingredientsCount: "सामग्री चाहिए",
    cookTime: "मिनट",
    calories: "कैलोरी"
  }
};

const DAYS = [
  { id: 0, en: "Mon", hi: "सोम" },
  { id: 1, en: "Tue", hi: "मंगल" },
  { id: 2, en: "Wed", hi: "बुध" },
  { id: 3, en: "Thu", hi: "गुरु" },
  { id: 4, en: "Fri", hi: "शुक्र" },
  { id: 5, en: "Sat", hi: "शनि" },
  { id: 6, en: "Sun", hi: "रवि" }
];

const REGIONAL_DATA = {
  INDIAN_STATES: [
    {
      id: "punjab",
      nameEn: "Punjab",
      nameHi: "पंजाब",
      emoji: "🌾",
      descEn: "Rich, buttery, hearty gravies and iconic flatbreads.",
      descHi: "मक्खन, मलाई और ज़ायकेदार उत्तर भारतीय स्वाद।",
      dishes: [
        { nameEn: "Chole Bhature", nameHi: "छोले भटूरे", emoji: "🫓", descEn: "Crisp puffed bhature with spicy chickpea curry.", descHi: "फूले हुए कुरकुरे भटूरे और चटपटे काबुली छोले।" },
        { nameEn: "Dal Makhani", nameHi: "दाल मखनी", emoji: "🍲", descEn: "Creamy slow-simmered black lentils with butter.", descHi: "मक्खन और क्रीम में धीमी आंच पर पकी काली उड़द दाल।" },
        { nameEn: "Sarson Saag & Makki Roti", nameHi: "सरसों का साग व मक्के की रोटी", emoji: "🥬", descEn: "Winter mustard greens with corn flatbread and jaggery.", descHi: "देसी घी, सरसों का साग और मक्के की गरमा-गरम रोटी।" }
      ]
    },
    {
      id: "rajasthan",
      nameEn: "Rajasthan",
      nameHi: "राजस्थान",
      emoji: "🏰",
      descEn: "Royal desert feasts packed with pure ghee and aromatic spices.",
      descHi: "शाही रजवाड़ी स्वाद और देसी घी के लाजवाब व्यंजन।",
      dishes: [
        { nameEn: "Dal Baati Churma", nameHi: "दाल बाटी चूरमा", emoji: "🫓", descEn: "Hard wheat dumplings soaked in ghee with mixed lentils.", descHi: "देसी घी में डूबी बाटी, पंचमेल दाल और मीठा चूरमा।" },
        { nameEn: "Gatte ki Sabzi", nameHi: "गट्टे की सब्जी", emoji: "🍛", descEn: "Spiced gram flour dumplings simmered in yogurt gravy.", descHi: "दही और मसालों की तरी में उबले बेसन के गट्टे।" },
        { nameEn: "Pyaaz Kachori", nameHi: "प्याज़ की कचौरी", emoji: "🥟", descEn: "Crisp flaky snack loaded with spicy onion filling.", descHi: "मसालेदार प्याज़ की भरावन वाली खस्ता कचौरी।" }
      ]
    },
    {
      id: "south_india",
      nameEn: "South India",
      nameHi: "दक्षिण भारत",
      emoji: "🥥",
      descEn: "Crispy fermented crepes, aromatic sambar, and fresh coconut.",
      descHi: "नारियल, कढ़ी पत्ता और कुरकुरे डोसे का अनूठा स्वाद।",
      dishes: [
        { nameEn: "Masala Dosa", nameHi: "मसाला डोसा", emoji: "🥞", descEn: "Golden crispy crepe with spiced potato filling & sambar.", descHi: "कुरकुरा डोसा, आलू मसाला और नारियल चटनी।" },
        { nameEn: "Idli Sambar", nameHi: "इडली सांभर", emoji: "🥣", descEn: "Steamed fluffy rice cakes with piping hot lentil stew.", descHi: "भाप में पकी रुई जैसी नरम इडली और सांभर।" },
        { nameEn: "Medu Vada", nameHi: "मेदू वड़ा", emoji: "🍩", descEn: "Crisp golden fried lentil donuts with chutneys.", descHi: "कुरकुरा उड़द दाल वड़ा और तीखी चटनी।" }
      ]
    }
  ],
  WORLD_COUNTRIES: [
    {
      id: "italy",
      nameEn: "Italy",
      nameHi: "इटली",
      emoji: "🇮🇹",
      descEn: "Hand-rolled pasta, olive oil, fresh basil, and melted mozzarella.",
      descHi: "ताजा बेसिल, ऑलिव ऑयल, चीज़ और पास्ता का देश।",
      dishes: [
        { nameEn: "Penne Arrabbiata", nameHi: "रेड सॉस पास्ता", emoji: "🍝", descEn: "Pasta tossed in spicy garlic, tomato, and basil sauce.", descHi: "लहसुन, टमाटर और हर्ब्स में बना तीखा पास्ता।" },
        { nameEn: "Margherita Pizza", nameHi: "मार्गेरीटा पिज्ज़ा", emoji: "🍕", descEn: "Crisp thin crust topped with tomatoes and mozzarella.", descHi: "ताजा टमाटर सॉस और मोज़ेरेला चीज़ से भरा पिज्ज़ा।" },
        { nameEn: "Creamy Risotto", nameHi: "क्रीमी रिसोट्टो", emoji: "🍚", descEn: "Slow cooked arborio rice with butter and mushrooms.", descHi: "मशरूम और मक्खन में पका मखमली इटैलियन राइस।" }
      ]
    },
    {
      id: "mexico",
      nameEn: "Mexico",
      nameHi: "मेक्सिको",
      emoji: "🇲🇽",
      descEn: "Zesty salsas, crisp tortillas, black beans, and guacamole.",
      descHi: "चटपटे साल्सा, कॉर्न टॉर्टिला और बीन्स का ज़ायका।",
      dishes: [
        { nameEn: "Crispy Tacos", nameHi: "क्रिस्पी टैकोस", emoji: "🌮", descEn: "Corn tortillas stuffed with seasoned beans and cheese.", descHi: "मसालेदार बीन्स, साल्सा और चीज़ से भरे टैकोस।" },
        { nameEn: "Cheese Quesadilla", nameHi: "चीज़ कैसाडिला", emoji: "🫓", descEn: "Griddled tortilla oozing with melted cheese and peppers.", descHi: "मक्खन में सिकी टॉर्टिला और पिघली हुई चीज़।" },
        { nameEn: "Loaded Nachos", nameHi: "लोडेड नाचोस", emoji: "🥑", descEn: "Tortilla chips with fresh guacamole and spicy salsa.", descHi: "कुरकुरे चिप्स, चीज़ सॉस और एवोकैडो डिप।" }
      ]
    }
  ]
};

// Global App State
window.state = {
  lang: "hi",
  cuisine: "INDIAN",
  currentTab: "planner",
  selectedDay: (new Date().getDay() + 6) % 7, // 0 = Monday, 6 = Sunday
  regionalMode: "INDIAN_STATES",
  selectedRegionIndex: 0,
  selectedIngredients: new Set(["onion", "potato", "tomato", "green_chili", "wheat_flour", "rice"]),
  pantrySearch: "",
  spinFilter: null,
  isSpinning: false,
  weeklyPlan: {}
};

// ==========================================
// Initialization
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initWeeklyPlan();
  renderApp();
  setupPantrySearch();
});

function getAllRecipes() {
  const data = window.APP_DATA || {};
  const ind = data.indianRecipes || [];
  const cont = data.continentalRecipes || [];
  if (state.cuisine === "INDIAN") return ind;
  if (state.cuisine === "CONTINENTAL") return cont;
  return [...ind, ...cont];
}

function initWeeklyPlan() {
  const recipes = getAllRecipes();
  DAYS.forEach((day, index) => {
    state.weeklyPlan[index] = {
      breakfast: getRandomRecipe(recipes, "BREAKFAST"),
      lunch: getRandomRecipe(recipes, "LUNCH"),
      dinner: getRandomRecipe(recipes, "DINNER")
    };
  });
}

function getRandomRecipe(list, mealType) {
  const filtered = list.filter(r => !mealType || (r.mealTypes && r.mealTypes.includes(mealType)));
  const pool = filtered.length > 0 ? filtered : list;
  if (!pool || pool.length === 0) return null;
  return pool[Math.floor(Math.random() * pool.length)];
}

// ==========================================
// Main UI Render & Language Switch
// ==========================================
window.setLanguage = function(lang) {
  state.lang = lang;
  document.documentElement.lang = lang;

  document.getElementById("opt-en").classList.toggle("active", lang === "en");
  document.getElementById("opt-hi").classList.toggle("active", lang === "hi");

  // Update all data-i18n elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang] && i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });

  document.getElementById("app-title-text").textContent = i18n[lang].appTitle;
  document.getElementById("app-subtitle-text").textContent = i18n[lang].appSubtitle;
  document.getElementById("btn-download-text").textContent = i18n[lang].btnDownload;
  document.getElementById("banner-title-text").textContent = i18n[lang].bannerTitle;
  document.getElementById("banner-sub-text").textContent = i18n[lang].bannerSub;
  document.getElementById("banner-btn-text").textContent = i18n[lang].bannerBtn;

  renderApp();
};

window.setTab = function(tabName) {
  state.currentTab = tabName;

  document.querySelectorAll(".tab-content").forEach(sec => sec.classList.remove("active"));
  const activeSec = document.getElementById(`tab-${tabName}`);
  if (activeSec) activeSec.classList.add("active");

  document.querySelectorAll(".nav-link-btn, .bottom-nav-item").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-tab") === tabName);
  });

  if (tabName === "spin") {
    setTimeout(drawWheel, 50);
  } else if (tabName === "regional") {
    renderRegional();
  } else if (tabName === "pantry") {
    renderPantry();
  } else {
    renderPlanner();
  }
};

window.setCuisine = function(cuisine) {
  state.cuisine = cuisine;
  document.getElementById("btn-cuisine-indian").classList.toggle("active", cuisine === "INDIAN");
  document.getElementById("btn-cuisine-continental").classList.toggle("active", cuisine === "CONTINENTAL");
  initWeeklyPlan();
  renderApp();
};

function renderApp() {
  if (state.currentTab === "planner") renderPlanner();
  if (state.currentTab === "regional") renderRegional();
  if (state.currentTab === "pantry") renderPantry();
  if (state.currentTab === "spin") drawWheel();
}

// ==========================================
// 1. MEAL PLANNER LOGIC
// ==========================================
window.shuffleFullWeek = function() {
  initWeeklyPlan();
  renderPlanner();
};

function renderPlanner() {
  renderDayPills();
  renderMealCards();
}

function renderDayPills() {
  const container = document.getElementById("planner-day-pills");
  if (!container) return;

  container.innerHTML = DAYS.map((d, idx) => `
    <button class="day-pill ${state.selectedDay === idx ? 'active' : ''}" onclick="selectDay(${idx})" style="padding:8px 16px; border-radius:20px; border:1px solid #ddd; background:${state.selectedDay === idx ? '#ea580c' : '#fff'}; color:${state.selectedDay === idx ? '#fff' : '#333'}; font-weight:700; margin-right:8px; cursor:pointer;">
      ${state.lang === 'hi' ? d.hi : d.en}
    </button>
  `).join("");
}

window.selectDay = function(dayIndex) {
  state.selectedDay = dayIndex;
  renderPlanner();
};

function renderMealCards() {
  const container = document.getElementById("planner-meal-cards");
  if (!container) return;

  const dayPlan = state.weeklyPlan[state.selectedDay];
  if (!dayPlan) return;

  const mealSlots = [
    { type: "breakfast", labelEn: "Breakfast (Morning)", labelHi: "नाश्ता (सुबह)", icon: "🌅", item: dayPlan.breakfast },
    { type: "lunch", labelEn: "Lunch (Afternoon)", labelHi: "दोपहर का भोजन", icon: "☀️", item: dayPlan.lunch },
    { type: "dinner", labelEn: "Dinner (Night)", labelHi: "रात का भोजन", icon: "🌙", item: dayPlan.dinner }
  ];

  container.innerHTML = mealSlots.map(slot => {
    const r = slot.item;
    if (!r) return "";
    const name = state.lang === "hi" ? r.nameHi : r.nameEn;
    const desc = state.lang === "hi" ? r.descriptionHi : r.descriptionEn;
    const mealLabel = state.lang === "hi" ? slot.labelHi : slot.labelEn;

    return `
      <div class="meal-card" style="background:#fff; border-radius:14px; padding:16px; margin-bottom:14px; box-shadow:0 3px 10px rgba(0,0,0,0.06); border:1px solid #f0f0f0;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <span style="font-size:0.8rem; font-weight:700; color:#ea580c; text-transform:uppercase;">${slot.icon} ${mealLabel}</span>
          <span style="font-size:0.75rem; color:#888;">⏱️ ${r.cookTimeMinutes} ${i18n[state.lang].cookTime} • 🔥 ${r.caloriesApprox} ${i18n[state.lang].calories}</span>
        </div>
        <div style="display:flex; align-items:center; gap:12px;">
          <span style="font-size:36px;">${r.emoji || '🍲'}</span>
          <div style="flex:1;">
            <h4 style="margin:0; font-size:1.1rem; color:#222;">${name}</h4>
            <p style="margin:4px 0 0; font-size:0.85rem; color:#666;">${desc}</p>
          </div>
        </div>
        <div style="margin-top:12px; display:flex; justify-content:flex-end;">
          <button onclick="openRecipeModal('${r.id}')" style="background:#fff7ed; color:#ea580c; border:1px solid #ffedd5; padding:6px 14px; border-radius:8px; font-size:0.85rem; font-weight:700; cursor:pointer;">
            📖 ${i18n[state.lang].viewRecipe}
          </button>
        </div>
      </div>
    `;
  }).join("");
}

// ==========================================
// 2. REGIONAL DISHES LOGIC
// ==========================================
window.setRegionalMode = function(mode) {
  state.regionalMode = mode;
  state.selectedRegionIndex = 0;
  document.getElementById("btn-reg-india").classList.toggle("active", mode === "INDIAN_STATES");
  document.getElementById("btn-reg-world").classList.toggle("active", mode === "WORLD_COUNTRIES");
  renderRegional();
};

function renderRegional() {
  const regions = REGIONAL_DATA[state.regionalMode] || [];
  const currentRegion = regions[state.selectedRegionIndex] || regions[0];

  const chipsContainer = document.getElementById("regional-chips-scroll");
  if (chipsContainer) {
    chipsContainer.innerHTML = regions.map((reg, idx) => `
      <button onclick="selectRegion(${idx})" style="padding:8px 16px; border-radius:20px; border:1px solid #ddd; background:${state.selectedRegionIndex === idx ? '#c2410c' : '#fff'}; color:${state.selectedRegionIndex === idx ? '#fff' : '#333'}; font-weight:700; margin-right:8px; white-space:nowrap; cursor:pointer;">
        ${reg.emoji} ${state.lang === 'hi' ? reg.nameHi : reg.nameEn}
      </button>
    `).join("");
  }

  const showcaseBox = document.getElementById("regional-showcase-box");
  if (showcaseBox && currentRegion) {
    showcaseBox.innerHTML = `
      <div style="background:#fff; border-radius:14px; padding:18px; border:1px solid #fed7aa; margin:14px 0;">
        <h3 style="margin:0; font-size:1.2rem; color:#c2410c;">${currentRegion.emoji} ${state.lang === 'hi' ? currentRegion.nameHi : currentRegion.nameEn}</h3>
        <p style="margin:6px 0 0; color:#555; font-size:0.9rem;">${state.lang === 'hi' ? currentRegion.descHi : currentRegion.descEn}</p>
      </div>
    `;
  }

  const dishesList = document.getElementById("regional-dishes-list");
  if (dishesList && currentRegion) {
    dishesList.innerHTML = currentRegion.dishes.map(dish => `
      <div style="display:flex; align-items:center; gap:14px; background:#fff; padding:14px; border-radius:12px; margin-bottom:10px; border:1px solid #f3f4f6; box-shadow:0 2px 6px rgba(0,0,0,0.04);">
        <span style="font-size:32px;">${dish.emoji}</span>
        <div>
          <h4 style="margin:0; font-size:1.05rem; color:#222;">${state.lang === 'hi' ? dish.nameHi : dish.nameEn}</h4>
          <p style="margin:3px 0 0; font-size:0.85rem; color:#666;">${state.lang === 'hi' ? dish.descHi : dish.descEn}</p>
        </div>
      </div>
    `).join("");
  }
}

window.selectRegion = function(idx) {
  state.selectedRegionIndex = idx;
  renderRegional();
};

// ==========================================
// 3. PANTRY INGREDIENT MATCHER
// ==========================================
function setupPantrySearch() {
  const input = document.getElementById("pantry-search-input");
  if (input) {
    input.addEventListener("input", (e) => {
      state.pantrySearch = e.target.value.toLowerCase();
      renderPantry();
    });
  }
}

window.selectEssentials = function() {
  ["onion", "potato", "tomato", "green_chili", "wheat_flour", "rice", "butter"].forEach(id => {
    state.selectedIngredients.add(id);
  });
  renderPantry();
};

window.clearAllIngredients = function() {
  state.selectedIngredients.clear();
  renderPantry();
};

window.toggleIngredient = function(id) {
  if (state.selectedIngredients.has(id)) {
    state.selectedIngredients.delete(id);
  } else {
    state.selectedIngredients.add(id);
  }
  renderPantry();
};

function renderPantry() {
  const data = window.APP_DATA || { ingredients: [], categories: {} };
  const countBadge = document.getElementById("pantry-selected-count");
  if (countBadge) {
    countBadge.textContent = `${state.selectedIngredients.size} ${state.lang === 'hi' ? 'सामग्री चुनी गई' : 'ingredients selected'}`;
  }

  const container = document.getElementById("pantry-categories-container");
  if (container) {
    let filtered = data.ingredients || [];
    if (state.pantrySearch) {
      filtered = filtered.filter(ing => 
        (ing.nameEn && ing.nameEn.toLowerCase().includes(state.pantrySearch)) ||
        (ing.nameHi && ing.nameHi.includes(state.pantrySearch))
      );
    }

    container.innerHTML = `
      <div style="display:flex; flex-wrap:wrap; gap:8px; margin:14px 0;">
        ${filtered.map(ing => {
          const isSelected = state.selectedIngredients.has(ing.id);
          return `
            <button onclick="toggleIngredient('${ing.id}')" style="display:flex; align-items:center; gap:6px; padding:7px 12px; border-radius:20px; border:1px solid ${isSelected ? '#ea580c' : '#ddd'}; background:${isSelected ? '#fff7ed' : '#fff'}; color:${isSelected ? '#ea580c' : '#444'}; font-weight:${isSelected ? '700' : '500'}; font-size:0.85rem; cursor:pointer;">
              <span>${ing.emoji || '🥕'}</span>
              <span>${state.lang === 'hi' ? ing.nameHi : ing.nameEn}</span>
              ${isSelected ? '✓' : '+'}
            </button>
          `;
        }).join("")}
      </div>
    `;
  }

  // Find matching recipes
  const matchedCards = document.getElementById("pantry-matched-cards");
  if (matchedCards) {
    const allRecipes = getAllRecipes();
    const matched = allRecipes.filter(r => {
      if (!r.requiredIngredientIds) return false;
      const count = r.requiredIngredientIds.filter(id => state.selectedIngredients.has(id)).length;
      return count >= 2; // Match if user has at least 2 key ingredients
    });

    if (matched.length === 0) {
      matchedCards.innerHTML = `<p style="text-align:center; color:#888; padding:20px;">${state.lang === 'hi' ? 'कृपया कुछ और सामग्री चुनें!' : 'Select more ingredients to see recipes!'}</p>`;
    } else {
      matchedCards.innerHTML = matched.map(r => `
        <div style="background:#fff; border-radius:12px; padding:14px; margin-bottom:10px; border:1px solid #f0f0f0; display:flex; justify-content:space-between; align-items:center;">
          <div>
            <h4 style="margin:0; font-size:1.05rem;">${r.emoji || '🍲'} ${state.lang === 'hi' ? r.nameHi : r.nameEn}</h4>
            <span style="font-size:0.8rem; color:#888;">⏱️ ${r.cookTimeMinutes} ${i18n[state.lang].cookTime}</span>
          </div>
          <button onclick="openRecipeModal('${r.id}')" style="background:#ea580c; color:#fff; border:none; padding:6px 12px; border-radius:8px; font-size:0.8rem; font-weight:700; cursor:pointer;">
            ${state.lang === 'hi' ? 'देखें' : 'View'}
          </button>
        </div>
      `).join("");
    }
  }
}

// ==========================================
// 4. SPIN THE WHEEL LOGIC
// ==========================================
window.setSpinFilter = function(filter) {
  state.spinFilter = filter;
  document.querySelectorAll(".wheel-filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-filter") === (filter || "all"));
  });
  drawWheel();
};

function getWheelItems() {
  const recipes = getAllRecipes();
  if (!state.spinFilter) return recipes.slice(0, 8);
  const filtered = recipes.filter(r => r.mealTypes && r.mealTypes.includes(state.spinFilter));
  return (filtered.length > 0 ? filtered : recipes).slice(0, 8);
}

function drawWheel(angle = 0) {
  const canvas = document.getElementById("wheelCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const items = getWheelItems();
  const numSlices = items.length;
  if (numSlices === 0) return;

  const sliceAngle = (2 * Math.PI) / numSlices;
  const radius = canvas.width / 2;
  const colors = ["#f97316", "#fb923c", "#fdba74", "#ea580c", "#d97706", "#b45309", "#f59e0b", "#fbbf24"];

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.save();
  ctx.translate(radius, radius);
  ctx.rotate(angle);

  for (let i = 0; i < numSlices; i++) {
    const item = items[i];
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, radius - 4, i * sliceAngle, (i + 1) * sliceAngle);
    ctx.fillStyle = colors[i % colors.length];
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.strokeStyle = "#fff";
    ctx.stroke();

    // Draw text / emoji
    ctx.save();
    ctx.rotate(i * sliceAngle + sliceAngle / 2);
    ctx.fillStyle = "#fff";
    ctx.font = "bold 13px sans-serif";
    ctx.textAlign = "right";
    const label = `${item.emoji || ''} ${(state.lang === 'hi' ? item.nameHi : item.nameEn).substring(0, 11)}`;
    ctx.fillText(label, radius - 20, 5);
    ctx.restore();
  }
  ctx.restore();
}

window.spinWheel = function() {
  if (state.isSpinning) return;
  state.isSpinning = true;

  const items = getWheelItems();
  if (items.length === 0) {
    state.isSpinning = false;
    return;
  }

  const canvas = document.getElementById("wheelCanvas");
  let currentRotation = 0;
  const spinDegrees = 1440 + Math.random() * 720;
  const duration = 3000;
  const start = performance.now();

  function animate(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const rad = (easeOut * spinDegrees * Math.PI) / 180;
    drawWheel(rad);

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      state.isSpinning = false;
      const normalizedDegrees = (easeOut * spinDegrees) % 360;
      const sliceDeg = 360 / items.length;
      const winningIndex = Math.floor(((360 - (normalizedDegrees % 360)) % 360) / sliceDeg) % items.length;
      const winner = items[winningIndex];

      const winnerCard = document.getElementById("spin-winner-card");
      if (winnerCard && winner) {
        winnerCard.innerHTML = `
          <div style="background:#fff; border-radius:14px; padding:16px; margin-top:16px; border:2px solid #ea580c; text-align:center; box-shadow:0 4px 14px rgba(0,0,0,0.08);">
            <div style="font-size:38px;">${winner.emoji || '🎉'}</div>
            <h3 style="margin:6px 0; color:#ea580c;">${state.lang === 'hi' ? winner.nameHi : winner.nameEn}</h3>
            <p style="margin:4px 0 12px; font-size:0.85rem; color:#666;">${state.lang === 'hi' ? winner.descriptionHi : winner.descriptionEn}</p>
            <button onclick="openRecipeModal('${winner.id}')" style="background:#ea580c; color:#fff; border:none; padding:8px 18px; border-radius:8px; font-weight:700; cursor:pointer;">
              📖 ${i18n[state.lang].viewRecipe}
            </button>
          </div>
        `;
      }
    }
  }
  requestAnimationFrame(animate);
};

// ==========================================
// 5. RECIPE MODAL LOGIC
// ==========================================
window.openRecipeModal = function(recipeId) {
  const recipes = getAllRecipes();
  const r = recipes.find(item => item.id === recipeId);
  if (!r) return;

  const modal = document.getElementById("recipe-modal");
  const content = document.getElementById("modal-recipe-content");
  if (!modal || !content) return;

  const isHi = state.lang === "hi";
  const steps = isHi ? (r.stepsHi || []) : (r.stepsEn || []);
  const chefTip = isHi ? r.chefTipHi : r.chefTipEn;

  content.innerHTML = `
    <div style="padding:10px 0;">
      <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">
        <span style="font-size:42px;">${r.emoji || '🍲'}</span>
        <div>
          <h2 style="margin:0; font-size:1.3rem;">${isHi ? r.nameHi : r.nameEn}</h2>
          <span style="font-size:0.8rem; color:#888;">⏱️ ${r.cookTimeMinutes} ${i18n[state.lang].cookTime} • 🔥 ${r.caloriesApprox} ${i18n[state.lang].calories}</span>
        </div>
      </div>
      <p style="color:#555; font-size:0.9rem; line-height:1.4;">${isHi ? r.descriptionHi : r.descriptionEn}</p>

      <h4 style="margin:16px 0 8px; color:#ea580c;">📝 ${isHi ? 'बनाने की विधि' : 'Preparation Steps'}</h4>
      <ol style="padding-left:20px; line-height:1.6; font-size:0.9rem; color:#333;">
        ${steps.map(s => `<li>${s}</li>`).join("")}
      </ol>

      ${chefTip ? `
        <div style="background:#fff7ed; border-left:4px solid #ea580c; padding:10px 14px; margin-top:14px; border-radius:4px; font-size:0.85rem; color:#9a3412;">
          💡 <strong>${isHi ? 'शेफ टिप:' : 'Chef Tip:'}</strong> ${chefTip}
        </div>
      ` : ''}
    </div>
  `;

  modal.classList.add("active");
  modal.style.display = "flex";
};

window.closeRecipeModal = function() {
  const modal = document.getElementById("recipe-modal");
  if (modal) {
    modal.classList.remove("active");
    modal.style.display = "none";
  }
};
