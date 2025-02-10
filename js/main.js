function toggleMenu() {
  const siteHeader = document.querySelector(".js-header");
  const showMenuBtn = siteHeader?.querySelector(".js-hamburg-btn");

  if (!siteHeader || !showMenuBtn) return;

  siteHeader.classList.toggle("show-menu");
  document.body.classList.toggle("no-scroll");
}

document.addEventListener("DOMContentLoaded", () => {
  const showMenuBtn = document.querySelector(".js-hamburg-btn");
  if (showMenuBtn) {
      showMenuBtn.addEventListener("click", toggleMenu);
  }
});
