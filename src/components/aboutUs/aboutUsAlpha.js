function AboutUsAlpha(data) {
    // Create the main container
    const container = document.createElement('div');
    container.className = 'about-us-alpha';

    // Section 1: Image and text
    const section1Container = document.createElement('div');
    section1Container.className = 'section-1-container';

    const section1 = document.createElement('section');
    section1.className = 'about-us-section1';

    const text1 = document.createElement('p');
    text1.textContent = data.textAboveImage;
    text1.className = 'about-us-text1';

    section1.appendChild(text1);

    // Background Image with Overlay
    const backgroundImage = document.createElement('div');
    backgroundImage.className = 'background-image';
    backgroundImage.style.backgroundImage = `url('${data.imagePath}')`;

    // Append background image to section1
    section1.appendChild(backgroundImage);

    // Append section1 to section1Container
    section1Container.appendChild(section1);

    // Section 2: Title, subtitle, and text
    const section2Container = document.createElement('div');
    section2Container.className = 'section-2-container';

    const section2 = document.createElement('section');
    section2.className = 'about-us-section2';

    const title = document.createElement('h1');
    title.textContent = data.title;
    title.className = 'about-us-title';

    const subtitle = document.createElement('h2');
    subtitle.textContent = data.subtitle;
    subtitle.className = 'about-us-subtitle';

    const text2 = document.createElement('p');
    text2.textContent = data.descriptiveText;
    text2.className = 'about-us-text2';

    section2.appendChild(title);
    section2.appendChild(subtitle);
    section2.appendChild(text2);

    // Append section2 to section2Container
    section2Container.appendChild(section2);

    // Append both sections to the container
    container.appendChild(section1Container);
    container.appendChild(section2Container);

    // Return the container
    return container;
}

export default AboutUsAlpha;
