# Changelog — Rede Alimentar

All notable changes, bug fixes, and feature enhancements for this project are documented chronologically in this file.

## [Part 3 Release] — 2026-10-29

###  Added
* **Dynamic Welcome Message Bar:** Implemented an automated system across primary entry pages (`index`, `menu`, `reservations`, and `reviews`) that loads randomly selected interesting culinary context cards and warnings in English.
* **Interactive FAQ Accordion:** Programmed a fluid vertical accordion in `menu.js` that tracks `scrollHeight` metrics on element containers to animate answers open and closed dynamically while toggling `+` / `−` states.
* **Gallery Lightbox Component:** Engineered a modal framework on `gallery.html` enabling users to overlay images onto full-screen displays with native click-away behaviors.
* **Form Validation Mechanics:** Integrated front-end validation handling on both the reservation and contact inputs to ensure proper guest constraints (1-20 limits) and display confirmation indicators without hard reloads.
* **Reservation Date Blocker:** Built a script routine that dynamically updates the field's `min` parameter to block past selections based on the active local device date.

### 🔧 Fixed & Otimized
* **Case Sensitivity & URL Path Cleanup:** All broken internal paths across multi-page file definitions have been unified into consistent lower-case naming formats, fixing previous linking errors (`Contact.html`, `Menu.html`, etc.).
* **Default Page Alignment:** Corrected index settings by changing `home.html` to **`index.html`** to follow server-side resolution protocols for root URLs.
* **Font Payload Optimization:** Removed the incorrect and unused *Roboto* font linkage within the landing header block, ensuring proper rendering isolation for the official typography duo (*Cinzel* and *Open Sans*).
* **Source Tree Sanitation:** Purged all duplicate files, folders, and layout fragments from the active repository branch to leave a production-ready path layout.
* **Leaking Comments Extraction:** Located and cleaned up raw template strings like `/*hero section*/` that leaked through as raw text on browser page rendering viewports.
* **Media Assets Compression:** Re-rendered and compressed giant raw pictures (originally sizing around 2MB–4MB) down to optimized, modern web dimensions, dramatically improving load speed scores. 