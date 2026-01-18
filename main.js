// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});
document.querySelectorAll(".service-card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("active");
  });
});


// DARK MODE TOGGLE
const checkboxToggle = document.getElementById("checkbox-toggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  checkboxToggle.checked = true;
}

// Listen for toggle
checkboxToggle.addEventListener("change", () => {
  body.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    body.classList.contains("dark") ? "dark" : "light"
  );
});

// HAMBURGER MENU
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  if (mobileMenu.style.right === "0px") {
    mobileMenu.style.right = "-100%";
  } else {
    mobileMenu.style.right = "0px";
  }
});

// Close mobile menu when link clicked
document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.style.right = "-100%";
    hamburger.classList.remove("active");
  });
});



