function HeroBeta(heroContent) {

  const { bgImageLeft, bgImageRight, heroTitle, heroSubtitle, heroDescription, heroButtonText } = heroContent;

  const heroSection = document.createElement('section');
  heroSection.classList.add('hero-beta');

  // Create content div for left side
  const contentDivLeft = document.createElement('div');
  contentDivLeft.classList.add('hero-content', 'hero-beta-content-left');

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

  // Append content div to the hero section
  heroSection.appendChild(contentDivLeft);

  // Create ::before pseudo-element div
  const beforeDiv = document.createElement('div');
  beforeDiv.classList.add('hero-beta-content-left-before');

  // Create ::before pseudo-element div
  const afterDiv = document.createElement('div');
  afterDiv.classList.add('hero-beta-content-left-after');

  // Set background image for ::before pseudo-element
  beforeDiv.style.backgroundImage = `url(${bgImageLeft})`;

  if (bgImageRight) {
    // Set background image for ::before pseudo-element
    afterDiv.style.backgroundImage = `url(${bgImageRight})`;

  }

  // Append ::before pseudo-element div to the hero section
  heroSection.appendChild(beforeDiv);
  heroSection.appendChild(afterDiv);

  return heroSection;
}

export default HeroBeta;
