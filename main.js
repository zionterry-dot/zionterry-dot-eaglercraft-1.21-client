// main.js for Eaglercraft client

// Settings Management Module
const SettingsManager = (() => {
    const settingsKey = 'eaglercraft_settings';
    let settings = {};

    const loadSettings = () => {
        const savedSettings = localStorage.getItem(settingsKey);
        if (savedSettings) {
            settings = JSON.parse(savedSettings);
        }
    };

    const saveSettings = () => {
        localStorage.setItem(settingsKey, JSON.stringify(settings));
    };

    const setSetting = (key, value) => {
        settings[key] = value;
        saveSettings();
    };

    const getSetting = (key) => {
        return settings[key];
    };

    loadSettings();
    return { setSetting, getSetting };
})();

// UI Controls Module
const UIControls = (() => {
    const toggleButton = document.getElementById('toggle-settings');
    const settingsPanel = document.getElementById('settings-panel');

    const showSettings = () => {
        settingsPanel.style.display = 'block';
    };

    const hideSettings = () => {
        settingsPanel.style.display = 'none';
    };

    toggleButton.addEventListener('click', () => {
        if (settingsPanel.style.display === 'none' || settingsPanel.style.display === '') {
            showSettings();
        } else {
            hideSettings();
        }
    });
})();

// Example of setting a value
SettingsManager.setSetting('theme', 'dark'); // Set theme to dark

// Example of getting a value
console.log(SettingsManager.getSetting('theme')); // Get current theme
