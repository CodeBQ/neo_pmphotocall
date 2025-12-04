// app.js

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-scroll-target]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const selector = btn.getAttribute("data-scroll-target");
    document.querySelector(selector).scrollIntoView({ behavior: "smooth" });
  });
});

const statusText = document.getElementById("statusText");
const statusToggle = document.getElementById("statusToggle");

if (statusToggle) {
  const states = [
    "Personal project: Night streets on 35mm film.",
    "On assignment: Portrait series in natural window light."
  ];
  let idx = 0;
  statusToggle.onclick = () => {
    idx = (idx + 1) % states.length;
    statusText.textContent = states[idx];
  };
}

function normalizeCategory(category) {
  return (category || "uncategorized").toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function renderPortfolioFilters() {
  const filtersEl = document.getElementById("portfolioFilters");
  const portfolios = typeof PORTFOLIOS !== "undefined" ? PORTFOLIOS : undefined;
  if (!filtersEl || !portfolios) return;

  const categories = Array.from(
    new Set(
      Object.values(portfolios)
        .map((portfolio) => portfolio.category)
        .filter(Boolean)
    )
  );

  const createButton = (label, filterValue, isActive = false) => {
    const btn = document.createElement("button");
    btn.className = `filter-btn${isActive ? " active" : ""}`;
    btn.dataset.filter = filterValue;
    btn.textContent = label;
    return btn;
  };

  filtersEl.innerHTML = "";
  filtersEl.appendChild(createButton("All", "all", true));
  categories.forEach((category) => {
    filtersEl.appendChild(createButton(category, normalizeCategory(category)));
  });
}

function renderPortfolioGrid() {
  const gridEl = document.getElementById("portfolioGrid");
  const portfolios = typeof PORTFOLIOS !== "undefined" ? PORTFOLIOS : undefined;
  if (!gridEl || !portfolios) return;

  gridEl.innerHTML = "";

  const resolveImages =
    typeof resolvePortfolioImages === "function"
      ? resolvePortfolioImages
      : (slug) => {
          const entry = portfolios[slug];
          const basePath =
            typeof PORTFOLIO_BASE_PATH === "string" ? PORTFOLIO_BASE_PATH : "";
          if (!entry) return [];
          return (entry.images || []).map((fileName) => `${basePath}${slug}/${fileName}`);
        };

  Object.entries(portfolios).forEach(([slug, portfolio]) => {
    const categoryKey = normalizeCategory(portfolio.category);
    const thumbImage = resolveImages(slug)[0];

    const article = document.createElement("article");
    article.className = "portfolio-item";
    article.dataset.category = categoryKey;

    const link = document.createElement("a");
    link.className = "thumb portfolio-link";
    link.href = `portfolio.html?portfolio=${slug}`;
    if (thumbImage) {
      link.style.backgroundImage = `url('${thumbImage}')`;
    }

    const info = document.createElement("div");
    info.className = "portfolio-info";
    info.innerHTML = `
      <h3><a class="portfolio-link" href="portfolio.html?portfolio=${slug}">${portfolio.title}</a></h3>
      <p>${portfolio.description}</p>
      <span class="tag">${portfolio.category}</span>
    `;

    article.appendChild(link);
    article.appendChild(info);
    gridEl.appendChild(article);
  });
}

function setupPortfolioFiltering() {
  const filterButtons = document.querySelectorAll("#portfolioFilters .filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  filterButtons.forEach((button) => {
    button.onclick = () => {
      const filter = button.dataset.filter;

      filterButtons.forEach((b) => b.classList.remove("active"));
      button.classList.add("active");

      portfolioItems.forEach((item) => {
        const cats = item.dataset.category.split(" ");
        item.style.display = filter === "all" || cats.includes(filter) ? "" : "none";
      });
    };
  });
}

// BLOG LIST RENDERING
function renderBlogList() {
  const list = document.getElementById("blogList");
  BLOG_POSTS.forEach((post) => {
    const el = document.createElement("article");
    el.className = "card blog-card";
    el.innerHTML = `
      <h3>${post.title}</h3>
      <p class="meta">${post.category} · ${post.readTime}</p>
      <p>${post.excerpt}</p>
      <div class="blog-card-actions">
        <button class="btn-link" data-preview-slug="${post.slug}">Read preview</button>
        <a href="post.html?slug=${post.slug}" class="btn-link">Read full post →</a>
      </div>
    `;
    list.appendChild(el);
  });
}

function setupBlogPreview() {
  const previewEl = document.getElementById("blogPreview");
  document.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-preview-slug]");
    if (!btn) return;

    const slug = btn.dataset.previewSlug;
    const post = BLOG_POSTS.find((p) => p.slug === slug);

    previewEl.innerHTML = `
      <h3>${post.title}</h3>
      ${post.preview.split("\n\n").map((p) => `<p>${p}</p>`).join("")}
    `;

    previewEl.scrollIntoView({ behavior: "smooth" });
  });
}

// --- Apply global SITE_CONFIG to the page ---
function applySiteConfig() {
  if (!window.SITE_CONFIG) return;

  const { photographerName, tagline, city, socials } = SITE_CONFIG;

  const logoEl = document.getElementById("siteLogo");
  const taglineEl = document.getElementById("heroTagline");
  const cityEl = document.getElementById("aboutCity");
  const socialLinksEl = document.getElementById("socialLinks");

  if (logoEl) logoEl.textContent = `${photographerName} Photography`;
  if (taglineEl) taglineEl.textContent = tagline;
  if (cityEl) cityEl.textContent = city;

  if (socialLinksEl) {
    socialLinksEl.innerHTML = `
      ${socials.instagram ? `<a href="${socials.instagram}" target="_blank">Instagram</a>` : ""}
      ${socials.youtube ? `<a href="${socials.youtube}" target="_blank">YouTube</a>` : ""}
      ${socials.twitter ? `<a href="${socials.twitter}" target="_blank">Twitter</a>` : ""}
      ${socials.email ? `<a href="${socials.email}">Email</a>` : ""}
    `;
  }
}

// Call once on page load
applySiteConfig();
renderPortfolioFilters();
renderPortfolioGrid();
setupPortfolioFiltering();
renderBlogList();
setupBlogPreview();

// CONTACT FORM
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
  contactForm.onsubmit = (e) => {
    e.preventDefault();
    const name = contactForm.name.value.trim() || "friend";
    formStatus.textContent = `Thanks, ${name}! Your message has been recorded (demo only).`;
    contactForm.reset();
  };
}
