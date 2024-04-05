import { clearContent } from "./utils/utils";

import HeroBeta from "../components/heroBeta";
import { serviceHeroData } from "../datasets/serviceData";

import footerAlpha from "../components/footer/footerAlpha";
import footerData from "../datasets/footerData";

function serviceHandler() {
    // Scroll to the top
    window.scrollTo(0, 0);
    const container = clearContent();
    const components = [
        HeroBeta(serviceHeroData),
        footerAlpha(footerData)
    ];
    components.forEach(component => container.appendChild(component));
}

export default serviceHandler