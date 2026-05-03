# 39 - NotebookLM English Service Pages Prompts
> **Purpose:** Ready-to-use prompts for producing English content for Al-Fares service pages via NotebookLM
> **Reference:** `plans/37-alfares-service-pages.md` → Phase 2
> **Arabic Content:** `plans/38-ar-service-pages-content.md`
> **Date:** 2026-05-02

---

## ⚠️ Usage Instructions

1. **Load sources** in NotebookLM first (ACE Lab docs, Datacodex articles, Arabic content file 38)
2. **Send the System Prompt** (Section 0) first to set NotebookLM's persona
3. **Execute each prompt** in order (Prompt 1 → 14) and copy the result
4. **Paste each result** into the output file: `plans/40-en-service-pages-content.md`

---

## 🎭 Section 0: System Persona Prompt

```
You are a professional SEO content writer for "Al-Fares Computer & Data Recovery Center" in Jeddah, Saudi Arabia.

Your task is to write English service page content that is:
- NOT a literal translation from Arabic — it must be a localized, naturally-written English version
- Professional and authoritative — matching the tone of international data recovery labs
- SEO-optimized — naturally embedding the provided English target keywords
- Technically accurate — emphasizing PC-3000 technology and Clean Room environment
- Trust-building — highlighting 12+ years experience and real technical capabilities

Writing style rules:
- Use professional, confident tone (not salesy or exaggerated)
- Write for English-speaking clients in Saudi Arabia (expats, international businesses)
- Include technical terminology naturally (not dumbed down, not overly jargon-heavy)
- Each page must have: H1, Symptoms section, Methodology section, Tools section, FAQ (3-4 questions), and a WhatsApp CTA
- WhatsApp number: +966507322542
- Location: Al-Sharafiyah District, Jeddah
- Website: alfareslab.com
- Blog/Technical reference: datacodexlab.com

Do NOT:
- Use AI-style phrases like "In today's digital age" or "In this article we will explore"
- Add citations or reference markers like [1] or [Source]
- Use generic filler content — every sentence must add value
- Translate Arabic idioms literally
```

---

## 📄 Prompt 1: Internal Hard Drive Data Recovery

```
Write a complete English service page for "Internal Hard Drive Data Recovery in Jeddah".

Page Title: Internal Hard Drive Data Recovery in Jeddah | Al-Fares Center
Meta Description: Desktop crashed? Al-Fares Center provides expert internal hard drive recovery in Jeddah using PC-3000 and Clean Room technologies for safe data retrieval.

Target Keywords: hard drive data recovery jeddah, internal hard drive recovery, desktop hard drive repair jeddah

Structure:
- H1: Internal Hard Drive Data Recovery in Jeddah
- Opening paragraph: Describe the panic of a desktop/server HDD failure and position Al-Fares as the professional solution
- Section: Common Symptoms of Internal HDD Failure (5 symptoms: no boot, clicking sounds, burnt PCB, wrong capacity/0 bytes, severe slowness)
- Section: Our Recovery Methodology (5 steps: safe diagnosis away from OS, PCB repair with ROM chip transfer, Clean Room head swap, Firmware repair, final imaging with bad sector bypass)
- Section: Our Technical Tools (PC-3000 Portable PRO for Techno Mode access, Clean Room Class 100)
- FAQ: 4 questions (burnt PCB recovery, clicking sound meaning, why not use free software, do you serve individuals and businesses)
- CTA: WhatsApp + location + websites

Tone: Professional, confident, technically precise. Write naturally for English-speaking audience in Saudi Arabia.
```

---

## 📄 Prompt 2: External Hard Drive Data Recovery

