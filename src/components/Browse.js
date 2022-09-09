import { main } from '../api/axios'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import Header from './Header'
import SideBar from './SideBar'
import SideBarRight from './SideBarRight'
import Loading from './Loading'

const Browse = () => {
  const [page, setPage] = useState(0);
  const [tickers, setTickers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [letter, setLetter] = useState('');
  const navigate = useNavigate();
  const mainRef = useRef(null);
  const letterArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const getTickers = () => {
    const TICKER_PAGE_URL = `/tickers_page/${page}/${letter}`;
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
      setLoading(false);
      })
      .catch(err => {
      console.log(err);
    })
  };

  useEffect(() => {
    getTickers();
  }, [page, letter])

  useEffect(() => {
    if(!loading) {
      mainRef.current.scrollTo(0, 0);
    };
  }, [tickers])

  const linkTo = (e) => {
    navigate('/chart/' + e.target.id);
  };

  const assignLetter = (e) => {
    setLetter(e.target.id);
    setPage(0);
  };

  const drawTicker = (symbol) => {
    return (
      <div key={symbol.id} onClick={linkTo} id={symbol.name} className='browse-item'><span>{symbol.name}</span><span>{symbol.description.substring(1)}</span></div>
    )
  };

  const drawLetter = (item) => {
    return (
      <div key={item} id={item} onClick={assignLetter} className='letter-select'>{item}</div>
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
    <>
    {(loading) ? (
      <Loading />
    ) : (
    <>
    <div className='container'>
      <Header />
      <main className='browse'>
        <SideBar />
        <div ref={mainRef} className='browse-main'>
          <div className='posts-header'><h4>browse all symbols: {letter}</h4></div>
          <div className='letter-control'>
            {letterArray.map((item) => {
              return drawLetter(item);
            })}
            <div key='clear' id='' onClick={assignLetter} className='letter-select'>clear</div>
          </div>
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
    </>
    )}
    </>
  )
}

export default Browse;