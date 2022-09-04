import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { currentUser } from '../helpers'
import AuthContext from '../context/AuthProvider'
import { main } from '../api/axios'

const SideBar = () => {

  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();
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
      setAuth({login: auth.login, user: auth.user, lists: response.data.lists})
    })
    .catch(err => {
      console.log(err);
    })
  };
  useEffect(() => {
    if (auth.login && !auth.lists) {
      getLists();
    }
  }, [auth]);

  const clickItem = (e) => {
    console.log(e.target.id);
    navigate('/chart/' + e.target.id);
  };


  return (
    <aside>
      <>
      { (auth.login && auth.lists) ? (
        <>
        <div className='side-title'><h4>your watch lists</h4></div>
        {auth.lists.map((list) => {
          return (
            <div key={list.name}className='list-container'>
              <div className='side-title'><h5>{list.name}</h5></div>
              {list.symbols.map((symbol) => <div key={symbol} id={symbol} className="side-item" onClick={clickItem}><span>{symbol}</span></div>)}
            </div>
          )
        })}
        </>
      ) : (
        <>
        <div className='side-title'><h4>popular stocks</h4></div>
        <div className='side-title'><h5>indices/ETFs</h5></div>
        <div id="SPY" className="side-item" onClick={clickItem}><span>SPY</span></div>
        <div id="QQQ" className="side-item" onClick={clickItem}><span>QQQ</span></div>
        <div id="DIA"className="side-item" onClick={clickItem}><span>DIA</span></div>
        <div id="XLF"className="side-item" onClick={clickItem}><span>XLF</span></div>
        <div className='side-title'><h5>tech</h5></div>
        <div id="APP"className="side-item" onClick={clickItem}><span>APP</span></div>
        <div id="GOOG"className="side-item" onClick={clickItem}><span>GOOG</span></div>
        <div id="META"className="side-item" onClick={clickItem}><span>META</span></div>
        <div id="IBM"className="side-item" onClick={clickItem}><span>IBM</span></div>
        </>
      )}
      </>
      
    </aside>
  )
}

export default SideBar;