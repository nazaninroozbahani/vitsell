import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';
import ProductSlide from '../ProductSlide';
import styles from "./index.module.scss";
import useMediaQuery from '../../../hooks/useMediaQuery';

const ProductCarousel = () => {

    const isDesktop = useMediaQuery('(min-width: 992px)');
    const isTablet = useMediaQuery('(min-width: 768px)');
    const isLandscape = useMediaQuery('(min-width: 576px)');

    return (
        <Swiper
          className={styles.productCarousel}
          modules={[Navigation, Pagination]}
          pagination
          navigation
          spaceBetween={0}
          slidesPerView={isDesktop? 6: isTablet? 4: isLandscape? 3: 2}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {
            [...Array(10)].map((item,index) => <SwiperSlide>
                <ProductSlide />
              </SwiperSlide>)
          }
      
        </Swiper>
    )
}

export default ProductCarousel;