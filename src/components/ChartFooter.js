import { useNavigate } from 'react-router-dom'
import {useState, useContext } from 'react'
import { main } from '../api/axios'
import AuthContext from '../context/AuthProvider'

const ChartFooter = (props) => {

  const [modal, setModal] = useState(false);
  const { auth } = useContext(AuthContext);
  
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
  const toggleModal = () => {
    modal ? (setModal(false)) : (setModal(true));
  }
  const addSymbol = (e) => {
    const id = e.target.id;
    const LIST_URL = `/lists/${id}`;
    const listUpdate = {
      symbols: [props.ticker.toUpperCase()]
    }
      main.patch(
            LIST_URL, listUpdate,
            {
              headers: {'Authorization': localStorage.token,
                        'Content-Type': 'application/json'},
              withCredentials: false,
            }
    )
    .then(response => {
      if (response) {
        //add update force
      }
    })
    .catch(err => {
      console.log(err);
    })
  };

  return (
    <footer>
      <nav className='head-nav'>
        <div onClick={infoLink} className='nav-item'><h5>company info</h5></div>
        <div onClick={postsLink} className='nav-item'><h5>discussion</h5></div>
        <div onClick={chartLink} className='nav-item'><h5>chart</h5></div>
        <>
        <div onClick={toggleModal} className='nav-item'><h5>add to list</h5>
        {(modal && auth.user && auth.user.lists) ? (
          <div className='list-modal'>
            {auth.user.lists.map((list) => {
              return (
                <div key={list.id} id={list.id} onClick={addSymbol} className='list-modal-item'>{list.name}</div>
            )})}
          </div>
        ) : (
          <>
          </>
        )}
        </div>
        </>
      </nav>
    </footer>
  )
}

export default ChartFooter;