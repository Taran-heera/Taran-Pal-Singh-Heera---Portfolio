// ============================================
// TARAN'S PORTFOLIO - MAIN JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  initializeTabNavigation();
  initializeAnimations();
});

// ============================================
// TAB-BASED NAVIGATION SYSTEM
// ============================================
function initializeTabNavigation() {
  const navLinks = document.querySelectorAll('nav a[data-tab]');
  const sections = document.querySelectorAll('section[data-tab]');

  // Set home as active on page load
  const homeSection = document.querySelector('section[data-tab="home"]');
  if (homeSection) {
    homeSection.style.display = 'block';
  }

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const tabName = this.getAttribute('data-tab');
      
      // Hide all sections
      sections.forEach(section => {
        section.style.display = 'none';
      });

      // Show selected section
      const activeSection = document.querySelector(`section[data-tab="${tabName}"]`);
      if (activeSection) {
        activeSection.style.display = 'block';
        // Scroll to top
        window.scrollTo(0, 0);
      }

      // Update active nav link
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Set home as active on load
  document.querySelector('nav a[data-tab="home"]')?.classList.add('active');
}

// ============================================
// ANIMATIONS & INTERACTIONS
// ============================================
function initializeAnimations() {
  // Add animation triggers for cards
  const cards = document.querySelectorAll(
    '.skill-category, .project-card, .achievement-card, .experience-card, .drive-card'
  );

  cards.forEach((card, index) => {
    card.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.4s cubic-bezier(0.23, 1, 0.320, 1)';
    });
  });

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  cards.forEach(card => {
    observer.observe(card);
  });
}

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%c✨ TARAN PAL SINGH HEERA - PREMIUM PORTFOLIO ✨', 'color: #d4af37; font-size: 18px; font-weight: bold;');
console.log('%cAI & Machine Learning Engineer', 'color: #c0c0c0; font-size: 14px; font-weight: 600;');
console.log('%cGitHub: https://github.com/Taran-heera', 'color: #d4af37; font-weight: 600;');
console.log('%cLinkedIn: https://linkedin.com/in/taran-pal-singh-heera', 'color: #d4af37; font-weight: 600;');
console.log('%cEmail: taranpalsingh53@gmail.com', 'color: #d4af37; font-weight: 600;');
