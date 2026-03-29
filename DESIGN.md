# OptimoTech Landing Page - Design System

This document outlines the design system, styling, and tokens extracted from the OptimoTech landing page screens.

## 1. Core Technologies
*   **CSS Framework:** Tailwind CSS (via CDN with `plugins=forms,container-queries`)
*   **Icons:** Material Symbols Outlined
*   **Typography:** Google Fonts (`Plus Jakarta Sans`)

## 2. Typography
The primary font family is **Plus Jakarta Sans**, used across headlines, body, and labels.

*   **Headlines (`font-headline`):** Uses specific weights (`extrabold`, `black`, `bold`) and tight letter-spacing (`tracking-tight`, `tracking-tighter`) for a modern, architectural look.
*   **Body (`font-body`):** Standard weights with relaxed line height (`leading-relaxed`) for readability.
*   **Labels/Eyebrows (`font-label`):** Often uppercase with wide letter-spacing (`tracking-[0.2em]`, `tracking-widest`) and bold weights.

## 3. Color Palette (Material Design 3 Inspired)
The design uses a comprehensive design token system mapping to Tailwind colors.

### Primary Colors
*   **Primary:** `#003ec7` (Deep Blue)
*   **Primary Container:** `#0052ff` (Vibrant Blue)
*   **Primary Fixed:** `#dde1ff`
*   **On-Primary / On-Primary Container:** `#ffffff` / `#dfe3ff`

### Surface & Background
*   **Background:** `#f7f9fb` (Off-white/Light Gray)
*   **Surface:** `#f7f9fb`
*   **Surface Container Lowest:** `#ffffff`
*   **Surface Container Low:** `#f2f4f6`
*   **Surface Container High:** `#e6e8ea`
*   **Inverse Surface:** `#2d3133`
*   **On-Surface:** `#191c1e` (Near Black)
*   **On-Surface Variant:** `#434656`

### Secondary & Tertiary
*   **Secondary:** `#4459a8`
*   **Tertiary:** `#952200`
*   **Error:** `#ba1a1a`

## 4. Visual Elements & Styling

### Gradients
*   **Button/Pill Gradients:** `linear-gradient(135deg, #003ec7 0%, #0052ff 100%)`
*   **Text Gradients:** The same gradient applied with `-webkit-background-clip: text` for gradient text effects.

### Shadows & Depth
*   **Standard Shadows:** Tailwind's `shadow-sm`, `shadow-lg`, `shadow-xl`, `shadow-2xl`
*   **Custom Shadows:** Specialized soft drop shadows: `shadow-[0_20px_40px_rgba(25,28,30,0.06)]`
*   **Colored Shadows:** Primary colored shadows for buttons, e.g., `shadow-primary/20` or `shadow-primary/30`.

### Glassmorphism & Materials
*   **Glass Nav:** `backdrop-filter: blur(20px)` combined with semi-transparent white/dark background `bg-white/10`.
*   **Overlays:** Background patterns and gradients (`bg-primary/5 blur-[100px]`) used as decorative ambient lighting.

### Border Radius
*   Extensive use of heavily rounded corners for a modern, friendly but structural feel.
*   **Tokens:** `DEFAULT: 1rem`, `lg: 2rem`, `xl: 3rem`, `full: 9999px`.
*   Commonly applied as `rounded-2xl`, `rounded-[2rem]`, and `rounded-full` for pills/buttons.

## 5. UI Components
*   **Cards (Bento Style):** Uses a mix of outline (`border border-outline-variant/20`) and filled surface containers (`bg-surface-container-low`, `bg-white`) often with hover-lift effects (`hover:-translate-y-2`) and shadow transitions.
*   **Buttons:** Two main variants: Solid Pill-Gradient (`btn-gradient text-on-primary`) and Outlined (`border-2 border-primary text-primary`).
*   **Icons in Containers:** Icons are often housed in slightly rounded square containers (`rounded-xl` or `rounded-2xl`) with lightly tinted backgrounds (`bg-primary/5`) for emphasis.

## 6. CSS Utilities & Custom Classes
*   `.material-symbols-outlined`: Standardized `font-variation-settings`.
*   `.glass-nav`: Applied to fixed top navigation bars.
*   `.text-gradient` / `.btn-gradient`: Gradient utility classes.
*   `.ghost-lift`: Hover effect combining a Y-axis translation with an increased shadow.
*   `.grid-pattern`: Provides an architectural-style dot/grid background (`radial-gradient`), enhancing the high-tech/structural theme.
