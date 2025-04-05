// Scroll reveal effect
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  const windowHeight = window.innerHeight;

  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("visible");
    }
  });
}

// Back to top button
const backToTopBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  revealOnScroll();
  backToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dark mode toggle
const toggleThemeBtn = document.getElementById("toggleTheme");
const body = document.body;

function loadTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
  }
}

toggleThemeBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  const currentTheme = body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", currentTheme);
});

// Music toggle
const bgMusic = document.getElementById("bgMusic");
const toggleMusicBtn = document.getElementById("toggleMusic");

toggleMusicBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    toggleMusicBtn.textContent = "🔊";
  } else {
    bgMusic.pause();
    toggleMusicBtn.textContent = "🔇";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  loadTheme();
  revealOnScroll();
});
