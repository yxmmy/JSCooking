document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.splide', {
    type: 'loop',
    padding: '5rem',
    autoplay: true,
    interval: 3000,
  });

  splide.mount();
});