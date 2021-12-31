// DOM selectors
const navToggle = document.querySelector("#navToggle");
const nav = document.querySelector("#nav-links");
const hamburger = document.querySelector(".menu");
const close = document.querySelector(".close");
const submitBtn = document.querySelector(".submit");

// functions
// toggles navbar while clicking hamburger button
const toggleNav = () => {
  nav.classList.toggle("nav-open");
  hamburger.classList.toggle("hide");
  close.classList.toggle("show");
};

// prevents reloading the page
const handleSubmit = (e) => {
  e.preventDefault();
};

// callbacks
navToggle.addEventListener("click", toggleNav);
submitBtn.addEventListener("click", handleSubmit);
