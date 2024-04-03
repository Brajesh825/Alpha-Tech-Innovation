function BannerAlpha(bannerData) {
    // Create the main container for the banner
    const bannerContainer = document.createElement('div');
    bannerContainer.classList.add('banner-container');

    // Create the banner alpha element
    const bannerAlpha = document.createElement('div');
    bannerAlpha.classList.add('banner-alpha');

    // Create and append title, subtitle, and button to the banner alpha element
    const title = document.createElement('h2');
    title.textContent = bannerData.title;

    const subtitle = document.createElement('p');
    subtitle.textContent = bannerData.subtitle;

    const button = document.createElement('button');
    button.textContent = bannerData.buttonText;

    bannerAlpha.appendChild(title);
    bannerAlpha.appendChild(subtitle);
    bannerAlpha.appendChild(button);

    // Create and append a ::before pseudo-element for background image
    const backgroundOverlay = document.createElement('div');
    backgroundOverlay.classList.add('banner-alpha-before');
    backgroundOverlay.style.backgroundImage = `url('${bannerData.backgroundImage}')`;

    bannerContainer.appendChild(backgroundOverlay);

    // Append the banner alpha element to the banner container
    bannerContainer.appendChild(bannerAlpha);

    return bannerContainer;
}

export default BannerAlpha;
