import { SwiperSlide } from "swiper/react";
import styles from "./index.module.scss";
import { ReactComponent as Shoes } from "../../../assets/images/shoes.svg";


const ProductSlide = () => {
    return (
        <SwiperSlide>
            <div className={styles.productSlide}>
                <Shoes width={112} height={112} />
                <p className={styles.toman}>
                  <span className={styles.price}>۴,۳۴۳,۰۰۰ </span>
                  تومان
                </p>
                <div className={styles.discountBox}>
                    <span className={styles.discountPercent}>۳۴٪</span>
                    <span className={styles.previousPrice}>۴,۳۴۳,۰۰۰ </span>
                </div>
            </div>
        </SwiperSlide>
    )
}

export default ProductSlide;