import "./index.scss";

import React from "react";

import { Router } from "@iac-factory/front-end-library";
import { Client } from "@iac-factory/front-end-library";
import { Debugger } from "@iac-factory/front-end-library";

import { UI } from "./application";

Client.initialize("Application").render(
    <React.StrictMode>
        <Router.Browser>
            <UI.Application/>
        </Router.Browser>
    </React.StrictMode>
);

void (() => (Debugger.enable) && Debugger.Vitals())();

export * from "@iac-factory/front-end-library";
export * from "./components";