const tabs = document.getElementsByClassName("tab");
const panels = document.getElementsByClassName("panel");
const accordionHeaders = document.getElementsByClassName("accordion-header");
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", handleHamburgerClick);
for (const tab of tabs) {
  tab.addEventListener("click", handleTabClick);
}

for (const header of accordionHeaders) {
  header.addEventListener("click", handleAccordionClick);
}

/**
 * Event Handlers
 */

function handleAccordionClick(e) {
  // Set all accordion items to inactive.
  for (const header of accordionHeaders) {
    if (header !== e.currentTarget) {
      header.removeAttribute("active");
      const parent = header.parentElement;
      const content = parent.querySelector(":scope > p");
      content.classList.add("hidden");
    }
  }

  // Toggle the current item
  e.currentTarget.toggleAttribute("active");
  const parent = e.currentTarget.parentElement;
  const content = parent.querySelector(":scope > p");
  content.classList.toggle("hidden");
}

function handleHamburgerClick() {
  hamburger.classList.toggle("open");
  nav.classList.toggle("hidden");
}

function handleTabClick(e) {
  const targetKey = e.target.getAttribute("key"); // The key for the tab you clicked on.

  // Apple the styling to the selected tab.
  for (const tab of tabs) {
    if (tab.hasAttribute("active")) {
      tab.toggleAttribute("active");
    }
    if (tab.getAttribute("key") === targetKey) {
      tab.toggleAttribute("active");
    }
  }

  // Switch to the correct panel
  for (const panel of panels) {
    if (panel.getAttribute("key") === targetKey) {
      panel.classList.remove("hidden");
    } else {
      panel.classList.add("hidden");
    }
  }
}
