const leftButton = document.getElementById("backward");
const rightButton = document.getElementById("forward");
const allImages = document.querySelectorAll(".image");
let currentIndex = 0;

leftButton.addEventListener("click", (e) => {
  e.preventDefault();
  allImages[currentIndex].classList.add("invisible");
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = allImages.length - 1;
  }
  allImages[currentIndex].classList.remove("invisible");
});

rightButton.addEventListener("click", (e) => {
  e.preventDefault();
  allImages[currentIndex].classList.add("invisible");
  currentIndex++;
  if (currentIndex >= allImages.length) {
    currentIndex = 0;
  }
  allImages[currentIndex].classList.remove("invisible");
});
