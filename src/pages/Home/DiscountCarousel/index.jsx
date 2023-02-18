import { ReactComponent as DiscountIcon } from "../../../assets/icons/ticket-discount.svg";
import ProductCarousel from "../ProductCarousel";
import ProductSlide from "../ProductSlide";
import SectionTitleBar from "../SectionTitleBar";
import styles from "./index.module.scss";

const DiscountCarousel = () => {
    return (
        <div className={styles.bestSellingProducts}>
            <SectionTitleBar icon={<DiscountIcon />} title={"تخفیف های ویتسل"} hasSeeAll />
            <div className={styles.productList}>
                <ProductCarousel>
                    {
                        [...Array(10)].map((item,index) => <ProductSlide key={index} />)
                    }
                </ProductCarousel>
            </div>
        </div>
    )
}

export default DiscountCarousel;