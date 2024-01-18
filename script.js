const hamburgerBtn = document.querySelector(".hamburger");
const closeBtn = document.querySelector(".close-btn");
const header = document.querySelector(".header");

hamburgerBtn.addEventListener("click", () => {
  header.classList.add("nav-open");
});

closeBtn.addEventListener("click", () => {
  header.classList.remove("nav-open");
});

const contactLink = document.querySelector(".nav-list li:nth-child(3)");
contactLink.addEventListener("click", (e) => {
  e.preventDefault();
  const sectionEl = e.target.getAttribute("href");
  document.querySelector(sectionEl).scrollIntoView({ behavior: "smooth" });
});