```
Write a complete English service page for "External Hard Drive Data Recovery in Jeddah".

Page Title: External Hard Drive Recovery in Jeddah | Al-Fares Center
Meta Description: Dropped your external drive? Al-Fares Center provides expert external hard drive recovery in Jeddah for WD, Seagate & more using PC-3000 & Clean Room technology.

Target Keywords: external hard drive recovery jeddah, portable hard drive repair, WD Seagate data recovery

Structure:
- H1: External Hard Drive Data Recovery in Jeddah
- Opening paragraph: Address the shock of a dropped or failed external drive (family memories, work archives)
- Section: Common Symptoms (5: clicking/buzzing after drop, "needs format" message, LED on but not detected, severe slowness/freezing, broken USB port)
- Important Warning: Never accept the Format prompt — explain why
- Section: Our Recovery Methodology (4 steps: isolated diagnosis with PC-3000, Clean Room for drop damage, USB board encryption bypass for WD Passport etc., safe imaging with Data Extractor)
- Section: All Brands Supported (WD, Seagate, Toshiba, Transcend, Samsung)
- FAQ: 4 questions (dropped WD clicking sound, can I open it myself, can you recover format-requesting drives, data privacy guarantee)
- CTA: WhatsApp + location + websites

Tone: Empathetic but professional. Emphasize the danger of DIY attempts.
```

---

## 📄 Prompt 3: SSD & NVMe Data Recovery

```
Write a complete English service page for "SSD & NVMe Data Recovery in Jeddah".

Page Title: SSD & NVMe Data Recovery in Jeddah | Al-Fares Center
Meta Description: Facing a sudden SSD failure? Al-Fares Center offers expert SSD & NVMe data recovery in Jeddah using PC-3000 tech to resolve Controller and Firmware issues.

Target Keywords: SSD data recovery jeddah, NVMe recovery, solid state drive repair

Structure:
- H1: SSD & NVMe Data Recovery in Jeddah
- Opening: Debunk the myth that SSDs are failure-proof — they die silently without warning
- Section: Common Symptoms (5: no boot, not detected in BIOS, phantom/wrong capacity Safe Mode, sudden slowness with BSOD, files disappeared/asks for format)
- Section: Recovery Methodology (3 steps: immediate TRIM isolation, Firmware/Controller repair, Chip-off for electrical damage — desolder NAND chips and read directly)
- Section: Technical Tools (PC-3000 Portable III + SSD Module, PCIe NVMe adapters)
- Comparison Table: HDD vs SSD recovery differences (component type, failure type, difficulty reason)
- FAQ: 4 questions (is SSD recovery easier, can you recover formatted NVMe, SSD burnt by electrical surge, how long does it take)
- CTA: WhatsApp + location + websites

Tone: Educational and authoritative. Explain the unique challenges of flash storage recovery.
```

---

## 📄 Prompt 4: RAID, NAS & Server Data Recovery

```
Write a complete English service page for "RAID & NAS Server Data Recovery in Jeddah".

Page Title: RAID & NAS Server Data Recovery in Jeddah | Al-Fares Center
Meta Description: Server down? Al-Fares Center offers secure RAID & NAS data recovery in Jeddah. We handle degraded arrays and prevent data loss from improper rebuilds.

Target Keywords: RAID data recovery jeddah, NAS data recovery, server data recovery saudi arabia

Structure:
- H1: RAID & NAS Server Data Recovery in Jeddah
- Opening: Describe server failure impact on businesses — operations halt, financial databases at risk
- Section: Symptoms of RAID/NAS Failure (4: alarm beeping, network shares disappeared, Degraded status, complete system freeze)
- Critical Warning: NEVER attempt a Rebuild — explain how improper rebuild overwrites good data with wrong XOR parity
- Section: Recovery Methodology (3 steps: safe sector-by-sector imaging of each disk, advanced parameter analysis with Hex viewers for block size/drive order/delay, virtual read-only assembly with PC-3000 RAID Systems)
- Section: Supported Arrays & NAS brands (RAID 0/1/5/6/10/50 + Synology, QNAP, WD MyCloud, LaCie, Buffalo)
- FAQ: 4 questions (why did RAID 5 fail despite redundancy, bring whole NAS or just disks, two disks failed in RAID 5, how long does it take)
- CTA: WhatsApp + location + websites

Tone: Urgency-aware, business-focused. Emphasize the catastrophic cost of improper RAID handling.
```

---

## 📄 Prompt 5: Flash Drive & Memory Card Data Recovery

