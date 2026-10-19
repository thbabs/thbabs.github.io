(function () {
  var root = document.documentElement;
  var button = document.getElementById("theme-toggle");
  if (!button) return;

  function label(theme) {
    button.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
    );
  }

  label(root.getAttribute("data-theme") === "dark" ? "dark" : "light");

  button.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (error) {
      /* Private mode can block storage. The toggle still works for this visit. */
    }
    label(next);
  });

  var media = window.matchMedia("(prefers-color-scheme: dark)");
  function onSystemChange(event) {
    var stored = null;
    try {
      stored = localStorage.getItem("theme");
    } catch (error) {
      stored = null;
    }
    if (stored === "light" || stored === "dark") return;
    var theme = event.matches ? "dark" : "light";
    root.setAttribute("data-theme", theme);
    label(theme);
  }
  if (typeof media.addEventListener === "function") {
    media.addEventListener("change", onSystemChange);
  }
})();

(function () {
  var button = document.getElementById("menu-toggle");
  var menu = document.getElementById("site-menu");
  if (!button || !menu) return;

  function setOpen(open) {
    button.setAttribute("aria-expanded", open ? "true" : "false");
    button.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menu.classList.toggle("is-open", open);
  }

  button.addEventListener("click", function () {
    setOpen(button.getAttribute("aria-expanded") !== "true");
  });

  menu.addEventListener("click", function (event) {
    if (event.target.closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key !== "Escape" || button.getAttribute("aria-expanded") !== "true") return;
    setOpen(false);
    button.focus();
  });

  var narrow = window.matchMedia("(max-width: 40rem)");
  function closeOnDesktop() {
    if (!narrow.matches) setOpen(false);
  }
  if (typeof narrow.addEventListener === "function") {
    narrow.addEventListener("change", closeOnDesktop);
  }
})();
