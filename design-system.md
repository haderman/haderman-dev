# Haderman.dev Design System

This document serves as a comprehensive guide for styling components and pages in the haderman.dev project. The goal is to maintain a consistent visual language while providing flexibility for future development without altering the existing styles.

## Table of Contents

- [Typography](#typography)
- [Colors](#colors)
- [Spacing](#spacing)
- [Layout Systems](#layout-systems)
- [Components](#components)
- [Best Practices](#best-practices)

## Typography

The project implements a fluid typography system based on [Utopia's CSS modular scales](https://utopia.fyi/blog/css-modular-scales).

### Font Family

```css
"Mona Sans", "MonaSansFallback", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"
```

### Type Scale

The type scale is defined using fluid custom properties that automatically adjust based on the viewport width:

| Variable | Purpose | Usage |
|----------|---------|-------|
| `--fluid--3` | Tiny text | Very small text, use sparingly |
| `--fluid--2` | Small text | Small labels, captions |
| `--fluid--1` | Smaller text | Secondary information |
| `--fluid-0` | Base text size | Default body text |
| `--fluid-1` | Larger text | Emphasized body text |
| `--fluid-2` | Subheading | Section titles |
| `--fluid-3` | Small heading | Card titles |
| `--fluid-4` | Medium heading | Page headings (h1) |
| `--fluid-5` to `--fluid-8` | Large headings | For impact, use sparingly |

**Example:**
```css
h1 {
  font-size: var(--fluid-4);
}

p {
  font-size: var(--fluid-1);
}
```

### Typography Guidelines

- Text content should be wrapped with appropriate text balance:
  - For headings: `text-wrap: balance;`
  - For paragraphs: `text-wrap: pretty;` with a max-width of 50ch
- Paragraphs should have `font-weight: 100` and a `letter-spacing: 1px` for better readability

## Colors

The color system uses OKLCH color values for better perceptual uniformity and compatibility with modern browsers.

### Base Colors

| Variable | Value | Purpose |
|----------|-------|---------|
| `--primary-color` | `lch(1.9 2.4 210.02)` | Page background color |
| `--primary-text` | `lch(70 0 0)` | Primary text color |
| `--secondary-text` | `lch(50 0 0)` | Secondary text color |
| `--color-cyan` | `oklch(0.68 0.14 212.14)` | Accent cyan color |
| `--color-gold` | `oklch(0.65 0.14 80.92)` | Accent gold color |
| `--accent-color` | `var(--color-cyan)` | Default accent color |

### Special Backgrounds

The project uses complex gradient backgrounds for special elements:

- Cyan-themed gradients:
  - `--special-bg-cyan`: Base gradient
  - `--special-bg-cyan-hover`: Hover state
  - `--special-bg-cyan-light`: Lighter variant

- Gold-themed gradients:
  - `--special-bg-gold`: Base gradient
  - `--special-bg-gold-hover`: Hover state
  - `--special-bg-gold-light`: Lighter variant

**Usage:**
```css
.element {
  background: var(--special-bg-cyan);
}

.element:hover {
  background: var(--special-bg-cyan-hover);
}
```

## Spacing

Spacing is based on the same fluid scale as typography, providing a consistent rhythm across the interface.

| Variable | Usage |
|----------|-------|
| `--fluid--3` to `--fluid--1` | Small spaces, inline elements |
| `--fluid-0` | Base spacing (body padding) |
| `--fluid-1` | Small component spacing |
| `--fluid-2` | Medium component spacing |
| `--fluid-3` | Large component spacing |
| `--fluid-4` | Section spacing |

**Example:**
```css
.component {
  padding: var(--fluid-0);
  gap: var(--fluid-1);
}
```

## Layout Systems

The project uses two main layout systems:

### 1. Bento Layout

A grid-based layout system that creates a "bento box" arrangement with predefined grid areas. Components are placed in these grid areas and can span multiple cells.

**Usage:**
```astro
<Bento>
  <article data-area="profile">...</article>
  <article data-area="contact">...</article>
</Bento>
```

Available grid areas:
- `profile`
- `photo`
- `contact`
- `quote`
- `skills`
- `project-alan`
- `project-covid`
- `project-c`
- `project-d`
- `image-of-the-day`
- `game-of-life`

The layout is responsive with different arrangements for mobile and desktop.

### 2. Grid Layout

A simpler grid layout that automatically arranges items in a responsive grid.

**Usage:**
```astro
<Grid gap="var(--fluid-2)">
  <Component1 />
  <Component2 />
</Grid>
```

The Grid layout uses CSS container queries to adapt to the available width.

## Components

### Cards

Cards are a key UI component that should follow these guidelines:

1. **Base Structure**
   - Cards should have a standard structure with optional background and overlay elements
   - Default border radius is set to 0 (`--rad: 0`)

2. **Card Types**
   - Content cards: Display static information
   - Interactive cards: Have hover states and can be clicked
   - Project cards: Showcase projects with images and descriptions

3. **Card Styling**
   - Use the existing card classes defined in index.astro
   - Background effects should use the `.background` and `.circles` classes
   - Hover states should be applied consistently

### Interactive Elements

Links and buttons follow these guidelines:

1. **Links**
   - Default: No text decoration
   - Hover: Underlined
   - Disabled: `aria-disabled="true"` attribute

2. **Focus States**
   - All elements use a consistent focus style:
   ```css
   *:focus {
     outline: 2px solid var(--primary-text) !important;
     outline-offset: 2px !important;
   }
   ```

## Best Practices

### Styling Guidelines

1. **Use Existing Variables**
   - Always use existing CSS custom properties from root.css
   - Don't create new variables unless absolutely necessary

2. **Responsive Design**
   - Use mobile-first approach
   - Add breakpoints at 768px for tablet/desktop views
   - Use fluid spacing and typography for responsive scaling

3. **Component Structure**
   - Encapsulate styles within components using Astro's `<style>` tag
   - Use `is:global` only when styles need to be shared

4. **CSS Principles**
   - Follow the cascade appropriately
   - Avoid deep nesting of selectors
   - Use appropriate specificity

### Implementation Examples

#### Card Component
```astro
---
// Card component props
---

<article data-area="card-name" class="card">
  <div class="background">
    <!-- Background content -->
  </div>
  <div class="overlay">
    <!-- Overlay content -->
  </div>
  <div class="content">
    <!-- Main content -->
  </div>
</article>

<style>
  .content {
    z-index: 2;
    position: relative;
    padding: var(--fluid-1);
  }
</style>
```

#### Text Styling
```css
h2 {
  font-size: var(--fluid-3);
  margin-bottom: var(--fluid-1);
}

p {
  font-size: var(--fluid-1);
  text-wrap: pretty;
  max-width: 50ch;
}
```

## Future Enhancements

While maintaining the current styling structure, here are areas that could be improved in the future:

- Create dedicated token files to separate design tokens from components
- Implement CSS custom properties for transitions and animations 
- Establish more consistent naming conventions for layout components
- Consider extracting common card patterns into reusable components
