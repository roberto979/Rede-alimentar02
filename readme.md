Alimentar — Institutional Website

A premium, fully responsive, and interactive website developed for **Rede Alimentar**, a restaurant located in Kinaxixi, Luanda. This project blends the rich traditions of Angolan gastronomy with a modern, high-performance web experience.

---

## Technical Implementation (Part 2 & Part 3 Summary)

###  Design & Responsive Typography
* **CSS Variable Architecture:** Centralized color management using native CSS custom properties (`:root`), prioritizing elegant tones of gold (`--gold`), warm cream (`--cream`), and deep charcoal (`--dark`) for a sophisticated look.
* **Fluid Typography:** Implementation of scalable fonts via the CSS `clamp()` function. Headings and text blocks adapt seamlessly to any viewport width without breaking.
  * **Headings (H1, H2, H3):** Elegant *Cinzel* serif font.
  * **Body & Navigation UI:** Clean and readable *Open Sans* sans-serif font.

###  Adaptive Layout (Breakpoints)
Built natively with **CSS Grid** and **Flexbox** without external framework dependencies, ensuring precise structural adaptations across three core screen profiles:
1. **Desktop (> 1024px):** Dual-column layout with parallel hero presentation and expanded grids.
2. **Tablet (851px - 1024px):** Column re-stacking, automated margin adjustments, and optimized image containers.
3. **Mobile (≤ 850px):** Smooth grid compression down to a single column, fluid footer alignment, and mobile navigation drawer.

###  Accessibility (Web Standards)
* Consistent implementation of keyboard focus styles via `:focus-visible` with high-contrast custom gold outlines to support keyboard-only navigation.
* Enhanced semantical HTML structure combined with interactive **ARIA** attributes (`aria-expanded`, `aria-controls`, `aria-label`) on the menu button for screen reader compatibility.

###  Advanced Interactive Features (JavaScript)
All components are unified under a single client-side architecture (`menu.js`) that safely executes script logic depending on the active page context:
* **Contextual Message Bar:** An automated, dynamic bar (`#welcomeMessageBar`) positioned at the top of `index`, `menu`, `reservations`, and `reviews`. It randomly loads tailored, interesting culinary facts and alerts in English upon every page refresh.
* **Fluid FAQ Accordion:** An interactive accordion built natively in JavaScript for `faq.html`. It dynamically reads the element's `scrollHeight` property to smoothly expand and collapse answer heights, altering the icon symbol from `+` to `−`.
* **Immersive Lightbox:** An elegant image gallery popup on `gallery.html` allowing users to click and display high-resolution product previews with caption extraction from the image's `alt` attribute.
* **Smart Calendar Blocker:** A custom validation routine on `reservations.html` that reads the client's current system date and injects a dynamic `min` constraint into the HTML date picker, entirely preventing users from selecting past dates.
* **Asynchronous Form Validation:** Captures message and booking submissions on front-end inputs, preventing abrupt page reloads and displaying smooth, timed feedback status messages.

---

##  Simplified Repository Structure

```text
📁 rede-alimentar-website/
├── 📁 CSS/
│   └──  redelimentar.css       # Optimized, fully commented responsive stylesheet
├── 📁 JS/
│   └──  menu.js                # Master interactive script handling global features
├── 📁 media/
│   └──  (Compressed WebP/JPG assets for optimal page loading performance)
├──  index.html                 # Default server landing page (formerly home.html)
├──  aboutus.html               # Institutional story and values page
├──  menu.html                  # Gastronomic catalog and specialties
├── gallery.html               # Media gallery with custom Lightbox implementation
├──  reservations.html          # Secure booking form with past date restrictions
├── offers.html                # Special discounts and promotional catalog
├──  reviews.html               # Guest feedback display with random notification system
├──  contact.html               # Location data, interactive map embed, and form
├──  faq.html                   # Interactive accordion FAQ section
├──  README.md                  # Comprehensive project documentation in English
└── CHANGELOG.md               # Dated and chronological modification log
```

---

##  Media References & Image Credits (Harvard Style)

The visual assets integrated into this project are referenced according to the academic standards of the **Harvard Referencing System**:

###  Photographic Media (Online Stock Libraries)

* **Bertelli Fotografia** (2023) *Rede Alimentar Restaurant Interior Presentation*. Available at: https://pexels.com (Accessed:  15/09 2026).
* **Nascimento, F.** (2024) *Dining and Guest Experience Art*. Available at: https://pexels.com (Accessed: 15/09 2026).
* **Unsplash Stock Library** (2025) *Gourmet Burger and Culinary Presentation Close-up*. Available at: https://unsplash.com (Accessed: 15/09 2026).
* **Unsplash Stock Library** (2025) *Premium International Sushi Selection Plate*. Available at: https://unsplash.com (Accessed: 12/09 2026).
* **Unsplash Stock Library** (2025) *Sweet Finishes and Matcha Ceremonial Dessert*. Available at: https://unsplash.com (Accessed: 22/09 2026).
* **Unsplash Stock Library** (2025) *Traditional Angolan Breakfast and Table Display*. Available at: https://unsplash.com (Accessed: 15/07 2026).

###  Digital Typography & Technical Frameworks

* **Google Fonts** (2026) *Cinzel Font Family Style Sheet*. Available at: https://google.com (Accessed: 20 October 2026).
* **Google Fonts** (2026) *Open Sans Font Family Style Sheet*. Available at: https://google.com (Accessed: 20 October 2026).