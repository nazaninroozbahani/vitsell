import styles from "./index.module.scss";
import { ReactComponent as Logo } from "../../../assets/icons/logo.svg";

const LogoBar = () => {
  return (
    <div className="col-3">
      <Logo width={112} height={112} />
      <p className={styles.vitsell}>ویتسل</p>
      <p className={styles.description}>
        صرافی هفت ارز پلتفرم ایمن و سریع برای انجام معاملات ارز دیجیتال در بستری
        مطمئن
      </p>
    </div>
  );
};

export default LogoBar;
