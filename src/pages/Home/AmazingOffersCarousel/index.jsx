import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import AmazingOffersSmallCard from '../AmazingOffersSmallCard';
import styles from "./index.module.scss";

const AmazingOffersCarousel = () => {
    return (
        <Swiper
          className={styles.productCarousel}
          modules={[Navigation]}
          navigation
          spaceBetween={0}
          slidesPerView={1.5}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {
            [...Array(10)].map((item,index) => <SwiperSlide>
              <AmazingOffersSmallCard />
            </SwiperSlide>)
          }
        </Swiper>
    )
}

export default AmazingOffersCarousel;