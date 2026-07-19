// Show Hidden Category Mod
// File: show_hidden_tab.js

(function () {
    function revealHiddenTab() {
        if (typeof settings === "undefined") return;

        // Remove "hidden" from the hidden category list
        if (Array.isArray(settings.hiddenCategories)) {
            settings.hiddenCategories =
                settings.hiddenCategories.filter(c => c !== "hidden");
        }

        // Force the category to exist
        if (!settings.unlocked) {
            settings.unlocked = {};
        }

        settings.unlocked.hidden = true;

        // Rebuild the category buttons if possible
        if (typeof createCategoryButtons === "function") {
            createCategoryButtons();
        }

        console.log("[Show Hidden Tab] Hidden category enabled.");
    }

    if (document.readyState === "complete") {
        revealHiddenTab();
    } else {
        window.addEventListener("load", revealHiddenTab);
    }
})();
