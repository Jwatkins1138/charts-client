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
      labels: props.lineProps.data.map((object) => { return object[1]}),
      datasets: [{
        label: props.lineProps.meta["2. Symbol"],
        data: props.lineProps.data.map((object) => { return object[0]})
    }]
    })
  };

  const [data, setData] = useState({
    labels: props.lineProps.data.map((object) => { return object[1]}),
    datasets: [{
      label: props.lineProps.meta["2. Symbol"],
      data: props.lineProps.data.map((object) => { return object[0]})
    }]
  });

  const [options, setOptions] = useState({
    borderColor: 'rgba(0, 255, 0, 1)',
    backgroundColor: 'rgba(0, 255, 0, 1)',
    scales: {
      xAxes: {
        grid: {
          borderColor: 'rgba(0, 0, 255, 1)',
          color: 'rgba(0, 0, 255, .5)'
        }
      },
      yAxes: {
        grid: {
          borderColor: 'rgba(0, 0, 255, 1)',
          color: 'rgba(0, 0, 255, .5)'
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: props.lineProps.meta["2. Symbol"] +' '+ props.lineProps.meta["1. Information"]
      },
      legend: {
        labels: {
          color: 'rgba(255, 255, 255, 1)'
        },
        title: {
          color: 'rgba(255, 255, 255, 1)'
        }
      }
    }
  });

  useEffect(() => {
    console.log(props);
    parseData();
  }, [props])

  return (
    <Line data={data} options={options} />
  )

}

export default LineChart