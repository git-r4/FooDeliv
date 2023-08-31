import { useDispatch, useSelector } from "react-redux";
import {useEffect} from "react";
import { useHttp } from "../hooks/useHttp";

//fetch actions
import { fetchAddAndRemoveOrder, fetchDeleteOrder } from "../store/actions/fetching-orders";

import { addNewOrder } from "../store/reducers/orders-reducer";

export const AddAndRemoveOrder = () => {
    const { order } = useSelector(state => state.orders);
    const dispatch = useDispatch();
    const { request } = useHttp();

    useEffect(() => {
        dispatch(fetchAddAndRemoveOrder(request, order))
    }, [dispatch, order, request]);

    const onClickAdd = (item) => {
        dispatch(addNewOrder(item));
    }
    const onClickRemove = (item) => {
        dispatch(fetchDeleteOrder(request, item));
    }

    return{
        onClickAdd,
        onClickRemove
    }
};