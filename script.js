// Select necessary elements from the DOM
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li a"); // Select anchors directly for click event

/**
 * Toggles the navigation menu open/closed.
 * Adds/removes 'open' class to navLinks and 'active' class to hamburger.
 * Updates aria-expanded attribute for accessibility.
 */
function toggleNav() {
  // Toggle classes to show/hide menu and change hamburger icon
  navLinks.classList.toggle("open");
  hamburger.classList.toggle("active");

  // Update aria-expanded attribute based on menu state
  const isExpanded = navLinks.classList.contains("open");
  hamburger.setAttribute("aria-expanded", isExpanded);

  // --- Link animation logic removed as keyframes are missing in CSS ---
  // If you want the animation, uncomment the logic below
  // AND add the @keyframes navLinkFade rule to styles.css

  /*
  links.forEach((link, index) => {
    const listItem = link.parentElement; // Get the parent LI for animation target
    if (listItem.style.animation) {
      listItem.style.animation = "";
    } else {
      if (navLinks.classList.contains("open")) { // Only animate when opening
         listItem.style.animation = `navLinkFade 0.5s ease forwards ${
           index / 7 + 0.3
         }s`;
      }
    }
  });
  */
}

// --- Event Listeners ---

// Add click event listener to the hamburger button
if (hamburger && navLinks) {
  // Check if elements exist before adding listener
  hamburger.addEventListener("click", toggleNav);
} else {
  console.error("Hamburger menu or navigation links element not found!");
}

// Add click event listener to each navigation link to close the menu
links.forEach((link) => {
  link.addEventListener("click", () => {
    // Check if the menu is open before trying to close it
    if (navLinks.classList.contains("open")) {
      toggleNav();
    }
  });
});

// Add click event listener to the document to close menu when clicking outside
document.addEventListener("click", (e) => {
  // Check if the menu is open AND if the click was outside the navbar
  if (
    navLinks.classList.contains("open") &&
    !e.target.closest(".navbar") // Ensure click is not within the navbar itself
  ) {
    toggleNav();
  }
});

// Optional: Close menu on 'Escape' key press
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navLinks.classList.contains("open")) {
    toggleNav();
  }
});
