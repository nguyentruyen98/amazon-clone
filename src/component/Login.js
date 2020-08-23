import React, { useState } from 'react'
import '../css/login.css'
import { auth } from './firebase'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, useHistory
} from "react-router-dom";
function Login() {
  const history = useHistory();
  const [email, setEmail] = useState(['']);
  const [password, setPassword] = useState([''])
  const login = e => {
    e.preventDefault(); //stop refresh
    auth.signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push('/')

      })
      .catch(e => alert(e.message));
  }
  const register = e => {
    e.preventDefault(); //stop refresh
    auth.createUserWithEmailAndPassword(email, password)
      .then(auth => {
        history.push('/')

      })
      .catch(e => alert(e.message))
  }
  return (
    <div className='login'>
      <Link to='/'>
        <img className='login__logo' src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo-700x394.png" alt="" />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form action="">
          <h5>Email</h5>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
          <button type='submit' onClick={login} className='login__signButton'>Sign In</button>
          <p>By using Amazon Services, you are consenting to the practices described in this Privacy Notice.</p>
        </form>
        <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
      </div>
    </div>
  )
}

export default Login
