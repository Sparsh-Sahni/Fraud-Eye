const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    body.classList.add('dark-mode');
    themeToggle.textContent = '🌞';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    themeToggle.textContent = isDark ? '🌞' : '🌓';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            const items = entry.target.querySelectorAll('.feature-item, .metric-card, .vision-mission');
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, index * 200);
            });
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
    
    const items = section.querySelectorAll('.feature-item, .metric-card, .vision-mission');
    items.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; 
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            
            if ('scrollBehavior' in document.documentElement.style) {
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            } else {
                window.scrollTo(0, targetPosition);
            }
        }
    });
});

const headerText = document.querySelector('#home h1');
if (headerText) {
    headerText.style.backgroundImage = 'linear-gradient(to right, #ffffff, #e0e7ff, #ffffff)';
    headerText.style.backgroundSize = '200% auto';
    headerText.style.backgroundClip = 'text';
    headerText.style.textFillColor = 'transparent';
    headerText.style.animation = 'textShine 3s linear infinite';
}

const loginButton = document.querySelector('.login-button');
const loginModal = document.getElementById('loginModal');
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
});

loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) {
        loginModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && loginModal.style.display === 'flex') {
        loginModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});
