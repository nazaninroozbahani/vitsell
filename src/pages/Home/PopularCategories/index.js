import styles from "./index.module.scss";
import { ReactComponent as CategoryIcon } from "../../../assets/icons/category.svg";
import { ReactComponent as Headphone } from "../../../assets/images/headphone.svg";
import Bags from "../../../assets/images/bags.jpg";
import useMediaQuery from "../../../hooks/useMediaQuery";
import SectionTitleBar from "../SectionTitleBar";

const PopularCategories = () => {

    const isDesktop = useMediaQuery("(min-width: 992px)");

  return (
    <div className={`container-fluid ${styles.popularCategories}`}>
      <div className="row">
        <div className="col-12 col-lg-8">
          <SectionTitleBar icon={<CategoryIcon />} title={"دسته بندی های محبوب"} />
          <div className={`row ${styles.items}`}>
            {[...Array(9)].map((item, index) => (
              <div className="col-4 col-md-3" key={index}>
                <div className={styles.itemBox}>
                  <Headphone />
                  <p>مد و پوشاک</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {
            isDesktop ?
              <div className="col-4">
                <img className={styles.bags} src={Bags} alt="Categories" />
              </div> : null
        }
      </div>
    </div>
  );
};

export default PopularCategories;
