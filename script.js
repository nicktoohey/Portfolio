// Project data - you can customize this with your own projects
const projects = [
    {
        id: 1,
        title: "Undergraduate Thesis",
        description: "Evaluating and predicting pitcher-hitter matchups in college baseball using pitch accuracy data collected from Oregon home games and scrimmages",
        timeframe: "Spring 2025-Present",
        image: "images/AccuracyOverlay.png",
        pageUrl: "projects/thesis.html"
    },
    {
        id: 2,
        title: "QuackTrax Dashboard",
        description: "Interactive dashboard with over 20 unique pages built for Oregon Baseball's players and staff to easily access and analyze data through a user-friendly interface.",
        timeframe: "Fall 2025-Present",
        image: "images/quacktraxpitcher1.jpg",
        pageUrl: "projects/QuackTrax.html"
    },
    {
        id: 3,
        title: "Advanced Scouting",
        description: "Advance scouting reports for University of Oregon (NCAA DI) and Springfield Drifters (WCL) to help coaches and players create attack plans and prepare for upcoming series.",
        timeframe: "Winter 2025-Present",
        image: "images/PitchersScout1.png",
        pageUrl: "projects/Scouting.html"
    },
    {
        id: 4,
        title: "Stuff+",
        description: "Developed a college baseball Stuff+ model to predict the expected run value of a pitch from its metrics, and designed post-game Stuff reports for the Springfield Drifters (WCL) to support player development for coaches and athletes.",
        timeframe: "Summer 2025",
        image: "images/StuffReport.png",
        pageUrl: "projects/Stuff.html"
    },
    {
        id: 5,
        title: "Pitch Predictor",
        description: "A deep learning model that predicts whether a pitcher will throw a Fastball or Off-Speed pitch based on game situation context. The model uses a smiple PyTorch neural network to analyze pitch sequencing patterns and provide real-time predictions for strategic decision-making.",
        timeframe: "Winter 2025",
        image: "images/Predictor.png",
        pageUrl: "projects/Predictor.html"
    },
    {
        id: 6,
        title: "Data Science for Social Justice",
        description: "Data Science Project for my Data Science for Social Justice class where I used data science methods explore the effect of the introduction of Mobile Crisis Services of Lane County (MCSLC) on the call volume for CAHOOTs, a 911 alternative response system for mental health crises in Eugene, Oregon.",
        timeframe: "Spring 2025",
        image: "images/DailyCallsOverTime.jpg",
        pageUrl: "projects/DataJustice.html"
    },
    {
        id: 7,
        title: "Language-to-SQL Model",
        description: "Created a language-to-SQL model using RAG to query Oregon Baseball's internal database for staff with little to no SQL experience.",
        timeframe: "Summer 2025",
        image: "images/vanna.png",
        pageUrl: "projects/Vanna.html"
    },
    {
        id: 8,
        title: "xBA and xTB (SLG)",
        description: "Simple KNN model that predicts the probability of a batted ball being a hit (xBA) or a single, double, triple, or home run (xTB) on predictos Launch Angle and Exit Velocity.",
        timeframe: "Fall 2024",
        image: "images/xBA_simple.png",
        pageUrl: "projects/xBATB.html"
    },
    {
        id: 9,
        title: "Arsenal+ Dashboard",
        description: "Arsenal+, Mix+, Match+ dashboard to evaluate induvial pitcher arsenals, overall arsenal leaderboards, induvidual pitch mix+ and match+ leaderboards, and an editor to create and adjust arsenals, allowing users to see how mix-and-match metrics change in real time",
        timeframe: "Summer 2025",
        image: "images/ArsenalExplorer.png",
        pageUrl: "projects/Arsenal.html"
    },
];

// DOM elements
const projectsGrid = document.getElementById('projectsGrid');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderProjects();
    setupEventListeners();
    setupSmoothScrolling();
});

// Render projects in the grid
function renderProjects() {
    projectsGrid.innerHTML = projects.map(project => `
        <a href="${project.pageUrl}" class="project-card">
            <div class="project-image" style="${project.image.includes('.') ? `background-image: url('${project.image}'); background-size: cover; background-position: center;` : ''}">
                ${project.image.includes('.') ? '' : project.image}
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                ${project.timeframe ? `<p class="project-timeframe">${project.timeframe}</p>` : ''}
            </div>
        </a>
    `).join('');
}

// Setup event listeners
function setupEventListeners() {
    // Mobile navigation toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(26, 32, 44, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(26, 32, 44, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.project-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add loading animation to project cards
function addLoadingAnimation() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// Initialize loading animation
document.addEventListener('DOMContentLoaded', addLoadingAnimation); 