const fs = require('fs');
const path = require('path');

const indexAr = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const langEn = JSON.parse(fs.readFileSync(path.join(__dirname, 'lang/en.json'), 'utf8'));

let indexEn = indexAr;

// 1. Replace html tag
indexEn = indexEn.replace('<html lang="ar" dir="rtl">', '<html lang="en" dir="ltr">');

// 2. Insert base tag
indexEn = indexEn.replace('<head>', '<head>\n  <base href="../">');

// 3. Translate SEO tags
indexEn = indexEn.replace(/<title>.*?<\/title>/, `<title>${langEn.meta.title}</title>`);
indexEn = indexEn.replace(/<meta name="title" content=".*?">/, `<meta name="title" content="${langEn.meta.title}">`);
indexEn = indexEn.replace(/<meta name="description" content=".*?">/, `<meta name="description" content="${langEn.meta.description}">`);
indexEn = indexEn.replace(/<meta name="keywords" content=".*?">/, `<meta name="keywords" content="${langEn.meta.keywords}">`);

indexEn = indexEn.replace(/<meta property="og:title" content=".*?">/, `<meta property="og:title" content="${langEn.meta.title}">`);
indexEn = indexEn.replace(/<meta property="og:description" content=".*?">/, `<meta property="og:description" content="${langEn.meta.description}">`);
indexEn = indexEn.replace(/<meta property="twitter:title" content=".*?">/, `<meta property="twitter:title" content="${langEn.meta.title}">`);
indexEn = indexEn.replace(/<meta property="twitter:description" content=".*?">/, `<meta property="twitter:description" content="${langEn.meta.description}">`);

// Replace hreflang comments if they exist
indexEn = indexEn.replace('<!-- hreflang tags will be added in Plan 44 -->', `<!-- Canonical and Hreflang Tags -->
  <link rel="canonical" href="https://alfareslab.com/en/">
  <link rel="alternate" hreflang="ar" href="https://alfareslab.com/">
  <link rel="alternate" hreflang="en" href="https://alfareslab.com/en/">
  <link rel="alternate" hreflang="x-default" href="https://alfareslab.com/">`);

// Make sure canonical tag points to /en/ if we didn't replace it above
if (indexEn.includes('<link rel="canonical" href="https://alfareslab.com/">')) {
    indexEn = indexEn.replace('<link rel="canonical" href="https://alfareslab.com/">', '<link rel="canonical" href="https://alfareslab.com/en/">');
}

// Write file
fs.writeFileSync(path.join(__dirname, 'en/index.html'), indexEn);
console.log('en/index.html generated successfully.');
