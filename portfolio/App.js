// ===== Mobile Navbar Toggle =====
const navToggleBtn = document.createElement("button");
navToggleBtn.innerHTML = "☰";
navToggleBtn.classList.add("nav-toggle");
document.querySelector(".navbar").appendChild(navToggleBtn);

const navLinks = document.querySelector(".nav-links");

navToggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// ===== Contact Form Handling =====
const contactForm = document.querySelector(".contact form");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  
  const name = contactForm.querySelector("input[type='text']").value;
  const email = contactForm.querySelector("input[type='email']").value;
  const message = contactForm.querySelector("textarea").value;

  if (!name || !email || !message) {
    alert("⚠️ Please fill in all fields!");
    return;
  }

  alert(`✅ Thanks ${name}, your message has been sent!`);
  contactForm.reset();
});
const typedText = ["Web Developer", "Frontend Enthusiast"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;
const speed = 100;

function type() {
  const heroSpan = document.querySelector(".hero span");
  if (!isDeleting && j < typedText[i].length) {
    currentText += typedText[i][j];
    j++;
    heroSpan.textContent = currentText;
  } else if (isDeleting && j > 0) {
    currentText = currentText.slice(0, -1);
    j--;
    heroSpan.textContent = currentText;
  } else if (!isDeleting && j === typedText[i].length) {
    isDeleting = true;
    setTimeout(type, 1000);
    return;
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % typedText.length;
  }
  setTimeout(type, isDeleting ? speed / 2 : speed);
}
type();
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  observer.observe(section);
});
