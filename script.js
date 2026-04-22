//Following are the codes for toggling between Light and dark modes.
const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    body.classList.add("dark");
    if (toggleBtn) toggleBtn.textContent = "☀️";
}

if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark");
        const isDark = body.classList.contains("dark");
        toggleBtn.textContent = isDark ? "☀️" : "🌙";
        localStorage.setItem("theme", isDark ? "dark" : "light");
    });
}
//Following are the codes for Particle Animation for Home page.
const canvas = document.getElementById('hero-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];

    function initParticles() {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
        particles = [];
        for (let i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 2 + 1,
                speedX: Math.random() * 0.4 - 0.2,
                speedY: Math.random() * 0.4 - 0.2
            });
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = body.classList.contains('dark') ? '#4da3ff' : '#007BFF';
        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
            if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();
        });
        requestAnimationFrame(animate);
    }

    window.addEventListener('resize', initParticles);
    initParticles();
    animate();
}






const myProjects = [
    {
        title: "Vesper's Ledger",
        tech: "[Java | JavaFX | MySQL | System Design]",
        desc: "Full-stack event and task management system with CRUD operations and structured data handling.",
        link: "https://github.com/takshsharma-online",
        icon: "fa-vault"
    },
    {
        title: "Portfolio Website",
        tech: "[HTML | CSS | JS | Vercel]",
        desc: "A personal portfolio showcasing my technical skills and progress in building real-world applications.",
        link: "https://github.com/takshsharma-online/-personal-portfolio",
        icon: "fa-code"
    }
    //Will add more projects here.
];

let currentProjectIndex = 0;
const showcaseContainer = document.getElementById('project-showcase');

function updateProjectShowcase() {
    if (!showcaseContainer) return;

    // Start fade out
    showcaseContainer.classList.add('fade-out');

    setTimeout(() => {
        const project = myProjects[currentProjectIndex];

        // Inject the new HTML
        showcaseContainer.innerHTML = `
            <div class="project-header">
                <i class="fa-solid ${project.icon} project-icon"></i>
                <div>
                    <h3>${project.title}</h3>
                    <span class="tech-tag">${project.tech}</span>
                    <p>${project.desc}</p>
                    <a href="${project.link}" target="_blank" style="text-decoration:none; color:var(--primary-blue); font-size:0.9rem;">View on GitHub</a>
                </div>
            </div>
        `;

        // Remove fade out / trigger fade in
        showcaseContainer.classList.remove('fade-out');
        showcaseContainer.classList.add('fade-in');

        // Update index for next time
        currentProjectIndex = (currentProjectIndex + 1) % myProjects.length;
    }, 500); // 500ms matches the CSS transition time
}

// Start the cycle
if (showcaseContainer) {
    updateProjectShowcase(); // Run once immediately
    setInterval(updateProjectShowcase, 5000); // Switch every 5 seconds
}
