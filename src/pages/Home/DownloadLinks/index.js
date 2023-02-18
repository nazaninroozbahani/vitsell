import styles from "./index.module.scss";
import { ReactComponent as BazaarIcon } from "../../../assets/icons/bazaar.svg";
import { ReactComponent as MyketIcon } from "../../../assets/icons/myket.svg";
import { ReactComponent as AndroidIcon } from "../../../assets/icons/android.svg";
import { ReactComponent as Mobile } from "../../../assets/images/mobile.svg";
import useMediaQuery from "../../../hooks/useMediaQuery";

const DownloadLinks = () => {

    const isDesktop = useMediaQuery("(min-width: 992px)");

  return (
    <div className={`row g-0 ${styles.downloadLinks}`}>
      <div className={`col-12 col-lg-10 col-xl-9 ${styles.box}`}>
        <p> ویتسل را همیشه همراه داشته باشید!</p>
        <div className={`row ${styles.links}`}>
          <div className="col-6 col-lg-4">
            <button>
              <BazaarIcon />
              <span>دانلود از بازار</span>
            </button>
          </div>
          <div className="col-6 col-lg-4">
            <button>
              <MyketIcon />
              <span>دانلود از مایکت</span>
            </button>
          </div>
          <div className="col-12 col-lg-4">
            <button>
              <AndroidIcon />
              <span>دانلود مستقیم</span>
            </button>
          </div>
        </div>
        {isDesktop ? <Mobile className={styles.mobile} /> : null}
      </div>
    </div>
  );
};

export default DownloadLinks;
