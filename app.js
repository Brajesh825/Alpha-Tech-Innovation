// Page.js
import page from "page.js";

import { homeHandler , aboutHandler, serviceHandler, industryHandler, contactHandler } from "./src/handlers/index";
import preRender from "./src/handlers/middleware/prerender";

// Define routes
page('/', preRender ,homeHandler);
page('/about-us',preRender , aboutHandler);
page('/services', preRender, serviceHandler);
page('/industries', preRender , industryHandler);
page('/contact-us', preRender, contactHandler);

// Start routing
page.start();
