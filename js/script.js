const btn = document.getElementById("menu-btn");
console.log(btn);
const nav = document.getElementById("menu");
console.log(nav);
btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");
});
