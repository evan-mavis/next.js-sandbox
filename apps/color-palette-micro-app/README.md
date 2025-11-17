## Color Palette Micro App

A beautiful color palette generator that creates random 5-color palettes with copy-to-clipboard functionality and URL-based state management.

**Completion Time**: ~2 hours

### Goals

1. **Server Components**: Generate color palettes server-side using seeded random number generation
2. **Next.js SearchParams**: Implement URL-based state management using Next.js `searchParams` API for shareable palettes
3. **Client/Server Component Separation**: Properly separate client interactivity (copy, hover effects) from server-side generation
4. **Interactive UI**: Implement smooth animations, hover effects, and visual feedback for user interactions

### Features

- **Random Color Generation**: Generates 5 random hex colors using seeded random number generation
- **Copy to Clipboard**: Click any color card to copy its hex code to clipboard
- **Visual Feedback**: Hover effects with color-matched glow, scale animations, and "Copied!" confirmation
- **Shareable URLs**: Each palette has a unique seed in the URL, making palettes shareable
- **Responsive Design**: Clean, modern UI with gradient backgrounds and smooth transitions

### Technical Implementation

- **Server Components**: Main page component generates colors server-side
- **Seeded Random**: Uses `Math.sin()` based seeded random for reproducible color generation
- **URL State Management**: Uses `searchParams` to trigger regeneration and enable sharing
- **Client Components**: Interactive elements (cards, button) are client components for browser APIs
- **Tailwind CSS**: Styled with Tailwind CSS including custom gradients and animations

### Design

**v0 Design Mockup:**
_Add v0 design screenshot here_

**Final Implementation:**
_Add final implementation screenshot here_
