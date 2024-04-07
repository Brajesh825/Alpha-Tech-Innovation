import { clearContent } from "./utils/utils";

import HeroBeta from "../components/heroBeta";
import ServiceHomeCards from "../components/serviceHomeCards";
import footerAlpha from "../components/footer/footerAlpha";


import { aboutHeroData } from "../datasets/aboutData";
import aboutUsData from "../datasets/aboutUs/aboutUsData";
import footerData from "../datasets/footerData";
import SliderAlpha from "../components/slider/sliderAlpha";
import testimonialData from "../datasets/testimonialData";

function aboutHandler() {
    // Scroll to the top
    window.scrollTo(0, 0);
    const container = clearContent();
    const components = [
        HeroBeta(aboutHeroData),
        ServiceHomeCards(aboutUsData.data),
        SliderAlpha(testimonialData),
        footerAlpha(footerData)
    ];
    components.forEach(component => container.appendChild(component));
}


export default aboutHandler