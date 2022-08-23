import { Link } from 'react-router-dom'

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
      <h2>x x x x</h2>
    </header>
  )
}

export default Header;