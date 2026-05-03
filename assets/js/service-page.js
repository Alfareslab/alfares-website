/**
 * Service Page JavaScript - Al-Fares Center Website
 * Handles localized service page content visibility and page-level metadata.
 */

function getServicePageMeta() {
  const metaElement = document.getElementById('service-page-meta');
  if (!metaElement) return null;

  try {
    return JSON.parse(metaElement.textContent);
  } catch (error) {
    console.error('Failed to parse service page metadata:', error);
    return null;
  }
}

function updateServicePageMeta(lang) {
  const meta = getServicePageMeta();
  if (!meta || !meta[lang]) return;

  const activeMeta = meta[lang];
  const heading = document.getElementById('service-page-heading');

  if (heading && activeMeta.heading) {
    heading.textContent = activeMeta.heading;
  }

  document.title = activeMeta.title;
  document.querySelector('meta[name="title"]')?.setAttribute('content', activeMeta.title);
  document.querySelector('meta[name="description"]')?.setAttribute('content', activeMeta.description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', activeMeta.title);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', activeMeta.description);
  document.querySelector('meta[property="twitter:title"]')?.setAttribute('content', activeMeta.title);
  document.querySelector('meta[property="twitter:description"]')?.setAttribute('content', activeMeta.description);
}

function updateServicePageContent(lang) {
  document.querySelectorAll('[data-page-lang]').forEach((section) => {
    section.hidden = section.getAttribute('data-page-lang') !== lang;
  });
}

function applyServicePageLanguage(lang) {
  const normalizedLang = lang === 'en' ? 'en' : 'ar';
  updateServicePageContent(normalizedLang);
  updateServicePageMeta(normalizedLang);
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('alfares-lang') || 'ar';
  applyServicePageLanguage(savedLang);
});

window.addEventListener('languageChanged', (event) => {
  applyServicePageLanguage(event.detail.lang);
});
