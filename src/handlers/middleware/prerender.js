import { createContainer } from "../utils/utils";
import Navbar from "../../components/navbar";
import navData from "../../datasets/navData";

let navbarInstance = null;
let container = null;

const preRender = (ctx, next) => {
    // Pre Rendering
    const root = document.getElementById("root"); 
    // Check if navbarInstance is null or undefined
    if (!navbarInstance) {
        navbarInstance = Navbar(navData);
        root.appendChild(navbarInstance);
    }

    // Check if container is null or undefined
    if (!container) {
        container = createContainer();
        root.appendChild(container);
    }

    next();
}

export default preRender;