```
Write a complete English service page for "Flash Drive & Memory Card Data Recovery in Jeddah".

Page Title: Flash Drive & Memory Card Data Recovery Jeddah | Al-Fares
Meta Description: Lost your files? Al-Fares Center offers expert SD card recovery in Jeddah. We recover photos and fix flash drives asking for format using PC-3000 Flash technology.

Target Keywords: USB flash drive recovery jeddah, SD card recovery, memory card data recovery

Structure:
- H1: Flash Drive & Memory Card Data Recovery in Jeddah
- Opening: Describe everyday reliance on USB drives and SD cards, and the shock of sudden failure
- Section: Common Symptoms (4: format request message, 0 bytes/wrong capacity, not detected at all, physical damage/broken connector)
- Section: Recovery Methodology (explain NAND Flash technology, bypassing failed Controller, direct chip reading with PC-3000 Flash, ECC error correction)
- Section: The Monolith Challenge (modern microSD/flash are single sealed chips — explain grinding technique to expose copper pads + Spider Board adapter with microscopic pins for safe data extraction)
- Special Message for Photographers (wedding shoots, documentary projects — RAW files, .mov/.mp4 recovery)
- FAQ: 4 questions (should I accept format prompt, can you recover a physically broken flash drive, microSD stopped working suddenly, can you repair the flash drive to work again)
- CTA: WhatsApp + location + websites

Tone: Accessible yet technically detailed. Show expertise in modern flash storage challenges.
```

---

## 📄 Prompt 6: DVR / NVR / CCTV Data Recovery

```
Write a complete English service page for "DVR & NVR CCTV Data Recovery in Jeddah".

Page Title: DVR & NVR CCTV Data Recovery in Jeddah | Al-Fares Center
Meta Description: Lost important security footage? Al-Fares Center provides professional DVR data recovery in Jeddah. We recover deleted NVR & DVR videos using advanced PC-3000 technology.

Target Keywords: CCTV footage recovery jeddah, DVR data recovery, NVR video recovery, security camera recovery

Structure:
- H1: DVR & NVR CCTV Data Recovery in Jeddah
- Opening: Emphasize that surveillance footage is critical legal/security evidence — losing it can be catastrophic
- Section: Common Causes of Footage Loss (4: deliberate deletion/sabotage, accidental format, mechanical HDD failure, burnt DVR/NVR device)
- Security Warning: Disconnect DVR from power immediately to prevent overwriting
- Section: Why Standard Recovery Software Fails (proprietary file systems like WFS/DHFS/Hikvision FS, extreme video fragmentation with separated headers and bodies)
- Section: Al-Fares Methodology (3 steps: Clean Room repair if HDD damaged, proprietary file system decryption for Hikvision/Dahua/CP Plus, advanced Video Carving to reassemble header+body fragments)
- FAQ: 4 questions (video deleted a month ago and recording continued, DVR unit completely burnt, connected DVR disk to PC and it asks for format, how long does recovery take)
- CTA: WhatsApp + location + websites

Tone: Serious, security-aware. Position Al-Fares as trusted partner for forensic-grade video recovery.
```

---

## 📄 Prompt 7: Privacy & Confidentiality Policy

```
Write a complete English trust/policy page for "Data Privacy and Confidentiality at Al-Fares Center".

Page Title: Data Privacy and Confidentiality Policy | Al-Fares Center
Meta Description: Al-Fares Center guarantees absolute data privacy and confidentiality. Secure file recovery in Jeddah with strict protocols and safe data destruction.

Target Keywords: data privacy recovery, confidential data recovery jeddah, secure file recovery

Structure:
- H1: Data Privacy and Confidentiality Policy
- Opening: Acknowledge that data loss anxiety is compounded by privacy concerns — position Al-Fares as absolutely committed to client confidentiality
- Section: How We Protect Your Data (3 points: no human browsing of content — automated PC-3000 tools only, secure destruction of temporary copies within 3-7 days after delivery, closed lab environment with authorized engineers only)
- Section: Guarantees for Businesses (B2B confidentiality, professional ethics, NDA arrangements available)
- Section: Ethical Commitment (personal and professional integrity, data handling with dignity)
- FAQ: 3 questions (what happens to backup copies after delivery, does the engineer view my files, can you provide written NDA for my company)
- No aggressive CTA — this is a trust page, keep it dignified

Tone: Reassuring, dignified, transparent. Build absolute trust.
```

