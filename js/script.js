const menuToggle = document.querySelector(".menu-toggle");
const menuOverlay = document.querySelector(".menu-overlay");
const menuLinks = document.querySelectorAll(".menu-nav a");

function setMenu(open) {
  if (!menuToggle || !menuOverlay) return;

  menuToggle.setAttribute("aria-expanded", String(open));
  menuOverlay.classList.toggle("is-open", open);
  document.body.classList.toggle("menu-open", open);
  menuOverlay.setAttribute("aria-hidden", String(!open));
}

if (menuToggle && menuOverlay) {
  menuToggle.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") !== "true";
    setMenu(open);
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });
}

document.querySelectorAll("form[data-demo-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const message = form.querySelector(".form-message");
    if (message) {
      message.textContent =
        "Demo only: your form is working visually. We can connect it to email or a booking service next.";
    }

    form.reset();
  });
});
