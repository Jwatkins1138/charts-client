import axios from '../api/axios'
import React, { useRef, useState, useEffect } from 'react'
import Header from './Header'
import SubHeader from './SubHeader'


const SignUp = () => {
  const emailRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState('');
  const [emailFocus, setEmailFocus] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const REGISTER_URL = '/users'
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password
    };
    try {
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({user}),
        {
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
          withCredentials: false,
        }
      );
      setSuccess(true);
      setEmail('');
      setPassword('');
    } catch (err) {
      if (!err?.response) {
        setErrMsg("no server response");
      } else {
        setErrMsg("registration failed");
      }
      errRef.current.focus();
    }
  };

  useEffect(() => {
    emailRef.current.focus();
  }, []);



  return (
    <div className='container'>
      <Header />
      <SubHeader />
      <main className='sign-up'>
        <aside></aside>
        <div className='sign-up-main'>
        <>
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
                <span>already have an account? login</span>
              </div>
            </form>
          </section>
        </>
        </div>
        <aside></aside>
      </main>
    </div>
  )
}

export default SignUp;