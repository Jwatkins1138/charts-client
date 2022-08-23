import { Link } from 'react-router-dom'

const SubHeader = () => {
  return (
    <nav className='head-nav'>
      <Link to='/'><div className='nav-item'>login</div></Link>
      <Link to='/'><div className='nav-item'>charts</div></Link>
      <Link to='/loading'><div className='nav-item'>loading</div></Link>
      <Link to='/test'><div className='nav-item'>test</div></Link>
    </nav>
  )
}

export default SubHeader;