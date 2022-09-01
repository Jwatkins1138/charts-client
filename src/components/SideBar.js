import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { currentUser } from '../helpers'
import AuthContext from '../context/AuthProvider'

const SideBar = () => {

  const { auth } = useContext(AuthContext);
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.token) {
      currentUser().then((res) => {
        setUser(res);
      });
    } else {
      setUser({});
    }
  }, [auth]);

  const clickItem = (e) => {
    console.log(e.target.id);
    navigate('/chart/' + e.target.id);
  };


  return (
    <aside>
      <>
      { (user && user.id) ? (
        <>
        <div className='side-title'><h4>your watch lists</h4></div>
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
        <div className="big-spacer"></div>
        </>
      )}
      </>
      
    </aside>
  )
}

export default SideBar;