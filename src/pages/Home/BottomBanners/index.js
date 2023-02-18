import styles from "./index.module.scss";
import Banner3 from "../../../assets/images/banner-3.jpg";
import Banner4 from "../../../assets/images/banner-4.jpg";
import Banner5 from "../../../assets/images/banner-5.jpg";

const BottomBanners = () => {
  return (
    <div className={styles.bottomBanners}>
      <div className="row g-0 g-lg-3">
        <div className={`col-12 col-lg-6 ${styles.largerBanner}`}>
          <img src={Banner3} alt="Banner" />
        </div>
        <div className="col-12 col-lg-6">
          <div className="row g-0 g-lg-3">
            <div className="col-12">
              <img src={Banner4} alt="Banner" />
            </div>
            <div className="col-12" style={{ marginTop: 16 }}>
              <img src={Banner5} alt="Banner" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBanners;
