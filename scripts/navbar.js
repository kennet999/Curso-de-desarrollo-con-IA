/**
 * Navbar · menú móvil, estado de scroll y enlace activo.
 */
(() => {
  const header = document.querySelector("[data-navbar]");
  if (!header) return;

  const toggle = header.querySelector(".nav-toggle");
  const panel = header.querySelector("[data-nav-panel]");
  if (!toggle || !panel) return;

  const links = [...panel.querySelectorAll('.nav__link[href^="#"]')];
  const sections = links
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const setMenu = (open, { focusFirst = false } = {}) => {
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    panel.classList.toggle("is-open", open);

    if (open && focusFirst) {
      panel.querySelector("a")?.focus({ preventScroll: true });
    }
  };

  const isMenuOpen = () => toggle.getAttribute("aria-expanded") === "true";

  const setActive = (id) => {
    links.forEach((link) => {
      const active = Boolean(id) && link.getAttribute("href") === `#${id}`;
      link.classList.toggle("is-active", active);

      if (active) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const updateActive = () => {
    const offset = header.offsetHeight + 96;
    let current = "";

    for (const section of sections) {
      if (section.getBoundingClientRect().top <= offset) {
        current = section.id;
      }
    }

    setActive(current);
  };

  let frame = 0;

  const onScroll = () => {
    if (frame) return;

    frame = window.requestAnimationFrame(() => {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
      updateActive();
      frame = 0;
    });
  };

  toggle.addEventListener("click", () => {
    const open = !isMenuOpen();
    setMenu(open, { focusFirst: open });
  });

  header.querySelector(".brand")?.addEventListener("click", () => {
    setMenu(false);
  });

  panel.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      setMenu(false);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isMenuOpen()) {
      setMenu(false);
      toggle.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (isMenuOpen() && !header.contains(event.target)) {
      setMenu(false);
    }
  });

  const desktop = window.matchMedia("(min-width: 861px)");
  desktop.addEventListener("change", (event) => {
    if (event.matches) {
      setMenu(false);
    }
  });

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", updateActive, { passive: true });

  onScroll();
  updateActive();
})();
