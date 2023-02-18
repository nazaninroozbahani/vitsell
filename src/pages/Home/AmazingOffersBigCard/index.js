import styles from "./index.module.scss";
import {ReactComponent as Mixer} from "../../../assets/images/mixer.svg";
import {ReactComponent as FireLabelIcon} from "../../../assets/icons/fire-label.svg";

const AmazingOffersBigCard = () => {
  return (
    <div className={styles.amazingOffersBigCard}>
      <FireLabelIcon className={styles.fireLabel} />
      <Mixer />
      <p className={styles.title}>همزن برقی Sanford</p>
      <p className={styles.toman}>
        <span className={styles.price}>۴,۳۴۳,۰۰۰ </span>
        تومان
      </p>
    </div>
  );
};

export default AmazingOffersBigCard;
