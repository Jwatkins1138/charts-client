import { main } from '../api/axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import Header from './Header'
import SideBar from './SideBar'
import SideBarRight from './SideBarRight'

const Browse = () => {
  const [page, setPage] = useState(0);
  const [tickers, setTickers] = useState([]);
  const navigate = useNavigate();

  const getTickers = () => {
    const TICKER_PAGE_URL = `/tickers_page/${page}`;
      main.get(
        TICKER_PAGE_URL,
        {
          headers: {'Authorization': localStorage.token,
                    'Content-Type': 'application/json'},
          withCredentials: false,
        }
      )
      .then(response => {
      console.log(response);
      setTickers(response.data);
      })
      .catch(err => {
      console.log(err);
    })
  };

  useEffect(() => {
    getTickers()
  }, [page])

  const linkTo = (e) => {
    navigate('/chart/' + e.target.id);
  };

  const drawTicker = (symbol) => {
    return (
      <div key={symbol.id} onClick={linkTo} id={symbol.name} className='browse-item'><span>{symbol.name}</span><span>{symbol.description}</span></div>
    )
  };

  const pageUp = () => {
    if (tickers.length > 45) {
      setPage(page + 1);
    }
  };

  const pageDown = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  return (
    <div className='container'>
      <Header />
      <main className='browse'>
        <SideBar />
        <div className='browse-main'>
          <div className='posts-header'><h4>browse all symbols</h4></div>
          {tickers.map((item) => {
              return drawTicker(item);
            })}
          <footer className='page-control'>
            <FontAwesomeIcon onClick={pageDown} className="nav-icon" icon={faArrowAltCircleLeft} />
            <span>page {page + 1}</span>
            <FontAwesomeIcon onClick={pageUp} className="nav-icon" icon={faArrowAltCircleRight} />
            </footer>  
        </div>
        <SideBarRight />
      </main>
    </div>
  )
}

export default Browse;