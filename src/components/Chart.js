import { useState, useEffect } from 'react'
import Header from './Header'
import SubHeader from './SubHeader'

const Chart = () => {
  const [ddata, setDdata] = useState({});
  const [meta, setMeta] = useState({});
  const [data, setData] = useState({});
  
  const key = 'FVE7LEZWLKOMWHDH';
  const intraUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${key}`;
  const dailyUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=${key}`

  const getData = () => {
    fetch(intraUrl, {
      method: 'get',
      headers: {
        
        'User-Agent': 'request',
      },
    })
      .then((res) => {
        if(res.ok) {
          console.log(res);
          setMeta(res['Meta Data']);
          return res.json();
        } else {
          throw new Error(res);
        }
      })
      .then((json) => {
        setMeta(json['Meta Data']);
        setData(json['Time Series (5min)'])
        console.log(json);
      })
      .catch((err) => console.error(err));
  }

  const getDaily = () => {
    fetch(dailyUrl, {
      method: 'get',
      headers: {
        
        'User-Agent': 'request',
      },
    })
      .then((res) => {
        if(res.ok) {
          console.log(res);
          setMeta(res['Meta Data']);
          return res.json();
        } else {
          throw new Error(res);
        }
      })
      .then((json) => {
        console.log(json);
        setDdata(json['Time Series (Daily)']);
      })
      .catch((err) => console.error(err));
  }
  
  useEffect(() => {
    getData();
    getDaily();
  }, [])

  const checkData = () => {
    console.log(data);
  }
  const checkMeta = () => {
    console.log(meta);
  }

  return (
    <div className='container'>
      <Header />
      <SubHeader />
      <main className='chart'>
        <aside></aside>
        <div className='chart-main'>
          <>
          {(meta && meta['2. Symbol']) ? (
          <div className='chart-header'>symbol: {meta['2. Symbol']}{ddata['2022-08-26']['4. close']}</div>
          ) : (
          <></>
          )}
          </>
          <button onClick={checkData}>check</button>
          <button onClick={checkMeta}>meta</button>
          <div className='chart-bar'></div>
          <div className='chart-bar'></div>
          <div className='chart-bar'></div>
          <div className='chart-bar'></div>
          <div className='chart-bar'></div>
          <div className='chart-bar'></div>
        </div>
        <aside></aside>
      </main>
    </div>
  )
}
export default Chart;