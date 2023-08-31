import { useSelector } from "react-redux";
//functions
import { CalcTotalPrice } from "../../../../../common(logic)/functions/CalcTotalPrice";
import { CalcTotalQuantity } from "../../../../../common(logic)/functions/CalcTotalQuantity";
import { DropdownEffect } from "../../common(logic)/funcitons/DropdownOutsideClick/script";
import { ordersComponent } from "../../common(logic)/funcitons/script";

import { AiOutlineShopping } from 'react-icons/ai';

const Buttons = ({style}) => {
    const { orders } = useSelector(state => state.orders);
    const { totalPrice } = CalcTotalPrice();
    const { totalQuantity } = CalcTotalQuantity();
    const { dropdown, toggleBtn } = DropdownEffect();
    const { ordersRender } = ordersComponent(orders);

    return (
      <div className={style.navbar_box_btns}>
          <div className={style.navbar_box_btns_orders} id="dropdownBox">
            <button onClick={toggleBtn}
                    className={style.navbar_box_btns_orders_toggleBtn}>
                <AiOutlineShopping />
                <span>{totalQuantity}</span>
            </button>
              {dropdown && <div className={style.navbar_box_btns_orders_dropdown}>
                  <ul className={style.navbar_box_btns_orders_dropdown_ul}>
                      {orders.length === 0
                          ? <h4 className={style.navbar_box_btns_orders_dropdown_ul_empty}>
                              Would you like to order something? Go to Menu :)
                            </h4>
                          : ordersRender}
                  </ul>
                  <div className={style.navbar_box_btns_orders_dropdown_total}>
                      <span>Total: <b>${totalPrice.toFixed(2)}</b></span>
                      <button>Checkout</button>
                  </div>
              </div>}
          </div>
          <div className={style.navbar_box_btns_logInBtn}>
              <svg>
                  <rect x="0" y="0" fill="none" width="160" height="45"/>
              </svg>
              Login
          </div>
      </div>
    );
};
export default Buttons;