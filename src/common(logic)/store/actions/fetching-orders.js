import {fetchStart, fetchSuccess, fetchFailure, addNewOrder, removeOrder} from '../reducers/orders-reducer';

export const fetchOrders = (request) => async (dispatch) => {
    dispatch(fetchStart());
    await request({url: `https://f00deliv-default-rtdb.firebaseio.com/orders.json`})
        .then(data => dispatch(fetchSuccess(data)))
        .catch(error => dispatch(fetchFailure(error)))
}

export const fetchAddAndRemoveOrder = (request, data) => async (dispatch) => {
    await request({
        url: `https://f00deliv-default-rtdb.firebaseio.com/orders/${data.id}.json`,
        method: 'PUT',
        body: data,
        header: {"Content-type": "application/json"}
    }).then(send => console.log(send));
    dispatch(fetchOrders(request));
};
export const fetchDeleteOrder = (request, data) => async (dispatch) => {
    if(data.quantity === 1){
        await request({
            url: `https://f00deliv-default-rtdb.firebaseio.com/orders/${data.id}.json`,
            method: 'DELETE',
            body: data,
            header: {"Content-type": "application/json"}
        });
    }
    dispatch(removeOrder(data));
    dispatch(fetchOrders(request));
};