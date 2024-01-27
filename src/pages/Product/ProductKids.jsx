import { useContext, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import ProductContext from '../../context/Products/ProductContext';
import { Button, Col, Container, Row } from 'react-bootstrap';
import CartContext from '../../context/Cart/CartContext';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const ProductKids = () => {
    const { id } = useParams()

    const { getKidById, product } = useContext(ProductContext)
    const { addItemToCart, cartCount } = useContext(CartContext)

    const { name, stock, price, image, sku, details } = product;

    const handleAdd = () => { if(cartCount < stock) addItemToCart(product)}

    useEffect(() => {
        console.log("Fetching product...");
        console.log(id)
        const fetchProduct = async () => {
            await getKidById(id);
            console.log("Product fetched:", product);
        };
        fetchProduct();
    }, [id]);

    return (
        <main className="product">
            <Container>
            <div className="btn-wrap">
                    <NavLink to="/niños"> <KeyboardArrowLeftIcon />Volver</NavLink>
                </div>
                <Row>
                    <Col md={6}>
                        <img src={image} alt={`Imagen producto ${name}`} />
                    </Col>
                    <Col md={6}>
                        <h2>{name}</h2>
                        <p>SKU: {sku}</p>
                        <hr />
                        <h4>$ {price}</h4>
                        <p>Stock: {stock}</p>
                        <div className="btn-wrap">
                            <Button onClick={handleAdd} >Añadir al carro</Button>
                        </div>
                        <hr />
                        <h5>Descripción:</h5>
                        <p>{details}</p>
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default ProductKids