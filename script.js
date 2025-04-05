document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.createElement("button");
  toggleBtn.className = "toggle-darkmode";
  toggleBtn.textContent = "🌙 Dark Mode";
  document.body.appendChild(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});


// Counter animation
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  counters.forEach(counter => {
    counter.innerText = "0";
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = target / 100;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll('.feature-box');
  const reveal = () => {
    boxes.forEach(box => {
      const rect = box.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        box.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', reveal);
  reveal(); // initial check
});


document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll('.feature-box');
  boxes.forEach((box, index) => {
    box.style.setProperty('--delay', `${index * 150}ms`);
  });
  const reveal = () => {
    boxes.forEach(box => {
      const rect = box.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        box.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', reveal);
  reveal();
});
