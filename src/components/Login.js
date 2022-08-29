import { main } from '../api/axios'
import React, { useRef, useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import SubHeader from './SubHeader'
import AuthContext from '../context/AuthProvider'
import { currentUser, logOut } from '../helpers'

const Login = () => {

  const { auth, setAuth } = useContext(AuthContext);
  const emailRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState({});

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

  const LOGIN_URL = '/users/sign_in'
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const user = {
  //     user: {
  //       email: email,
  //       password: password
  //     }
  //   };
  //   fetch('http://localhost:3001/users/sign_in', {
  //     method: 'post',
  //     headers: {
        
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(user),
  //   })
  //     .then((res) => {
  //       if(res.ok) {
  //         console.log(res.headers.get("Authorization"));
  //         localStorage.setItem("token", res.headers.get("Authorization"));
  //         setEmail('');
  //         setPassword('');
  //         setSuccess(true);
  //         setAuth({login: true});
  //         return res.json();
  //       } else {
  //         throw new Error(res);
  //       }
  //     })
  //     .then((json) => console.dir(json))
  //     .catch((err) => {
  //       if (!err?.response) {
  //             setErrMsg("no server response");
  //           } else {
  //             setErrMsg("login failed");
  //           }
  //           errRef.current.focus();
  //     })
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      user: {
        email: email,
        password: password
      }
    };
    main.post(LOGIN_URL, user,
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
            setErrMsg("login failed");
          }
          errRef.current.focus();
    })
  };
    // try {
    //   const response = await axios.post(
    //     LOGIN_URL,
    //     user,
    //     {
    //       headers: {'Content-Type': 'application/json'},
    //     }
    //   );
    //   console.log(response);
    //   response.then((res) => { 
    //     localStorage.setItem("token", res.headers.get("Authorization"));
    //   })
    //   // const token = response?.data?.token;
    //   // const Uid = response?.data?.Uid;
    //   // setAuth({ email, password, token, Uid });
    //   setEmail('');
    //   setPassword('');
    //   setSuccess(true);
    //   console.log(response);
    // } catch (err) {
    //   if (!err?.response) {
    //     setErrMsg("no server response");
    //   } else {
    //     setErrMsg("login failed");
    //   }
    //   errRef.current.focus();
    // }
  

  return (
    <div className='container'>
      <Header />
      <SubHeader />
      <main className='sign-up'>
        <aside></aside>
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