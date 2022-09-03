import {useState, useEffect, useContext} from 'react'
import Header from './Header'
import SideBar from './SideBar'
import SideBarRight from './SideBarRight'
import ChartFooter from './ChartFooter'
import Loading from './Loading'
import { useParams } from 'react-router-dom'
import { alpha } from '../api/axios'
import AuthContext from '../context/AuthProvider'

const Info = () => {

  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const { auth } = useContext(AuthContext);

  const key = 'FVE7LEZWLKOMWHDH';
  const INFO_URL = `/query?function=OVERVIEW&symbol=${params.ticker}&apikey=${key}`;

  const getInfo = () => {
    alpha.get(INFO_URL)
    .then((response) => {
      const tempInfo = [];
      console.log(response);
      for (const item in response.data){
        tempInfo.push([item, response.data[item]]);
      }
      setInfo(tempInfo);
    })
    .then(() => {
      setLoading(false);
    })
  }

  useEffect(() => {
    getInfo();
  }, [])


  return (
    <>
    {(loading) ? (
      <Loading />
    ) : (
      <>
    <div className='container'>
      <Header />
      <main className='info'>
        <SideBar />
        <div className='info-main'>
          <header className='posts-header'><h4>{params.ticker} company info</h4></header>
          <div className='info-area'>
          {info.map((item) => {
            return <div className='info-item'><b>{item[0]}</b><p>{item[1]}</p></div>
          })}
          </div>
          <ChartFooter ticker={params.ticker}/>
        </div>
        <SideBarRight />
      </main>
    </div>
    </>
    )}
    </>
  )
}

export default Info;