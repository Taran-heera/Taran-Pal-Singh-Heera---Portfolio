// ============================================
// TARAN'S PORTFOLIO - MAIN JAVASCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  initializeNavigation();
  initializeScrollAnimations();
  initializeNavLinks();
});

// ============================================
// NAVIGATION ACTIVE STATE
// ============================================
function initializeNavigation() {
  const currentPage = getCurrentPage();
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    link.classList.remove('active');
    
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
}

function getCurrentPage() {
  let page = window.location.pathname;
  
  if (page.includes('projects.html')) {
    return 'projects.html';
  } else if (page.includes('experience.html')) {
    return 'experience.html';
  } else if (page.includes('resume.html')) {
    return 'resume.html';
  } else if (page.includes('contact.html')) {
    return 'contact.html';
  }
  
  return 'index.html';
}

// ============================================
// SCROLL ANIMATIONS
// ============================================
function initializeScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all cards and items
  const elements = document.querySelectorAll(
    '.skill-card, .project-card, .experience-item, .education-item, .fade-in'
  );

  elements.forEach(element => {
    observer.observe(element);
  });
}

// ============================================
// SMOOTH NAVIGATION
// ============================================
function initializeNavLinks() {
  const navLinks = document.querySelectorAll('nav a[href*="#"]');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Only smooth scroll if on the same page
      if (href.startsWith('#') && !href.includes('.html')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// ============================================
// LAZY LOAD IMAGES
// ============================================
function lazyLoadImages() {
  const images = document.querySelectorAll('img[src]');

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.src;
        img.style.opacity = '1';
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
}

// ============================================
// INITIALIZE WHEN DOM IS READY
// ============================================
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', lazyLoadImages);
} else {
  lazyLoadImages();
}

// ============================================
// SMOOTH SCROLL ON PAGE LOAD
// ============================================
window.addEventListener('load', function() {
  // Scroll to section if anchor is in URL
  const anchor = window.location.hash;
  if (anchor) {
    const element = document.querySelector(anchor);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }, 500);
    }
  }
});

// ============================================
// MOBILE MENU TOGGLE (if needed)
// ============================================
function toggleMobileMenu() {
  const navMenu = document.querySelector('nav ul');
  if (navMenu) {
    navMenu.classList.toggle('active');
  }
}

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%c✨ TARAN PAL SINGH HEERA - PREMIUM PORTFOLIO ✨', 'color: #d4af37; font-size: 18px; font-weight: bold;');
console.log('%cAI & Machine Learning Engineer', 'color: #c0c0c0; font-size: 14px; font-weight: 600;');
console.log('%cGitHub: https://github.com/Taran-heera', 'color: #d4af37; font-weight: 600;');
console.log('%cLinkedIn: https://linkedin.com/in/taran-pal-singh-heera', 'color: #d4af37; font-weight: 600;');
console.log('%cEmail: taranpalsingh53@gmail.com', 'color: #d4af37; font-weight: 600;');
