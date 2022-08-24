import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import AuthContext from '../context/AuthProvider'

const Header = () => {
  const { auth } = useContext(AuthContext);
  // const loggedIn = ()
  return (
    <header>
      <div className='head-title'>
        <Link to='/'><h1>AllCharts.site <FontAwesomeIcon icon={faChartLine} /></h1></Link>
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
        {localStorage.token ? (
          <>
          <span>logged in as: <b>{auth.email}</b></span>
          <FontAwesomeIcon className="nav-icon" icon={faUser} />
          </>
        ) : (
          <Link to='/login'><button>login</button></Link>
        )}
        </>
        
      </nav>
    </header>
  )
}

export default Header;