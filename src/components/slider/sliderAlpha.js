function SliderAlpha(testimonialData) {
    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('alpha-slider-container');

    const sliderHeadings = document.createElement('div')
    sliderHeadings.classList.add('slider-heading');

    // Create title and subtitle elements
    const title = document.createElement('h2');
    title.textContent = testimonialData.title;

    const subtitle = document.createElement('h3');
    subtitle.textContent = testimonialData.subtitle;

    // Append title and subtitle to slider container
    sliderHeadings.appendChild(title);
    sliderHeadings.appendChild(subtitle);
    sliderContainer.appendChild(sliderHeadings)

    // Create slides container
    const slidesContainer = document.createElement('div');
    slidesContainer.classList.add('slides-container');

    let currentIndex = 0;

    function showSlide(index) {
        const slides = slidesContainer.querySelectorAll('.slide');
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % testimonialData.contents.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + testimonialData.contents.length) % testimonialData.contents.length;
        showSlide(currentIndex);
    }

    testimonialData.contents.forEach((testimonial, index) => {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        if (index === 0) {
            slide.classList.add('active');
        }

        const card = document.createElement('div');
        card.classList.add('card');

        const content = document.createElement('p');
        content.textContent = testimonial.content;

        const author = document.createElement('p');
        author.innerHTML = `<strong>${testimonial.author}</strong>, ${testimonial.position}`;

        card.appendChild(content);
        card.appendChild(author);
        slide.appendChild(card);
        slidesContainer.appendChild(slide);
    });

    const prevButton = document.createElement('button');
    prevButton.textContent = '❮'; // Unicode arrow character
    prevButton.classList.add('slider-button');
    prevButton.addEventListener('click', prevSlide);

    const nextButton = document.createElement('button');
    nextButton.textContent = '❯'; // Unicode arrow character
    nextButton.classList.add('slider-button');
    nextButton.addEventListener('click', nextSlide);

    setInterval(nextSlide, 5000);

    const controls = document.createElement('div');
    controls.classList.add('slider-controls');
    controls.appendChild(prevButton);
    controls.appendChild(nextButton);

    slidesContainer.appendChild(controls);

        // Append slides container to slider container
    sliderContainer.appendChild(slidesContainer);

    // background overlay

       // Create and append a ::before pseudo-element for background image
       const backgroundOverlay = document.createElement('div');
       backgroundOverlay.classList.add('slider-alpha-before');
       backgroundOverlay.style.backgroundImage = `url('${testimonialData.backgroundImage}')`;

       sliderContainer.appendChild(backgroundOverlay)


    return sliderContainer;
}

export default SliderAlpha;
