import { useContext } from "react"
import { UserContext } from "../context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  const handleStateUser = () => {
    setUser({id:'123', nombre: 'José Gutiérrez'})
  }

  return (
    <>
    <div>LoginPage {user?.name} </div>
    <pre>
      { JSON.stringify(user, null, 3) }
    </pre>

    <button className="btn btn-primary" onClick={ handleStateUser } >Establecer usuario</button>
    </>
  )
}
