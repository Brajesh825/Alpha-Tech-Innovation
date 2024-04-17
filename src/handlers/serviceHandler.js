import { clearContent } from "./utils/utils";

import HeroBeta from "../components/heroBeta";
import ServiceHomeCards from "../components/serviceHomeCards";
import footerAlpha from "../components/footer/footerAlpha";

import serviceData from "../datasets/services/serviceData";

import commonData from "../datasets/_common/commonData";

function serviceHandler() {
    // Scroll to the top
    window.scrollTo(0, 0);
    const container = clearContent();
    const components = [
        HeroBeta(serviceData.serviceHeroData),
        ServiceHomeCards(serviceData.services),
        footerAlpha(commonData.footerData)
    ];
    components.forEach(component => container.appendChild(component));
}

export default serviceHandler