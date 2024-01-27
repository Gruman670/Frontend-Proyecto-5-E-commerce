import './carousel.css'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useContext, useEffect, useState } from 'react';
import ProductContext from '../../context/Products/ProductContext';
import { Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CarouselMobile = () => {
    const { getProductssurf, products } = useContext(ProductContext)

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const productList = async () => {
            await getProductssurf()
        }
        setLoading(true)
        productList()

    }, [])

    // Configuracion carousel (mostrar puntos, mostrar 4 cards, cambiar de a 4 cards)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div>
            {loading ?
                (<div className='custom-carousel-mobile'>
                    <Slider {...settings}>
                        {products.map((item) => (
                            <Link key={item.id} to={`/surf/${item._id}`}>
                                <div className="card">
                                    <div className="top">
                                        <img src={item.image} alt="Imagen producto" className='card-img-prod' />
                                    </div>
                                    <div className="info">
                                        <h6>{item.name}</h6>
                                        <p>$ {item.price}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </Slider>
                </div>) : (<Spinner animation="border" />)}
        </div>
    )
}

export default CarouselMobile