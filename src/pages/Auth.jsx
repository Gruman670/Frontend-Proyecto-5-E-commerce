import { Col, Container, Row } from "react-bootstrap"
import RegisterLoginForm from "../components/Auth/RegisterLoginForm"
import img from "../assets/login (2).jpg"

const Auth = () => {
    return (
        <main className="login">
            <Container fluid>
                <Row>
                    <Col sm={6} className="login-img">
                        <img src={img} alt="" />
                    </Col>
                    <Col>
                        <RegisterLoginForm />
                    </Col>
                </Row>
            </Container>
        </main>
    )
}

export default Auth