import { clearContent } from "./utils/utils";

import HeroBeta from "../components/heroBeta";
import ServiceHomeCards from "../components/serviceHomeCards";
import footerAlpha from "../components/footer/footerAlpha";
import SliderAlpha from "../components/slider/sliderAlpha";
import FaqAlpha from "../components/faq/faqAlpha";
import AboutUsAlpha from "../components/aboutUs/aboutUsAlpha";
import ServiceHomeHeroIntro from "../components/serviceHomeHeroIntro";

import aboutUsData from "../datasets/aboutUs/aboutUsData";
import commonData from "../datasets/_common/commonData";
import homeData from "../datasets/home/homeData";

function aboutHandler() {
    // Scroll to the top
    window.scrollTo(0, 0);
    const container = clearContent();
    const components = [
        HeroBeta(aboutUsData.aboutUsHeroData),
        AboutUsAlpha(homeData.aboutUsData),
        ServiceHomeHeroIntro(homeData.serviceHomeHeroIntroData),
        ServiceHomeCards(aboutUsData.data),
        SliderAlpha(commonData.testimonialData),
        FaqAlpha(commonData.faqData),
        footerAlpha(commonData.footerData)
    ];
    components.forEach(component => container.appendChild(component));
}


export default aboutHandler