
const items = document.querySelectorAll(
  ".section-title,.book-text p,.story-image,.story-content,.quote,.trailer-step,.gallery-item,.fact"
);

items.forEach(el => el.classList.add("fade-in"));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.15 });

items.forEach(el => observer.observe(el));

function startTrailer() {
  document.getElementById("trailer").scrollIntoView({
    behavior: "smooth"
  });
}

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  navbar.style.boxShadow = window.scrollY > 50
    ? "0 5px 30px rgba(0,0,0,.08)"
    : "none";
});
