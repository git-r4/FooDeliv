import {navigations} from "../../common(logic)/funcitons/script";
import {NavbarData} from "../../common(logic)/NavbarData";

const Navs = ({classProp}) => {
    return(
        <ul className={classProp}>
            {navigations(NavbarData)}
        </ul>
    );
};

export default Navs;