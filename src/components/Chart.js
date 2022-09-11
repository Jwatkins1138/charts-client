import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from './Header'
import SideBar from './SideBar'
import SideBarRight from './SideBarRight'
import Loading from './Loading'
import { alpha } from '../api/axios'
import LineChart from './Line'
import ChartFooter from './ChartFooter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMaximize } from '@fortawesome/free-solid-svg-icons'
import { faMinimize } from '@fortawesome/free-solid-svg-icons'

const Chart = () => {
  const [lineProps, setLineProps] = useState({});
  const [time, setTime] = useState("TIME_SERIES_INTRADAY");
  const [timeRef, setTimeRef] = useState('Time Series (5min)');
  const [full, setFull] = useState(false);
  const [meta, setMeta] = useState({});
  const [data, setData] = useState({});
  const [note, setNote] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const params = useParams();

  
  const key = 'FVE7LEZWLKOMWHDH';
  const ALPHA_URL = `/query?function=${time}&symbol=${params.ticker}&interval=5min&apikey=${key}`;

  const getAllData = () => {
    alpha.get(ALPHA_URL)
    .then(res => {
      setMeta(res.data['Meta Data']);
      setData(res.data[timeRef]);
      if (res.data.Note) {
        setNote(res.data.Note);
      } else {
        setNote('');
      }
      if (res.data['Error Message']) {
        setError(res.data['Error Message']);
      } else {
        setError('');
      }
    })
    .catch((err) => console.error(err))
    .then(() => {
      dailyToA();
    })
  };

  useEffect(() => {
    getAllData();
    
  }, [params, timeRef])

  useEffect(() => {
    dailyToA();
    
  }, [data])

  useEffect(() => {
    switch(time) {
      case "TIME_SERIES_INTRADAY":
        setTimeRef("Time Series (5min)");
        break;
      case "TIME_SERIES_DAILY":
        setTimeRef("Time Series (Daily)");
        break;
      case "TIME_SERIES_WEEKLY":
        setTimeRef("Weekly Time Series");
        break;
      case "TIME_SERIES_MONTHLY":
        setTimeRef("Monthly Time Series");
        break;  
    }
    
  }, [time])

  const toggleFull = () => {
    full ? (setFull(false)) : (setFull(true));
  }
  

  const dailyToA = () => {
    const dataArray = [];
    for (const item in data) {
      dataArray.unshift([data[item]['1. open'], item]);
    }
    setLineProps({
      data: dataArray,
      symbol: params.ticker.toUpperCase(),
      info: time
    });
    setLoading(false);
  }

  return (
    <>
    {(loading) ? (
      <Loading />
    ) : (
      <>
    {(full) ? (
    <div className='chart-main'>
      <div className='chart-toggle'><FontAwesomeIcon className='chart-icon' onClick={toggleFull} icon={faMinimize} /></div>
      <div className='chart-note'><span>{note}</span></div>
      <div className='chart-error'><span>{error}</span></div>
      <LineChart lineProps={lineProps}/>
    </div>
    ) : (
    <div className='container'>
      <Header />
      <main className='chart'>
        <SideBar />
        <div className='chart-main'>
          <div className='chart-toggle'><FontAwesomeIcon className='chart-icon' onClick={toggleFull} icon={faMaximize} /></div>
          <div className='chart-note'><span>{note}</span></div>
          <div className='chart-error'><span>{error}</span></div>
          <LineChart lineProps={lineProps}/>
          <ChartFooter ticker={params.ticker}/>
        </div>
        <SideBarRight setTime={setTime}/>
      </main>
    </div>
    )}
    </>
    )}
    </>
  )
}
export default Chart;