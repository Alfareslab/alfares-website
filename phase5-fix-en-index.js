/**
 * phase5-fix-en-index.js
 * Fixes en/index.html to be a proper English page:
 *  - Updates all nav service links to point to en/services/
 *  - Updates about-lab and privacy-policy links to en/ versions
 *  - Replaces Arabic fallback text with English for key elements
 *  - Injects a lang-initializer script to force lang=en on load
 *  - Sets lang-toggle button label to "AR"
 */

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'en/index.html');
let html = fs.readFileSync(filePath, 'utf8');

// ── 1. Fix nav service links (services/ → en/services/) ───────────────────
html = html.replace(/href="services\//g, 'href="en/services/');

// ── 2. Fix standalone page links ──────────────────────────────────────────
html = html.replace(/href="about-lab\.html"/g, 'href="en/about-lab.html"');
html = html.replace(/href="privacy-policy\.html"/g, 'href="en/privacy-policy.html"');

// ── 3. Fix brand / anchor links that should stay internal (home anchors fine) ─
// No change needed for #home, #about, etc.

// ── 4. Replace Arabic fallback text in critical elements ──────────────────
const replacements = [
  // Brand
  [/(<a[^>]*data-i18n="brand\.full"[^>]*>)[^<]*/g,   '$1Al-Fares Center for Computer Repair and Data Recovery'],
  [/(<a[^>]*data-i18n="brand\.short"[^>]*>)[^<]*/g,  '$1Al-Fares Center'],

  // Nav items
  [/(<a[^>]*data-i18n="nav\.home"[^>]*>)[^<]*/g,         '$1Home'],
  [/(<a[^>]*data-i18n="nav\.about"[^>]*>)[^<]*/g,        '$1About Us'],
  [/(<a[^>]*data-i18n="nav\.services"[^>]*>)[^<]*/g,     '$1Our Services ▼'],
  [/(<a[^>]*data-i18n="nav\.capabilities"[^>]*>)[^<]*/g, '$1Our Capabilities'],
  [/(<a[^>]*data-i18n="nav\.process"[^>]*>)[^<]*/g,      '$1How We Work'],
  [/(<a[^>]*data-i18n="nav\.reviews"[^>]*>)[^<]*/g,      '$1Client Reviews'],
  [/(<a[^>]*data-i18n="nav\.contact"[^>]*>)[^<]*/g,      '$1Contact Us'],

  // Dropdown service links
  [/(<a[^>]*data-i18n="nav\.services\.hdd"[^>]*>)[^<]*/g,         '$1Internal HDD Data Recovery'],
  [/(<a[^>]*data-i18n="nav\.services\.externalHdd"[^>]*>)[^<]*/g, '$1External HDD Data Recovery'],
  [/(<a[^>]*data-i18n="nav\.services\.ssd"[^>]*>)[^<]*/g,         '$1SSD & NVMe Data Recovery'],
  [/(<a[^>]*data-i18n="nav\.services\.pc"[^>]*>)[^<]*/g,          '$1Laptop & PC Data Recovery'],
  [/(<a[^>]*data-i18n="nav\.services\.mac"[^>]*>)[^<]*/g,         '$1Mac Data Recovery'],
  [/(<a[^>]*data-i18n="nav\.services\.raid"[^>]*>)[^<]*/g,        '$1RAID & NAS Data Recovery'],
  [/(<a[^>]*data-i18n="nav\.services\.flash"[^>]*>)[^<]*/g,       '$1Flash & Memory Card Recovery'],
  [/(<a[^>]*data-i18n="nav\.services\.dvr"[^>]*>)[^<]*/g,         '$1DVR & CCTV Data Recovery'],
  [/(<a[^>]*data-i18n="nav\.services\.ransomware"[^>]*>)[^<]*/g,  '$1Ransomware Data Recovery'],
  [/(<a[^>]*data-i18n="nav\.services\.database"[^>]*>)[^<]*/g,    '$1Database & ERP Recovery'],
  [/(<a[^>]*data-i18n="nav\.services\.makkah"[^>]*>)[^<]*/g,      '$1Data Recovery Makkah'],
  [/(<a[^>]*data-i18n="nav\.services\.saudi"[^>]*>)[^<]*/g,       '$1Data Recovery Saudi Arabia'],

  // Trust links (about lab / privacy)
  [/(<a[^>]*data-i18n="nav\.trust\.aboutLab"[^>]*>)[^<]*/g, '$1About Al-Fares Lab & Recovery Technology'],
  [/(<a[^>]*data-i18n="nav\.trust\.privacy"[^>]*>)[^<]*/g,  '$1Privacy & Confidentiality Policy'],

  // Footer headings & text
  [/(<h3[^>]*data-i18n="brand\.full"[^>]*>)[^<]*/g,             '$1Al-Fares Center for Computer Repair and Data Recovery'],
  [/(<p[^>]*data-i18n="footer\.description"[^>]*>)[^<]*/g,      '$1Your dedicated specialist for computer repair and data recovery in Jeddah'],
  [/(<h3[^>]*data-i18n="footer\.quickLinks"[^>]*>)[^<]*/g,      '$1Quick Links'],
  [/(<h3[^>]*data-i18n="footer\.servicesAndTrust"[^>]*>)[^<]*/g,'$1Services & Policies'],
  [/(<h3[^>]*data-i18n="footer\.followUs"[^>]*>)[^<]*/g,        '$1Follow Us'],
  [/(<p[^>]*data-i18n="footer\.copyright"[^>]*>)[^<]*/g,        '$1© 2025 Al-Fares Center for Computer Repair. All rights reserved.'],
  [/(<p[^>]*data-i18n="footer\.development"[^>]*>)[^<]*/g,      '$1Website developed by Al-Fares Technical Team - Version v1.2.0'],
];

replacements.forEach(([pattern, replacement]) => {
  html = html.replace(pattern, replacement);
});

// ── 5. Change lang-toggle button label from "EN" to "AR" ─────────────────
html = html.replace(
  /(<button[^>]*id="lang-toggle"[^>]*>)\s*EN\s*/,
  '$1AR'
);

// ── 6. Inject lang initializer right before </head> ───────────────────────
const langInitScript = `
  <!-- Force English language on this page -->
  <script>
    (function() {
      localStorage.setItem('lang', 'en');
    })();
  </script>
`;
html = html.replace('</head>', langInitScript + '</head>');

// ── 7. Write output ───────────────────────────────────────────────────────
fs.writeFileSync(filePath, html, 'utf8');
console.log('✅  en/index.html fixed successfully.');
