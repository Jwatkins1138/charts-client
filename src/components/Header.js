import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faGripLinesVertical } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { currentUser } from '../helpers'
import SubHeader from './SubHeader'
import AuthContext from '../context/AuthProvider'

const Header = () => {
  // const { auth } = useContext(AuthContext);
  // const loggedIn = ()
  const { auth } = useContext(AuthContext);
  const [user, setUser] = useState({});
  const [ticker, setTicker] = useState('');
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

  const searchTicker = () => {
    navigate('/chart/' + ticker);
  }
  return (
    <header>
      <div className='head-main'>
      <div className='head-title'>
        <Link to='/'><h1>allcharts.site <FontAwesomeIcon icon={faChartLine} /></h1></Link>
      </div>
      <div className='head-search'>
      <label htmlFor="search">
        ticker: 
      </label>
      <input
        type='text'
        id='search'
        placeholder='search'
        onChange={(e) => {setTicker(e.target.value)}}
        value={ticker}
      />
      <button onClick={searchTicker}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
      </div>
      <nav className='header-side'>
        <>
        { (user && user.id) ? (
          <>
          <span>logged in as: <b>{user.email}</b></span>
          <Link to='/profile'><FontAwesomeIcon className="nav-icon" icon={faUser} /></Link>
          </>
        ) : (
          <>
          <Link to='/login'><button>login</button></Link>
          {/* <FontAwesomeIcon className="nav-icon" icon={faGripLinesVertical} /> */}
          <Link to='/signup'><button>sign up</button></Link>
          </>
        )}
        </>
        
      </nav>
      </div>
      <SubHeader />
    </header>
  )
}

export default Header;