'use strict';



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

navToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    navToggleBtn.classList.toggle("active");
  });
}



/**
 * header
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

// Hero form variables
const heroForm = document.querySelector("[data-hero-form]");
const heroFormInput = document.querySelector("[data-hero-form-input]");
const successMessage = document.getElementById("hero-success-message");

// Listen for form submit
heroForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the default form submission

  // Check if the form is valid
  if (heroForm.checkValidity()) {
    // Show success message
    successMessage.style.display = "block";

    // Clear the form input field
    heroFormInput.value = "";

    // Hide the success message after 3 seconds
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 3000);
  }
});
