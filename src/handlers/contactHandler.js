import { clearContent } from "./utils/utils";

import HeroBeta from "../components/heroBeta";
import footerAlpha from "../components/footer/footerAlpha";

import footerData from "../datasets/footerData";
import { contactUsHeroData } from "../datasets/contactUsData";

function contactHandler() {
    // Scroll to the top
    window.scrollTo(0, 0);
    const container = clearContent();
    const components = [
        HeroBeta(contactUsHeroData),
        footerAlpha(footerData)
    ];
    components.forEach(component => container.appendChild(component));
}


export default contactHandler