import { Grid } from "./grid";

import styles from "./index.module.scss";
export module Component {
    export const Container = ( properties: Properties ) => {
        return (
            <main className={ styles.component }>
                <Grid lg={ true } md={ true } sm={ true }>
                    { (properties.children) ? properties.children : null }
                </Grid>
            </main>
        );
    };
}

export interface Properties {
    children?: JSX.Element
}

export default Container;
export const { Container } = Component;