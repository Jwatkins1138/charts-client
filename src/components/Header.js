import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className='head-title'>
        <Link to='/'><h1>allcharts.site</h1></Link>
      </div>
      <nav className='head-nav'>
        <Link to='/'><div className='nav-item'>login</div></Link>
        <Link to='/'><div className='nav-item'>charts</div></Link>
        <Link to='/'><div className='nav-item'>search</div></Link>
        <Link to='/test'><div className='nav-item'>test</div></Link>
      </nav>
    </header>
  )
}

export default Header;