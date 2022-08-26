import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faGripLinesVertical } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { currentUser } from '../helpers'
// import AuthContext from '../context/AuthProvider'

const Header = () => {
  // const { auth } = useContext(AuthContext);
  // const loggedIn = ()
  const [user, setUser] = useState({});
  useEffect(() => {
    currentUser().then((res) => {
      setUser(res);
    });
  }, []);
  return (
    <header>
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
      />
      <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
      </div>
      <nav className='header-side'>
        <>
        { user ? (
          <>
          <span>logged in as: <b>{user.email}</b></span>
          <Link to='/profile'><FontAwesomeIcon className="nav-icon" icon={faUser} /></Link>
          </>
        ) : (
          <>
          <Link to='/login'><button>login</button></Link>
          <FontAwesomeIcon className="nav-icon" icon={faGripLinesVertical} />
          <Link to='/signup'><button>sign up</button></Link>
          </>
        )}
        </>
        
      </nav>
    </header>
  )
}

export default Header;