import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar } from '@fortawesome/free-regular-svg-icons'

const Header = () => {
  return (
    <header>
      <div className='head-title'>
        <Link to='/'><h2>allcharts.site</h2></Link>
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
      </nav>
    </header>
  )
}

export default Header;