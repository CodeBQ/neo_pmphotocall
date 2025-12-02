// portfolio.js

function applySiteConfig() {
  if (!window.SITE_CONFIG) return;

  const { photographerName } = SITE_CONFIG;
  const logoEl = document.getElementById("siteLogo");

  if (logoEl) {
    logoEl.textContent = `${photographerName} Photography`;
  }
}

function setCopyrightYear() {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

function renderPortfolio() {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("portfolio") || "portfolio1";
  const portfolio = PORTFOLIOS[slug];

  const titleEl = document.getElementById("portfolioTitle");
  const categoryEl = document.getElementById("portfolioCategory");
  const descriptionEl = document.getElementById("portfolioDescription");
  const galleryEl = document.getElementById("portfolioGallery");
  const errorEl = document.getElementById("portfolioError");

  if (!portfolio) {
    if (errorEl) {
      errorEl.textContent =
        "We couldn't find that portfolio. Try another link from the homepage.";
      errorEl.hidden = false;
    }
    if (galleryEl) {
      galleryEl.innerHTML = "";
    }
    if (titleEl) {
      titleEl.textContent = "Portfolio not found";
    }
    document.title = "Portfolio not found";
    return;
  }

  document.title = `${portfolio.title} – Portfolio`;

  if (titleEl) titleEl.textContent = portfolio.title;
  if (categoryEl) categoryEl.textContent = portfolio.category;
  if (descriptionEl) descriptionEl.textContent = portfolio.description;
  if (errorEl) errorEl.hidden = true;

  if (galleryEl) {
    galleryEl.innerHTML = "";

    portfolio.images.forEach((src, index) => {
      const figure = document.createElement("figure");
      figure.className = "portfolio-shot";

      console.log(src);
      console.log("res:-" + resolvePortfolioImages(slug));

      const img = document.createElement("img");
      img.src = resolvePortfolioImages(slug)[index];
      img.alt = `${portfolio.title} – image ${index}`;

      const caption = document.createElement("figcaption");
      caption.textContent = `Frame ${index + 1} from ${portfolio.title}`;

      figure.appendChild(img);
      figure.appendChild(caption);
      galleryEl.appendChild(figure);
    });
  }
}

applySiteConfig();
setCopyrightYear();
renderPortfolio();
