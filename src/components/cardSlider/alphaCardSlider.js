function AlphaCardSlider(cardsData) {
    const container = document.createElement('div');
    container.classList.add('alpha-card-slider');

    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('alpha-card-slider-container');

    const cardsToShow = 3;
    let currentIndex = 0;

    function renderCards() {
        sliderContainer.innerHTML = ''; // Clear previous cards
        const endIndex = Math.min(currentIndex + cardsToShow, cardsData.length);
        for (let i = currentIndex; i < endIndex; i++) {
            const cardData = cardsData[i];
            const card = createAlphaCard(cardData);
            sliderContainer.appendChild(card);
        }
    }

    renderCards();

    const prevButton = document.createElement('button');
    prevButton.classList.add('alpha-slider-nav', 'prev');
    prevButton.textContent = 'Prev';
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            renderCards();
        }
    });

    const nextButton = document.createElement('button');
    nextButton.classList.add('alpha-slider-nav', 'next');
    nextButton.textContent = 'Next';
    nextButton.addEventListener('click', () => {
        const maxIndex = Math.max(0, cardsData.length - cardsToShow);
        if (currentIndex < maxIndex) {
            currentIndex++;
            renderCards();
        }
    });

    container.appendChild(sliderContainer);
    container.appendChild(prevButton);
    container.appendChild(nextButton);

    return container;
}


function createAlphaCard({ title, description, bgImage }) {


    const card = document.createElement('div');
    card.classList.add('alpha-card');

    const img = document.createElement('img');
    img.classList.add('alpha-card-image');
    img.src = bgImage;
    img.alt = title;

    const cardContent = document.createElement('div');
    cardContent.classList.add('alpha-card-content');

    const cardTitle = document.createElement('h3');
    cardTitle.classList.add('alpha-card-title');
    cardTitle.textContent = title;

    const cardDescription = document.createElement('p');
    cardDescription.classList.add('alpha-card-description');
    cardDescription.textContent = description;

    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardDescription);

    card.appendChild(img);
    card.appendChild(cardContent);

    return card;
}

export default AlphaCardSlider;
