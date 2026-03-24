const data = {
    "Geometry": ["Straight Line", "Circle", "Parabola", "Ellipse", "Hyperbola", "Vector", "3D"],
    "Calculus": ["Set Theory", "Relation", "Function", "Inverse Trigonometry", "Limit & Continuity", "MOD", "AOD", "Integration (Ind)", "Integration (Def)", "Area", "Diff Equation"],
    "Algebra": ["Quadratic", "Trigonometry", "Sequence", "Binomial", "P&C", "Probability", "Matrices", "Determinants", "Complex", "Statistics"]
};

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
