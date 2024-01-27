import CartContext from '../../context/Cart/CartContext';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'

import CartItem from './CartItem';

import './cartStyles.css'

import { Button } from 'react-bootstrap';

const CartDropdown = () => {
    const navigate = useNavigate()
    const { cartItems } = useContext(CartContext)
    console.log(cartItems)

    const goToCheckout = () => {
        navigate("/checkout")
    }

    return (
        <>
            <div className="cart-dropdown-container">
                <div className="cart-items">
                    {cartItems ? (cartItems.map((cartItem) => (
                        <CartItem key={cartItem._id} cartItem={cartItem} />
                    ))) : <span className="empty-message">Empty Cart</span>
                    }
                </div>
                <Button onClick={goToCheckout}>Ir a pagar</Button>
            </div>
        </>
    )
}

export default CartDropdown