---

## 📄 Prompt 8: Laptop & Computer Data Recovery

```
Write a complete English service page for "Laptop & Computer Data Recovery in Jeddah".

Page Title: Laptop & Computer Data Recovery in Jeddah | Al-Fares Center
Meta Description: Lost your important files? Al-Fares Center offers professional laptop data recovery in Jeddah, providing advanced solutions for soldered SSDs and burnt motherboards.

Target Keywords: laptop data recovery jeddah, computer data recovery, laptop hard drive recovery

Structure:
- H1: Laptop & Computer Data Recovery in Jeddah
- Opening: Describe common scenarios (dropped laptop, spilled coffee, graduation project lost, business files gone)
- Section: Common Causes of Data Loss (4: drops/impacts, liquid spill, burnt motherboard, sudden OS failures/BSOD)
- Section: Modern Laptops with Soldered Storage (explain onboard SSD challenge — can't simply remove the drive. Describe Chip-off technique with Rose's metal for safe desoldering, JTAG/SPI extraction through microscopic test points)
- Section: Older Laptops & Desktops (2.5" and 3.5" mechanical drives — Clean Room head swap)
- Emergency Tips: (disconnect charger, remove battery, NEVER attempt to power on a wet/dropped laptop)
- FAQ: 3 questions (bring whole laptop or just the drive, coffee spill — are files lost, dropped laptop with clicking sound)
- CTA: WhatsApp + location + websites

Tone: Practical, urgent. Address real client panic scenarios with clear expert guidance.
```

---

## 📄 Prompt 9: Mac Data Recovery

```
Write a complete English service page for "Mac Data Recovery in Jeddah".

Page Title: Mac Data Recovery in Jeddah | Al-Fares Apple Repair Center
Meta Description: Dead MacBook? Al-Fares Center provides expert Mac data recovery in Jeddah. We repair logic boards to recover data from encrypted T2 and M-Series Macs.

Target Keywords: mac data recovery jeddah, macbook data recovery, apple data recovery, T2 chip recovery

Structure:
- H1: Mac Data Recovery in Jeddah (MacBook & iMac)
- Opening: Describe the frustration of Apple Store saying "your data is gone, we need to replace the logic board" — position Al-Fares as the alternative that goes deeper
- Section: Common Causes (4: liquid spill on logic board, power circuit burnout, macOS corruption stuck on Apple logo, security chip failure)
- Section: The Technical Challenge (3 points: onboard SSD soldered to logic board, T2/M-Series hardware encryption tied to original board, FileVault encryption with Core Storage and VMK keys)
- Section: Al-Fares Methodology (3 steps: Logic Board micro-soldering repair to revive original board and decrypt data, DFU Mode recovery for software issues, PC-3000 for logical damage to HFS+/APFS with FileVault decryption)
- Supported devices: MacBook Pro, MacBook Air, iMac, Mac Mini
- FAQ: 3 questions (Apple Store said data is unrecoverable, flashing question mark folder, liquid spill — what to do immediately)
- CTA: WhatsApp + location + websites

Tone: Expert, confident. Show that Al-Fares can do what Apple authorized centers cannot.
```

---

## 📄 Prompt 10: Ransomware & Virus Data Recovery

