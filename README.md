# Lalini's Birthday Website

This site is built with React and Vite. The production build is a set of static HTML, CSS, JavaScript, and image files, which GitHub Pages can host as a regular website.

## Run locally

```sh
npm install
npm run dev
```

## Publish on GitHub Pages

1. Push this project to a GitHub repository.
2. In the repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
3. Push to the `main` branch. The workflow in `.github/workflows/deploy.yml` builds and publishes the site.
4. After the workflow finishes, open the website URL shown in **Settings → Pages**. It will look like `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`.

The repository link (`github.com/...`) displays the source code; the Pages link (`github.io/...`) displays the website.

