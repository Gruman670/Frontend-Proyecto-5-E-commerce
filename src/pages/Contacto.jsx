import { Card, Col, Container, Row } from "react-bootstrap";

import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'

const Contact = () => {
  return (
    <>
      <main className="contact">
        <Container>
          <Row>
            <Col md={7}>
              <Card>
                <Card.Header>Contactanos</Card.Header>
                <Card.Body>
                  <form>
                    <div className="mb-3">
                      <label htmlFor="nombre" className="form-label">Nombre:</label>
                      <input type="text" className="form-control" id="contact-nombre" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">Correo:</label>
                      <input type="email" className="form-control" id="contact-email" />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="asunto" className="form-label">Mensaje:</label>
                      <textarea className="form-control" id="contact-asunto" rows="4"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                  </form>
                </Card.Body>
              </Card>
            </Col>
            <Col md={5}>
              <Card className="datos">
                <Card.Header>Información</Card.Header>
                <Card.Body>
                  <Card.Title>Dirección</Card.Title>
                  <Card.Text>
                    {<LocationOnIcon />} Av. Andrés Bello 2425, 7510689 Providencia, Región Metropolitana, Chile
                  </Card.Text>
                  <Card.Title>Email</Card.Title>
                  <Card.Text>
                    {<EmailIcon />} aquaride@gmail.com
                  </Card.Text>
                  <Card.Title>Teléfono</Card.Title>
                  <Card.Text>
                    {<LocalPhoneIcon />} +56 9 1234 5678e
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card>
                <div className="google-maps">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.2015635150024!2d-70.60896502458522!3d-33.41798899584983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf69d4854951%3A0x9a87ef2fefaad0df!2sCostanera%20Center!5e0!3m2!1ses!2scl!4v1704221090303!5m2!1ses!2scl"
                    height={250}
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>

    </>
  );
};

export default Contact;
