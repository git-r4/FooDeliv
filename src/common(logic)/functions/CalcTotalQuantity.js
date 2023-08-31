import { useEffect } from "react";
import { calcTotalQuantity } from "../store/reducers/orders-reducer";
import { useDispatch, useSelector } from "react-redux";

export const CalcTotalQuantity = () => {
    const { orders, totalQuantity } = useSelector(state => state.orders);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calcTotalQuantity());
    }, [dispatch, orders]);

    return{
        totalQuantity
    };
};