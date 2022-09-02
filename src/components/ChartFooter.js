import { useNavigate } from 'react-router-dom'

const ChartFooter = (props) => {
  const navigate = useNavigate();
  const postsLink = () => {
    navigate('/posts/' + props.ticker)
  }
  return (
    <footer>
      <nav className='head-nav'>
        <div className='nav-item'><h5>company info</h5></div>
        <div onClick={postsLink} className='nav-item'><h5>discussion</h5></div>
        <div className='nav-item'><h5>add to list</h5></div>
      </nav>
    </footer>
  )
}

export default ChartFooter;