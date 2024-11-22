const texts = document.querySelectorAll(".text");
let currentIndex = 0;

function animateText() {
  // Remove active class from all texts
  texts.forEach((text) => text.classList.remove("active"));

  // Add active class to the current text
  texts[currentIndex].classList.add("active");

  // Update index to loop through the texts
  currentIndex = (currentIndex + 1) % texts.length;

  // Repeat animation every 2 seconds
  setTimeout(animateText, 2000);
}

// Start animation
animateText();
