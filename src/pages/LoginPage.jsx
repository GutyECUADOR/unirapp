import { useContext, useState } from "react"
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../context/UserContext";
import '../styles/signin.css'; 
import logo from './../svg/logoarbol.svg';
import { AuthContext } from "../Auth/context/AuthContext";

export const LoginPage = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const { loginHandler } = useContext(AuthContext);
  const navigate = useNavigate();


  const handleLogin = async () => {
    await loginHandler(email, password)
    navigate("/");
  }

  const handleInputEmail = (event) =>{
    setEmail(event.target.value);
  }

  const handleInputPassword = (event) =>{
    setPassword(event.target.value);
  }

  return (
   
    <main className="form-signin w-100 m-auto">
      <form className="text-center mt-5">
        <img className="mb-4" src={logo} alt="" width="72" height="57"/>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
    
        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" value={email} onChange={handleInputEmail}/>
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" value={password} onChange={handleInputPassword}/>
          <label htmlFor="floatingPassword">Password</label>
        </div>
    
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"/> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" onClick={handleLogin} type="button">Ingresar</button>
        <p className="mt-5 mb-3 text-muted">© 2017–2022</p>
      </form>
    </main>
    
   
  )
}
