// post.js

(function () {
  const slug = new URLSearchParams(location.search).get("slug");

  const titleEl = document.getElementById("postTitle");
  const metaEl = document.getElementById("postMeta");
  const container = document.getElementById("postContainer");

  if (!slug) {
    titleEl.textContent = "Post not found";
    container.innerHTML = "<p>No post slug provided.</p>";
    return;
  }

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    titleEl.textContent = "Post not found";
    container.innerHTML = "<p>This post does not exist.</p>";
    return;
  }

  titleEl.textContent = post.title;
  metaEl.textContent = `${post.category} · ${post.readTime}`;
  container.innerHTML = post.body.map((p) => `<p>${p}</p>`).join("");
  document.title = `${post.title} – Your Name Photography`;
})();
