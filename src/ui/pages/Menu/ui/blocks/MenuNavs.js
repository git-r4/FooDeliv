//scripts
import { MenuLogic } from "../../common(logic)/MenuNavigation/script";

//icons
import { BiDrink } from 'react-icons/bi';
import { GiChickenOven } from 'react-icons/gi';
import { LuBeef } from 'react-icons/lu';

const MenuNavs = ({onChangeNav, menuNav, style}) => {

    return(
        <ul className={style.menu_box_main_navsUL}>
            <li className={menuNav === 'chicken'
                ? `${style.menu_box_main_navsUL_active} ${style.menu_box_main_navsUL_li}`
                : style.menu_box_main_navsUL_li}
                onClick={() => onChangeNav('chicken')}>
                <GiChickenOven className={style.menu_box_main_navsUL_li_icons} />
                <p>Chicken</p>
            </li>
            <li className={menuNav === 'beef'
                ? `${style.menu_box_main_navsUL_active} ${style.menu_box_main_navsUL_li}`
                : style.menu_box_main_navsUL_li}
                onClick={() => onChangeNav('beef')}>
                <LuBeef className={style.menu_box_main_navsUL_li_icons} />
                <p>Beef</p>
            </li>
            <li className={menuNav === 'drinks'
                ? `${style.menu_box_main_navsUL_active} ${style.menu_box_main_navsUL_li}`
                : style.menu_box_main_navsUL_li}
                onClick={() => onChangeNav('drinks')}>
                <BiDrink className={style.menu_box_main_navsUL_li_icons} />
                <p>Drinks</p>
            </li>
        </ul>
    );
};
export default MenuNavs;