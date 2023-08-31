//components
import MenuList from "../../ui/blocks/MenuList/MenuList";

//styles
import style from "../../ui/styles/Menu.module.scss";

//images
import chicken from "../../../../assets/images/chicken-menu.jpeg";
import beef from "../../../../assets/images/beef-menu.jpeg";
import drinks from "../../../../assets/images/drinks-menu.png";

export const MenuComponent = (navigation) => {
    const menuList = (image, fetchData) => {
        return <MenuList style={style}
                         image={image}
                         fetchData={fetchData}/>
    }
    switch (navigation){
        case "chicken":
            return menuList(chicken, 'chicken');
        case "beef":
            return menuList(beef, 'beef');
        case "drinks":
            return menuList(drinks, 'drinks');
        default:
            return menuList(chicken, 'chicken');
    };
};