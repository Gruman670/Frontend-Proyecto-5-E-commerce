import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
//npm i @paypal/react-paypal-js

import { useContext } from "react";
import CartContext from "../../context/Cart/CartContext"
import ProductContext from "../../context/Products/ProductContext"
import { useNavigate } from "react-router-dom";

export default function Paypal() {
    const navigate = useNavigate()

    const { cartTotal, clearItemToCheckout, cartItems } = useContext(CartContext)
    const { reduceStock } = useContext(ProductContext)

    console.log(cartTotal)
    return (
        <PayPalScriptProvider options={{ "client-id": "AdCKYIesmpkR_RtAd90l0nVwm_QKt8y3UGTcPNg7j9Mm7xs05kXL7Nl0GC4Mm_D_R7EAyVtP0p8FExYX" }}>
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: cartTotal,
                                    currency: "USD"
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                        reduceStock(cartItems)
                        clearItemToCheckout()
                        navigate("/")
                    })
                }}
            />
        </PayPalScriptProvider>
    );
}