import { Route, Routes } from "react-router-dom"
import Layout from "../components/Layout"
import Home from "../pages/Home"
import ErrorPage from "../pages/ErrorPage"
import Contacto from "../pages/Contacto"

import Auth from "../pages/Auth"
import Profile from "../pages/Profile"

import Checkout from "../pages/Checkout"

import Hombre from "../pages/Hombre"
import Mujer from "../pages/Mujer"
import Accesorios from "../pages/Accesorios"
import Surf from "../pages/Surf"
import Niños from "../pages/Niños"

import ProductMen from "../pages/Product/ProductMen"
import ProductAccesory from "../pages/Product/ProductAccesory"
import ProductWomen from "../pages/Product/ProductWomen"
import ProductKids from "../pages/Product/ProductKids"
import ProductSurf from "../pages/Product/ProductSurf"


const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/contacto" element={<Contacto />} />

                    <Route path="/checkout" element={<Checkout />} />

                    <Route path="/hombre" element={<Hombre />} />
                    <Route path="/mujer" element={<Mujer />} />
                    <Route path="/surf" element={<Surf />} />
                    <Route path="/accesorios" element={<Accesorios />} />
                    <Route path="/niños" element={<Niños />} />

                    <Route path="/hombre/:id" element={<ProductMen />} />
                    <Route path="/mujer/:id" element={<ProductWomen />} />
                    <Route path="/niños/:id" element={<ProductKids />} />
                    <Route path="/surf/:id" element={<ProductSurf />} />
                    <Route path="/accesorios/:id" element={<ProductAccesory />} />

                    <Route path="*" element={<ErrorPage />} />
                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes