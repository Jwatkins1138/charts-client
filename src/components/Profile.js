import { currentUser, logOut } from '../helpers'
import React, { useState, useEffect, useContext } from 'react'
import Header from './Header'
import SideBar from './SideBar'
import SideBarRight from './SideBarRight'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthProvider'
import { main } from '../api/axios'
import Gravatar from 'react-gravatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleMinus } from '@fortawesome/free-solid-svg-icons'

const Profile = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const [update, setUpdate] = useState(0);
  const [form, setForm] = useState(false);
  const [input, setInput] = useState('');

  useEffect(() => {
    currentUser().then((res) => {
      setAuth({ user: res, login: true});
    })
  }, [update]);

  const authLog = async () => {
    logOut().then((res) => {
      console.log(res);
      if (res) {
        setAuth({user: {}, login: false});
      }
    })
  };

  const toggleForm = () => {
    form ? (setForm(false)) : (setForm(true));
  };

  const makeList = () => {
    const LISTS_URL = `/lists`;
    const newList = {
      name: input,
      symbols: []
    }
      main.post(
            LISTS_URL, newList,
            {
              headers: {'Authorization': localStorage.token,
                        'Content-Type': 'application/json'},
              withCredentials: false,
            }
    )
    .then(response => {
      console.log(response);
      setUpdate(update + 1);
      setForm(false);
      setInput('');
    })
    .catch(err => {
      console.log(err);
    })
  };

  const removeItem = (e) => {
    const REMOVE_URL = `/lists_remove/${e.target.parentElement.id}/${e.target.id}`;
      main.patch(
            REMOVE_URL,
            {
              headers: {'Authorization': localStorage.token,
                        'Content-Type': 'application/json'},
              withCredentials: false,
            }
    )
    .then(response => {
      console.log(response);
      setUpdate(update + 1);
    })
    .catch(err => {
      console.log(err);
    })
  }


  return (
    <div className='container'>
      <Header />
      <main className='profile'>
        <SideBar />
        <div className='profile-main'>
        <>
        { ( auth.login && auth.user && auth.user.lists ) ? (
          <>
          <div className='profile-header'>
            <Gravatar email={auth.user.email} /><h2>{auth.user.email}'s profile</h2>
            <button onClick={authLog}>log out</button>
          </div>
          <div className='list-area'>
          {auth.user.lists.map((list) => {
            return (
              <div key={list.name} id={list.id} className='list-container-profile'>
                <h4>{list.name}</h4>
                {list.symbols.map((symbol) => <div key={symbol} id={symbol} onClick={removeItem} className='profile-item'><span>{symbol}</span><FontAwesomeIcon icon={faCircleMinus} /></div>)}
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
          <div className='profile-prompt'>
            <span>you are not logged in, please </span>
            <Link to='/login'><button>login</button></Link>
            <span> or </span>
            <Link to='/signup'><button>sign up</button></Link>
          </div>  
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