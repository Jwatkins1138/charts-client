import { useNavigate } from 'react-router-dom'

const ChartFooter = (props) => {
  const navigate = useNavigate();
  const postsLink = () => {
    navigate('/posts/' + props.ticker)
  };
  const chartLink = () => {
    navigate('/chart/' + props.ticker)
  };
  const infoLink = () => {
    navigate('/info/' + props.ticker)
  };

  return (
    <footer>
      <nav className='head-nav'>
        <div onClick={infoLink} className='nav-item'><h5>company info</h5></div>
        <div onClick={postsLink} className='nav-item'><h5>discussion</h5></div>
        <div className='nav-item'><h5>add to list</h5></div>
        <div onClick={chartLink} className='nav-item'><h5>chart</h5></div>
      </nav>
    </footer>
  )
}

export default ChartFooter;