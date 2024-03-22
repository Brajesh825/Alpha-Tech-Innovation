
function Navbar(navData, logoSrc) {
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

    // Create logo
    const logo = document.createElement('img');
    logo.setAttribute('src', "./logo/logo.png");
    logo.setAttribute('alt', 'Logo');
    logo.classList.add('navbar-logo');
    navbar.appendChild(logo);

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

    navbar.appendChild(ul);

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




    // Create theme change button
    const themeSwapBtn = document.createElement('button');
    themeSwapBtn.textContent = 'Toggle Theme';
    themeSwapBtn.classList.add('theme-swap-btn');
    navbar.appendChild(themeSwapBtn);

    // Theme swap button click event to toggle theme
    themeSwapBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme'); // Assuming toggling a class on body for theme change
    });

    let luck = Math.round(Math.random());
    if(luck){
        document.body.classList.toggle('dark-theme'); // Assuming toggling a class on body for theme change
    }



    return navbar;
}

export default Navbar;
