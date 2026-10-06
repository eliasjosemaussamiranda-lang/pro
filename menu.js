const menuButton = document.querySelector(".menu-toggle");
const siteMenu = document.querySelector("#site-menu");
let closeMenuTimer;

function closeMenu() {
  window.clearTimeout(closeMenuTimer);
  siteMenu.hidden = true;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Abrir menú");
}

menuButton.addEventListener("click", () => {
  if (!siteMenu.hidden) {
    closeMenu();
    return;
  }

  siteMenu.hidden = false;
  menuButton.setAttribute("aria-expanded", "true");
  menuButton.setAttribute("aria-label", "Cerrar menú");
  closeMenuTimer = window.setTimeout(closeMenu, 5000);
});

siteMenu.addEventListener("click", (event) => {
  if (event.target.closest("[data-menu-link]")) {
    closeMenu();
  }
});

document.addEventListener("click", (event) => {
  if (!siteMenu.hidden && !siteMenu.contains(event.target) && !menuButton.contains(event.target)) {
    closeMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMenu();
  }
});
