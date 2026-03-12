const texts = [
  "Welcome to Our Website",
  "Discover Amazing Benefits",
  "Check Out Specifications",
  "Learn How It Works",
  "Get in Touch Today"
];

let index = 0;
const textElement = document.getElementById("changing-text");

function changeText() {
  // fade out
  textElement.style.opacity = 0;

  setTimeout(() => {
    textElement.textContent = texts[index];
    textElement.style.opacity = 1; // fade in
    index = (index + 1) % texts.length;
  }, 1000); // wait for fade-out before changing
}

setInterval(changeText, 4000); // change every 4 seconds