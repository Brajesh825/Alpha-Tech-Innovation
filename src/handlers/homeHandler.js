import { clearContent } from "./utils/utils";

// Components
import HeroBeta from "../components/heroBeta";
import ServiceHomeHeroIntro from "../components/serviceHomeHeroIntro";
import ServiceHomeCards from "../components/serviceHomeCards";
import IndustryHomeHeroIntro from "../components/industryHomeHeroIntro";
import IndustryHomeCards from "../components/industryHomeCards";
import ContentAlpha from "../components/contentSectionAlpha";
import BannerAlpha from "../components/bannerAlpha";
import SliderAlpha from "../components/slider/sliderAlpha";
import FaqAlpha from "../components/faq/faqAlpha";
import footerAlpha from "../components/footer/footerAlpha";

// Datasets
import homeData from "../datasets/home/homeData";
import commonData from "../datasets/_common/commonData";

// Define route handlers
function homeHandler() {

    // Scroll to the top
    window.scrollTo(0, 0);

    const container = clearContent();
    const components = [
        HeroBeta(homeData.homeHeroData),
        ServiceHomeHeroIntro(homeData.serviceHomeHeroIntroData),
        ServiceHomeCards(homeData.serviceHomeCardsData),
        IndustryHomeHeroIntro(homeData.industryHomeHeroIntroData),
        IndustryHomeCards(homeData.industryHomeCardsData),
        ContentAlpha(homeData.chooseUsData),
        BannerAlpha(homeData.contactUsBannerData),
        SliderAlpha(commonData.testimonialData),
        FaqAlpha(commonData.faqData),
        footerAlpha(commonData.footerData)
    ];
    components.forEach(component => container.appendChild(component));
}

export default homeHandler