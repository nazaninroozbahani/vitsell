import { ReactComponent as StarIcon } from "../../../assets/icons/magic-star.svg";
import ProductCarousel from "../ProductCarousel";
import ProductSlide from "../ProductSlide";
import SectionTitleBar from "../SectionTitleBar";
import styles from "./index.module.scss";

const BestSellingProducts = () => {
    return (
        <div className={styles.bestSellingProducts}>
            <SectionTitleBar icon={<StarIcon />} title={"پرفروش ترین محصولات"} hasSeeAll />
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

export default BestSellingProducts;