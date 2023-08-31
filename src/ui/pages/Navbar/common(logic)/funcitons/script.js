import { NavLink } from "react-router-dom";
import { AddAndRemoveOrder } from "../../../../../common(logic)/functions/AddAndRemoveOrder";
//icons
import {MdAddBox} from "react-icons/md";
import {AiFillMinusCircle} from "react-icons/ai";
//styles
import style from '../../ui/styles/Navbar.module.scss';

export const navigations = (data) => {
    return data.map(({id, name, path}) => (
        <li key={id}>
            <NavLink to={path} className={({isActive}) => isActive && style.active}>{name}</NavLink>
        </li>
    ));
};

export const ordersComponent = (data) => {
    const { onClickAdd, onClickRemove } = AddAndRemoveOrder();
    const ordersRender = data.map(item => (
        <li className={style.navbar_box_btns_orders_dropdown_ul_li} key={item.id}>
            <div className={style.navbar_box_btns_orders_dropdown_ul_li_order}>
                <h4>{item.name}</h4>
                <button className={style.navbar_box_btns_orders_dropdown_ul_li_order_addOrder}
                        onClick={() => onClickAdd(item)}>
                    <MdAddBox />
                </button>
            </div>
            <span>{`${item.quantity} x $${item.totalPrice.toFixed(2)}`}</span>
            <button className={style.navbar_box_btns_orders_dropdown_ul_li_delOrder}
                    onClick={() => onClickRemove(item)}>
                <AiFillMinusCircle />
            </button>
        </li>
    ));
    return{
        ordersRender
    }
};