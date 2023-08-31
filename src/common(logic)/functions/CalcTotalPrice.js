import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';

import { calcTotalPrice } from "../store/reducers/orders-reducer";


export const CalcTotalPrice = () => {
    const { orders, totalPrice } = useSelector(state => state.orders);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calcTotalPrice());
    }, [orders, dispatch]);

    return{
        totalPrice
    }
};