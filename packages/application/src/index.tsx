import "./index.scss";

import React from "react";

import { Router } from "./library";
import { Client } from "./library";
import { Debugger } from "./library";

import { UI } from "./application";

Client.Interface.render(
    <React.StrictMode>
        <Router.Browser>
            <UI.Application/>
        </Router.Browser>
    </React.StrictMode>
);

void (() => (Debugger.enable) && Debugger.Vitals())();

export * from "./library";
export * from "./components";