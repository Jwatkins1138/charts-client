import axios from '../api/axios'
import React, { useRef, useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import SubHeader from './SubHeader'
import AuthContext from '../context/AuthProvider'

const Login = () => {

  const { setAuth } = useContext(AuthContext);
  const emailRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    emailRef.current.focus();
  }, []);
  const LOGIN_URL = '/users/sign_in'
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password
    };
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify(user),
        {
          headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
          withCredentials: false,
        }
      );
      console.log(response);
      localStorage.setItem("token", response.headers.get("Authorization"));
      const token = response?.data?.token;
      const Uid = response?.data?.Uid;
      setAuth({ email, password, token, Uid });
      setEmail('');
      setPassword('');
      setSuccess(true);
      console.log(response);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("no server response");
      } else {
        setErrMsg("login failed");
      }
      errRef.current.focus();
    }
  };

  

  return (
    <div className='container'>
      <Header />
      <SubHeader />
      <main className='sign-up'>
        <aside></aside>
        <div className='sign-up-main'>
          <>
            {success ? (
              <section>
                <h2 className='success'>you are logged in</h2>
              </section>
            ) : (
              <section>
                <p
                  ref={errRef}
                  className={errMsg ? 'errMsg' : 'offscreen'}
                  aria-live='assertive'
                >
                  {errMsg}
                </p>
                <form onSubmit={handleSubmit}>
                  <h2>login</h2>
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
                  <button>login</button>
                  <div className='card-footer'>
                    <span>don't have an account? <Link to='/signup'><div className='footer-item'><h5>sign up</h5></div></Link></span>
                  </div>
                </form>
              </section>
            )}
          </>
        </div>
        <aside></aside>
      </main>
    </div>
  )


}

export default Login;