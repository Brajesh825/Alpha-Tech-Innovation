function IndustryHomeCards(cardsData) {
    const cardsContainer = document.createElement('div');
    cardsContainer.classList.add('industry-home-cards-container');

    cardsData.forEach(cardData => {
        const card = createCard(cardData);
        cardsContainer.appendChild(card);
    });

    return cardsContainer;
}

function createCard({ title, bgImage, link }) {
    const card = document.createElement('div');
    card.classList.add('industry-home-card');

    // Create an anchor tag
    const anchor = document.createElement('a');
    anchor.setAttribute('href', link);

    // Create a ::before pseudo-element
    const cardBefore = document.createElement('div');
    cardBefore.classList.add('industry-home-card-before');

    // Set the background image for the ::before pseudo-element
    cardBefore.style.backgroundImage = `url('${bgImage}')`;

    const cardContent = document.createElement('div');
    cardContent.classList.add('industry-home-card-content');

    const cardTitle = document.createElement('h3');
    cardTitle.textContent = title;

    cardContent.appendChild(cardTitle);

    // Append the ::before pseudo-element and the content to the anchor tag
    anchor.appendChild(cardBefore);
    anchor.appendChild(cardContent);

    // Append the anchor tag to the card
    card.appendChild(anchor);

    return card;
}

export default IndustryHomeCards;
