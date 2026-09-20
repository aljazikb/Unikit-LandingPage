// Prefixes a file in public/ with the site's base path, so images still load when the site
// is served from a sub-path (GitHub Pages: /Unikit-LandingPage/) instead of the domain root.
export const asset = (path) => import.meta.env.BASE_URL + path.replace(/^\//, '')
