$content = Get-Content -Path "index.html" -Raw -Encoding UTF8

# 1. Update Brand (Logo)
$brandOld = '<a href="#" class="navbar-brand" data-i18n="brand.full">مركز الفارس لصيانة الكمبيوتر واستعادة البيانات</a>'
$brandNew = '<a href="#" class="navbar-brand">
        <img src="assets/images/logo-light.png" alt="مركز الفارس" class="logo-img logo-light">
        <img src="assets/images/logo-dark.png" alt="مركز الفارس" class="logo-img logo-dark">
      </a>'
$content = $content.Replace($brandOld, $brandNew)

# 2. Update Contact Us Button
$contactOld = '<li><a href="#contact" data-i18n="nav.contact">تواصل معنا</a></li>'
$contactNew = '<li><a href="#contact" class="btn btn-primary nav-cta" data-i18n="nav.contact">تواصل معنا</a></li>'
$content = $content.Replace($contactOld, $contactNew)

# 3. Update Toggles
$themeToggleOld = '<button id="theme-toggle" class="theme-toggle" aria-label="Toggle theme">🌙</button>'
$themeToggleNew = '<button id="theme-toggle" class="icon-btn" aria-label="Toggle theme">🌙</button>'
$content = $content.Replace($themeToggleOld, $themeToggleNew)

$langToggleOld = '<button id="lang-toggle" class="lang-toggle" aria-label="Toggle language">EN</button>'
$langToggleNew = '<button id="lang-toggle" class="icon-btn" aria-label="Toggle language">EN</button>'
$content = $content.Replace($langToggleOld, $langToggleNew)

# 4. Remove Service Directory (HTML only, no regex for simplicity if exact match)
$dirOld = '<div class="service-directory">
          <h3>دليل صفحات الخدمات</h3>
          <ul class="service-details">
            <li><a href="services/hdd-data-recovery.html">استعادة بيانات الهارد ديسك</a></li>
            <li><a href="services/external-hdd-data-recovery.html">استعادة بيانات الهارد الخارجي</a></li>
            <li><a href="services/ssd-nvme-data-recovery.html">استعادة بيانات SSD و NVMe</a></li>
            <li><a href="services/raid-nas-data-recovery.html">استعادة بيانات RAID و NAS</a></li>
            <li><a href="services/flash-sd-data-recovery.html">استعادة بيانات الفلاش وكروت الذاكرة</a></li>
            <li><a href="services/dvr-nvr-data-recovery.html">استعادة بيانات DVR و NVR</a></li>
            <li><a href="services/laptop-pc-data-recovery.html">استعادة بيانات الكمبيوتر واللابتوب</a></li>
            <li><a href="services/mac-data-recovery.html">استعادة بيانات أجهزة Mac</a></li>
            <li><a href="services/ransomware-data-recovery.html">استرجاع بيانات فيروس الفدية</a></li>
            <li><a href="services/database-erp-recovery.html">استعادة قواعد البيانات وأنظمة ERP</a></li>
            <li><a href="services/data-recovery-makkah.html">استعادة البيانات لعملاء مكة</a></li>
            <li><a href="services/data-recovery-saudi-arabia.html">استرجاع البيانات في السعودية</a></li>
            <li><a href="about-lab.html">معمل الفارس وتقنيات الاستعادة</a></li>
            <li><a href="privacy-policy.html">سياسة السرية والخصوصية</a></li>
          </ul>
        </div>'
$content = $content.Replace($dirOld, "")

# 5. Restructure Footer (This is a big block, I'll use a more surgical approach if Replace fails)
# For now, I'll try to replace the whole footer container content

[void]($content -match '(?s)<footer class="footer">.*?<div class="container">(.*?)</div>.*?</footer>')
$footerInnerOld = $matches[1]

