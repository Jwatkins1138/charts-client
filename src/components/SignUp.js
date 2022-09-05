import { main } from '../api/axios'
import React, { useRef, useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar'
import SideBarRight from './SideBarRight'
import AuthContext from '../context/AuthProvider'
import { logOut } from '../helpers'


const SignUp = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const emailRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const REGISTER_URL = '/users'

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      user: {
        email: email,
        password: password
      }
    };
    main.post(REGISTER_URL, user,
      {
        headers: {
                'Content-Type': 'application/json',
              },
      })
    .then((res) => {
      console.log(res);
      localStorage.setItem("token", res.headers["authorization"]);
      setEmail('');
      setPassword('');
      setAuth({ user: res.data.user, login: true });
    })
    .catch((err) => {
      if (!err?.response) {
            setErrMsg("no server response");
          } else {
            setErrMsg("registration failed");
          }
          errRef.current.focus();
    })
  };

  const authLog = async () => {
    logOut().then((res) => {
      console.log(res);
      if (res) {
        setAuth({login: false,
                  user: {}});
      }
    })
  };

  return (
    <div className='container'>
      <Header />
      <main className='sign-up'>
        <SideBar />
        <div className='sign-up-main'>
        <>
          {((auth.user && auth.user.id)) ? (
              <section>
                <h2 className='success'>you are logged in as: {auth.user && auth.user.id ? auth.user.email : ''}</h2>
                <button onClick={authLog}>log out</button>
              </section>
            ) : (
          <section>
            <p 
              ref={errRef}
              className={errMsg ? "errMsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            
            <form onSubmit={handleSubmit}>
              <h2>sign up</h2>
              <label htmlFor="email">
                email:
              </label>
              <input
                type="text"
                id="email"
                ref={emailRef}
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
              <label htmlFor="password">
                password:
              </label>
              <input
                type="password"
                id="password"
                onChange={(e) => {setPassword(e.target.value)}}
                value={password}
                required
              />
              <button>sign up</button>
              <div className='card-footer'>
                <span>already have an account? <Link to='/login'><div className='footer-item'><h5>login</h5></div></Link></span>
              </div>
            </form>
          </section>
        )}  
        </>
        </div>
        <SideBarRight />
      </main>
    </div>
  )
}

export default SignUp;