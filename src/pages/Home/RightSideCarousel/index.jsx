import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';
import RightCarouselImage from '../../../assets/images/main-carousel-image.jpg';
import styles from "./index.module.scss";

const RightSideCarousel = () => {
    return (
        <Swiper
        className={styles.productCarousel}
        modules={[Navigation, Pagination]}
        pagination
        navigation
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
          [...Array(5)].map((item,index) => <SwiperSlide>
        <img src={RightCarouselImage} alt="Right Carousel" />
      </SwiperSlide>)
      }
      
    </Swiper>
    )
}

export default RightSideCarousel;