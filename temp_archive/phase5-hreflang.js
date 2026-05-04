const fs = require('fs');
const path = require('path');

const rootDir = __dirname;
const servicesDir = path.join(rootDir, 'services');

// List of pages to process for hreflang
const arabicPages = [
    'index.html',
    'about-lab.html',
    'privacy-policy.html',
    'services/hdd-data-recovery.html',
    'services/external-hdd-data-recovery.html',
    'services/ssd-nvme-data-recovery.html',
    'services/laptop-pc-data-recovery.html',
    'services/mac-data-recovery.html',
    'services/raid-nas-data-recovery.html',
    'services/flash-sd-data-recovery.html',
    'services/dvr-nvr-data-recovery.html',
    'services/ransomware-data-recovery.html',
    'services/database-erp-recovery.html',
    'services/data-recovery-makkah.html',
    'services/data-recovery-saudi-arabia.html'
];

function resolvePath(p) {
    if (fs.existsSync(path.join(rootDir, p))) return p;
    if (p === 'services/ssd-nvme-data-recovery.html' && fs.existsSync(path.join(rootDir, 'services/ssd-data-recovery.html'))) {
        return 'services/ssd-data-recovery.html';
    }
    if (p === 'services/flash-sd-data-recovery.html' && fs.existsSync(path.join(rootDir, 'services/flash-sd-recovery.html'))) {
        return 'services/flash-sd-recovery.html';
    }
    return p;
}

const resolvedArabicPages = arabicPages.map(resolvePath);

for (const relPath of resolvedArabicPages) {
    const fullPath = path.join(rootDir, relPath);
    if (!fs.existsSync(fullPath)) {
        console.error('File not found:', fullPath);
        continue;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Determine the English path
    let enRelPath = 'en/' + relPath;
    if (relPath === 'index.html') {
        enRelPath = 'en/';
    }

    // Prepare tags
    const arUrl = 'https://alfareslab.com/' + (relPath === 'index.html' ? '' : relPath);
    const enUrl = 'https://alfareslab.com/' + (relPath === 'index.html' ? 'en/' : enRelPath);

    const hreflangTags = `<!-- Canonical and Hreflang Tags -->
  <link rel="canonical" href="${arUrl}">
  <link rel="alternate" hreflang="ar" href="${arUrl}">
  <link rel="alternate" hreflang="en" href="${enUrl}">
  <link rel="alternate" hreflang="x-default" href="${arUrl}">\n  `;

    // Only inject if it doesn't already have hreflang tags
    if (!content.includes('hreflang="en"')) {
        // If placeholder exists
        if (content.includes('<!-- hreflang tags will be added in Plan 44 -->')) {
            content = content.replace('<!-- hreflang tags will be added in Plan 44 -->', hreflangTags);
            fs.writeFileSync(fullPath, content);
            console.log('Replaced placeholder in', relPath);
        } else if (content.includes('<!-- Open Graph -->')) {
            content = content.replace('<!-- Open Graph -->', hreflangTags + '<!-- Open Graph -->');
            fs.writeFileSync(fullPath, content);
            console.log('Inserted tags before Open Graph in', relPath);
        } else if (content.includes('<!-- Open Graph / Facebook -->')) {
            content = content.replace('<!-- Open Graph / Facebook -->', hreflangTags + '<!-- Open Graph / Facebook -->');
            fs.writeFileSync(fullPath, content);
            console.log('Inserted tags before Open Graph / Facebook in', relPath);
        } else {
            console.log('Could not find injection point for', relPath);
        }
    } else {
        console.log('Tags already exist in', relPath);
    }
}
