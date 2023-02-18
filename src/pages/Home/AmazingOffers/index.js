import { ReactComponent as FireIcon } from "../../../assets/icons/fire.svg";
import useMediaQuery from "../../../hooks/useMediaQuery";
import AmazingOffersBigCard from "../AmazingOffersBigCard";
import AmazingOffersCarousel from "../AmazingOffersCarousel";
import AmazingOffersSmallCard from "../AmazingOffersSmallCard";
import SectionTitleBar from "../SectionTitleBar";
import styles from "./index.module.scss";


const AmazingOffers = () => {

    const isDesktop = useMediaQuery("(min-width: 992px)");

    return (
      <div className={styles.amazingOffers}>
        <SectionTitleBar
          icon={<FireIcon />}
          title={"پیشنهادات شگفت انگیز"}
          hasSeeAll
        />

        {isDesktop ? (
          <div className={`row ${styles.offerList}`}>
            <div className="col-3">
              <AmazingOffersBigCard />
            </div>
            <div className="col-9">
              <div className="row gy-3">
                {[...Array(6)].map((item, index) => (
                  <div className="col-6 col-xl-4">
                    <AmazingOffersSmallCard key={index} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <AmazingOffersCarousel />
        )}
      </div>
    );
};

export default AmazingOffers;