```
Write a complete English service page for "Ransomware Data Recovery in Jeddah".

Page Title: Ransomware Data Recovery in Jeddah | Al-Fares Center
Meta Description: Hit by ransomware? Al-Fares Center offers secure ransomware data recovery in Jeddah. We recover encrypted files safely using advanced raw recovery techniques.

Target Keywords: ransomware data recovery jeddah, encrypted file recovery, virus data recovery

Structure:
- H1: Ransomware Data Recovery in Jeddah
- Opening: Describe the ransomware nightmare — files locked, ransom note demanding payment, entire business paralyzed
- Section: How to Identify Ransomware Infection (4 signs: changed file extensions like .djvu/.makop/.locked, ransom note files in every folder, complete inability to open any file, changed desktop wallpaper)
- Emergency Steps: (3: isolate device from network immediately, do NOT connect any external storage, strong warning against paying the ransom — no guarantee + double extortion risk)
- Section: Al-Fares Methodology (3 steps: analyze encryption family and identify Offline vs Online ID, attempt decryption if keys are available, Raw Recovery technique — many ransomware variants delete originals after encrypting copies, so we scan unused disk space for pre-encryption file remnants and Shadow Copies)
- FAQ: 3 questions (is 100% decryption guaranteed, can you clean the virus from my device, I have a decryption key but afraid to use it)
- CTA: WhatsApp + location + websites

Tone: Calm, authoritative, honest. Never promise guaranteed decryption — emphasize realistic assessment and maximum effort.
```

---

## 📄 Prompt 11: Database & Server Recovery

```
Write a complete English service page for "Database & Server Data Recovery in Jeddah".

Page Title: Database & Server Data Recovery in Jeddah | Al-Fares Center
Meta Description: Accounting system down? Al-Fares Center provides expert database recovery in Jeddah. We repair corrupted SQL databases and servers with absolute confidentiality.

Target Keywords: database recovery jeddah, SQL server recovery, ERP data recovery, accounting server repair

Structure:
- H1: Database & Server Data Recovery in Jeddah
- Opening: Emphasize that databases are the lifeblood of any business — every hour of downtime costs money
- Section: Database Problems We Handle (5: Suspect Mode database, RAID failure under accounting server, power outage causing torn pages, accidentally dropped tables/formatted server, mechanical HDD failure with clicking)
- Section: Recovery Methodology (4 steps: safe imaging of server disks, hexadecimal structure analysis with PC-3000 Data Extractor, internal corruption repair of tables/pages/links, successful Attach to SQL engine without DBCC CHECKDB errors)
- Section: Supported Systems (SQL Server .mdf/.ldf, MySQL, Oracle + ERP systems like Smacc, QuickBooks, Tally)
- FAQ: 4 questions (formatted server disk — can you recover the database, DBCC CHECKDB keeps failing, confidentiality of financial data, how long does server recovery take)
- CTA: WhatsApp + location + websites (emphasize "Business Emergency Line")

Tone: Business-focused, authoritative. Speak to IT managers and business owners. Emphasize emergency priority for corporate clients.
```

---

## 📄 Prompt 12: Data Recovery Makkah (Geographic Page)

```
Write a complete English geographic/local SEO page for "Data Recovery Makkah".

Page Title: Data Recovery Makkah | Hard Drive Recovery | Al-Fares Center
Meta Description: Looking for data recovery in Makkah? Al-Fares Center in Jeddah is your closest professional lab equipped with Clean Room & PC-3000 for secure data retrieval.

Target Keywords: data recovery makkah, hard drive recovery makkah, data recovery mecca

Structure:
- H1: Data Recovery Makkah – Your Trusted Professional Lab
- Opening: Welcome Makkah residents and businesses — acknowledge their search for local solutions, but explain why a specialized lab is better than a generic repair shop
- Section: Why Al-Fares in Jeddah Instead of a Local Shop (3 points: Clean Room environment vs dusty repair shops, PC-3000 professional tools vs free software, expert first-attempt vs risky amateur tries)
- Section: How We Serve Makkah Clients (2 options: personal visit — only 45-60 min drive, or shipping via Smasar/Aramex with detailed report before starting work)
- Section: Devices We Handle from Makkah (HDD/SSD, hotel/company servers RAID/NAS, Apple MacBook/iMac, DVR/NVR security cameras, flash drives and memory cards)
- FAQ: 3 questions (do you have a branch in Makkah, local shop said drive is dead — should I believe them, how to safely ship HDD via courier)
- CTA: WhatsApp + location + websites

Tone: Welcoming, transparent (honest about no Makkah branch), confidence-building. Target hotels, Hajj/Umrah institutions, and local businesses.
```

