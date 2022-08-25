import { currentUser, logOut } from '../helpers'
import React, { useState, useEffect } from 'react'
import Header from './Header'
import SubHeader from './SubHeader'

const Profile = () => {
  const [email, setEmail] = useState('');
  const [user, setUser] = useState({});
  useEffect(() => {
    currentUser().then((res) => {
      setUser(res);
    });
  }, []);

  return (
    <div className='container'>
      <Header />
      <SubHeader />
      <main className='chart'>
        <aside></aside>
        <div className='chart-main'>
          <button onClick={() => {console.log(user)}}>user</button>
          <button onClick={() => {console.log(currentUser())}}>user</button>
          <h1>{user.email}</h1>
          <div className='chart-bar'></div>
          <div className='chart-bar'></div>
          <div className='chart-bar'></div>
          <div className='chart-bar'></div>
          <div className='chart-bar'></div>
          <div className='chart-bar'></div>
        </div>
        <aside></aside>
      </main>
    </div>
  )

};

export default Profile;