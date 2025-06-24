// Greeting rotation
const greetings = ['Hello!', 'নমস্কার!', 'नमस्ते!', 'Hola!', 'Bonjour!'];
let currentIndex = 0;
const greetingElement = document.getElementById('greeting');

function rotateGreeting() {
  greetingElement.style.opacity = '0';
  setTimeout(() => {
    currentIndex = (currentIndex + 1) % greetings.length;
    greetingElement.textContent = greetings[currentIndex];
    greetingElement.style.opacity = '1';
  }, 300);
}

// Rotate greeting every 3 seconds
setInterval(rotateGreeting, 1750);

// Navigation scroll effect
const nav = document.getElementById('nav');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollTop > 100) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }

  lastScrollTop = scrollTop;
});

// Smooth scrolling for navigation links
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

// Scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
  observer.observe(el);
});

// Parallax effect for floating shapes
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const shapes = document.querySelectorAll('.shape');
  
  shapes.forEach((shape, index) => {
    const speed = (index + 1) * 0.5;
    shape.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Easter egg functionality
let clickCount = 0;
const easterEgg = document.getElementById('easterEgg');

greetingElement.addEventListener('click', () => {
  clickCount++;
  if (clickCount >= 5) {
    easterEgg.classList.add('show');
    setTimeout(() => {
      easterEgg.classList.remove('show');
      clickCount = 0;
    }, 3000);
  }
});

// Close easter egg when clicking outside
easterEgg.addEventListener('click', (e) => {
  if (e.target === easterEgg) {
    easterEgg.classList.remove('show');
    clickCount = 0;
  }
});

// Add loading animation
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});

// Cursor trail effect (optional enhancement)
let mouseX = 0, mouseY = 0;
let trail = [];

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

// Add some interactive hover effects
document.querySelectorAll('.experience-card, .project-card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.style.transform = 'translateY(-8px) scale(1.02)';
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'translateY(0) scale(1)';
  });
});
