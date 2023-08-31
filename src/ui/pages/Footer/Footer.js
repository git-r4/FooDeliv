import { Link } from "react-router-dom";
import { GrInstagram } from 'react-icons/gr';
import { FaFacebookF, FaLinkedinIn, FaTelegram } from 'react-icons/fa';
//images
import brandLogo from '../../assets/images/navbar-brand.png';

// style
import style from './ui/styles/Footer.module.scss';

const Footer = (props) => {
    return(
        <footer className={style.footer}>
            <ul className={`container ${style.footer_box}`}>
                <li className={style.footer_box_head}>
                    <img src={brandLogo} alt={'brand-logo'} />
                    <h1>-The Meat Experience-</h1>
                </li>
                <li className={style.footer_box_main}>
                    <ul>
                        <li>
                            <h2>Open</h2>
                            <div>
                                <p>Mon. - Thurs.: 12AM - 11PM</p>
                                <p>Fri.- Sun.: 9AM - 12PM</p>
                            </div>
                        </li>
                        <li>
                            <Link to={'/'}>Home</Link>
                            <Link to={'/contact'}>About</Link>
                            <Link to={'/contact'}>Contact</Link>
                        </li>
                        <li>
                            <Link to={'/specials'}>Blog</Link>
                            <Link to={'/menu'}>Menu</Link>
                            <Link to={'#'}>Orders</Link>
                        </li>
                    </ul>
                </li>
                <li className={style.footer_box_foot}>
                    <p>Heyder Aliyev, 72 - Baku city</p>
                    <ul>
                        <li>
                            <a href={"#"}><GrInstagram /></a>
                        </li>
                        <li>
                            <a href={"#"}><FaFacebookF /></a>
                        </li>
                        <li>
                            <a href={"#"}><FaLinkedinIn /></a>
                        </li>
                        <li>
                            <a href={"#"}><FaTelegram /></a>
                        </li>
                    </ul>
                </li>
            </ul>
        </footer>
    );
};
export default Footer;