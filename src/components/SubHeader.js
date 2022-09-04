import { Link } from 'react-router-dom'

const SubHeader = () => {
  return (
    <nav className='head-nav'>
      <Link to='/login'><div className='nav-item'><h5>login</h5></div></Link>
      <Link to='/signup'><div className='nav-item'><h5>sign up</h5></div></Link>
      <Link to='/profile'><div className='nav-item'><h5>profile</h5></div></Link>
      <Link to='/about'><div className='nav-item'><h5>about</h5></div></Link>
    </nav>
  )
}

export default SubHeader;