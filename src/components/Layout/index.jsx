import Footer from "../Footer";
import Header from "../Header";
import styles from "./index.module.scss"

const Layout = ({children}) => {
    return (
        <div className={styles.container}>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Layout;