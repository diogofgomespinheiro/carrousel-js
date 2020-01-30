const carrouselSlider = document.querySelector(".carrousel-slider");
const carrouselImages = document.querySelectorAll(".carrousel-slider img");

const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");

let counter = 0;
let size = carrouselSlider.clientWidth;

prevButton.addEventListener("click", () => {
  counter--;
  if (counter < 0) counter = carrouselImages.length - 1;
  transform();
})

nextButton.addEventListener("click", () => {
  counter++;
  if (counter > carrouselImages.length - 1) counter = 0;
  transform();
})

window.addEventListener("resize", () => {
  size = carrouselSlider.clientWidth;
  transform();
});

const transform = () => carrouselSlider.style.transform = `translateX(${-size*counter}px)`;