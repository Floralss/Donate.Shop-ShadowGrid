// ==============================
// КОПИРОВАНИЕ IP СЕРВЕРА
// ==============================
function copyIp() {
  const ip = document.getElementById("server-ip");
  if (!ip) return;

  navigator.clipboard.writeText(ip.textContent);

  const toast = document.getElementById("toast");
  if (toast) {
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2000);
  }
}

// ==============================
// ПОДСТАНОВКА НАЗВАНИЯ ДОНАТА
// Берётся из ссылки ?rank=...
// ==============================
function setSelectedRank() {
  const params = new URLSearchParams(window.location.search);
  const rank = params.get("rank");
  const rankBox = document.getElementById("selected-rank");

  if (rank && rankBox) {
    rankBox.textContent = rank;
  }
}

// ==============================
// ФЕЙКОВЫЙ ОНЛАЙН ОТ 0 ДО 10
// ==============================
function fakeOnline() {
  const online = document.getElementById("players-online");
  if (!online) return;

  let value = Math.floor(Math.random() * 11);
  online.textContent = value;

  setInterval(() => {
    value = Math.floor(Math.random() * 11);
    online.textContent = value;
  }, 3000);
}

// ==============================
// АНИМАЦИЯ ПЕРЕХОДА МЕЖДУ СТРАНИЦАМИ
// ==============================
function initPageTransition() {
  const transition = document.getElementById("page-transition");
  if (!transition) return;

  document.querySelectorAll("a[href]").forEach((link) => {
    const href = link.getAttribute("href");

    if (
      !href ||
      href.startsWith("#") ||
      href.startsWith("mailto:") ||
      href.startsWith("tel:") ||
      link.target === "_blank"
    ) {
      return;
    }

    link.addEventListener("click", function (e) {
      const url = this.getAttribute("href");
      if (!url) return;

      e.preventDefault();
      transition.classList.add("active");

      setTimeout(() => {
        window.location.href = url;
      }, 450);
    });
  });
}

// ==============================
// ЗАПУСК ВСЕГО ПОСЛЕ ЗАГРУЗКИ
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  setSelectedRank();
  fakeOnline();
  initPageTransition();
});