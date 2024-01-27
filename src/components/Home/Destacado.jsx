import { Button } from "react-bootstrap"
import Carousel from "../Carousel/Carousel"
import { NavLink } from "react-router-dom"
import CarouselMobile from "../Carousel/CarouselMobile"

const Destacado = () => {
    return (
        <section className="destacados">
            <h2>Destacados</h2>
            <CarouselMobile />
            <Carousel />
            <NavLink to="/surf">
                <Button variant="outline-primary">Ver más</Button>
            </NavLink>
        </section>
    )
}

export default Destacado