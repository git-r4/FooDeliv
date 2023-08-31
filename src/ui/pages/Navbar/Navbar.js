import Navs from "./ui/blocks/Navs";
import Buttons from "./ui/blocks/Buttons";

//image
import navbarBrand from '../../assets/images/navbar-brand.png';
//style
import style from './ui/styles/Navbar.module.scss';
import {Link} from "react-router-dom";

const Navbar = () => {
    return(
      <div className={`${style.navbar} container`}>
        <div className={style.navbar_brand}>
            <Link to={'/'}>
                <img src={navbarBrand} alt={`Navbar-Brand-Logo`} />
            </Link>
        </div>
        <div className={style.navbar_box}>
            <Navs classProp={style.navbar_box_navs} />
            <Buttons style={style} />
        </div>
      </div>
    );
};

export default Navbar;