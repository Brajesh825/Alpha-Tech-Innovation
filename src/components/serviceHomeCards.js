function ServiceHomeCards(cardsData) {
    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('service-home-cards-container');

    cardsData.forEach(cardData => {
        const card = createCard(cardData);
        cardsContainer.appendChild(card);
    });

    return cardsContainer;
}

function createCard({ title, description, bgImage }) {
    const card = document.createElement('div');
    card.classList.add('service-home-card');

    // Create a ::before pseudo-element
    const cardBefore = document.createElement('div');
    cardBefore.classList.add('service-home-card-before');

    // Set the background image for the ::before pseudo-element
    cardBefore.style.backgroundImage = `url('${bgImage}')`;

    const cardContent = document.createElement('div');
    cardContent.classList.add('service-home-card-content');

    const cardTitle = document.createElement('h3');
    cardTitle.textContent = title;

    const cardDescription = document.createElement('p');
    cardDescription.textContent = description;

    cardContent.appendChild(cardTitle);
    cardContent.appendChild(cardDescription);

    // Append the ::before pseudo-element and the content to the card
    card.appendChild(cardBefore);
    card.appendChild(cardContent);

    return card;
}



export default ServiceHomeCards;
