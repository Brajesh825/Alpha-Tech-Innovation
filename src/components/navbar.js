function Navbar(navData) {
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

    // Create menu ul
    const ul = document.createElement('ul');
    ul.classList.add('navbar-menu');

    // Create menu items
    navData.forEach(item => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('href', item.link);
        a.textContent = item.navItem;
        li.appendChild(a);
        ul.appendChild(li);
    });

    navbar.appendChild(ul);

    // Hamburger button click event to toggle menu
    hamburgerBtn.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Create theme change button
    const themeSwapBtn = document.createElement('button');
    themeSwapBtn.textContent = 'Toggle Theme';
    themeSwapBtn.classList.add('theme-swap-btn');
    navbar.appendChild(themeSwapBtn);

    // Theme swap button click event to toggle theme
    themeSwapBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme'); // Assuming toggling a class on body for theme change
    });

    return navbar;
}

export default Navbar;
