import CartContext from "./CartContext";
import { useReducer } from "react";
import { addCartItem, removeCartItem, clearCartItem } from "./cartFunction";
import cartReducer from "./cartReducer";

const CartProvider = ({ children }) => {

    const initialState = {
        isCartOpen: false,
        cartItems: [],
        cartCount: 0,
        cartTotal: 0
    }

    const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] = useReducer(cartReducer, initialState)


    //funciones 
    // actualizar carrito
    const updateCartItemReducer = (newCartItems) => {
        const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        const newCartTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

        dispatch({
            type: "SET_CART_ITEMS",
            payload: {
                cartItems: newCartItems,
                cartCount: newCartCount,
                cartTotal: newCartTotal
            }
        })
    }

    //añadir producto al carro
    const addItemToCart = (productToAdd) => {
        const newCartItems = addCartItem(cartItems, productToAdd)
        updateCartItemReducer(newCartItems)
    }
    // 
    const removeItemToCart = (cartItemToRemove) => {
        const newCartItems = removeCartItem(cartItems, cartItemToRemove)
        updateCartItemReducer(newCartItems)
    }

    const clearItemToCart = (cartItemToClear) => {
        const newCartItems = clearCartItem(cartItems, cartItemToClear)
        updateCartItemReducer(newCartItems)
    }

    const clearItemToCheckout = () => {
        dispatch({
            type: "CLEAR_CHECKOUT"
        })
    }

    const setIsCartOpen = (bool) => {
        dispatch({
            type: "SET_IS_CART_OPEN",
            payload: bool
        })
    }

    return (
        <CartContext.Provider value={{
            addItemToCart,
            removeItemToCart,
            clearItemToCart,
            clearItemToCheckout,
            setIsCartOpen,
            isCartOpen,
            cartItems,
            cartCount,
            cartTotal
        }}>{children}</CartContext.Provider>
    )
}

export default CartProvider