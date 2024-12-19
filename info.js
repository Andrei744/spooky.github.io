const slider = document.querySelector('.slider');
const imagesContainer = document.querySelector('.slider-images');
const images = document.querySelectorAll('.slider-images img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

function updateSlider(index) {
  const imageWidth = slider.clientWidth; // Точная ширина контейнера
  const offset = -index * imageWidth;
  imagesContainer.style.transform = `translateX(${offset}px)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider(currentIndex);
});

// Убедимся, что изображения занимают правильную ширину при загрузке
window.addEventListener('resize', () => updateSlider(currentIndex));
updateSlider(currentIndex); // Инициализация