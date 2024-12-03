const images = [
  "images/slider-1.jpg",
  "images/slider-2.jpg",
  "images/slider-3.jpg",
  "images/slider-4.jpg"
];

let currentIndex = 0;

function createPixelOverlay() {
  const overlay = document.getElementById("pixelOverlay");
  overlay.innerHTML = ""; // Clear the existing overlay

  const rows = 10;
  const cols = 10;
  const totalBoxes = rows * cols;

  for (let i = 0; i < totalBoxes; i++) {
    const box = document.createElement("div");
    box.classList.add("pixel-box");

    // Calculate animation delay for a staggered effect
    const delay = (i % cols + Math.floor(i / cols) * 0.1) * 0.05;
    box.style.animationDelay = `${delay}s`;

    overlay.appendChild(box);
  }
}

function showNextImage() {
  const carouselImage = document.getElementById("carouselImage");
  currentIndex = (currentIndex + 1) % images.length; // Cycle through images
  carouselImage.src = images[currentIndex]; // Update the image source

  createPixelOverlay(); // Recreate the overlay effect
}

// Initial setup
createPixelOverlay();
setInterval(showNextImage, 5000); // Change image every 5 seconds

// Prevent right-click on images
document.querySelectorAll("img").forEach((image) => {
  image.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });
});
