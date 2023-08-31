import { createSlice } from "@reduxjs/toolkit";

export const DishesReducer = createSlice({
    name: 'dishes',
    initialState: {
        dishes: [],
        loading: false,
        error: null
    },
    reducers: {
        fetchStart: (state) => {
            state.loading = true;
            state.error = null
        },
        fetchSuccess: (state, action) => {
            state.loading = false;
            const actionDishes = Object.values(action.payload);
            state.dishes = actionDishes;
        },
        fetchFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});
export const { fetchStart, fetchSuccess, fetchFailure } = DishesReducer.actions;
