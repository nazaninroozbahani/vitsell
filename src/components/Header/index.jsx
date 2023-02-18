import useMediaQuery from "../../hooks/useMediaQuery";
import HeaderDesktop from "./desktop";
import HeaderMobile from "./mobile";

const Header = () => {

    const isDesktop = useMediaQuery("(min-width: 992px)");

    return (
        isDesktop? <HeaderDesktop />: <HeaderMobile />
    )
}

export default Header;