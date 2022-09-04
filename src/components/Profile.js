import { currentUser, logOut } from '../helpers'
import React, { useState, useEffect, useContext } from 'react'
import Header from './Header'
import SideBar from './SideBar'
import SideBarRight from './SideBarRight'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthProvider'
import { main } from '../api/axios'

const Profile = () => {
  const { auth, setAuth } = useContext(AuthContext);
  // const [user, setUser] = useState({});
  // const [lists, setLists] = useState([]);
  const [form, setForm] = useState(false);
  const [input, setInput] = useState('');

  const getLists = () => {
    const LISTS_URL = `/lists/index`;
      main.get(
            LISTS_URL,
            {
              headers: {'Authorization': localStorage.token,
                        'Content-Type': 'application/json'},
              withCredentials: false,
            }
    )
    .then(response => {
      console.log(response);
      // setLists(response.data.lists)
    })
    .catch(err => {
      console.log(err);
    })
  };

  // useEffect(() => {
  //   getLists();
  //   if (localStorage.token) {
  //     currentUser().then((res) => {
  //       setUser(res);
  //     });
  //   }
  // }, []);

  const authLog = async () => {
    logOut().then((res) => {
      console.log(res);
      if (res) {
        // setUser({});
        setAuth({user: {}, login: false, lists: []});
      }
    })
  };

  const toggleForm = () => {
    form ? (setForm(false)) : (setForm(true));
  };

  const makeList = () => {

  };


  return (
    <div className='container'>
      <Header />
      <main className='profile'>
        <SideBar />
        <div className='profile-main'>
        <>
        { (auth.login && auth.user && auth.lists) ? (
          <>
          <div className='profile-header'>
            <h2>{auth.user.email}'s profile</h2>
            <button onClick={authLog}>log out</button>
          </div>
          <div className='list-area'>
          {auth.lists.map((list) => {
            return (
              <div className='list-container-profile'>
                <h4>{list.name}</h4>
                {list.symbols.map((symbol) => <div key={symbol} className='profile-item'><span>{symbol}</span><span>x</span></div>)}
              </div>
            )
          })}
          </div>
          <div onClick={toggleForm} className='post-add'>new list</div>
          <>
          {form ? (
            <div className='post-field'>
              <label htmlFor="list">
                list name: 
              </label>
              <input
                type='text'
                name='list'
                placeholder='...'
                onChange={(e) => {setInput(e.target.value)}}
                value={input}
              />
              <button onClick={makeList}>submit</button>
            </div>
          ) : (
            <></>
          )}
          </>
          </>
        ) : (
          <>
          <Link to='/login'><button>login</button></Link>
          <Link to='/signup'><button>sign up</button></Link>
          </>
        )}
        </>
        </div>
        <SideBarRight />
      </main>
    </div>
  )

};

export default Profile;