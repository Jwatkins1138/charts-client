import { useState, useEffect } from 'react'
import Header from './Header'
import SubHeader from './SubHeader'
import Loading from './Loading'
import axios from 'axios'
import { alpha } from '../api/axios'

const Chart = () => {
  const [dddata, setDddata] = useState([]);
  const [ddata, setDdata] = useState({});
  const [meta, setMeta] = useState({});
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  
  const key = 'FVE7LEZWLKOMWHDH';
  const intraUrl = `/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${key}`;
  const dailyUrl = `/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=${key}`;

  const one = alpha.get(intraUrl);
  const two = alpha.get(dailyUrl);

  const getAllData = () => {
    axios.all([one, two])
    .then(axios.spread((...responses) => {
      const resOne = responses[0];
      const resTwo = responses[1];
      setMeta(resOne.data['Meta Data']);
      setData(resOne.data['Time Series (5min)']);
      setDdata(resTwo.data['Time Series (Daily)']);
      console.log(resOne);
      console.log(resTwo);
    }))
    .catch((err) => console.error(err))
    .then(() => {
      dailyToA();
    })
  }

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
      .then(() => {
        dailyToA();
      })
      .catch((err) => console.error(err));
  }
  
  useEffect(() => {
    getAllData();
    
  }, [])

  

  const dailyToA = () => {
    const ddataa = [];
    for (const item in ddata) {
      ddataa.push(ddata[item]['1. open']);
    }
    setDddata(ddataa);
    console.log(ddataa);
    console.log(ddata);
    console.log(data);
    console.log(meta);
    setLoading(false);
  }

  return (
    <>
    {loading ? (
      <Loading />
    ) : (
      <>
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
          {dddata.map((object, i) => {
            return (<div key={i} className='chart-bar'><span>{i}</span><span>{object}</span></div>)
          })}
        </div>
        <aside></aside>
      </main>
    </div>
    </>
    )}
    </>
  )
}
export default Chart;