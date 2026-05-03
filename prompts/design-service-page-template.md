# Service Page Template — Design Prompt

> **Purpose:** Give this entire file to any AI design agent.
> **Goal:** Get back a single HTML file with embedded CSS that serves as the visual template for 14 service pages.

---

## 🎯 What I Need

Design a **single-page HTML template** for a data recovery service center website. This template will be reused across 14 service pages — only the text content changes between pages. The design should feel **premium, clean, and trustworthy** — like a professional medical or engineering firm, not a generic tech repair shop.

**Deliverable:** One self-contained `.html` file with all CSS embedded in a `<style>` tag. No external dependencies. No JavaScript. Just pure HTML + CSS.

---

## 🏢 Brand Context

- **Company:** Al-Fares Center for Computer Repair & Data Recovery
- **Location:** Jeddah, Saudi Arabia
- **Industry:** Specialized data recovery laboratory (hard drives, SSDs, flash drives, servers)
- **Audience:** Individuals and businesses who lost critical data — they are stressed and need reassurance
- **Tone:** Professional, authoritative, reassuring — like a surgeon explaining a procedure

---

## 📐 Design Constraints (Non-Negotiable)

| Constraint | Details |
|-----------|---------|
| **Single file** | Everything (HTML + CSS) in one `.html` file |
| **No JavaScript** | Pure CSS only — no JS interactions |
| **No frameworks** | No Tailwind, Bootstrap, or any CSS framework |
| **No external fonts** | Use system font stack only |
| **Responsive** | Must work from 375px mobile to 1440px desktop |
| **Light theme only** | Design for light background only (I will add dark mode later) |
| **LTR only** | Design in English LTR only (I will add RTL support later) |
| **No header/footer** | Do NOT design header or footer — I already have them. Focus only on the `<main>` content area |
| **No images** | Use CSS shapes, borders, icons (emoji or unicode) if needed — no image files |
| **Semantic HTML** | Use proper HTML5 elements (`<section>`, `<article>`, `<details>`, `<nav>`, `<ol>`) |

---

## 🎨 Design Philosophy

### DO:
- **Simplicity first** — The customer is stressed. Don't overwhelm them with animations, gradients, or visual noise
- **Clear visual hierarchy** — Each section should be instantly scannable
- **Generous whitespace** — Let the content breathe
- **Subtle depth** — Use light shadows, soft borders, or slight background tints to separate sections
- **Professional color palette** — Blues for trust, warm accents for CTAs. No neon or playful colors
- **Typography-driven** — Let font sizes, weights, and spacing do the heavy lifting
- **One CTA per viewport** — The user should always see a clear next action (WhatsApp contact)

### DON'T:
- ❌ Fancy animations or transitions
- ❌ Parallax or scroll effects
- ❌ Multiple competing colors
- ❌ Decorative illustrations
- ❌ Complex grid layouts — keep it mostly single-column with occasional 2-column
- ❌ Hover effects that change layout
- ❌ Anything that looks "template-y" or generic

---

## 🧱 Page Sections (In Order)

The page has exactly **7 sections**. Design all of them in this order:

### Section 1: Breadcrumb + Intro
- A simple breadcrumb trail: `Home / Services / [Page Title]`
- Below it: the page introduction paragraph (2-4 sentences)
- Below that: a prominent WhatsApp CTA button
- This section sets the tone — it should feel welcoming and professional

### Section 2: Common Symptoms (Grid)
- Title: "Common Symptoms"
- 4 symptom items displayed in a responsive grid (2 columns on desktop, 1 on mobile)
- Each item has: a bold label + a short description (1 sentence)
- Visual treatment: card-like or list-like — your creative choice
- The customer should quickly find their problem here

### Section 3: Recovery Methodology (Steps)
- Title: "Our Recovery Methodology"
- 3 numbered steps explaining the technical process
- Each step is a short paragraph
- Should feel like a clear, logical progression (Step 1 → 2 → 3)
- Consider: numbered badges, vertical timeline, or simple ordered list with good spacing

### Section 4: Special Technical Highlight
- Title: "The Monolith Challenge" (this varies per page)
- A visually distinct box/card that explains a unique technical challenge
- Should stand out from the rest of the page — maybe a colored left border, tinted background, or icon
- This is the "expert credibility" section — make it feel authoritative

### Section 5: Targeted Message
- Title: "Special Message for Photographers" (this varies per page)
- A personal message directed at a specific audience segment
- Should feel warm and empathetic — like a doctor speaking to a specific patient
- Visually different from Section 4 — maybe a quote-style card or callout box

### Section 6: FAQ (Accordion)
- Title: "Frequently Asked Questions"
- 4 questions using `<details>` / `<summary>` HTML elements
- Clean, minimal accordion styling
- Questions should be easily scannable
- Center this section with a max-width (~800px)

### Section 7: Final CTA
- A strong closing call-to-action
- Title line (like "Don't let a sudden failure erase your files")
- Subtitle line (reassurance message)
- WhatsApp button (big, clear, green-tinted or brand-colored)
- Optional: a secondary text link to "Read more on our technical blog"
- This is the last thing the user sees — make it count

---

## 📝 Sample Content (Use This Exactly)

Below is the real content for the Flash Drive & Memory Card Recovery page. Use it verbatim in your design:

### Breadcrumb
```
Home / Services / Flash Drive & Memory Card Data Recovery in Jeddah
```

