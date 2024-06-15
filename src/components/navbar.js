function Navbar(navData, logoSrc) {
    // Create navbar container
    const navbarContainer = document.createElement('div');
    navbarContainer.classList.add('navbar-container');

    // Create Navbar
    const navbar = document.createElement('nav');
    navbar.setAttribute('id', 'navbar');
    navbar.classList.add('navbar');

    // Create hamburger button
    const hamburgerBtn = document.createElement('div');
    hamburgerBtn.classList.add('hamburger-btn');
    hamburgerBtn.innerHTML = `
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
    `;
    navbar.appendChild(hamburgerBtn);

    // Create a container for logo and ul
    const navLogoMenuContainer = document.createElement('div');
    navLogoMenuContainer.classList.add('nav-logo-menu-container');

    // Create logo
    const logo = document.createElement('img');
    logo.setAttribute('src', "/logo/logo.png");
    logo.setAttribute('alt', 'Logo');
    logo.classList.add('navbar-logo');
    navLogoMenuContainer.appendChild(logo);

    // Create menu ul
    const ul = document.createElement('ul');
    ul.classList.add('navbar-menu');

    // Create menu items
    navData.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('href', item.link);
        a.textContent = item.navItem;
        a.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                navbar.classList.remove('active');
                ul.classList.remove('active');
                navbar.classList.add('inactive');
                ul.classList.add('inactive');
            } else {
                navbar.classList.remove('inactive');
                ul.classList.remove('inactive');
                navbar.classList.add('active');
                ul.classList.add('active');
            }
        });
        li.appendChild(a);
        ul.appendChild(li);
    });

    navLogoMenuContainer.appendChild(ul);
    navbar.appendChild(navLogoMenuContainer);

    // Add event listener for hamburger button
    hamburgerBtn.addEventListener('click', () => {
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            ul.classList.remove('active');
            navbar.classList.add('inactive');
            ul.classList.add('inactive');
        } else {
            navbar.classList.remove('inactive');
            ul.classList.remove('inactive');
            navbar.classList.add('active');
            ul.classList.add('active');
        }
    });

    // Append the navbar to the navbar container
    navbarContainer.appendChild(navbar);

    return navbarContainer;
}

export default Navbar;
