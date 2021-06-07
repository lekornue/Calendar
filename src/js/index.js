import { start } from "./contentSite";

import "../css//content.css";
import "../css/modal.css";

window.addEventListener("DOMContentLoaded", () => {
    start({
        data: {},
        title: "Events",
        visible: "hidden",
    });
});