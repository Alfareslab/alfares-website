/**
 * TikTok Section - Al-Fares Center Website
 * Handles TikTok video embeds with lazy loading
 */

// TikTok video URLs
const tiktokVideos = [
  {
    url: 'https://www.tiktok.com/@alfares.datarecovry/video/7526155014558027026',
    id: '7526155014558027026'
  },
  {
    url: 'https://www.tiktok.com/@alfares.datarecovry/video/7390827463851486466',
    id: '7390827463851486466'
  },
  {
    url: 'https://www.tiktok.com/@alfares.datarecovry/video/7390827463851486467',
    id: '7390827463851486467'
  }
];

/**
 * Initialize TikTok Section
 */
function initTikTok() {
  const tiktokGrid = document.getElementById('tiktok-grid');
  if (!tiktokGrid) {
    console.warn('TikTok grid container not found');
    return;
  }
  
  // Create embed containers
  tiktokVideos.forEach((video, index) => {
    const container = createEmbedContainer(video, index);
    tiktokGrid.appendChild(container);
  });
  
  // Load TikTok embed script
  loadTikTokScript();
  
  // Setup lazy loading
  setupLazyLoading();
  
  console.log('✅ TikTok section initialized');
}

/**
 * Create embed container
 */
function createEmbedContainer(video, index) {
  const container = document.createElement('div');
  container.className = 'tiktok-embed';
  container.setAttribute('data-video-id', video.id);
  container.setAttribute('data-lazy', 'true');
  
  // Create placeholder
  const placeholder = document.createElement('div');
  placeholder.className = 'skeleton skeleton-card';
  placeholder.style.minHeight = '500px';
  
  container.appendChild(placeholder);
  
  return container;
}

/**
 * Load TikTok embed script
 */
function loadTikTokScript() {
  // Check if script already exists
  if (document.querySelector('script[src*="tiktok.com/embed"]')) {
    return;
  }
  
  const script = document.createElement('script');
  script.src = 'https://www.tiktok.com/embed.js';
  script.async = true;
  script.onload = () => {
    console.log('✅ TikTok embed script loaded');
  };
  script.onerror = () => {
    console.error('❌ Failed to load TikTok embed script');
    showEmbedError();
  };
  
  document.body.appendChild(script);
}

/**
 * Setup lazy loading for TikTok embeds
 */
function setupLazyLoading() {
  const observerOptions = {
    root: null,
    rootMargin: '200px',
    threshold: 0.01
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const container = entry.target;
        const videoId = container.getAttribute('data-video-id');
        
        if (container.getAttribute('data-lazy') === 'true') {
          loadTikTokEmbed(container, videoId);
          container.setAttribute('data-lazy', 'false');
          observer.unobserve(container);
        }
      }
    });
  }, observerOptions);
  
  // Observe all TikTok containers
  document.querySelectorAll('.tiktok-embed[data-lazy="true"]').forEach(container => {
    observer.observe(container);
  });
}

/**
 * Load TikTok embed
 */
function loadTikTokEmbed(container, videoId) {
  // Remove placeholder
  container.innerHTML = '';
  
  // Create blockquote element (TikTok embed format)
  const blockquote = document.createElement('blockquote');
  blockquote.className = 'tiktok-embed';
  blockquote.setAttribute('cite', `https://www.tiktok.com/@alfares.datarecovry/video/${videoId}`);
  blockquote.setAttribute('data-video-id', videoId);
  blockquote.style.maxWidth = '605px';
  blockquote.style.minWidth = '325px';
  
  // Create section element
  const section = document.createElement('section');
  
  // Create link
  const link = document.createElement('a');
  link.target = '_blank';
  link.title = '@alfares.datarecovry';
  link.href = 'https://www.tiktok.com/@alfares.datarecovry';
  link.textContent = '@alfares.datarecovry';
  
  section.appendChild(link);
  blockquote.appendChild(section);
  container.appendChild(blockquote);
  
  // Trigger TikTok embed script
  if (window.tiktokEmbed && typeof window.tiktokEmbed.lib === 'object') {
    window.tiktokEmbed.lib.render(blockquote);
  }
}

/**
 * Show error message if embeds fail to load
 */
function showEmbedError() {
  document.querySelectorAll('.tiktok-embed').forEach(container => {
    if (container.getAttribute('data-lazy') === 'true') {
      container.innerHTML = `
        <div class="alert alert-warning" style="min-height: 500px; display: flex; align-items: center; justify-content: center; text-align: center;">
          <div>
            <p>Unable to load TikTok videos</p>
            <a href="https://www.tiktok.com/@alfares.datarecovry" target="_blank" class="btn btn-primary" style="margin-top: 1rem;">
              Visit our TikTok
            </a>
          </div>
        </div>
      `;
    }
  });
}

/**
 * Refresh embeds (useful after language change)
 */
function refreshEmbeds() {
  if (window.tiktokEmbed && typeof window.tiktokEmbed.lib === 'object') {
    document.querySelectorAll('.tiktok-embed blockquote').forEach(blockquote => {
      window.tiktokEmbed.lib.render(blockquote);
    });
  }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTikTok);
} else {
  initTikTok();
}

// Export
window.TikTokSection = {
  init: initTikTok,
  refresh: refreshEmbeds
};

