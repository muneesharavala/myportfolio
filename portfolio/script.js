// Scroll fade-in & navbar scroll class
window.addEventListener('scroll', () => {
  const elements = document.querySelectorAll('.fade-in');
  const triggerBottom = window.innerHeight * 0.85;

  elements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < triggerBottom) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });

  // Navbar scroll effect (sticky or changing style on scroll)
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // Show/hide Back to Top button based on scroll position
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  }

  // Highlight the active nav link based on scroll position
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.navbar .nav-link');

  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop - sectionHeight * 0.25 && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    if (link.getAttribute('href').substring(1) === currentSection) {
      link.classList.add('active'); // Add active class to the active section link
    } else {
      link.classList.remove('active'); // Remove active class from inactive links
    }
  });
});

// Light/Dark mode toggle with localStorage persistence
const toggleBtn = document.getElementById('toggle-theme');
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.body.classList.add('light');
    if (toggleBtn) toggleBtn.textContent = '🌞'; // Light mode icon
  }
});

// Theme toggle button click handler
if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    const isLight = document.body.classList.contains('light');
    toggleBtn.textContent = isLight ? '🌞' : '🌙'; // Change icon based on theme
    localStorage.setItem('theme', isLight ? 'light' : 'dark'); // Save to localStorage
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Back to Top button click handler
if (backToTopBtn) {
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
