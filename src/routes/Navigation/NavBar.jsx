import { Button, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import logo from '../../assets/logo-new.png'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'

import { useContext } from "react"
import UserContext from "../../context/Users/UserContext"

import CartContext from "../../context/Cart/CartContext"
import CartIcon from "../../components/Cart/CartIcon";
import CartDropdown from "../../components/Cart/CartDropdown";

const NavBar = () => {
  // "Importar" authStatus del UserProvider
  const { authStatus } = useContext(UserContext)

  const { isCartOpen } = useContext(CartContext)

  return (
    <header>
      <Navbar collapseOnSelect expand="lg">
        {/* Logo */}
        <Navbar.Brand as={NavLink} to="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>

          {/* Categorias */}
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/hombre">HOMBRE</Nav.Link>
            <Nav.Link as={NavLink} to="/mujer">MUJER</Nav.Link>
            <Nav.Link as={NavLink} to="/niños">NIÑOS</Nav.Link>
            <Nav.Link as={NavLink} to="/accesorios">ACCESORIOS DE SURF</Nav.Link>
            <Nav.Link as={NavLink} to="/surf">TABLAS DE SURF</Nav.Link>
            <Nav.Link as={NavLink} to="/contacto">CONTACTO</Nav.Link>
          </Nav>

          <Nav>
            <CartIcon />
            {isCartOpen && <CartDropdown />}
            {/* Si esta logeado muestra icono de perfil, sino muestra boton para iniciar sesion */}
            {authStatus ?
              <Nav.Link as={NavLink} to="/profile" className="auth"><AccountCircleIcon /></Nav.Link> :
              <Nav.Link as={NavLink} to="/auth"><Button variant="outline-primary">Iniciar sesión</Button></Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default NavBar