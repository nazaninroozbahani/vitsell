import styles from "./index.module.scss";

const DualBanners = ({ banner1, banner2, vertical }) => {
  return (
    <div className={`row gx-2 gx-lg-3 gy-2 ${styles.dualBanners}`}>
      <div className={vertical ? "col-12 col-lg-6" : "col-6"}>
        <img src={banner1} alt="Banner 1" />
      </div>
      <div className={vertical ? "col-12 col-lg-6" : "col-6"}>
        <img src={banner2} alt="Banner 2" />
      </div>
    </div>
  );
};

export default DualBanners;
