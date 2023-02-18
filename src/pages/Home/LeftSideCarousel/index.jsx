import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import AmazingOffersBigCard from '../AmazingOffersBigCard';
import styles from "./index.module.scss";

const LeftSideCarousel = () => {
    return (
        <Swiper
        className={styles.productCarousel}
        modules={[Navigation]}
        navigation
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
          [...Array(10)].map((item,index) => <SwiperSlide>
        <AmazingOffersBigCard />
      </SwiperSlide>)
      }
      
    </Swiper>
    )
}

export default LeftSideCarousel;