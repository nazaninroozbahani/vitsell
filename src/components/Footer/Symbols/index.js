import { ReactComponent as EcunionIcon } from "../../../assets/icons/ecunion.svg";
import { ReactComponent as SamandehiIcon } from "../../../assets/icons/samandehi.svg";
import styles from "./index.module.scss";

const Symbols = () => {
  return (
    <div className={`col-12 col-lg-2 ${styles.symbols}`}>
      <div>
        <SamandehiIcon />
      </div>
      <div>
        <EcunionIcon />
      </div>
    </div>
  );
};

export default Symbols;
