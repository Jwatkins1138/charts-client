import { Link } from 'react-router-dom'

const SubHeader = () => {
  return (
    <nav className='head-nav'>
      <Link to='/login'><div className='nav-item'><h4>login</h4></div></Link>
      <Link to='/signup'><div className='nav-item'><h4>sign up</h4></div></Link>
      <Link to='/loading'><div className='nav-item'><h4>load</h4></div></Link>
      <Link to='/test'><div className='nav-item'><h4>test</h4></div></Link>
    </nav>
  )
}

export default SubHeader;