function IndustryHomeHeroIntro(industryHomeHeroIntroContent) {
    const { title, subtitle, description } = industryHomeHeroIntroContent;

    const industryHomeHeroIntroSection = document.createElement('section');
    industryHomeHeroIntroSection.classList.add('industry-home-hero-intro');

    const industryHomeHeroIntroContentDiv = document.createElement('div');
    industryHomeHeroIntroContentDiv.classList.add('text-container');

    const titleElement = document.createElement('h1');
    titleElement.textContent = title;

    const subtitleElement = document.createElement('h2');
    subtitleElement.textContent = subtitle;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = description;

    const learnMoreButton = document.createElement('button');
    learnMoreButton.textContent = "Learn More";

    industryHomeHeroIntroContentDiv.appendChild(titleElement);
    industryHomeHeroIntroContentDiv.appendChild(subtitleElement);
    industryHomeHeroIntroContentDiv.appendChild(descriptionElement);
    industryHomeHeroIntroContentDiv.appendChild(learnMoreButton);

    industryHomeHeroIntroSection.appendChild(industryHomeHeroIntroContentDiv);

    return industryHomeHeroIntroSection;
}

export default IndustryHomeHeroIntro;
