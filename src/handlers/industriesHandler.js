import { clearContent } from "./utils/utils";

import HeroBeta from "../components/heroBeta";
import footerAlpha from "../components/footer/footerAlpha";
import IndustryHomeCards from "../components/industryHomeCards";

import industriesData from "../datasets/industries/industriesData";
import commonData from "../datasets/_common/commonData";

function industriesHandler() {
    // Scroll to the top
    window.scrollTo(0, 0);
    const container = clearContent();
    const components = [
        HeroBeta(industriesData.industriesHeroData),
        IndustryHomeCards(industriesData.industryHomeCardsData),
        footerAlpha(commonData.footerData)
    ];
    components.forEach(component => container.appendChild(component));
}


export default industriesHandler