document.addEventListener("DOMContentLoaded", function() {
  const carouselImages = document.querySelector('.carousel-images');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const images = document.querySelectorAll('.carousel-images img');

  let counter = 0;
  const totalImages = images.length;

  function showImage(n) {
      images.forEach((img) => {
          img.classList.remove('active');
      });
      images[n].classList.add('active');
  }

  prevButton.addEventListener('click', () => {
      counter--;
      if (counter < 0) {
          counter = totalImages - 1;
      }
      showImage(counter);
  });

  nextButton.addEventListener('click', () => {
      counter++;
      if (counter >= totalImages) {
          counter = 0;
      }
      showImage(counter);
  });

  showImage(counter);
});