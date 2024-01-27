import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import UserProvider from './context/Users/UserProvider.jsx'
import ProductProvider from './context/Products/ProductProvider.jsx'
import CartProvider from './context/Cart/CartProvider.jsx'

import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductProvider>  
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)