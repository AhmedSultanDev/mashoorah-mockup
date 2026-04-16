const menuToggle = document.querySelector(".mockup-menu-toggle");
const mobileNav = document.querySelector("#mobile-nav");

if (menuToggle && mobileNav) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    mobileNav.hidden = expanded;
  });
}

document.querySelectorAll("[data-scroll-target]").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const target = document.querySelector(trigger.getAttribute("data-scroll-target"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (mobileNav && !mobileNav.hidden) {
      mobileNav.hidden = true;
      menuToggle?.setAttribute("aria-expanded", "false");
    }
  });
});