---

## 📄 Prompt 13: Data Recovery Saudi Arabia (Geographic Page)

```
Write a complete English geographic/local SEO page for "Data Recovery Saudi Arabia — All Cities".

Page Title: Data Recovery Saudi Arabia | Riyadh & Dammam | Al-Fares Center
Meta Description: Need data recovery in Saudi Arabia? Al-Fares center in Jeddah receives drives from Riyadh, Dammam & all KSA cities for safe recovery using PC-3000.

Target Keywords: data recovery saudi arabia, data recovery riyadh, data recovery dammam, hard drive recovery KSA

Structure:
- H1: Data Recovery Saudi Arabia — Professional Service for All Cities
- Opening: Address clients in Riyadh, Dammam, Abha, and all KSA cities — explain that distance is not a barrier when data safety is the priority
- Section: Why Ship to Al-Fares in Jeddah (2 key reasons: Clean Room for physical damage vs unequipped local shops, PC-3000 professional system vs free software that damages failing drives further)
- Section: Remote Service Steps (4 steps: safe packaging with anti-static bag + bubble wrap, ship via Smsa/Aramex/DHL/RedBox, diagnosis + report via WhatsApp, data extraction to new drive + return shipping)
- Section: Cities & Regions Served (Central: Riyadh/Kharj/Qassim, Eastern: Dammam/Khobar/Dhahran/Jubail/Ahsa, Western: Makkah/Madinah/Taif/Yanbu, Southern/Northern: Abha/Khamis/Jizan/Najran/Tabuk/NEOM/Hail)
- FAQ: 3 questions (is shipping safe for a damaged drive, why send to Jeddah instead of local Dammam shop, how do I pay from another city — no upfront payment policy)
- CTA: WhatsApp + location + websites

Tone: Nationwide authority. Position Al-Fares as THE trusted destination for data recovery across the entire Kingdom.
```

---

## 📄 Prompt 14: About the Lab & Technology (Trust Page)

```
Write a complete English trust/about page for "About Al-Fares Data Recovery Lab".

Page Title: Data Recovery Lab in Jeddah | PC-3000 & Clean Room | Al-Fares Center
Meta Description: Discover Al-Fares Center, a specialized data recovery lab in Jeddah equipped with a Class 100 Clean Room and PC-3000 technology for secure data retrieval.

Target Keywords: data recovery lab jeddah, clean room data recovery, PC-3000 data recovery, professional data recovery

Structure:
- H1: A Fully-Equipped Data Recovery Lab: Clean Room Meets World-Class Technology
- Opening: Distinguish Al-Fares from generic computer repair shops — we are an engineering lab, not a retail store
- Section: The Clean Room (Class 100) — explain why opening HDDs in normal air destroys data (dust particles = boulders on platters), describe the isolated filtered environment for head swaps and platter transfers
- Section: PC-3000 Technology — The World's Most Advanced Recovery System (3 key points: not just software — it's hardware+software combo, Factory/Techno Mode access bypassing OS, handles bad sectors and firmware corruption with intelligent algorithms that protect read heads)
- Section: Micro-Soldering Tools (microscopes + precision thermal stations for PCB repair, SSD chip-off, NAND Flash desoldering for modern storage)
- Closing Warning: "Your data cannot afford trial and error" — the first attempt is usually the only attempt. Choosing an unequipped shop can turn a simple issue into permanent damage
- CTA: WhatsApp + location + websites

Tone: Authoritative, educational. This is the "proof of expertise" page — show technical depth and lab-grade capabilities.
```

---

## 📋 Review Notes

After producing all English content from NotebookLM:

1. **Check keyword density:** Ensure target English keywords appear naturally (not stuffed)
2. **Compare with Arabic:** Verify same topics are covered but phrasing is localized (not literal translation)
3. **Review FAQ uniqueness:** Each page's FAQ must be different from others
4. **Check tone consistency:** Professional, confident, technically precise across all pages
5. **Remove AI artifacts:** Strip any citations [1], conversational intros/outros, or filler phrases
6. **Save final content** in `plans/40-en-service-pages-content.md`
