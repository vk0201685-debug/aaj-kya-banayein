package com.example.model

enum class RegionalMode {
    INDIAN_STATES,
    WORLD_COUNTRIES
}

data class IndianState(
    val id: String,
    val nameEn: String,
    val nameHi: String,
    val taglineEn: String,
    val taglineHi: String,
    val iconEmoji: String,
    val dishes: List<Recipe>
) {
    fun localizedName(lang: AppLanguage): String = if (lang == AppLanguage.HINDI) nameHi else nameEn
    fun localizedTagline(lang: AppLanguage): String = if (lang == AppLanguage.HINDI) taglineHi else taglineEn
}

data class WorldCountry(
    val id: String,
    val nameEn: String,
    val nameHi: String,
    val taglineEn: String,
    val taglineHi: String,
    val flagEmoji: String,
    val dishes: List<Recipe>
) {
    fun localizedName(lang: AppLanguage): String = if (lang == AppLanguage.HINDI) nameHi else nameEn
    fun localizedTagline(lang: AppLanguage): String = if (lang == AppLanguage.HINDI) taglineHi else taglineEn
}
