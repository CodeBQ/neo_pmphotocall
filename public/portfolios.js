// portfolios.js
// Portfolio data with a shared base path and per-portfolio image lists.

const PORTFOLIO_BASE_PATH = "images/portfolios/";

const PORTFOLIOS = {
  portfolio1: {
    title: "Sn 110 Cards",
    category: "Product Pictures",
    description:
      "Soft backlight portraits, window-lit studio frames, and a few cinematic street studies in one set.",
    images: [
      "sn-u-110 cards.webp",
      "sn-u-110 cards2.webp",
      "sn-u-110 cards3.webp",
      "sn-u-110 cards4.webp",
    ],
  },
  portfolio2: {
    title: "City After Dark",
    category: "Street",
    description:
      "Neon signs, crosswalk silhouettes, and long exposures of late-night avenues.",
    images: ["shot1.svg", "shot2.svg", "shot3.svg"],
  },
  portfolio_night_skies: {
    title: "Night Skies",
    category: "Landscapes",
    description:
      "Foggy mornings, rocky shores, and pastel sunsets along the coastline.",
    images: ["Night_sky_land.jpg", "Night_sky_moon.jpg"],
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
