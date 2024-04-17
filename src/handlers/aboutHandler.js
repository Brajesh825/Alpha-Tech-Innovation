import { clearContent } from "./utils/utils";

import HeroBeta from "../components/heroBeta";
import ServiceHomeCards from "../components/serviceHomeCards";
import footerAlpha from "../components/footer/footerAlpha";
import SliderAlpha from "../components/slider/sliderAlpha";


import aboutUsData from "../datasets/aboutUs/aboutUsData";
import commonData from "../datasets/_common/commonData";

function aboutHandler() {
    // Scroll to the top
    window.scrollTo(0, 0);
    const container = clearContent();
    const components = [
        HeroBeta(aboutUsData.aboutUsHeroData),
        ServiceHomeCards(aboutUsData.data),
        SliderAlpha(commonData.testimonialData),
        footerAlpha(commonData.footerData)
    ];
    components.forEach(component => container.appendChild(component));
}


export default aboutHandler