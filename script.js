// Select elements
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

// Toggle navigation menu
function toggleNav() {
  // Toggle menu active class
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("active");

  // Update aria-expanded attribute for accessibility
  const isExpanded = navLinks.classList.contains("open");
  hamburger.setAttribute("aria-expanded", isExpanded);

  // Animate links
  links.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.3
      }s`;
    }
  });
}

// Add event listener to hamburger button
hamburger.addEventListener("click", toggleNav);

// Close menu when a nav link is clicked
links.forEach((link) => {
  link.addEventListener("click", () => {
    if (navLinks.classList.contains("open")) {
      toggleNav();
    }
  });
});

// Close menu when clicking outside navigation
document.addEventListener("click", (e) => {
  if (!e.target.closest(".navbar") && navLinks.classList.contains("open")) {
    toggleNav();
  }
});
