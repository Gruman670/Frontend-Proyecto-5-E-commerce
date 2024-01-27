const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case "SET_CART_ITEMS":
            return {...state, ...payload}
        case "SET_IS_CART_OPEN":
            return {...state, isCartOpen: payload}
        case "CLEAR_CHECKOUT":
            return {
                isCartOpen: false,
                cartItems: [],
                cartCount: 0,
                cartTotal: 0  
            }
        default:
            throw new Error(`unhandledd type of ${type} in cartReducer`)
    }
}

export default cartReducer;