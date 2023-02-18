import { ReactComponent as Logo } from '../../../assets/icons/logo.svg';
import { ReactComponent as SearchIcon } from '../../../assets/icons/search-normal.svg';
import { ReactComponent as ShoppingCartIcon } from '../../../assets/icons/shopping-cart.svg';
import { ReactComponent as MenuIcon } from '../../../assets/icons/menu.svg';
import { ReactComponent as LoginIcon } from '../../../assets/icons/login.svg';
import styles from "./index.module.scss";

const HeaderMobile = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logoBox}>
                <Logo width={24} height={24} />
                <span>ویتسل</span>
            </div>
            <div className={styles.navbar}>
                <MenuIcon width={24} height={24} />
                <div className={styles.leftBox}>
                    <div className={styles.inputBox}>
                        <input placeholder="جستجو ..." />
                        <SearchIcon />
                    </div>
                    <ShoppingCartIcon className={styles.shoppingCartIcon} />
                    <LoginIcon width={24} height={24} />
                </div>
            </div>
        </div>
    )
}

export default HeaderMobile;