$footerInnerNew = '
      <div class="footer-content">
        <!-- Column 1: Brand & Social -->
        <div class="footer-section">
          <div class="footer-brand">
            <img src="assets/images/logo-light.png" alt="مركز الفارس" class="logo-img logo-light" style="height: 50px; margin-bottom: 1rem;">
            <img src="assets/images/logo-dark.png" alt="مركز الفارس" class="logo-img logo-dark" style="height: 50px; margin-bottom: 1rem;">
          </div>
          <p data-i18n="footer.description">مركزكم المتخصص في صيانة الكمبيوتر واستعادة البيانات في جدة</p>
          <div class="footer-social" style="margin-top: 1.5rem;">
            <a href="https://snapchat.com/add/alfaresrecovery" target="_blank" rel="noopener" class="social-link" aria-label="Snapchat">👻</a>
            <a href="https://tiktok.com/@alfares.datarecovry" target="_blank" rel="noopener" class="social-link" aria-label="TikTok">🎵</a>
            <a href="https://instagram.com/fares.datarecovery" target="_blank" rel="noopener" class="social-link" aria-label="Instagram">📷</a>
            <a href="https://facebook.com/615639735110001" target="_blank" rel="noopener" class="social-link" aria-label="Facebook">📘</a>
          </div>
        </div>
        
        <!-- Column 2: Personal Devices -->
        <div class="footer-section">
          <h3 data-i18n="footer.personalDevices">أجهزة شخصية</h3>
          <ul class="footer-links">
            <li><a href="services/hdd-data-recovery.html" data-i18n="nav.services.hdd">استعادة هارد ديسك داخلي</a></li>
            <li><a href="services/external-hdd-data-recovery.html" data-i18n="nav.services.externalHdd">استعادة هارد خارجي</a></li>
            <li><a href="services/ssd-nvme-data-recovery.html" data-i18n="nav.services.ssd">استعادة SSD و NVMe</a></li>
            <li><a href="services/laptop-pc-data-recovery.html" data-i18n="nav.services.pc">استعادة بيانات لابتوب</a></li>
            <li><a href="services/mac-data-recovery.html" data-i18n="nav.services.mac">استعادة بيانات ماك</a></li>
            <li><a href="services/flash-sd-data-recovery.html" data-i18n="nav.services.flash">استعادة فلاش و SD</a></li>
          </ul>
        </div>
        
        <!-- Column 3: Business & Servers -->
        <div class="footer-section">
          <h3 data-i18n="footer.businessServers">أعمال وسيرفرات</h3>
          <ul class="footer-links">
            <li><a href="services/raid-nas-data-recovery.html" data-i18n="nav.services.raid">استعادة RAID و NAS</a></li>
            <li><a href="services/dvr-nvr-data-recovery.html" data-i18n="nav.services.dvr">استعادة كاميرات مراقبة</a></li>
            <li><a href="services/ransomware-data-recovery.html" data-i18n="nav.services.ransomware">استرجاع فيروس الفدية</a></li>
            <li><a href="services/database-erp-recovery.html" data-i18n="nav.services.database">استعادة قواعد بيانات</a></li>
          </ul>
        </div>
        
        <!-- Column 4: Info & Regional -->
        <div class="footer-section">
          <h3 data-i18n="footer.infoRegional">معلومات ومناطق</h3>
          <ul class="footer-links">
            <li><a href="about-lab.html" data-i18n="nav.trust.aboutLab">معمل الفارس وتقنيات الاستعادة</a></li>
            <li><a href="privacy-policy.html" data-i18n="nav.trust.privacy">سياسة السرية والخصوصية</a></li>
            <li><a href="services/data-recovery-makkah.html" data-i18n="nav.services.makkah">استعادة بيانات مكة</a></li>
            <li><a href="services/data-recovery-saudi-arabia.html" data-i18n="nav.services.saudi">استعادة بيانات السعودية</a></li>
          </ul>
        </div>
      </div>
      
      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p data-i18n="footer.copyright">© 2025 مركز الفارس لصيانة الكمبيوتر. جميع الحقوق محفوظة.</p>
        <p data-i18n="footer.development">تم تطوير الموقع بواسطة فريق الفارس التقني - الإصدار v1.2.2</p>
      </div>'

$content = $content.Replace($footerInnerOld, $footerInnerNew)

Set-Content -Path "index.html" -Value $content -Encoding UTF8
