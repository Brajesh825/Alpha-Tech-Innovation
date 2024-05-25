function HeroGamma(heroContent) {
  const { carouselSlides } = heroContent;

  const heroSection = document.createElement('section');
  heroSection.classList.add('hero-gamma');

  // Create carousel container
  const carouselContainer = document.createElement('div');
  carouselContainer.classList.add('carousel-container');

  // Create carousel track
  const carouselTrack = document.createElement('div');
  carouselTrack.classList.add('carousel-track');

  // Add slides to the carousel
  carouselSlides.forEach((slide, index) => {
    const slideDiv = document.createElement('div');
    slideDiv.classList.add('carousel-slide');
    if (index === 0) {
      slideDiv.classList.add('active'); // Make the first slide active
    }

    const img = document.createElement('img');
    img.setAttribute('src', slide.imageSrc);
    img.classList.add('carousel-image');

    const slideContent = document.createElement('div');
    slideContent.classList.add('slide-content');

    const title = document.createElement('h1');
    title.textContent = slide.title;
    const subtitle = document.createElement('h2');
    subtitle.textContent = slide.subtitle;
    const description = document.createElement('p');
    description.textContent = slide.description;

    const button = document.createElement('button');
    button.textContent = slide.buttonText;

    // Add click event listener to the button
    button.addEventListener('click', () => {
      // Scroll down by 100vh
      window.scrollBy({
        top: window.innerHeight, // Scroll down by the height of the viewport
        behavior: 'smooth' // Smooth scrolling behavior
      });
    });

    slideContent.appendChild(title);
    slideContent.appendChild(subtitle);
    slideContent.appendChild(description);
    slideContent.appendChild(button);

    slideDiv.appendChild(img);
    slideDiv.appendChild(slideContent);

    carouselTrack.appendChild(slideDiv);
  });

  // Add navigation buttons
  const prevButton = document.createElement('button');
  prevButton.classList.add('carousel-button', 'carousel-button-prev');
  prevButton.textContent = '‹'; // Left arrow

  const nextButton = document.createElement('button');
  nextButton.classList.add('carousel-button', 'carousel-button-next');
  nextButton.textContent = '›'; // Right arrow

  // Append elements to the carousel container
  carouselContainer.appendChild(prevButton);
  carouselContainer.appendChild(carouselTrack);
  carouselContainer.appendChild(nextButton);

  // Append carousel container to the hero section
  heroSection.appendChild(carouselContainer);

  // Carousel functionality
  let currentIndex = 0;
  const slides = carouselTrack.querySelectorAll('.carousel-slide');

  function updateCarousel(newIndex) {
    slides[currentIndex].classList.remove('active');
    slides[newIndex].classList.add('active');
    currentIndex = newIndex;
  }

  prevButton.addEventListener('click', () => {
    const newIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel(newIndex);
  });

  nextButton.addEventListener('click', () => {
    const newIndex = (currentIndex + 1) % slides.length;
    updateCarousel(newIndex);
  });

  return heroSection;
}

export default HeroGamma;
