import styles from "./index.module.scss";
import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow-down.svg";

const SectionTitleBar = ({icon, title, hasSeeAll}) =>{
    return (
        <div className={styles.titleBox}>
              <div className={styles.iconBox}>
                {icon}
              </div>
              <span className={styles.title}>{title}</span>
              <div className={styles.line} />
              {
                hasSeeAll ?
                    <div>
                      <span className={styles.seeAll}>مشاهده همه</span>
                      <ArrowIcon width={16} height={16} className={styles.arrow} />
                    </div> : null
              }
            </div>
    )
}

export default SectionTitleBar;