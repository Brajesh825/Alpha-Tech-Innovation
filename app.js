// Page.js
import page from "page.js";

import { homeHandler , aboutHandler, serviceHandler, industryHandler, contactHandler } from "./src/handlers/handlers";


// Define routes
page('/', homeHandler);
page('/about-us', aboutHandler);
page('/services', serviceHandler);
page('/industries', industryHandler);
page('/contact-us', contactHandler);

// Start routing
page.start();
