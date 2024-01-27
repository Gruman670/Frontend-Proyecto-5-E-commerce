import { useContext, useEffect } from "react"
import { Button, ButtonGroup, Card, CardGroup, Col, Row } from "react-bootstrap"
import ProductContext from "../context/Products/ProductContext"
import { Link, NavLink } from "react-router-dom"

const Accesorios = () => {
  const { getProductsaccesorios, products } = useContext(ProductContext)

  useEffect(() => {
    const productList = async () => {
      await getProductsaccesorios()
    }
    productList()
  }, [])

  return (
    <main className="catalogo"> 
      <Row>
        <h2>Catálogo de Accesorios</h2>

        <Col md={3} className="cat">
          <h4>Categorías</h4>
          <ButtonGroup vertical>
            <NavLink to="/hombre" className="category"><Button variant="outline-primary" className="first">Hombre</Button></NavLink>
            <NavLink to="/mujer" className="category"><Button variant="outline-primary">Mujer</Button></NavLink>
            <NavLink to="/niños" className="category"><Button variant="outline-primary">Niños</Button></NavLink>
            <NavLink to="/accesorios" className="category"><Button variant="outline-primary">Accesorios de Surf</Button></NavLink>
            <NavLink to="/surf" className="category"><Button variant="outline-primary" className="last">Tablas de Surf</Button></NavLink>
          </ButtonGroup>
        </Col>
        <Col md={9}>
          <CardGroup>
            {products.map((prod) => (
              <div key={prod._id}>
                <Link to={`/accesorios/${prod._id}`}>
                  <Card>
                    <Card.Img variant="top" src={prod.image} />
                    <Card.Body>
                      <Card.Title>{prod.name}</Card.Title>
                    </Card.Body>
                    <Card.Footer>$ {prod.price}</Card.Footer>
                  </Card>
                </Link>
              </div>
            ))}
          </CardGroup>
        </Col>
      </Row>
    </main>
  )
}

export default Accesorios