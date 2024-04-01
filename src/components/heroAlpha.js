function HeroAlpha(heroContent) {

    const { bgImageLeft, bgImageRight, heroTitle, heroSubtitle, heroDescription, heroButtonText } = heroContent;

    const heroSection = document.createElement('section');
    heroSection.classList.add('hero-alpha');

    // Create content divs for left and right sides
    const contentDivLeft = document.createElement('div');
    contentDivLeft.classList.add('hero-content', 'hero-alpha-content-left');

    // Create a container for text content
    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');

    // Add text content
    const title = document.createElement('h1');
    title.textContent = heroTitle;
    const subtitle = document.createElement('h2');
    subtitle.textContent = heroSubtitle;
    const description = document.createElement('p');
    description.textContent = heroDescription;

    // Create "Connect with Us" button
    const connectButton = document.createElement('button');
    connectButton.textContent = heroButtonText;

    // Append text content and button to the text container
    textContainer.appendChild(title);
    textContainer.appendChild(subtitle);
    textContainer.appendChild(description);
    textContainer.appendChild(connectButton);

    // Append the text container to the left content div
    contentDivLeft.appendChild(textContainer);

    // Create content div for the right side (assuming it will be used later)
    const contentDivRight = document.createElement('div');
    contentDivRight.classList.add('hero-content', 'hero-alpha-content-right');

    // Set background images
    // contentDivLeft.style.backgroundImage = `url(${bgImageLeft})`;
    contentDivRight.style.backgroundImage = `url(${bgImageRight})`;

    // Append content divs to the hero section
    heroSection.appendChild(contentDivLeft);
    heroSection.appendChild(contentDivRight);

    return heroSection;
}

export default HeroAlpha;
