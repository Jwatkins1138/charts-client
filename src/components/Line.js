import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Line } from 'react-chartjs-2'
import Loading from './Loading'
import axios from 'axios'
import { alpha } from '../api/axios'
import { Chart as ChartJS } from 'chart.js/auto'

const LineChart = (props) => {

  const params = useParams();
  

  const parseData = () => {
    setData({
      labels: props.data.map((object, i) => { return i}),
      datasets: [{
        data: props.data.map((object, i) => { return object})
    }]
    })
  };

  const [data, setData] = useState({
    labels: props.data,
    datasets: [{
      data: props.data
    }]
  });

  const [options, setOptions] = useState({
    borderColor: 'rgba(0, 255, 0, 1)',
    backgroundColor: 'rgba(0, 255, 0, 1)'
  });

  useEffect(() => {
    parseData();
  }, [props])

  return (
    <Line data={data} options={options} />
  )

}

export default LineChart