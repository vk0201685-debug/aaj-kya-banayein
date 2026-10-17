package com.example.ui.components

import androidx.compose.foundation.layout.size
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.CalendarMonth
import androidx.compose.material.icons.filled.Casino
import androidx.compose.material.icons.filled.Kitchen
import androidx.compose.material.icons.filled.Public
import androidx.compose.material3.Icon
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.NavigationBarItemDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.platform.testTag
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.model.AppLanguage
import com.example.model.AppStrings
import com.example.ui.AppTab
import com.example.ui.theme.SpiceOrangeContainer
import com.example.ui.theme.SpiceOrangePrimary

@Composable
fun BottomNavBar(
    currentTab: AppTab,
    language: AppLanguage,
    onTabSelected: (AppTab) -> Unit,
    modifier: Modifier = Modifier
) {
    NavigationBar(
        modifier = modifier.testTag("main_bottom_nav_bar"),
        containerColor = MaterialTheme.colorScheme.surface,
        tonalElevation = 8.dp
    ) {
        // Tab 1: Planner
        NavigationBarItem(
            selected = currentTab == AppTab.PLANNER,
            onClick = { onTabSelected(AppTab.PLANNER) },
            icon = {
                Icon(
                    imageVector = Icons.Default.CalendarMonth,
                    contentDescription = AppStrings.navPlanner.get(language),
                    modifier = Modifier.size(22.dp)
                )
            },
            label = {
                Text(
                    text = AppStrings.navPlanner.get(language),
                    fontSize = 11.sp,
                    fontWeight = if (currentTab == AppTab.PLANNER) FontWeight.Bold else FontWeight.Normal,
                    maxLines = 1
                )
            },
            colors = NavigationBarItemDefaults.colors(
                selectedIconColor = SpiceOrangePrimary,
                selectedTextColor = SpiceOrangePrimary,
                indicatorColor = SpiceOrangeContainer,
                unselectedIconColor = MaterialTheme.colorScheme.onSurfaceVariant,
                unselectedTextColor = MaterialTheme.colorScheme.onSurfaceVariant
            ),
            modifier = Modifier.testTag("nav_tab_planner")
        )

        // Tab 2: State & World Famous Food
        NavigationBarItem(
            selected = currentTab == AppTab.REGIONAL,
            onClick = { onTabSelected(AppTab.REGIONAL) },
            icon = {
                Icon(
                    imageVector = Icons.Default.Public,
                    contentDescription = AppStrings.navRegional.get(language),
                    modifier = Modifier.size(22.dp)
                )
            },
            label = {
                Text(
                    text = AppStrings.navRegional.get(language),
                    fontSize = 11.sp,
                    fontWeight = if (currentTab == AppTab.REGIONAL) FontWeight.Bold else FontWeight.Normal,
                    maxLines = 1
                )
            },
            colors = NavigationBarItemDefaults.colors(
                selectedIconColor = SpiceOrangePrimary,
                selectedTextColor = SpiceOrangePrimary,
                indicatorColor = SpiceOrangeContainer,
                unselectedIconColor = MaterialTheme.colorScheme.onSurfaceVariant,
                unselectedTextColor = MaterialTheme.colorScheme.onSurfaceVariant
            ),
            modifier = Modifier.testTag("nav_tab_regional")
        )

        // Tab 3: Pantry Matcher
        NavigationBarItem(
            selected = currentTab == AppTab.PANTRY,
            onClick = { onTabSelected(AppTab.PANTRY) },
            icon = {
                Icon(
                    imageVector = Icons.Default.Kitchen,
                    contentDescription = AppStrings.navPantry.get(language),
                    modifier = Modifier.size(22.dp)
                )
            },
            label = {
                Text(
                    text = AppStrings.navPantry.get(language),
                    fontSize = 11.sp,
                    fontWeight = if (currentTab == AppTab.PANTRY) FontWeight.Bold else FontWeight.Normal,
                    maxLines = 1
                )
            },
            colors = NavigationBarItemDefaults.colors(
                selectedIconColor = SpiceOrangePrimary,
                selectedTextColor = SpiceOrangePrimary,
                indicatorColor = SpiceOrangeContainer,
                unselectedIconColor = MaterialTheme.colorScheme.onSurfaceVariant,
                unselectedTextColor = MaterialTheme.colorScheme.onSurfaceVariant
            ),
            modifier = Modifier.testTag("nav_tab_pantry")
        )

        // Tab 4: Spin The Wheel
        NavigationBarItem(
            selected = currentTab == AppTab.SPIN_WHEEL,
            onClick = { onTabSelected(AppTab.SPIN_WHEEL) },
            icon = {
                Icon(
                    imageVector = Icons.Default.Casino,
                    contentDescription = AppStrings.navSpin.get(language),
                    modifier = Modifier.size(22.dp)
                )
            },
            label = {
                Text(
                    text = AppStrings.navSpin.get(language),
                    fontSize = 11.sp,
                    fontWeight = if (currentTab == AppTab.SPIN_WHEEL) FontWeight.Bold else FontWeight.Normal,
                    maxLines = 1
                )
            },
            colors = NavigationBarItemDefaults.colors(
                selectedIconColor = SpiceOrangePrimary,
                selectedTextColor = SpiceOrangePrimary,
                indicatorColor = SpiceOrangeContainer,
                unselectedIconColor = MaterialTheme.colorScheme.onSurfaceVariant,
                unselectedTextColor = MaterialTheme.colorScheme.onSurfaceVariant
            ),
            modifier = Modifier.testTag("nav_tab_spin")
        )
    }
}
