const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", handleHamburgerClick);

function handleHamburgerClick() {
  hamburger.classList.toggle("open");
  nav.classList.toggle("hidden");
}
