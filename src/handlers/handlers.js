// Component
import Navbar from "../components/navbar";
import HeroAlpha from "../components/heroAlpha";
import HeroBeta from "../components/heroBeta";

// Datasets
import navData from "../datasets/navData";
import { homeHeroData } from "../datasets/homeData";
import { aboutHeroData } from "../datasets/aboutData";
import { serviceHeroData } from "../datasets/serviceData";
import { industryHeroData } from "../datasets/industryData";
import { contactUsHeroData } from "../datasets/contactUsData";
import Mission from "../components/mission";
import missionData from "../datasets/missionData";
import ServiceHomeHeroIntro from "../components/serviceHomeHeroIntro";
import serviceHomeHeroIntroData from "../datasets/serviceHomeHeroIntroData";
import ServiceHomeCards from "../components/serviceHomeCards";
import serviceHomeCardsData from "../datasets/serviceHomeCardsData";
import IndustryHomeHeroIntro from "../components/industryHomeHeroIntro";
import industryHomeHeroIntroData from "../datasets/industryHomeHeroIntroData";
import industryHomeCardsData from "../datasets/industryHomeCardsData";
import IndustryHomeCards from "../components/industryHomeCards";
import ContentAlpha from "../components/contentSectionAlpha";
import chooseUsData from "../datasets/chooseUsData";
import BannerAlpha from "../components/bannerAlpha";
import contactUsBannerData from "../datasets/contactUsBannerData";
import SliderAlpha from "../components/slider/sliderAlpha";
import testimonialData from "../datasets/testimonialData";
import FaqAlpha from "../components/faq/faqAlpha";
import faqData from "../datasets/faqData";
import footerData from "../datasets/footerData";
import footerAlpha from "../components/footer/footerAlpha";

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

    // Scroll to the top
    window.scrollTo(0, 0);

    const container = clearContent();
    const components = [
        HeroBeta(homeHeroData),
        ServiceHomeHeroIntro(serviceHomeHeroIntroData),
        ServiceHomeCards(serviceHomeCardsData),
        IndustryHomeHeroIntro(industryHomeHeroIntroData),
        IndustryHomeCards(industryHomeCardsData),
        ContentAlpha(chooseUsData),
        BannerAlpha(contactUsBannerData),
        SliderAlpha(testimonialData),
        FaqAlpha(faqData),
        footerAlpha(footerData)
    ];
    components.forEach(component => container.appendChild(component));
}

function aboutHandler() {
    // Scroll to the top
    window.scrollTo(0, 0);
    const container = clearContent();
    const components = [
        HeroBeta(aboutHeroData),
        footerAlpha(footerData)
    ];
    components.forEach(component => container.appendChild(component));
}

function serviceHandler() {
    // Scroll to the top
    window.scrollTo(0, 0);
    const container = clearContent();
    const components = [
        HeroBeta(serviceHeroData),
        footerAlpha(footerData)
    ];
    components.forEach(component => container.appendChild(component));
}

function industryHandler() {
    // Scroll to the top
    window.scrollTo(0, 0);
    const container = clearContent();
    const components = [
        HeroBeta(industryHeroData),
        footerAlpha(footerData)
    ];
    components.forEach(component => container.appendChild(component));
}

function contactHandler() {
    // Scroll to the top
    window.scrollTo(0, 0);
    const container = clearContent();
    const components = [
        HeroBeta(contactUsHeroData),
        footerAlpha(footerData)
    ];
    components.forEach(component => container.appendChild(component));
}

export { homeHandler, aboutHandler, serviceHandler, industryHandler, contactHandler };
