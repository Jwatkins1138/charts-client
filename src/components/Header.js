import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

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
        <FontAwesomeIcon icon={faCoffee} />
        <FontAwesomeIcon icon={faCoffee} />
        <FontAwesomeIcon icon={faCoffee} />
        <FontAwesomeIcon icon={faCoffee} />
      </nav>
    </header>
  )
}

export default Header;