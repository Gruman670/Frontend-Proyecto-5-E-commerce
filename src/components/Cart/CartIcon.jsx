import CartContext from '../../context/Cart/CartContext'

import shopIcon from '../../assets/shopping-bag.svg'

import { useContext } from 'react'

import './cartStyles.css'

const CartIcon = () => {
    const { cartCount, isCartOpen, setIsCartOpen } = useContext(CartContext)
    console.log(isCartOpen);
    
    const handleCartOpen = () => {setIsCartOpen(!isCartOpen)};

    return (
        <div className='cart-icon-container' onClick={handleCartOpen} >
            <img src={shopIcon} className='shop-icon' alt='cart-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

export default CartIcon