import { useSelector } from "react-redux";

//styles
import 'animate.css';

import { MenuDataRender } from "../../../common(logic)/MenuDataRender/script";
import Loading from "../../../../Loading/Loading";
import Error from "../../../../Error/Error";

const MenuList = ({style, image, fetchData}) => {
    const { loading, error } = useSelector(state => state.dishes);
    const { discoverMenu } = MenuDataRender(fetchData);

    return(
      <div className={style.menu_box_main_menu_list}>
          {error
              ? <Error />
              : (
                  <div className={`container ${style.menu_box_main_menu_list_box}`}>
                      <div className={style.menu_box_main_menu_list_box_img}>
                          {!loading && <img src={image}
                                            alt={'dishes-menu'}
                                            className="animate__animated animate__bounceIn"
                          />}
                      </div>
                      <div className={style.menu_box_main_menu_list_box_dishes}>
                          <h1>{!loading && fetchData}</h1>
                          <ul className={style.menu_box_main_menu_list_box_dishes_ul}>
                              {loading ? <Loading /> : discoverMenu}
                          </ul>
                      </div>
                  </div>
              )
          }
      </div>
    );
};
export default MenuList;