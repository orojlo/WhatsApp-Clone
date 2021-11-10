import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from '../firebase';

export default function Login() {
  function login() {
    auth.signInWithRedirect(provider)
  }
  
  return (
    <div className="app">
      <div className="login">
        <div
         className="login__container">
           <img src="./login-logo.png" alt="Logo" />
           <div className="login__text">
             <h1>Sign in To WhatsApp</h1>
           </div>
           <button onClick={login}>Sign in with Google</button>
        </div>
      </div>
    </div>
  )
}
