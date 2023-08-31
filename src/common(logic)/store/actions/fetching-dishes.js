import { fetchStart, fetchSuccess, fetchFailure } from "../reducers/dishes-reducer";

export const fetchDishes = (request, linkData) => async (dispatch) => {
    dispatch(fetchStart());
    await request({url: `https://f00deliv-default-rtdb.firebaseio.com/${linkData}.json`})
            .then(dishes => dispatch(fetchSuccess(dishes)))
            .catch(error => dispatch(fetchFailure(error)))
};