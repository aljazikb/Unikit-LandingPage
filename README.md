# UniKit

الجازي هنا

Arabic (RTL) student-store landing page — React, Tailwind CSS v4, Vite.

## Commands

| Command           | What it does              |
| ----------------- | ------------------------- |
| `npm run dev`     | Start the dev server      |
| `npm run build`   | Production build to `dist`|
| `npm run preview` | Serve the production build|
| `npm run lint`    | Lint with oxlint          |

## Structure

```
.
├── index.html               # Entry HTML (lang="ar" dir="rtl", font links)
├── vite.config.js           # Vite + React + Tailwind plugins
├── public/                  # Static files served as-is (favicon, images/)
└── src/
    ├── main.jsx             # React mount point
    ├── App.jsx              # Page composition: layout + sections in order
    ├── index.css            # Tailwind import, theme tokens (colors, fonts), base styles, helpers
    ├── components/
    │   ├── layout/          # Site chrome shown on every page: Header, Footer
    │   ├── sections/        # Page-specific blocks: Loader, Hero, InfoRow, ProductGrid, Statement
    │   └── ui/              # Small reusable pieces: ProductCard
    └── data/                # Content as plain data: products.js, footer.js, loader.js
```

## Conventions

- Styling is Tailwind utility classes in the JSX; shared design tokens live in `@theme` in `src/index.css`.
- Text content and lists belong in `src/data/`, not inline in components.
- Use logical properties (`ps-`, `me-`, `start-`) for spacing/positioning so RTL keeps working.
