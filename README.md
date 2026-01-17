# rwhitmire.com

Personal blog rebuilt with Astro, Tailwind CSS, and dark mode support.

## Features

- ✨ Modern Astro-based static site
- 🎨 Tailwind CSS for styling
- 🌙 Dark mode support with persistent theme preference
- 📝 All blog posts migrated from Jekyll with preserved permalinks
- 📡 RSS feed at `/feed.xml`
- 🚀 Ready for GitHub Pages deployment

## Development

```bash
npm install
npm run dev
```

Visit `http://localhost:4321` to see your site.

## Build

```bash
npm run build
```

The build output will be in the `dist/` directory.

## Deployment to GitHub Pages

This site is configured to deploy automatically to GitHub Pages via GitHub Actions when you push to the `main` or `master` branch.

1. Make sure your repository is set up with GitHub Pages enabled
2. Push your code to the `main` or `master` branch
3. The GitHub Action will automatically build and deploy your site

The workflow file is located at `.github/workflows/deploy.yml`.

## Blog Posts

Blog posts are stored in `src/content/blog/` as markdown files. The permalink structure follows Jekyll's format: `/YYYY/MM/DD/title/`.

## Customization

- **Site title/description**: Update `src/pages/index.astro` and `src/pages/feed.xml.ts`
- **Styling**: Modify `src/styles/global.css` and use Tailwind classes
- **Layouts**: Edit files in `src/layouts/`
- **Components**: Edit files in `src/components/`
