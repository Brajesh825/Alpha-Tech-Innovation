import { clearContent } from "./utils/utils";

// Components
// import HeroBeta from "../components/heroBeta";
import HeroGamma from "../components/hero/heroGamma";
import ServiceHomeHeroIntro from "../components/serviceHomeHeroIntro";
import ServiceHomeCards from "../components/serviceHomeCards";
import IndustryHomeHeroIntro from "../components/industryHomeHeroIntro";
import IndustryHomeCards from "../components/industryHomeCards";
import ContentAlpha from "../components/contentSectionAlpha";
import BannerAlpha from "../components/bannerAlpha";
import SliderAlpha from "../components/slider/sliderAlpha";
import FaqAlpha from "../components/faq/faqAlpha";
import footerAlpha from "../components/footer/footerAlpha";
import AboutUsAlpha from "../components/aboutUs/aboutUsAlpha";

// Datasets
import homeData from "../datasets/home/homeData";
import commonData from "../datasets/_common/commonData";
import AlphaCardSlider from "../components/cardSlider/alphaCardSlider";


// Define route handlers
function homeHandler() {

    window.scrollTo(0, 0);
    const container = clearContent();

    const isMobile = window.innerWidth <= 768;

    // Define the variable to hold the chosen component
    let chosenComponent;

    // Choose the appropriate component based on screen size
    if (isMobile) {
        chosenComponent = ServiceHomeCards(homeData.serviceHomeCardsData);
    } else {
        chosenComponent = AlphaCardSlider(homeData.serviceHomeCardsData);
    }


    const components = [
        HeroGamma(homeData.homeHeroData),
        AboutUsAlpha(homeData.aboutUsData),
        ServiceHomeHeroIntro(homeData.serviceHomeHeroIntroData),
        chosenComponent,
        IndustryHomeHeroIntro(homeData.industryHomeHeroIntroData),
        IndustryHomeCards(homeData.industryHomeCardsData),
        ContentAlpha(homeData.chooseUsData),
        BannerAlpha(homeData.contactUsBannerData),
        SliderAlpha(commonData.testimonialData),
        FaqAlpha(commonData.faqData),
        footerAlpha(commonData.footerData)
    ];

    // Check screen size to determine which component to render
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
        const mobileComponents = components.filter(component => !component.classList.contains('hide-on-mobile'));
        mobileComponents.forEach(component => container.appendChild(component));
    } else {
        const desktopComponents = components.filter(component => !component.classList.contains('hide-on-desktop'));
        desktopComponents.forEach(component => container.appendChild(component));
    }
}

export default homeHandler