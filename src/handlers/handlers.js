// Component
import Navbar from "../components/navbar";
import HeroAlpha from "../components/hero";

// Datasets
import navData from "../datasets/navData";
import { homeHeroData } from "../datasets/homeData";
import { aboutHeroData } from "../datasets/aboutData";
import { serviceHeroData } from "../datasets/serviceData";
import { industryHeroData } from "../datasets/industryData";
import { contactUsHeroData } from "../datasets/contactUsData";

function createContainer() {
    const container = document.createElement('div');
    container.id = 'container';
    return container;
}

function clearContent() {
    const container = document.getElementById('container');
    container.innerHTML = '';
    return container;
}

const root = document.getElementById("root")
const navbarInstance = Navbar(navData);
root.appendChild(navbarInstance)
const container = createContainer()
root.appendChild(container)

// Define route handlers
function homeHandler() {
    const container = clearContent();
    const components = [
        HeroAlpha(homeHeroData)
    ];
    components.forEach(component => container.appendChild(component));
}

function aboutHandler() {
    const container = clearContent();
    const components = [
        HeroAlpha(aboutHeroData)
    ];
    components.forEach(component => container.appendChild(component));
}

function serviceHandler() {
    const container = clearContent();
    const components = [
        HeroAlpha(serviceHeroData)
    ];
    components.forEach(component => container.appendChild(component));
}

function industryHandler() {
    const container = clearContent();
    const components = [
        HeroAlpha(industryHeroData)
    ];
    components.forEach(component => container.appendChild(component));
}

function contactHandler() {
    const container = clearContent();
    const components = [
        HeroAlpha(contactUsHeroData)
    ];
    components.forEach(component => container.appendChild(component));
}

export { homeHandler, aboutHandler , serviceHandler , industryHandler , contactHandler };
