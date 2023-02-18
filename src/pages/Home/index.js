import Banner1 from "../../assets/images/banner-1.jpg";
import Banner2 from "../../assets/images/banner-2.jpg";
import AmazingOffers from "./AmazingOffers";
import BestSellingProducts from "./BestSellingProducts";
import BottomBanners from "./BottomBanners";
import DiscountCarousel from "./DiscountCarousel";
import DownloadLinks from "./DownloadLinks";
import DualBanners from "./DualBanners";
import MainCarousels from "./MainCarousels";
import PopularCategories from "./PopularCategories";

const Home = () => {
  return (
    <>
      <MainCarousels />
      <DualBanners banner1={Banner1} banner2={Banner2} vertical={false} />
      <DiscountCarousel />
      <DualBanners banner1={Banner2} banner2={Banner1} vertical={true} />
      <PopularCategories />
      <AmazingOffers />
      <BestSellingProducts />
      <BottomBanners />
      <DownloadLinks />
    </>
  );
};

export default Home;
