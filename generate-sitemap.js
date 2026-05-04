const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, 'sitemap.xml');

const pages = [
  { ar: '', en: 'en/', freq: 'weekly', prio: '1.0' },
  { ar: 'services/hdd-data-recovery.html', en: 'en/services/hdd-data-recovery.html', freq: 'monthly', prio: '0.8' },
  { ar: 'services/external-hdd-data-recovery.html', en: 'en/services/external-hdd-data-recovery.html', freq: 'monthly', prio: '0.8' },
  { ar: 'services/ssd-nvme-data-recovery.html', en: 'en/services/ssd-nvme-data-recovery.html', freq: 'monthly', prio: '0.8' },
  { ar: 'services/laptop-pc-data-recovery.html', en: 'en/services/laptop-pc-data-recovery.html', freq: 'monthly', prio: '0.8' },
  { ar: 'services/mac-data-recovery.html', en: 'en/services/mac-data-recovery.html', freq: 'monthly', prio: '0.8' },
  { ar: 'services/raid-nas-data-recovery.html', en: 'en/services/raid-nas-data-recovery.html', freq: 'monthly', prio: '0.8' },
  { ar: 'services/flash-sd-data-recovery.html', en: 'en/services/flash-sd-data-recovery.html', freq: 'monthly', prio: '0.8' },
  { ar: 'services/dvr-nvr-data-recovery.html', en: 'en/services/dvr-nvr-data-recovery.html', freq: 'monthly', prio: '0.8' },
  { ar: 'services/ransomware-data-recovery.html', en: 'en/services/ransomware-data-recovery.html', freq: 'monthly', prio: '0.8' },
  { ar: 'services/database-erp-recovery.html', en: 'en/services/database-erp-recovery.html', freq: 'monthly', prio: '0.8' },
  { ar: 'services/data-recovery-makkah.html', en: 'en/services/data-recovery-makkah.html', freq: 'monthly', prio: '0.8' },
  { ar: 'services/data-recovery-saudi-arabia.html', en: 'en/services/data-recovery-saudi-arabia.html', freq: 'monthly', prio: '0.8' },
  { ar: 'privacy-policy.html', en: 'en/privacy-policy.html', freq: 'yearly', prio: '0.5' },
  { ar: 'about-lab.html', en: 'en/about-lab.html', freq: 'yearly', prio: '0.7' }
];

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
`;

for (const p of pages) {
  // Arabic entry
  xml += `
  <url>
    <loc>https://alfareslab.com/${p.ar}</loc>
    <xhtml:link rel="alternate" hreflang="ar" href="https://alfareslab.com/${p.ar}"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://alfareslab.com/${p.en}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://alfareslab.com/${p.ar}"/>
    <lastmod>2026-05-03</lastmod>
    <changefreq>${p.freq}</changefreq>
    <priority>${p.prio}</priority>
  </url>`;
  
  // English entry
  xml += `
  <url>
    <loc>https://alfareslab.com/${p.en}</loc>
    <xhtml:link rel="alternate" hreflang="ar" href="https://alfareslab.com/${p.ar}"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://alfareslab.com/${p.en}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="https://alfareslab.com/${p.ar}"/>
    <lastmod>2026-05-03</lastmod>
    <changefreq>${p.freq}</changefreq>
    <priority>${p.prio}</priority>
  </url>`;
}

xml += `\n</urlset>`;

fs.writeFileSync(sitemapPath, xml);
console.log('sitemap.xml generated successfully.');
