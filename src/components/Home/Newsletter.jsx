import { Button, Card, Form, InputGroup } from 'react-bootstrap'
import img from "../../assets/newsletter (2).jpg"

const Newsletter = () => {
    return (
        <section className='newsletter'>
            <Card className="bg-dark text-white">
                <Card.Img src={img} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>Suscríbete a nuestro newsletter</Card.Title>
                    <Card.Text>
                    ¡Sumérgete en el mundo de Aquaride y sé el primero en conocer las últimas olas de estilo, ofertas exclusivas y noticias emocionantes!
                    </Card.Text>
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Email"
                            aria-label="Email"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-sub">
                            Enviar
                        </Button>
                    </InputGroup>
                </Card.ImgOverlay>
            </Card>
        </section>
    )
}

export default Newsletter