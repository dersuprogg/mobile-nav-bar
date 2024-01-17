const hamburgerBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close-btn");
const header = document.querySelector(".header");

hamburgerBtn.addEventListener("click", () => {
  header.classList.add("nav-open");
});

closeBtn.addEventListener("click", () => {
  header.classList.remove("nav-open");
});
