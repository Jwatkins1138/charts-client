import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { currentUser } from '../helpers'
import { main } from '../api/axios'
import SubHeader from './SubHeader'
import AuthContext from '../context/AuthProvider'

const Header = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const [ticker, setTicker] = useState('');
  const [tickers, setTickers] = useState([]);
  const [at, setAt] = useState(false);
  const [drop, setDrop] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if ((localStorage.token && !auth.login) || (localStorage.token && !auth.user)) {
      currentUser().then((res) => {
        console.log(res);
        if (res) {
          setAuth({ user: res, login: true});
        } else {
          setAuth({ user: {}, login: false});
        }
      })
    } 
  }, []);

  useEffect(() => {
    if (ticker != '') {
      const TICKER_URL = `/tickers/${ticker}`;
      main.get(
        TICKER_URL,
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
    }
}, [ticker])

  const toggleDrop = () => {
    return setTimeout(() => {
      drop ? (setDrop(false)) : (setDrop(true));
    }, 500);
  }

  const selectTicker = (e) => {
    setTicker(e.target.id);
    console.log(e.target.id);
  }

  const drawDropDown = (symbol) => {
      return (
        <div key={symbol.id} onClick={selectTicker} id={symbol.name} className='drop-symbol'>{symbol.name}</div>
      )
  }

  useEffect(() => {
    at ? (setAt(false)) : (setAt(at));
  }, [auth])

  const searchTicker = () => {
    navigate('/chart/' + ticker);
  }
  return (
    <header>
      <div className='head-main'>
      <div className='head-title'>
        <Link to='/'><h1>allcharts.site <FontAwesomeIcon icon={faChartLine} /></h1></Link>
      </div>
      <div className='head-search'>
      <label htmlFor="search">
        ticker: 
      </label>
      <div className='input-container'>
        <input
          type='text'
          id='search'
          placeholder='search'
          autoComplete='off'
          onFocus={toggleDrop}
          onBlur={toggleDrop}
          onChange={(e) => {setTicker(e.target.value)}}
          value={ticker}
        />
        { drop ? (
          <div className='drop-down'>
            {tickers.map((item) => {
              return drawDropDown(item);
            })}
          </div>
        ) : (<></>)}
      </div>
      <button onClick={searchTicker}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
      </div>
      <nav className='header-side'>
        <>
        { (auth.login && auth.user && auth.user.id ) ? (
          <>
          <span>logged in as: <h3>{auth.user.email}</h3></span>
          <Link to='/profile'><FontAwesomeIcon className="nav-icon" icon={faUser} /></Link>
          </>
        ) : (
          <>
          <Link to='/login'><button>login</button></Link>
          <Link to='/signup'><button>sign up</button></Link>
          </>
        )}
        </>
        
      </nav>
      </div>
      <SubHeader />
    </header>
  )
}

export default Header;