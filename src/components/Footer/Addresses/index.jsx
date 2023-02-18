import styles from "./index.module.scss";
import { ReactComponent as SendIcon } from '../../../assets/icons/send.svg';
import { ReactComponent as CallIcon } from '../../../assets/icons/call.svg';
import { ReactComponent as MapIcon } from '../../../assets/icons/map.svg';
import { ReactComponent as InstagramIcon } from '../../../assets/icons/instagram.svg';
import { ReactComponent as WhatsappIcon } from '../../../assets/icons/whatsapp.svg';


const Addresses = () => {
    return(
        <div className={`col-12 col-lg-3 ${styles.addresses}`}>
            <p>ارتباط با ویتسل</p>
            <ul>
                <li>
                    <SendIcon />
                    <span>vitsell@gmail.com</span>
                </li>
                <li>
                    <CallIcon />
                    <span>۰۸۴۷۷۴۷۳۲۲</span>
                </li>
                <li>
                    <MapIcon />
                    <span>خیابان ولی عصرنرسیده به سینما آفریقا</span>
                </li>
            </ul>
            <div className={styles.socialMediaLinks}>
                <InstagramIcon />
                <SendIcon />
                <WhatsappIcon />
            </div>
        </div>
    )
}

export default Addresses;