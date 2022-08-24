import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar } from '@fortawesome/free-regular-svg-icons'
import { useContext } from 'react'
import AuthContext from '../context/AuthProvider'

const Header = () => {
  const { auth } = useContext(AuthContext);
  return (
    <header>
      <div className='head-title'>
        <Link to='/'><h2>ALLCHARTS.SITE</h2></Link>
      </div>
      <input
        type='text'
        id='search'
        placeholder='search'
      />
      <nav className='header-side'>
        <FontAwesomeIcon className="nav-icon" icon={faChartBar} />
        <FontAwesomeIcon className="nav-icon" icon={faChartBar} />
        <FontAwesomeIcon className="nav-icon" icon={faChartBar} />
        <FontAwesomeIcon className="nav-icon" icon={faChartBar} />
        <span>{auth.email}</span>
      </nav>
    </header>
  )
}

export default Header;