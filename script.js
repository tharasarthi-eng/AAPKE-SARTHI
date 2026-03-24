// This is where you will add your real links later
const educationData = [
    { id: 1, section: "Calculus", chapter: "Limits", topic: "L'Hopital's Rule", dpp: "#", ppt: "#", yt: "#" },
    { id: 2, section: "Algebra", chapter: "Matrices", topic: "Adjoint of Matrix", dpp: "#", ppt: "#", yt: "#" },
    { id: 3, section: "Geometry", chapter: "Circles", topic: "Tangent Properties", dpp: "#", ppt: "#", yt: "#" }
];

const resourceList = document.getElementById('resourceList');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');

let currentSection = "All";

function displayResources(filterText = "") {
    resourceList.innerHTML = "";
    
    const filtered = educationData.filter(item => {
        const matchesSection = currentSection === "All" || item.section === currentSection;
        const matchesSearch = item.topic.toLowerCase().includes(filterText.toLowerCase()) || 
                              item.chapter.toLowerCase().includes(filterText.toLowerCase());
        return matchesSection && matchesSearch;
    });

    if (filtered.length === 0) {
        resourceList.innerHTML = `<p class="no-results">No topics found. Try another search!</p>`;
        return;
    }

    filtered.forEach(item => {
        resourceList.innerHTML += `
            <div class="card">
                <div class="card-info">
                    <span class="badge">${item.section}</span>
                    <h3>${item.topic}</h3>
                    <p>Chapter: ${item.chapter}</p>
                </div>
                <div class="card-links">
                    <a href="${item.dpp}" class="btn dpp">📄 DPP</a>
                    <a href="${item.ppt}" class="btn ppt">📊 PPT</a>
                    <a href="${item.yt}" class="btn yt">▶️ Video</a>
                </div>
            </div>
        `;
    });
}

// Search Event
searchInput.addEventListener('input', (e) => displayResources(e.target.value));

// Filter Button Events
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentSection = btn.getAttribute('data-section');
        displayResources(searchInput.value);
    });
});

// Initial Load
displayResources();
