/**
 * Hero Slider - Al-Fares Center Website
 * Initializes and manages the 5-slide hero slider using Swiper.js
 */

let heroSwiper = null;

/**
 * Initialize Hero Slider
 */
function initHeroSlider() {
  // Wait for Swiper to be loaded
  if (typeof Swiper === 'undefined') {
    console.error('Swiper.js not loaded');
    return;
  }
  
  const swiperContainer = document.querySelector('.hero-swiper');
  
  if (!swiperContainer) {
    console.error('Hero slider container not found');
    return;
  }
  
  // Initialize Swiper
  heroSwiper = new Swiper('.hero-swiper', {
    // Slider settings
    loop: true,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true
    },
    speed: 800,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // Pagination dots
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '" aria-label="Go to slide ' + (index + 1) + '"></span>';
      },
    },
    
    // Keyboard control
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    
    // Accessibility
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      paginationBulletMessage: 'Go to slide {{index}}',
    },
    
    // Events
    on: {
      init: function () {
        console.log('✅ Hero slider initialized');
        updateSlideContent(this.activeIndex);
      },
      slideChange: function () {
        updateSlideContent(this.activeIndex);
      }
    }
  });
  
  // Listen for language changes
  window.addEventListener('languageChanged', () => {
    updateAllSlides();
  });
}

/**
 * Update slide content based on current language
 */
function updateSlideContent(slideIndex) {
  if (!window.AlfaresApp) return;
  
  const slides = window.AlfaresApp.getTranslation('hero.slides');
  if (!slides || !slides[slideIndex]) return;
  
  const slide = slides[slideIndex];
  const activeSlide = document.querySelector('.swiper-slide-active');
  
  if (!activeSlide) return;
  
  // Update title
  const title = activeSlide.querySelector('.slide-title');
  if (title && slide.title) {
    title.textContent = slide.title;
  }
  
  // Update description
  const description = activeSlide.querySelector('.slide-description');
  if (description && slide.description) {
    description.textContent = slide.description;
  }
  
  // Update CTA button
  const cta = activeSlide.querySelector('.slide-cta');
  if (cta && slide.cta) {
    cta.textContent = slide.cta;
    if (slide.link) {
      cta.href = slide.link;
    }
  }
}

/**
 * Update all slides content (called when language changes)
 */
function updateAllSlides() {
  if (!window.AlfaresApp || !heroSwiper) return;
  
  const slides = window.AlfaresApp.getTranslation('hero.slides');
  if (!slides) return;
  
  const swiperSlides = document.querySelectorAll('.swiper-slide');
  
  swiperSlides.forEach((slideElement, index) => {
    const slideData = slides[index];
    if (!slideData) return;
    
    // Update title
    const title = slideElement.querySelector('.slide-title');
    if (title && slideData.title) {
      title.textContent = slideData.title;
    }
    
    // Update description
    const description = slideElement.querySelector('.slide-description');
    if (description && slideData.description) {
      description.textContent = slideData.description;
    }
    
    // Update CTA button
    const cta = slideElement.querySelector('.slide-cta');
    if (cta && slideData.cta) {
      cta.textContent = slideData.cta;
      if (slideData.link) {
        cta.href = slideData.link;
      }
    }
  });
}

/**
 * Pause slider
 */
function pauseSlider() {
  if (heroSwiper && heroSwiper.autoplay) {
    heroSwiper.autoplay.stop();
  }
}

/**
 * Resume slider
 */
function resumeSlider() {
  if (heroSwiper && heroSwiper.autoplay) {
    heroSwiper.autoplay.start();
  }
}

/**
 * Go to specific slide
 */
function goToSlide(index) {
  if (heroSwiper) {
    heroSwiper.slideTo(index);
  }
}

/**
 * Destroy slider (cleanup)
 */
function destroySlider() {
  if (heroSwiper) {
    heroSwiper.destroy(true, true);
    heroSwiper = null;
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initHeroSlider);
} else {
  initHeroSlider();
}

// Export functions
window.HeroSlider = {
  init: initHeroSlider,
  pause: pauseSlider,
  resume: resumeSlider,
  goToSlide: goToSlide,
  destroy: destroySlider
};

