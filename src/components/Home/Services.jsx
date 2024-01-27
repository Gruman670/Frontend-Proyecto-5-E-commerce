import { Col, Row } from "react-bootstrap"
import img1 from "../../assets/fast-delivery.png"
import img2 from "../../assets/paypal.png"

const Services = () => {
    return (
        <section className="services">
            <Row>
                <Col md={2}><img src={img1} alt="Icono delivery" /></Col>
                <Col md={4}>
                    <h5>Despachos</h5>
                    <p>Despacho gratuito en compras por sobre $50.000.</p>
                </Col>
                <Col md={2}><img src={img2} alt="Icono compra segura" /></Col>
                <Col md={4}>
                    <h5>Compra segura</h5>
                    <p>Efectúa tus compras de forma segura a traves de PayPal.</p>
                </Col>
            </Row>
        </section>
    )
}

export default Services