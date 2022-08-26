import { currentUser, logOut } from '../helpers'
import React, { useState, useEffect } from 'react'
import Header from './Header'
import SubHeader from './SubHeader'
import { Link } from 'react-router-dom'

const Profile = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    if (localStorage.token) {
      currentUser().then((res) => {
        setUser(res);
      });
    }
  }, []);

  return (
    <div className='container'>
      <Header />
      <SubHeader />
      <main className='profile'>
        <aside></aside>
        <div className='profile-main'>
        <>
        { user.length > 0 ? (
          <>
          <h2>{user.email}</h2>
          <button onClick={logOut}>log out</button>
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