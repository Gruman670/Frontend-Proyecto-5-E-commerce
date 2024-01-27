import { Carousel } from 'react-bootstrap'
import img1 from "../../assets/AAA.jpg"
import img2 from "../../assets/A.jpg"
import img3 from "../../assets/C.jpg"

const CarouselWelcome = () => {
    const titulo = "Aquaride"
    const msg = "Más Que Moda, Más Que Deporte, La Esencia del Surf"

    return (
        <section className='welcome'>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img src={img1} alt="" className='carousel-img' />
                    <Carousel.Caption>
                        <h1>{titulo}</h1>
                        <h5>{msg}</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img2} alt="" className='carousel-img' />
                    <Carousel.Caption>
                        <h1>{titulo}</h1>
                        <h5>{msg}</h5>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src={img3} alt="" className='carousel-img' />
                    <Carousel.Caption>
                        <h1>{titulo}</h1>
                        <h5>{msg}</h5>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </section>
    )
}

export default CarouselWelcome