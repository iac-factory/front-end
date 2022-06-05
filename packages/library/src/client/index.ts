import * as DOM from "react-dom/client";

export module Client {
    export const initialize = (ID: string = "root") => DOM.createRoot(document.getElementById(ID));
    export const Hydrate = DOM.hydrateRoot;
}

export default Client;
