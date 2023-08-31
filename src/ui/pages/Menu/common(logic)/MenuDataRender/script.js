import { AddAndRemoveOrder } from "../../../../../common(logic)/functions/AddAndRemoveOrder";

import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { fetchDishes } from "../../../../../common(logic)/store/actions/fetching-dishes";
import { useHttp } from "../../../../../common(logic)/hooks/useHttp";
//icons
import {BsPlusSquareFill} from "react-icons/bs";

export const MenuDataRender = (fetchData) => {
    const { dishes } = useSelector(state => state.dishes);
    const dispatch = useDispatch();
    const { request } = useHttp();
    const { onClickAdd } = AddAndRemoveOrder();

    useEffect(() => {
        dispatch(fetchDishes(request, fetchData));
    }, [fetchData, request, dispatch]);

    const discoverMenu = dishes.map((item) => (
        <li key={item.id}>
            <div>
                <h3>{item.name}</h3>
                <div>
                    <span>${item.price.toFixed(2)}</span>
                    <button onClick={() => onClickAdd(item)}>
                        <BsPlusSquareFill />
                    </button>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
        </li>
    ));

    return {
        discoverMenu
    }
};

