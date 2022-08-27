import { currentUser, logOut } from '../helpers'
import React, { useState, useEffect, useContext } from 'react'
import Header from './Header'
import SubHeader from './SubHeader'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthProvider'

const Profile = () => {
  const { setAuth } = useContext(AuthContext);
  const [user, setUser] = useState({});
  useEffect(() => {
    if (localStorage.token) {
      currentUser().then((res) => {
        setUser(res);
      });
    }
  }, []);

  const authLog = async () => {
    logOut().then((res) => {
      console.log(res);
      if (res) {
        setUser({});
        setAuth({login: false});
      }
    })
  };

  return (
    <div className='container'>
      <Header />
      <SubHeader />
      <main className='profile'>
        <aside></aside>
        <div className='profile-main'>
        <>
        { (user && user.id) ? (
          <>
          <h2>{user.email}</h2>
          <button onClick={authLog}>log out</button>
          </>
        ) : (
          <>
          <Link to='/login'><button>login</button></Link>
          <Link to='/signup'><button>sign up</button></Link>
          </>
        )}
        </>
        </div>
        <aside></aside>
      </main>
    </div>
  )

};

export default Profile;