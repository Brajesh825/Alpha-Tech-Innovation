function footerAlpha(footerData) {
    const footer = document.createElement('footer');
    footer.classList.add('footer-alpha');
  
    const footerContainer = document.createElement('div');
    footerContainer.classList.add('footer-container');
  
    // Footer Content Wrapper
    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('content-wrapper');

    // Footer Logo
    const logoContainer = document.createElement('div');
    logoContainer.classList.add('footer-logo');
    const logoImg = document.createElement('img');
    logoImg.src = footerData.icon;
    logoImg.alt = 'Logo';
    logoImg.id = 'footer-logo';
    logoContainer.appendChild(logoImg);
    contentWrapper.appendChild(logoContainer);

    // Footer Title
    const title = document.createElement('h4');
    title.textContent = footerData.title;
    title.id = 'footer-title';
    contentWrapper.appendChild(title);
  
    // Social Links
    const socialLinksContainer = document.createElement('div');
    socialLinksContainer.classList.add('social-links');
    socialLinksContainer.id = 'social-links';
  
    footerData.social.forEach((item) => {
      const link = document.createElement('a');
      link.href = item.link;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      const icon = document.createElement('i');
      icon.className = item.icon;
      link.appendChild(icon);
      socialLinksContainer.appendChild(link);
    });
  
    contentWrapper.appendChild(socialLinksContainer);

    // Append content wrapper to footer container
    footerContainer.appendChild(contentWrapper);
  
    // Footer Links
    const footerLinksContainer = document.createElement('div');
    footerLinksContainer.classList.add('footer-links');
    footerLinksContainer.id = 'footer-links';
  
    footerData.links.forEach((section) => {
      const sectionContainer = document.createElement('div');
      const sectionTitle = document.createElement('h5');
      sectionTitle.textContent = section.title;
      sectionContainer.appendChild(sectionTitle);
  
      const ul = document.createElement('ul');
      section.links.forEach((link) => {
        const li = document.createElement('li');
        if (link.icon) {
          const icon = document.createElement('i');
          icon.className = link.icon;
          li.appendChild(icon);
        }
        const a = document.createElement('a');
        a.href = link.link;
        a.textContent = link.text || link.value;
        li.appendChild(a);
        ul.appendChild(li);
      });
  
      sectionContainer.appendChild(ul);
      footerLinksContainer.appendChild(sectionContainer);
    });
  
    footerContainer.appendChild(footerLinksContainer);
  
    // Footer Bottom
    const footerBottom = document.createElement('div');
    footerBottom.classList.add('footer-bottom');
    const copyright = document.createElement('p');
    copyright.textContent = footerData.copyright;
    footerBottom.appendChild(copyright);
  
    footer.appendChild(footerContainer);
    footer.appendChild(footerBottom);
  
    return footer;
  }
  
  export default footerAlpha;
