function ServiceHomeHeroIntro(serviceHomeHeroIntroContent) {
    const { title, subtitle, description } = serviceHomeHeroIntroContent;

    const serviceHomeHeroIntroSection = document.createElement('section');
    serviceHomeHeroIntroSection.classList.add('service-home-hero-intro');

    const serviceHomeHeroIntroContentDiv = document.createElement('div');
    serviceHomeHeroIntroContentDiv.classList.add('text-container'); // Update class name

    const titleElement = document.createElement('h1'); // Update heading to h1
    titleElement.textContent = title;

    const subtitleElement = document.createElement('h2'); // Update heading to h2
    subtitleElement.textContent = subtitle;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;

    const missionButton = document.createElement('button');
    missionButton.textContent = "Learn More"; // Default button text

    serviceHomeHeroIntroContentDiv.appendChild(titleElement);
    serviceHomeHeroIntroContentDiv.appendChild(subtitleElement);
    serviceHomeHeroIntroContentDiv.appendChild(descriptionElement);
    serviceHomeHeroIntroContentDiv.appendChild(missionButton); // Append button

    serviceHomeHeroIntroSection.appendChild(serviceHomeHeroIntroContentDiv);

    return serviceHomeHeroIntroSection;
}

export default ServiceHomeHeroIntro;
