/**
 * Main JavaScript - Al-Fares Center Website
 * Handles: Language switching, Theme switching, Navigation, and Core functionality
 */

// Constants
const WHATSAPP_MAIN = 'https://wa.me/966563747332';
const WHATSAPP_DATA_RECOVERY = 'https://wa.me/966507322542';
const WHATSAPP_COMPUTER_REPAIR = 'https://wa.me/966508595762';

// State
let currentLang = 'ar';
let currentTheme = 'light';
let translations = {};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  initializeApp();
});

/**
 * Initialize the application
 */
async function initializeApp() {
  // Load saved preferences
  loadPreferences();
  
  // Load language files
  await loadLanguage(currentLang);
  
  // Apply theme
  applyTheme(currentTheme);
  
  // Setup event listeners
  setupEventListeners();
  
  // Initialize components
  initializeNavigation();
  initializeScrollEffects();
  
  console.log('✅ Al-Fares Center website initialized');
}

/**
 * Load user preferences from localStorage
 */
function loadPreferences() {
  const savedLang = localStorage.getItem('alfares-lang');
  const savedTheme = localStorage.getItem('alfares-theme');
  
  if (savedLang && (savedLang === 'ar' || savedLang === 'en')) {
    currentLang = savedLang;
  }
  
  if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
    currentTheme = savedTheme;
  } else {
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      currentTheme = 'dark';
    }
  }
}

/**
 * Load language JSON file
 */
async function loadLanguage(lang) {
  try {
    const response = await fetch(`lang/${lang}.json`);
    if (!response.ok) throw new Error(`Failed to load ${lang}.json`);
    
    translations = await response.json();
    applyLanguage(lang);
    
    console.log(`✅ Language loaded: ${lang}`);
  } catch (error) {
    console.error('Error loading language:', error);
  }
}

/**
 * Apply language to the page
 */
function applyLanguage(lang) {
  currentLang = lang;
  
  // Update HTML attributes
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  // Update meta tags
  updateMetaTags();
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const value = getTranslation(key);
    
    if (value) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = value;
      } else {
        element.textContent = value;
      }
    }
  });
  
  // Update language toggle button
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.textContent = lang === 'ar' ? 'EN' : 'AR';
  }
  
  // Save preference
  localStorage.setItem('alfares-lang', lang);
  
  // Trigger custom event for other components
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

/**
 * Get translation by key (supports nested keys like "nav.home")
 */
function getTranslation(key) {
  const keys = key.split('.');
  let value = translations;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return null;
    }
  }
  
  return value;
}

/**
 * Update meta tags
 */
function updateMetaTags() {
  const title = getTranslation('meta.title');
  const description = getTranslation('meta.description');
  
  if (title) {
    document.title = title;
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
  }
  
  if (description) {
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
  }
}

/**
 * Apply theme
 */
function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  
  // Update theme toggle icon
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
  }
  
  // Save preference
  localStorage.setItem('alfares-theme', theme);
  
  console.log(`✅ Theme applied: ${theme}`);
}

/**
 * Toggle theme
 */
function toggleTheme() {
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  applyTheme(newTheme);
}

/**
 * Toggle language
 */
async function toggleLanguage() {
  const newLang = currentLang === 'ar' ? 'en' : 'ar';
  await loadLanguage(newLang);
}

/**
 * Setup event listeners
 */
function setupEventListeners() {
  // Theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }
  
  // Language toggle
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', toggleLanguage);
  }
  
  // Mobile menu toggle
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', navMenu.classList.contains('active'));
    });
    
    // Close menu when clicking on a link
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }
  
  // Scroll to top button
  const scrollTopBtn = document.getElementById('scroll-top');
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

/**
 * Initialize navigation (smooth scroll)
 */
function initializeNavigation() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      // Skip if href is just "#"
      if (href === '#') return;
      
      e.preventDefault();
      
      const target = document.querySelector(href);
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Initialize scroll effects
 */
function initializeScrollEffects() {
  // Show/hide scroll to top button
  const scrollTopBtn = document.getElementById('scroll-top');
  
  window.addEventListener('scroll', () => {
    if (scrollTopBtn) {
      if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
    
    // Add shadow to header on scroll
    const header = document.querySelector('.header');
    if (header) {
      if (window.pageYOffset > 10) {
        header.style.boxShadow = 'var(--shadow-lg)';
      } else {
        header.style.boxShadow = 'var(--shadow-md)';
      }
    }
  });
  
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all cards and sections
  document.querySelectorAll('.card, .service-card, .capability-card, .review-card, .process-step').forEach(el => {
    observer.observe(el);
  });
}

/**
 * Utility: Format phone number for WhatsApp
 */
function formatWhatsAppLink(number, message = '') {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${number}${message ? '?text=' + encodedMessage : ''}`;
}

/**
 * Utility: Open WhatsApp
 */
function openWhatsApp(type = 'main', message = '') {
  let link = WHATSAPP_MAIN;
  
  switch (type) {
    case 'data-recovery':
      link = WHATSAPP_DATA_RECOVERY;
      break;
    case 'computer-repair':
      link = WHATSAPP_COMPUTER_REPAIR;
      break;
    default:
      link = WHATSAPP_MAIN;
  }
  
  if (message) {
    link = formatWhatsAppLink(link.replace('https://wa.me/', ''), message);
  }
  
  window.open(link, '_blank');
}

// Export functions for use in other scripts
window.AlfaresApp = {
  getTranslation,
  toggleTheme,
  toggleLanguage,
  openWhatsApp,
  currentLang: () => currentLang,
  currentTheme: () => currentTheme
};

