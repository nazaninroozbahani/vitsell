import styles from "./index.module.scss";
import {ReactComponent as Handsfree} from "../../../assets/images/handsfree.svg";
import {ReactComponent as FireLabelIcon} from "../../../assets/icons/fire-label.svg";


const AmazingOffersSmallCard = () => {
    return (
        <div className={`${styles.amazingOffersSmallCard}`}>
            <FireLabelIcon className={styles.fireLabel} />
            <Handsfree />
            <div className={styles.productInfo}>
                <p className={styles.title}>کتونی نایک شماره ۱۲۱</p>
                <p className={styles.toman}>
                  <span className={styles.price}>۴,۳۴۳,۰۰۰ </span>
                  تومان
                </p>
                <div className={styles.discountBox}>
                    <span className={styles.discountPercent}>۳۴٪</span>
                    <span className={styles.previousPrice}>۴,۳۴۳,۰۰۰ </span>
                </div>
            </div>
        </div>
    )
}

export default AmazingOffersSmallCard;