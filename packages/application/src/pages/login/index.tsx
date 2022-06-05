import React from "react";

export * from "./form";

export * from "./provider";
export * from "./extractor";
export * from "./handler";

import { Shell } from "..";
import { Form } from "./form";

export const Login = () => {
    return (
        <Shell>
            <Form/>
        </Shell>
    );
};

export default Login;