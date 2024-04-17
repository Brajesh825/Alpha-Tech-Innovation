import { clearContent } from "./utils/utils";

import HeroBeta from "../components/heroBeta";
import footerAlpha from "../components/footer/footerAlpha";
import ServiceHomeCards from "../components/serviceHomeCards";

import industiesData from "../datasets/industries/industriesData";
import commonData from "../datasets/_common/commonData";

function industryHandler(ctx) {
    let id = ctx.params.id
    let currentIndustry = industiesData.industries[id]

    const hero = currentIndustry.hero
    const services = currentIndustry.services

    // Scroll to the top
    window.scrollTo(0, 0);
    const container = clearContent();
    const components = [
        HeroBeta(hero),
        ServiceHomeCards(services),
        footerAlpha( commonData. footerData)
    ];
    components.forEach(component => container.appendChild(component));
}


export default industryHandler