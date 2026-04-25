const menuToggle = document.querySelector(".mockup-menu-toggle");
const mobileNav = document.querySelector("#mobile-nav");
const revealItems = document.querySelectorAll("[data-reveal]");

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

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  revealItems.forEach((item) => {
    revealObserver.observe(item);
  });
} else {
  revealItems.forEach((item) => {
    item.classList.add("is-visible");
  });
}
