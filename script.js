// Tabs logic
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");

function activate(tabId) {
  tabs.forEach(t => t.classList.toggle("is-active", t.dataset.tab === tabId));
  panels.forEach(p => p.classList.toggle("is-active", p.id === tabId));
  // optional: keep URL hash
  history.replaceState(null, "", `#${tabId}`);
}

tabs.forEach(t => {
  t.addEventListener("click", () => activate(t.dataset.tab));
});

// Load tab from URL hash (so you can share a link like .../#v3)
const initial = (location.hash || "#home").replace("#", "");
activate(initial);

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
