import { clearContent } from "./utils/utils";

import HeroBeta from "../components/heroBeta";
import footerAlpha from "../components/footer/footerAlpha";

import { contactUsHeroData } from "../datasets/contactUs/contactUsData";
import commonData from "../datasets/_common/commonData";

function contactHandler() {
    // Scroll to the top
    window.scrollTo(0, 0);
    const container = clearContent();
    const components = [
        HeroBeta(contactUsHeroData),
        footerAlpha(commonData.footerData)
    ];
    components.forEach(component => container.appendChild(component));
}


export default contactHandler