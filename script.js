
(function () {
  // Automatically update the copyright year
  const yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  // Dark and light mode settings
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  const storageKey = "profile-theme";

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");

      if (toggle) {
        toggle.setAttribute("aria-pressed", "true");
        toggle.textContent = "Light mode";
      }

      return;
    }

    root.removeAttribute("data-theme");

    if (toggle) {
      toggle.setAttribute("aria-pressed", "false");
      toggle.textContent = "Dark mode";
    }
  }

  // Check saved theme preference
  const saved = localStorage.getItem(storageKey);
  const prefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  applyTheme(saved || (prefersDark ? "dark" : "light"));

  // Switch between dark and light mode
  if (toggle) {
    toggle.addEventListener("click", function () {
      const next =
        root.getAttribute("data-theme") === "dark"
          ? "light"
          : "dark";

      localStorage.setItem(storageKey, next);
      applyTheme(next);
    });
  }

  // Test that JavaScript is connected
  console.log("JavaScript connected");
})();
