const data = {
    "Geometry": ["Straight Line", "Circle", "Parabola", "Ellipse", "Hyperbola", "Vector", "3D"],
    "Calculus": ["Set Theory", "Relation", "Function", "Inverse Trigonometry", "Limit & Continuity", "MOD", "AOD", "Integration (Ind)", "Integration (Def)", "Area", "Diff Equation"],
    "Algebra": ["Quadratic", "Trigonometry", "Sequence", "Binomial", "P&C", "Probability", "Matrices", "Determinants", "Complex", "Statistics"]
};

// Function to toggle Dark Mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    
    // Save preference to browser memory
    const isDark = body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Update the icon
    updateThemeIcon(isDark);
}

function toggleTheme() {
    // This adds/removes the 'dark-theme' class from the ENTIRE page
    document.body.classList.toggle('dark-theme');
    
    // Save the preference so it stays dark when they change pages
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// Load the saved theme when the page opens
window.onload = () => {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }
};
// Check for saved preference on page load
window.onload = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        updateThemeIcon(true);
    }
};

function updateThemeIcon(isDark) {
    const icon = document.getElementById('theme-icon');
    if(icon) icon.innerText = isDark ? '☀️' : '🌙';
}

// Function to move from Sections to Chapters
function selectSection(name) {
    localStorage.setItem('selectedSection', name);
    window.location.href = 'chapters.html';
}

// Function to move from Chapters to Topics
function selectChapter(name) {
    localStorage.setItem('selectedChapter', name);
    window.location.href = 'topics.html';
}

// Function to move to final Resources
function selectTopic(name) {
    localStorage.setItem('selectedTopic', name);
    window.location.href = 'resources.html';
}

function toggleFab() {
    const menu = document.getElementById('fabMenu');
    const icon = document.getElementById('fabIcon');
    
    menu.classList.toggle('active');
    
    // Change icon to 'X' when open
    if (menu.classList.contains('active')) {
        icon.innerText = "✕";
        icon.style.fontSize = "20px";
    } else {
        icon.innerText = "💬";
        icon.style.fontSize = "24px";
    }
}
