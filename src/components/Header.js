import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { currentUser } from '../helpers'
import SubHeader from './SubHeader'
import AuthContext from '../context/AuthProvider'

const Header = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const [ticker, setTicker] = useState('');
  const [at, setAt] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if ((localStorage.token && !auth.login) || (localStorage.token && !auth.user)) {
      currentUser().then((res) => {
        console.log(res);
        if (res) {
          setAuth({ user: res, login: true});
        } else {
          setAuth({ user: {}, login: false});
        }
      })
    } 
  }, []);

  useEffect(() => {
    at ? (setAt(false)) : (setAt(at));
  }, [auth])

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
        { (auth.login && auth.user && auth.user.id ) ? (
          <>
          <span>logged in as: <h3>{auth.user.email}</h3></span>
          <Link to='/profile'><FontAwesomeIcon className="nav-icon" icon={faUser} /></Link>
          </>
        ) : (
          <>
          <Link to='/login'><button>login</button></Link>
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