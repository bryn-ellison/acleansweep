const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
const menuLink = document.querySelector(".menu-link");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

menu.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
