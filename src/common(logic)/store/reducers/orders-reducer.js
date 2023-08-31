import { createSlice } from "@reduxjs/toolkit";

export const OrdersReducer = createSlice({
    name: 'orders',
    initialState: {
        orders: [],
        order: {},
        totalPrice: 0,
        totalQuantity: 0,
        loading: false,
        error: null
    },
    reducers: {
        fetchStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchSuccess: (state, action) => {
            state.loading = false;
            const fetchOrders = Object.values(action.payload);
            state.orders = fetchOrders;
        },
        fetchFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        calcTotalPrice: (state) => {
          state.totalPrice = state.orders.reduce((initPrice, item) => initPrice + item.totalPrice, 0);
        },
        calcTotalQuantity: (state) => {
            state.totalQuantity = state.orders.reduce((initCount, item) => initCount + item.quantity, 0);
        },
        addNewOrder: (state, action) => {
            let orderDish = action.payload;
            let sameDish = state.orders.find(item => item.id === orderDish.id);
            if(!sameDish){
                state.order = {
                    id: orderDish.id,
                    name: orderDish.name,
                    price: orderDish.price,
                    totalPrice: orderDish.price,
                    quantity: 1
                }
            }else{
                state.order = {
                    id: sameDish.id,
                    name: sameDish.name,
                    price: sameDish.price,
                    totalPrice: sameDish.price + sameDish.totalPrice,
                    quantity: sameDish.quantity + 1
                }
            }
        },
        removeOrder: (state, action) => {
            let orderDish = action.payload;
            let sameDish = state.orders.find(item => item.id === orderDish.id);
            let orderIndex = state.orders.findIndex(item => item.id === orderDish.id);
            if(sameDish.quantity === 1) {
                // state.orders = state.orders.filter(item => item.id !== orderDish.id);
                state.orders.splice(orderIndex, 1);
            }else{
                state.order = {
                    id: sameDish.id,
                    name: sameDish.name,
                    price: sameDish.price,
                    totalPrice: sameDish.totalPrice - sameDish.price,
                    quantity: sameDish.quantity - 1
                }
            }
        }
    }
});

export const {
    fetchStart,
    fetchSuccess,
    fetchFailure,
    calcTotalPrice,
    calcTotalQuantity,
    addNewOrder, removeOrder } = OrdersReducer.actions;
