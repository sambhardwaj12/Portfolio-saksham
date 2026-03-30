# Saksham Portfolio

A responsive personal portfolio website built with React, Vite, Tailwind CSS, and JavaScript.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

## Deploy to GitHub Pages

1. Create a new GitHub repository.
2. Push this project to the `main` branch of that repository.
3. Run:

```bash
npm install
npm run deploy
```

4. In your GitHub repository:
   Go to `Settings` > `Pages`.
5. Under `Build and deployment`, set the source to `Deploy from a branch`.
6. Select the `gh-pages` branch and `/ (root)` folder.
7. Save and wait a minute for GitHub Pages to publish.

Your site will then be live on the GitHub Pages URL for that repository.

## Notes

- The Vite `base` setting is configured to work correctly on GitHub Pages.
- Update the GitHub and LinkedIn placeholder links in `src/data/portfolioData.js` before deploying.
