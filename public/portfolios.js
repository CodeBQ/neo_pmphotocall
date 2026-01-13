// portfolios.js
// Portfolio data with a shared base path and per-portfolio image lists.

const PORTFOLIO_BASE_PATH = "images/portfolios/";

const PORTFOLIOS = {
  Yerevan_zorki4: {
    title: "Zorki 4 - Yerevan",
    category: "Film",
    description:
      "I bought this camera in Yerevan and tried a test shot around the city.",
    images: [
      "Boxlab26.jpg",
      "Boxlab07.jpg",
      "Boxlab08.jpg",
      "Boxlab11.jpg",
      "Boxlab12.jpg",
      "Boxlab16.jpg",
      "Boxlab17.jpg",
      "Boxlab21.jpg",
      "Boxlab22.jpg",
      "Boxlab24.jpg",
      "Boxlab25.jpg",
      "Boxlab27.jpg",
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
