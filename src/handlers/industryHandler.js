import { clearContent } from "./utils/utils";

import HeroBeta from "../components/heroBeta";
import footerAlpha from "../components/footer/footerAlpha";

import industiesData from "../datasets/industries/industriesData";

import footerData from "../datasets/footerData";
import ServiceHomeCards from "../components/serviceHomeCards";


function industryHandler(ctx) {
    let id = ctx.params.id
    let currentIndustry = industiesData[id]

    const hero = currentIndustry.hero
    const services = currentIndustry.services

    // Scroll to the top
    window.scrollTo(0, 0);
    const container = clearContent();
    const components = [
        HeroBeta(hero),
        ServiceHomeCards(services),
        footerAlpha(footerData)
    ];
    components.forEach(component => container.appendChild(component));
}


export default industryHandler