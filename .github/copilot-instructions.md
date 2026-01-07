# Sino Mart Online - AI Coding Agent Instructions

## Project Overview
Sino Mart Online is a static HTML/CSS/JavaScript website for an agricultural e-commerce platform selling seeds, fertilizers, and pesticides. The site consists of 5 pages with a shared navigation and styling system.

## Architecture & Key Patterns

### Page Structure
- **Multi-page static site**: Five main HTML pages (index, seeds, fertilizers, pesticides, contact)
- **Shared navigation**: All pages use identical `<nav>` structure with logo, menu, and active state styling
- **Navigation pattern**: Links use `class="active"` on the current page's nav item (e.g., `<li><a href="index.html" class="active">Home</a></li>`)
- **Shared CSS**: Single `css/style.css` stylesheet referenced in all pages via relative path `<link rel="stylesheet" href="css/style.css">`

### Common Page Template
Each product page (seeds, fertilizers, pesticides) follows this pattern:
1. Navigation bar
2. `<section class="page-header">` with title and subtitle
3. `<section class="products">` with product grid
4. Product cards with image, name, description, and price in `<price>` tags
5. Footer with copyright

### Key Components
- **Slideshow** ([index.html](index.html)): Hero section with carousel of 3 background images cycling every 5 seconds
- **Contact form** ([contact.html](contact.html)): Form with name, email, subject, message fields
- **Product grid**: Reusable grid layout with product cards across all product pages

## Styling Conventions

### Color Scheme
- **Primary nav color**: `#2c5f2d` (green, reflects agricultural theme)
- **Text**: `#333` (dark gray)
- **Background**: `#f4f4f4` (light gray)
- **Buttons**: Use `class="btn"` for consistent styling

### Layout Patterns
- **Container max-width**: `1200px` for desktop optimization
- **Flexbox**: Primary layout tool for navigation and product grids
- **Responsive**: Uses viewport meta tag `content="width=device-width, initial-scale=1.0"`
- **Sticky nav**: Navigation has `position: sticky; top: 0; z-index: 100`

## JavaScript Conventions

### Slideshow Implementation ([assets/js/slideshow.js](assets/js/slideshow.js))
- Uses vanilla JavaScript, no frameworks
- Cycles through elements with `class="slide"` and `class="fade"`
- 5-second interval: `setTimeout(showSlides, 5000)`
- Initializes on `DOMContentLoaded` event
- No image preloading or transition effects currently implemented

### Form Handling
- Contact form uses event listener on `submit` (implementation incomplete)
- Currently only implements form structure, not backend submission
- Client-side validation not yet implemented

## Asset References
- **Logo**: `assets/aos-logo.png`
- **Images**: References `assets/sino1.jpg`, `assets/sino2.jpg`, `assets/bg1.jpg`, `assets/bg2.jpg`, `assets/bg3.jpg`
- **Note**: Assets directory is empty; image files are not in repository (likely managed separately or placeholders)

## Development Notes

### File Structure
```
/workspaces/sinomart-online/
├── index.html
├── seeds.html
├── fertilizers.html
├── pesticides.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── slideshow.js
└── assets/  (empty - images managed elsewhere)
```

### Common Issues to Watch
- All relative paths assume files are run from root directory (e.g., `href="css/style.css"`)
- Inconsistent asset path patterns: `assets/aos-logo.png` vs `src="assets/sino1.jpg"` in different pages
- Contact form submission handler incomplete (stops after event listener setup)
- No form validation currently implemented

### When Adding New Features
1. Update nav menu in ALL pages if adding new navigation links
2. Use `class="active"` on the current page's nav link
3. Follow existing product card structure in [seeds.html](seeds.html) when adding new products
4. Keep responsive design: maintain max-width container and flexbox layouts
5. Reference images in `assets/` folder (create actual image files if adding new images)

## Related Files
- Navigation & typography: [css/style.css](css/style.css)
- Page transitions & DOM interaction: [assets/js/slideshow.js](assets/js/slideshow.js)
- Primary index page with hero: [index.html](index.html)
