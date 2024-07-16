document.addEventListener('DOMContentLoaded', () => {
  let currentIndex = 0;
  const radios = document.querySelectorAll('input[name="switch"]');
  const totalSlides = radios.length;

  const autoSlide = () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    radios[currentIndex].checked = true;
  };

  setInterval(autoSlide, 3000); // Change slide every 3 seconds
});
