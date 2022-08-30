import { main } from '../api/axios'
import React, { useRef, useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar'
import SideBarRight from './SideBarRight'
import AuthContext from '../context/AuthProvider'
import { currentUser, logOut } from '../helpers'


const SignUp = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const emailRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState('');
  const [emailFocus, setEmailFocus] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState({});

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
      setSuccess(true);
      setAuth({login: true});
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

  useEffect(() => {
    if (localStorage.token) {
      currentUser().then((res) => {
        setUser(res);
      });
    }
  }, [auth]);

  useEffect(() => {
    if (emailRef) {
    emailRef.current.focus();
    }
  }, []);

  const authLog = async () => {
    logOut().then((res) => {
      console.log(res);
      if (res) {
        setUser({});
        setSuccess(false);
        setAuth({login: false});
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
          {(success || (user && user.id))? (
              <section>
                <h2 className='success'>you are logged in as: {user && user.id ? user.email : ''}</h2>
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
                onFocus={() => {setEmailFocus(true)}}
                onBlur={() => {setEmailFocus(false)}}
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
                onFocus={() => {setPasswordFocus(true)}}
                onBlur={() => {setPasswordFocus(false)}}
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