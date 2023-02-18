import styles from "./index.module.scss";

import Addresses from "./Addresses";
import InnerLinks from "./InnerLinks";
import Symbols from "./Symbols";
import LogoBar from "./LogoBar";
import useMediaQuery from "../../hooks/useMediaQuery";

const Footer = () => {

    const isDesktop = useMediaQuery("(min-width: 992px)");

    return (
        <div className={`container-fluid ${styles.footer}`}>
            <div className="row">
                {
                    isDesktop ?
                        <LogoBar /> : null
                }
                <InnerLinks />
                <Addresses />
                <Symbols />
            </div>
            <hr />
            <p className={styles.copyRight}>کلیه حقوق متعلق به شرکت ویستا است. </p>
        </div>
    )
}

export default Footer;