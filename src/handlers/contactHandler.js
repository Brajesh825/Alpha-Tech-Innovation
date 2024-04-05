import { clearContent } from "./utils/utils";

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