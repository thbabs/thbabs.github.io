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
