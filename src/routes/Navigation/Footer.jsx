import { Col, Row } from 'react-bootstrap'
import logo from '../../assets/logo-new.png'

import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube'

const Footer = () => {
  return (
    <footer>
      <div>
        {/* Logo */}
        <img src={logo} alt="Logo"/>
      </div>
      <hr />

      <div>
        <Row>
          <Col md={4}>
            {/* Columna 1 */}
            <h6>Información</h6>
            <a href="#"><p>Sobre Nosotros</p></a>
            <a href="#"><p>Despachos</p></a>
            <a href="/contacto"><p>Contacto</p></a>
          </Col>
          <Col md={4}>
            {/* Columna 2 */}
            <h6>Ayuda</h6>
            <a href="#"><p>Preguntas Frecuentes</p></a>
            <a href="#"><p>Términos y Condiciones</p></a>
            <a href="#"><p>Politica de Privacidad</p></a>
          </Col>
          <Col md={4}>
            {/* Columna 3 */}
            <h6>Redes sociales</h6>
            <Row>
              <Col><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">{<InstagramIcon />}</a></Col>
              <Col><a href="https://www.facebook.com/" target="_blank" rel="noreferrer">{<FacebookIcon />}</a></Col>
              <Col><a href="https://www.youtube.com/" target="_blank" rel="noreferrer">{<YouTubeIcon />}</a></Col>
            </Row>
          </Col>
        </Row>
      </div>
      <p className="copy">&copy; Esta es una página ficticia para fines académicos.</p>
    </footer>
  )
}

export default Footer