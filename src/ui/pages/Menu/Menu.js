//scripts
import { MenuNavigation} from "./common(logic)/MenuNavigation/script";
import { MenuComponent } from "./common(logic)/MenuComponents/script";
//blocks
import MenuNavs from "./ui/blocks/MenuNavs";

//styles
import style from './ui/styles/Menu.module.scss';

//images
import menuAdI from '../../assets/images/menu-ad1.jpg';
import menuAdII from '../../assets/images/menu-ad2.jpg';

const Menu = () => {
    const { menuNav, onChangeNav } = MenuNavigation();

    return(
        <div className={style.menu}>
            <div className={`container ${style.menu_box}`}>
                <div className={style.menu_box_header}>
                    <h1>Discover Menu</h1>
                </div>
                <div className={style.menu_box_main}>
                    <MenuNavs onChangeNav={onChangeNav}
                              menuNav={menuNav}
                              style={style} />
                    {MenuComponent(menuNav)}
                </div>
                <div className={style.menu_box_footer}>
                    <div>
                        <img src={menuAdI} alt={'menu-advertising-I'} />
                        <div>
                            <h2>Steaks & BBQ</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                            <h1>$30</h1>
                        </div>
                    </div>
                    <div>
                        <img src={menuAdII} alt={'menu-advertising-II'} />
                        <div>
                            <h2>Coctails</h2>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                            <h1>$10</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;