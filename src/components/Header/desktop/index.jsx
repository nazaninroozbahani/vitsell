import styles from "./index.module.scss";
import { ReactComponent as Logo } from '../../../assets/icons/logo.svg';
import { ReactComponent as CategoryIcon } from '../../../assets/icons/category.svg';
import { ReactComponent as FireIcon } from '../../../assets/icons/fire.svg';
import { ReactComponent as DiscountIcon } from '../../../assets/icons/ticket-discount.svg';
import { ReactComponent as ArrowIcon } from '../../../assets/icons/arrow-down.svg';
import { ReactComponent as ShoppingCartIcon } from '../../../assets/icons/shopping-cart.svg';
import { ReactComponent as SearchIcon} from '../../../assets/icons/search-normal.svg';

const HeaderDesktop = () => {
    return (
        <div className={styles.header}>
            <div>
                <Logo width={40} height={40} />
                <ul>
                    <li>
                        <CategoryIcon fill="#4F4F4F" width={20} height={20} />
                        <span>دسته بندی ها</span>
                        <ArrowIcon fill="#4F4F4F" width={16} height={16} />
                    </li>
                    <li>
                        <FireIcon fill="#4F4F4F" width={20} height={20} />
                        <span>پرفروش ترین ها</span>
                    </li>
                    <li>
                        <DiscountIcon fill="#4F4F4F" width={20} height={20} />
                        <span>تخفیف دار ها</span>
                    </li>
                </ul>
            </div>
            <div>
                <div className={styles.inputBox}>
                    <input placeholder="جستجوی محصولات..." />
                    <SearchIcon />
                </div>
                <button className={styles.shoppingCartBtn}>
                    <ShoppingCartIcon className={styles.shoppingCartIcon} />
                </button>
                <button className={styles.loginBtn}>ورود/ ثبت نام</button>
            </div>
        </div>
    )
}

export default HeaderDesktop;