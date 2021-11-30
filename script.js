const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  menu.classList.toggle("hidden");
  document.body.classList.toggle("no-scroll");
});
