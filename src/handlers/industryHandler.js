import { clearContent } from "./utils/utils";

import HeroBeta from "../components/heroBeta";
import footerAlpha from "../components/footer/footerAlpha";


import { industryHeroData } from "../datasets/industryData";
import footerData from "../datasets/footerData";

function industryHandler() {
    // Scroll to the top
    window.scrollTo(0, 0);
    const container = clearContent();
    const components = [
        HeroBeta(industryHeroData),
        footerAlpha(footerData)
    ];
    components.forEach(component => container.appendChild(component));
}


export default industryHandler