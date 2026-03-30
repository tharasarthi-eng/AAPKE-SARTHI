// 1. MOBILE MENU TOGGLE
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

// 2. GLOBAL DARK MODE
function toggleDarkMode() {
    const root = document.documentElement;
    const icon = document.getElementById('theme-icon');
    
    root.classList.toggle('dark-theme');
    const isDark = root.classList.contains('dark-theme');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    if(icon) icon.innerText = isDark ? '☀️' : '🌙';
}

// 3. APPLY THEME ON EVERY PAGE LOAD
(function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark-theme');
        // Wait for DOM to update icon
        document.addEventListener('DOMContentLoaded', () => {
            const icon = document.getElementById('theme-icon');
            if(icon) icon.innerText = '☀️';
        });
    }
})


function openBranch(branchName) {
    // 1. Save the branch name (Geometry, Calculus, etc.)
    localStorage.setItem('selectedSection', branchName);
    
    // 2. Move to the chapters page
    window.location.href = 'chapters.html';
}





