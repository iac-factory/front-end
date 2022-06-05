import React, { useEffect } from "react";

import { Component } from "./component";

import "./index.scss";
export const Spinner = ( { children, callback } ) => {
    useEffect( () => {
        const timeout = setTimeout( () => callback[ 1 ]( false ), 1000 );

        return () => void ( async () => clearTimeout(timeout) )();
    }, [ children, callback ]);

    return (
        <Component>
            {
                (children) ? children : null
            }
        </Component>
    );
};

export default Spinner;