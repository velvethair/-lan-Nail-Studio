// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});


// Scroll animation
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.15
  }
);

sections.forEach(section => {
  observer.observe(section);
});


// Automatic current year
const copyright = document.querySelector(".copyright");

if (copyright) {
  copyright.textContent =
    `© ${new Date().getFullYear()} Luna Nails. Сите права се задржани.`;
}
