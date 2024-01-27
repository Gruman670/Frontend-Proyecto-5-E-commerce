import { Button, Card, Container, Modal } from "react-bootstrap"

import { useContext, useEffect, useState } from "react"
import UserContext from "../context/Users/UserContext"

import { useNavigate } from "react-router-dom"

const Profile = () => {
  // "Importar" funciones del userProvider
  const { infoUser, authStatus, verifyToken, signOut, editUser, deleteUser } = useContext(UserContext)

  const navigate = useNavigate()

  // Para abrir formulario edit
  const [open, setOpen] = useState(false)

  // Para guardar info del name, email y ID
  const [userName, setUserName] = useState("No Conectado")
  const [userEmail, setUserEmail] = useState("No Conectado")
  const [userID, setUserID] = useState("No Conectado")

  // Info del formulario
  const [userForm, setUserForm] = useState({
    _id: "",
    name: "",
    email: ""
  })

  // Funcionalidad modal
  // Para mostrar y cerrar
  const [show, setShow] = useState(false);

  // Funciones para cambair el estado del modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Funcion para abrir y cerrar formulario
  const handleOpen = () => {
    setOpen(!open)
  }

  //Funcion para cuando cambia lo que esta en el formulario
  const handleChange = async (e) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value
    })
  }

  // Para cargar la info del usuario en las variables 
  useEffect(() => {
    const getInfoUser = async () => {
      await verifyToken()
      setUserID(infoUser._id)
      setUserName(infoUser.name)
      setUserEmail(infoUser.email)

      setUserForm({
        _id: userID,
        name: userName,
        email: userEmail
      })
    }
    getInfoUser()
  }, [authStatus, userName, userEmail])

  // Enviar data para el edit user
  const handleSubmit = (event) => {
    event.preventDefault()
    try {
      editUser(userForm)
      setOpen(!open)
    } catch (error) {
      console.log(error)
    }
  }

  // Enviar datos para el delete user
  const handleDelete = () => {
    try {
      deleteUser(userForm._id)
      navigate("/")
      signOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className="profile">
      <Container>
        <h4>Mi perfil</h4>
        {/* Card con info del usuario */}
        <Card className="mx-auto">
          <Card.Body>
            <Card.Title>{`${userName}`}</Card.Title>
            <Card.Subtitle>{userEmail}</Card.Subtitle>
            <Button onClick={handleOpen}>{open ? "Cerrar" : "Editar Usuario"}</Button>
            <br />
            <Button variant="outline-warning" size="sm" onClick={handleShow}>Borrar Usuario</Button>
          </Card.Body>
        </Card>
        {/* Formulario para editar usuario */}
        <form onSubmit={handleSubmit} style={{display: !open ? "none" : "block"}}>
          <h5>Editar datos</h5>
          <div className='mb-3 input-id'>
            <label htmlFor="id">
              <strong>ID</strong>
            </label>
            <input
              type="text"
              autoComplete='off'
              name='id'
              className='form-control rounded-1'
              onChange={handleChange}
              value={userForm._id}
              required
              disabled
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="name">
              <strong>Nombre</strong>
            </label>
            <input
              type="text"
              autoComplete='off'
              name='name'
              className='form-control rounded-1'
              onChange={handleChange}
              value={userForm.name}
              required
            />
          </div>
          <div className='mb-3'>
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              name='email'
              className='form-control rounded-1'
              onChange={handleChange}
              value={userForm.email}
              required
            />
          </div>
          <Button className="btn-save" type="submit">Guardar</Button>
        </form>
        <Button variant="outline-secondary" onClick={signOut}>LogOut</Button>
      </Container>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Advertencia</Modal.Title>
        </Modal.Header>
        <Modal.Body>Estas a punto de borrar tu usuario, ¿Estás seguro?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            No, quiero conservar mi usuario
          </Button>
          <Button variant="outline-danger" onClick={handleDelete}>
            Si, Borrar
          </Button>
        </Modal.Footer>
      </Modal>
    </main >
  )
}

export default Profile