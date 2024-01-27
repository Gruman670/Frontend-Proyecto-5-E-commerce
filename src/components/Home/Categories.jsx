import { Col, Row } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import men from "../../assets/category-icons/men.png"
import women from "../../assets/category-icons/women.png"
import kids from "../../assets/category-icons/kids.png"
import acc from "../../assets/category-icons/acc.png"
import surf from "../../assets/category-icons/surf.png"

const Categories = () => {
    return (
        <section className='categories'>
            <h2>Categorías</h2>
            <Row>
                <Col>
                    <NavLink to="/hombre">
                        <img src={men} alt="" />
                        <h6>Hombre</h6>
                    </NavLink>
                </Col>
                <Col>
                    <NavLink to="/mujer">
                        <img src={women} alt="" />
                        <h6>Mujer</h6>
                    </NavLink>
                </Col>
                <Col>
                    <NavLink to="/niños">
                        <img src={kids} alt="" />
                        <h6>Niños</h6>
                    </NavLink>
                </Col>
                <Col>
                    <NavLink to="/accesorios">
                        <img src={acc} alt="" />
                        <h6>Accesorios</h6>
                    </NavLink>
                </Col>
                <Col>
                    <NavLink to="/surf">
                        <img src={surf} alt="" />
                        <h6>Surf</h6>
                    </NavLink>
                </Col>
            </Row>
        </section>
    )
}

export default Categories