import useMediaQuery from "../../../hooks/useMediaQuery";
import LeftSideCarousel from "../LeftSideCarousel";
import RightSideCarousel from "../RightSideCarousel";
import styles from "./index.module.scss";

const MainCarousels = () => {

    const isDesktop = useMediaQuery('(min-width: 992px)');

    return (
        <div className={`row gx-0 gx-lg-3 ${styles.mainCarousels}`}>
            <div className="col-12 col-lg-8" >
                <RightSideCarousel />
            </div>
            {
                isDesktop ?
                    <div className="col-4" >
                        <LeftSideCarousel />
                    </div> : null
            }
            
        </div>
    )
}

export default MainCarousels;