export const addCartItem = (cartItems, productToAdd) => {
    // Busca si mi carrito contiene productos
    // la existencia del producto en mi carrito

    const existingCartItem = cartItems.find((cartItem) => cartItem._id === productToAdd._id);

    if(existingCartItem) {
        return cartItems.map((cartItem) => 
            cartItem._id === productToAdd._id ? {...cartItem, quantity: cartItem.quantity + 1 } 
            : cartItem
        )
    }

     // retorna un nuveo array con cartItems modificados
     return [...cartItems, { ...productToAdd, quantity: 1 }]
}

export const removeCartItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem._id === cartItemToRemove._id);

    if(existingCartItem.quantity === 1){
        return cartItems.filter((cartItem) => cartItem._id !== cartItemToRemove._id)
    }

    return cartItems.map((cartItem) => 
        cartItem._id === cartItemToRemove._id ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    )
}

export const clearCartItem = (cartItems, cartItemToClear) => {
    return cartItems.filter((cartItem) => cartItem._id !== cartItemToClear._id)
}
