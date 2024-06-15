import { clearContent } from "./utils/utils";

import HeroBeta from "../components/heroBeta";
import ServiceHomeHeroIntro from "../components/serviceHomeHeroIntro";
import footerAlpha from "../components/footer/footerAlpha";
import SliderAlpha from "../components/slider/sliderAlpha";
import FaqAlpha from "../components/faq/faqAlpha";

import serviceData from "../datasets/services/serviceData";
import commonData from "../datasets/_common/commonData";
import IndustryHomeCards from "../components/industryHomeCards";
import homeData from "../datasets/home/homeData";

function serviceHandler() {
    // Scroll to the top
    window.scrollTo(0, 0);
    const container = clearContent();
    const components = [
        HeroBeta(serviceData.serviceHeroData),
        ServiceHomeHeroIntro(homeData.serviceHomeHeroIntroData),
        IndustryHomeCards(serviceData.services),
        SliderAlpha(commonData.testimonialData),
        FaqAlpha(commonData.faqData),
        footerAlpha(commonData.footerData)
    ];
    components.forEach(component => container.appendChild(component));
}

export default serviceHandler