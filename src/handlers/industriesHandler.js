import { clearContent } from "./utils/utils";

import HeroBeta from "../components/heroBeta";
import footerAlpha from "../components/footer/footerAlpha";
import IndustryHomeCards from "../components/industryHomeCards";
import SliderAlpha from "../components/slider/sliderAlpha";
import FaqAlpha from "../components/faq/faqAlpha";

import ServiceHomeHeroIntro from "../components/serviceHomeHeroIntro";
import industriesData from "../datasets/industries/industriesData";
import commonData from "../datasets/_common/commonData";
import homeData from "../datasets/home/homeData";

function industriesHandler() {
    // Scroll to the top
    window.scrollTo(0, 0);
    const container = clearContent();
    const components = [
        HeroBeta(industriesData.industriesHeroData),
        ServiceHomeHeroIntro(homeData.serviceHomeHeroIntroData),
        IndustryHomeCards(industriesData.industryHomeCardsData),
        SliderAlpha(commonData.testimonialData),
        FaqAlpha(commonData.faqData),
        footerAlpha(commonData.footerData)
    ];
    components.forEach(component => container.appendChild(component));
}


export default industriesHandler