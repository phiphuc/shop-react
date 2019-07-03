
export const INIT_CART = 'INIT_CART';

export function initCart(cart) {
    return (dispatch) => {
        dispatch({
            type: INIT_CART,
            payload: cart
        })
    }
}