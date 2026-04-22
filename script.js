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

