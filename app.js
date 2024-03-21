// Page.js
import page from "page.js";

// Component
import Navbar from "./src/components/navbar";
import Hero from "./src/components/hero";

// Datasets
import navData from "./src/datasets/navData";
import { homeHeroData } from "./src/datasets/homeData";

// Define function to clear the root element
function clearRoot() {
    const root = document.getElementById('root');
    root.innerHTML = '';
    return root;
}

// Sample data

// Define routes
page('/', () => {
    const root = clearRoot();

    const components = [
        Navbar(navData),
        Hero(homeHeroData)
    ];

    components.forEach(component => root.appendChild(component));
});


// Start routing
page.start();
