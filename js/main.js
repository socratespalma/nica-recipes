// nav toggle -> select button and links
const navToggle = document.querySelector("#navToggle");
const nav = document.querySelector("#nav-links");
const hamburger = document.querySelector(".menu");
const close = document.querySelector(".close");

// add event listener
navToggle.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  hamburger.classList.toggle("hide");
  close.classList.toggle("show");
});
