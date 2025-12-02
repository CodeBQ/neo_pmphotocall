// portfolios.js
// Portfolio data with a shared base path and per-portfolio image lists.

const PORTFOLIO_BASE_PATH = "images/portfolios/";

const PORTFOLIOS = {
  portfolio1: {
    title: "Golden Hour Portraits",
    category: "Portraits",
    description:
      "Soft backlight portraits, window-lit studio frames, and a few cinematic street studies in one set.",
    images: ["shot1.svg", "shot2.svg", "shot3.svg"],
  },
  portfolio2: {
    title: "City After Dark",
    category: "Street",
    description: "Neon signs, crosswalk silhouettes, and long exposures of late-night avenues.",
    images: ["frame1.svg", "frame2.svg", "frame3.svg", "frame4.svg"],
  },
  portfolio3: {
    title: "Coastal Light",
    category: "Landscapes",
    description: "Foggy mornings, rocky shores, and pastel sunsets along the coastline.",
    images: ["coast-1.svg", "coast-2.svg", "coast-3.svg"],
  },
};

/**
 * Build the absolute image URLs for a portfolio by combining the shared base path,
 * the portfolio slug (from the search parameter), and the file names in that entry.
 *
 * @param {string} slug - The portfolio identifier, e.g. "portfolio1".
 * @returns {string[]} - An array of image URLs for the requested portfolio.
 */
function resolvePortfolioImages(slug) {
  const entry = PORTFOLIOS[slug];
  if (!entry) return [];
  const folder = `${PORTFOLIO_BASE_PATH}${slug}/`;
  return entry.images.map((fileName) => `${folder}${fileName}`);
}
