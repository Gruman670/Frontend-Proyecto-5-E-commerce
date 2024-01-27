import axiosClient from "../../config/axiosClient"

import UserContext from "./UserContext"
import userReducer from "./userReducer"

import { useReducer } from "react"
import { useNavigate } from "react-router-dom"

const UserProvider = ({ children }) => {
    let loginError = ""
    let registerError = ""

    // Para redireccion
    const navigate = useNavigate()

    //Estado inicial
    const inicialState = {
        infoUser: [],
        authStatus: false,
        error: null
    }

    //useReducer
    const [userState, dispatch] = useReducer(userReducer, inicialState)

    //Funciones
    // LOGIN
    const loginUser = async (user) => {
        try {
            // Funcion para el back
            const userLogin = await axiosClient.post("/login", user)

            // Si el res es success: true
            if (userLogin.data.success) {
                dispatch({
                    type: "REGISTER/LOGIN",
                    payload: userLogin.data
                })
                // Clear the error after successful login
                dispatch({ type: "CLEAR_ERROR" });
            }

            // Navigate only when login is successful
            navigate("/");
        } catch (error) {
            loginError = error.response.data.message
            dispatch({
                type: "SET_ERROR",
                payload: loginError // Set the error in the state
            });
            console.log(loginError)
        }
    }
    // REGISTER
    const registerUser = async (user) => {
        try {
            // Funcion para el back
            const userRegister = await axiosClient.post('/createUser', user)
            const newUser = userRegister.data

            // Si la res es success: true
            if (newUser.success) {
                dispatch({
                    type: "REGISTER/LOGIN",
                    payload: newUser.token
                })
                navigate("/")
            } else {
                registerError = newUser.massage
                dispatch({
                    type: "SET_ERROR",
                    payload: registerError // Set the error in the state
                });
                console.log(registerError)
            }
            console.log(newUser);
        } catch (error) {
            console.log(error);
        }
    }
    // VERIFY USER
    const verifyToken = async () => {
        // Buscar token guardado en el localStorage
        const token = localStorage.getItem("token")

        // Si encuentra el token le añade el Bearer
        if (token) {
            axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`
        } else {
            // Si no elimina lo que hay en authorizartion??
            delete axiosClient.defaults.headers.common["Authorization"]
        }

        try {
            // Funcion para el back
            const infoUserVerify = await axiosClient.get('/verifyUser')
            dispatch({
                type: "INFO_USER",
                payload: infoUserVerify.data.info
            })
        } catch (error) {
            console.log(error);
        }
    }
    // SIGN OUT
    const signOut = async () => {
        try {
            dispatch({ type: "SIGN_OUT" })
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }
    // EDIT USER
    const editUser = async (data) => {
        try {
            // Funcion para el back
            const updateUser = await axiosClient.put("/user", data)
            dispatch({
                type: "EDIT_USER",
                payload: updateUser
            })
        } catch (error) {
            console.log(error)
        }
    }
    // DELETE USER 
    const deleteUser = async (id) => {
        try {
            // Funcion para el back pasando el id por el body y hacer que lo reconosca
            const userDelete = await axiosClient.delete("/user", { data: { id: id } });
            console.log(userDelete.data);
            signOut()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <UserContext.Provider value={{
            registerUser,
            loginUser,
            infoUser: userState.infoUser,
            authStatus: userState.authStatus,
            verifyToken,
            signOut,
            editUser,
            deleteUser,
            error: userState.error
        }}>{children}</UserContext.Provider>
    )
}

export default UserProvider;