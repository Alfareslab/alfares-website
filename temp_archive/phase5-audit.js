const fs = require('fs');

const files = [
  'en/index.html',
  'en/about-lab.html',
  'en/privacy-policy.html',
  'en/services/hdd-data-recovery.html',
  'en/services/ssd-nvme-data-recovery.html',
  'en/services/flash-sd-data-recovery.html',
  'en/services/external-hdd-data-recovery.html',
  'en/services/mac-data-recovery.html',
  'en/services/raid-nas-data-recovery.html',
  'en/services/dvr-nvr-data-recovery.html',
  'en/services/ransomware-data-recovery.html',
  'en/services/database-erp-recovery.html',
  'en/services/laptop-pc-data-recovery.html',
  'en/services/data-recovery-makkah.html',
  'en/services/data-recovery-saudi-arabia.html',
];

let ok = 0;
const issues = [];

files.forEach(f => {
  try {
    const c = fs.readFileSync(f, 'utf8');
    const hasCanon    = c.includes('rel="canonical"');
    const hasHreflang = c.includes('hreflang');
    const isEnglish   = c.includes('lang="en"');
    if (hasCanon && hasHreflang && isEnglish) {
      ok++;
      console.log('✅', f);
    } else {
      const missing = [];
      if (!hasCanon)    missing.push('canonical');
      if (!hasHreflang) missing.push('hreflang');
      if (!isEnglish)   missing.push('lang=en');
      issues.push(f + ' MISSING: ' + missing.join(', '));
      console.log('❌', f, '— MISSING:', missing.join(', '));
    }
  } catch (e) {
    issues.push(f + ' NOT FOUND');
    console.log('🚫', f, '— NOT FOUND');
  }
});

console.log('\n──────────────────────────');
console.log('PASS:', ok + '/' + files.length);
if (issues.length) {
  console.log('ISSUES:', issues.length);
}
