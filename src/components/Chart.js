import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar'
import SideBarRight from './SideBarRight'
import Loading from './Loading'
import axios from 'axios'
import { alpha } from '../api/axios'
import LineChart from './Line'

const Chart = () => {
  const [lineProps, setLineProps] = useState({});
  const [dddata, setDddata] = useState([]);
  const [ddata, setDdata] = useState({});
  const [meta, setMeta] = useState({});
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  
  const key = 'FVE7LEZWLKOMWHDH';
  const intraUrl = `/query?function=TIME_SERIES_INTRADAY&symbol=${params.ticker}&interval=5min&apikey=${key}`;
  const dailyUrl = `/query?function=TIME_SERIES_DAILY&symbol=${params.ticker}&apikey=${key}`;

  const one = alpha.get(intraUrl);
  const two = alpha.get(dailyUrl);

  const getAllData = () => {
    axios.all([one])
    .then(axios.spread((...responses) => {
      const resOne = responses[0];
      // const resTwo = responses[1];
      setMeta(resOne.data['Meta Data']);
      setData(resOne.data['Time Series (5min)']);
      // setDdata(resTwo.data['Time Series (Daily)']);
      // console.log(resOne);
      // console.log(resTwo);
    }))
    .catch((err) => console.error(err))
    .then(() => {
      dailyToA();
    })
  }

  useEffect(() => {
    getAllData();
    
  }, [params])

  useEffect(() => {
    dailyToA();
    
  }, [data])

  

  const dailyToA = () => {
    const ddataa = [];
    for (const item in data) {
      ddataa.unshift([data[item]['1. open'], item]);
      // ddataa.unshift(ddata[item]['1. open']);
    }
    setLineProps({
      data: ddataa,
      meta: meta
    });
    setLoading(false);
  }

  return (
    <>
    {(loading && dddata.length < 1) ? (
      <Loading />
    ) : (
      <>
    <div className='container'>
      <Header />
      <main className='chart'>
        <SideBar />
        <div className='chart-main'>
          {/* <>
          {(meta && meta['2. Symbol']) ? (
          <div className='chart-header'><span>intraday prices</span><span><b>symbol: {meta['2. Symbol']}</b></span><span>close: ${ddata['2022-08-26']['4. close']}</span></div>
          ) : (
          <></>
          )}
          </>
          {dddata.map((object, i) => {
            return (<div key={i} className='chart-bar'><span>{i}</span><span>${object}</span></div>)
          })} */}
          <LineChart lineProps={lineProps}/>
        </div>
        <SideBarRight />
      </main>
    </div>
    </>
    )}
    </>
  )
}
export default Chart;