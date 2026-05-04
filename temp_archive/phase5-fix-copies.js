const fs = require('fs');

const fixes = [
  {
    file: 'en/services/flash-sd-data-recovery.html',
    canonical: 'https://alfareslab.com/en/services/flash-sd-data-recovery.html',
    hreflangAr: 'https://alfareslab.com/services/flash-sd-data-recovery.html',
    hreflangEn: 'https://alfareslab.com/en/services/flash-sd-data-recovery.html',
  },
  {
    file: 'en/services/ssd-nvme-data-recovery.html',
    canonical: 'https://alfareslab.com/en/services/ssd-nvme-data-recovery.html',
    hreflangAr: 'https://alfareslab.com/services/ssd-nvme-data-recovery.html',
    hreflangEn: 'https://alfareslab.com/en/services/ssd-nvme-data-recovery.html',
  },
];

fixes.forEach(({ file, canonical, hreflangAr, hreflangEn }) => {
  let c = fs.readFileSync(file, 'utf8');

  // Fix canonical
  c = c.replace(/<link rel="canonical" href="[^"]+">/, `<link rel="canonical" href="${canonical}">`);

  // Fix hreflang ar
  c = c.replace(/<link rel="alternate" hreflang="ar" href="[^"]+">/, `<link rel="alternate" hreflang="ar" href="${hreflangAr}">`);

  // Fix hreflang en
  c = c.replace(/<link rel="alternate" hreflang="en" href="[^"]+">/, `<link rel="alternate" hreflang="en" href="${hreflangEn}">`);

  // Fix hreflang x-default
  c = c.replace(/<link rel="alternate" hreflang="x-default" href="[^"]+">/, `<link rel="alternate" hreflang="x-default" href="${hreflangAr}">`);

  fs.writeFileSync(file, c, 'utf8');
  console.log('Fixed canonical + hreflang:', file);
});
