import styles from "./index.module.scss";

export module Component {
    export const Bold = ( { children } ) => {
        return (
            <span className={styles.bold}>
                {
                    children
                }
            </span>
        )
    };

    export const Text = () => {
        return (
            <>
                <span>
                    {
                        [ "Copyright", "©", new Date().getFullYear(), "—" ].join( " " )
                    }
                </span>
                <span>
                    &nbsp;
                    <Bold>
                        { process.env[ "REACT_APP_NAME" ] }
                    </Bold>
                    &nbsp;
                </span>
                <span>
                    {
                        [ "&", "Affiliates" + ".", "All Rights Reserved" ].join( " " )
                    }
                </span>
            </>
        );
    };

    export const Footer = () => {
        return (
            <footer className={ styles.component }>
                <Text/>
            </footer>
        );
    };
}

export default Footer;
export const { Footer } = Component;