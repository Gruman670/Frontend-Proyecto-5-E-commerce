import { Col, Row } from "react-bootstrap"
import img from "../../assets/about.jpg"

const About = () => {
  return (
    <section className="about">
        <Row>
            <Col md={6}>
                <img src={img} alt="Imagen about"/>
            </Col>
            <Col md={6} className="info">
                <h2>Sobre nosotros</h2>
                <p>En Aquaride, nos sumergimos en la pasión por el surf, llevando contigo la esencia de la aventura en cada ola. Fundada con raíces profundas en la cultura del surf, Aquaride no es solo una marca; es un estilo de vida que abraza la libertad, la emoción y la conexión con el océano. Explora nuestro compromiso con el diseño y el estilo que define a Aquaride. Cada producto es más que ropa o equipo; es una expresión de la pasión por el surf. Descubre cómo nuestra estética fresca y contemporánea refleja la esencia de la cultura de surf que amamos.</p>
            </Col>
        </Row>
    </section>
  )
}

export default About