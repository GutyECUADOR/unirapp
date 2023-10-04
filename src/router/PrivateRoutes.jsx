import { Navigate } from "react-router-dom"
import { AuthContext } from "../Auth/context/AuthContext"
import { useContext } from "react"

export const PrivateRoutes = ({ children }) => {
    const { authState } = useContext(AuthContext)
    return (authState.isLogged) ? children : <Navigate to="/login"/>;
}
