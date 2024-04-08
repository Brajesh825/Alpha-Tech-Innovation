// Page.js
import page from "page.js";

import { homeHandler, aboutHandler, serviceHandler, industriesHandler, industryHandler, contactHandler } from "./src/handlers/index";
import preRender from "./src/handlers/middleware/prerender";

// Define routes
page('/', preRender, homeHandler);
page('/about-us', preRender, aboutHandler);
page('/services', preRender, serviceHandler);
page('/industries', preRender, industriesHandler);
page('/contact-us', preRender, contactHandler);
page('/industry/:id', preRender, industryHandler);

// Error page
page('*', function (ctx, next) {
    // Render your error page here
    
    console.error("Page not found:", ctx.path);
});

// Start routing
page.start();