### Intro Paragraph
```
USB flash drives and SD cards are essential for storing and transferring our daily digital information, making the shock of a sudden storage failure incredibly disruptive. When a memory card dies right after a critical photoshoot, or a work USB drive stops responding, Al-Fares Center is equipped with specialized laboratory technology to retrieve your data safely. Whether you need memory card data recovery for a dead SD card or complex USB flash drive recovery, our specialized lab handles the most challenging flash media failures.
```

### Symptoms (4 items)
```
1. Format Request Message
   Your computer detects the device but displays a prompt asking you to format the disk before using it.

2. 0 Bytes or Wrong Capacity
   The drive shows an incorrect size or appears completely empty despite containing data.

3. Not Detected at All
   The system completely fails to recognize the device when plugged in.

4. Physical Damage
   The USB connector is snapped, or the device's printed circuit board has suffered physical trauma.
```

### Methodology (3 steps)
```
Step 1: To effectively recover data, we bypass the failed components and communicate directly with the memory storage. In classic cases, the recovery process involves unsoldering the memory chip and reading it directly in the PC-3000 Flash system.

Step 2: During NAND memory chip reading, bit errors frequently appear, and to achieve the maximum recovery rate, we must fix as many Error Correction Code (ECC) errors as possible.

Step 3: Using the PC-3000 software, we map all the bit errors in the sector and apply the ECC codes to correct them and reconstruct your files.
```

### Technical Highlight
```
Title: The Monolith Challenge

A large number of modern NAND flash devices use a monolithic architecture, where the interface, the controller, and the memory chips are integrated into a single common ceramic layer. To access the NAND memory in these drives, we perform a precise grinding process to erase the compound layer from the bottom side of the monolithic device. We use a specialized fiberglass pen brush to carefully erase the ceramic layer without injuring the delicate copper contact scheme beneath. Once the copper layer of contacts becomes visible, we utilize the ACE Lab Spider Board Adapter, which works perfectly with monolithic devices to interface with the chip and extract the raw data.
```

### Targeted Message
```
Title: Special Message for Photographers and Videographers

We understand that SD cards and Compact Flash cards hold irreplaceable wedding shoots and documentary projects. Video files often lack the standard check sizes that pictures have, making it a challenge to ensure the full integrity of video files from a corrupted flash card. If the file system becomes corrupted, a shift can appear between the file header and its body. We utilize specialized PC-3000 features to rotate the internal structure of Canon video files and restore the original integrity of fragmented .mov and .mp4 files directly from the RAW data.
```

### FAQ (4 questions)
```
Q1: Should I accept the format prompt if my computer asks me to format my flash drive?
A1: No. Formatting the drive will overwrite the existing file system structures and severely complicate the recovery process. You should safely eject the drive immediately to preserve the raw data.

Q2: Can you recover data from a physically broken flash drive?
A2: Yes. As long as the actual NAND memory chip remains physically intact, we can unsolder the chip from the broken circuit board and read the data directly using our PC-3000 Flash equipment.

Q3: My microSD stopped working suddenly. Is SD card recovery possible?
A3: Yes. MicroSD cards use a monolithic structure. We can carefully grind away the bottom ceramic coating to expose the technological pinouts and recover your data using our specialized Spider Board Adapter.

Q4: Can you repair the flash drive so I can use it again?
A4: Our primary objective is data extraction, not hardware repair. Flash drives that have suffered from firmware or hardware failure are permanently unreliable, so we will extract your recovered files and transfer them to a secure, healthy storage device.
```

### Final CTA
```
Title: Do not let a sudden flash drive failure erase your important files
Subtitle: Contact the engineering experts at Al-Fares Center for professional flash media evaluation and data recovery.
Button: Contact via WhatsApp → https://wa.me/966507322542
Secondary link: Read Technical Article → https://datacodexlab.com/en/posts/en-usb-format-error/
```

---

## 📏 Technical Specs

| Property | Value |
|----------|-------|
| Max content width | 1280px (centered) |
| Section padding | ~64px vertical |
| Body font size | 16px base |
| Heading sizes | h1: 2.5rem, h2: 2rem, h3: 1.75rem |
| Line height | 1.6 for body text |
| Font stack | `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif` |
| Mobile breakpoint | 768px |
| FAQ max-width | 800px |

---

## ✅ Acceptance Criteria

The design will be accepted if:

1. [ ] All 7 sections are present and clearly distinct
2. [ ] Content is fully readable without zooming on 375px mobile
3. [ ] Visual hierarchy is clear — I can scan the page in 5 seconds and understand its structure
4. [ ] The page feels premium and trustworthy — not like a free template
5. [ ] WhatsApp CTA is prominent and easy to find
6. [ ] FAQ accordion works with pure HTML `<details>` elements
7. [ ] No JavaScript is used
8. [ ] Everything is in a single `.html` file
9. [ ] The design is simple and focused — no visual clutter

---

## 🎁 Creative Freedom

You have full creative freedom on:
- Color palette (as long as it feels professional and trustworthy)
- Section backgrounds and separators
- Card/box styling approaches
- Typography weight distribution
- Spacing rhythm
- Icon usage (emoji, unicode symbols, or CSS shapes)
- How to visually differentiate the 7 sections from each other
- The overall "feel" — modern minimal, corporate clean, medical professional, etc.

**Just keep it simple, clean, and premium. The customer is scared they lost their data — make them feel they're in safe, expert hands.**
