// Page.js
import page from "page.js";

// Component
import Navbar from "./src/components/navbar";

// Datasets
import navData from "./src/datasets/navData";


// Define function to clear the root element
function clearRoot() {
    const root = document.getElementById('root');
    root.innerHTML = '';
    return root;
}

// Define routes
page('/', () => {
    const root = clearRoot();

    const components = [
        Navbar(navData)
    ];

    components.forEach(component => root.appendChild(component));
});


// Start routing
page.start();
