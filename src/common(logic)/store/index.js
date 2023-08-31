import { configureStore } from "@reduxjs/toolkit";
import { DishesReducer } from "./reducers/dishes-reducer";
import { OrdersReducer } from "./reducers/orders-reducer";

export const store = configureStore({
    reducer: {
        dishes: DishesReducer.reducer,
        orders: OrdersReducer.reducer
    }
})