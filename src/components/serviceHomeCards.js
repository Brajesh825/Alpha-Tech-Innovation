function ServiceHomeCards(cardsData) {
    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('service-home-cards-container');

    cardsData.forEach(cardData => {
        const card = createCard(cardData);
        cardsContainer.appendChild(card);
    });

    return cardsContainer;
}

function createCard({ title, description }) {
    const card = document.createElement('div');
    card.classList.add('service-home-card');

    const cardTitle = document.createElement('h3');
    cardTitle.textContent = title;

    const cardDescription = document.createElement('p');
    cardDescription.textContent = description;

    card.appendChild(cardTitle);
    card.appendChild(cardDescription);

    return card;
}

export default ServiceHomeCards;
