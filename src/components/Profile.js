import { currentUser, logOut } from '../helpers'
import React, { useState, useEffect, useContext } from 'react'
import Header from './Header'
import SideBar from './SideBar'
import SideBarRight from './SideBarRight'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthProvider'
import { main } from '../api/axios'

const Profile = () => {
  const { setAuth } = useContext(AuthContext);
  const [user, setUser] = useState({});
  const [lists, setLists] = useState([]);

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
      setLists(response.data.lists)
    })
    .catch(err => {
      console.log(err);
    })
  };

  useEffect(() => {
    getLists();
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
        setAuth({user: {}, login: false});
      }
    })
  };

  return (
    <div className='container'>
      <Header />
      <main className='profile'>
        <SideBar />
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
        {lists.map((list) => {
          return (
            <div className='list-container'>
              <h3>{list.name}</h3>
              {list.symbols.map((symbol) => <h5>{symbol}</h5>)}
            </div>
          )
        })}
        </div>
        <SideBarRight />
      </main>
    </div>
  )

};

export default Profile;