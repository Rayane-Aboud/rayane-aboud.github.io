const theme = {
    init() {
        this.loadTheme();
        this.setupEventListeners();
    },

    loadTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
        this.updateThemeButton(savedTheme);
    },

    toggle() {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        this.updateThemeButton(newTheme);
    },

    updateThemeButton(theme) {
        const themeIcon = document.getElementById('themeIcon');
        const themeText = document.getElementById('themeText');
        
        if (theme === 'dark') {
            themeIcon.textContent = '🌙';
            themeText.textContent = 'Dark';
        } else {
            themeIcon.textContent = '☀️';
            themeText.textContent = 'Light';
        }
    },

    setupEventListeners() {
        // Theme toggle is handled by onclick in HTML for simplicity
        // Can be moved here if needed
    }
};

// Initialize theme on load
document.addEventListener('DOMContentLoaded', () => {
    theme.init();
});