import { clearContent } from "./utils/utils";

import { homeHeroData } from "../datasets/homeData";
import HeroBeta from "../components/heroBeta";
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

export default homeHandler