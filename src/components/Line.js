import React, { useState, useEffect } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const LineChart = (props) => {

  const parseData = () => {
    setData({
      labels: props.lineProps.data.map((object) => { return object[1]}),
      datasets: [{
        label: props.lineProps.symbol,
        data: props.lineProps.data.map((object) => { return object[0]})
    }]
    })
  };

  const [data, setData] = useState({
    labels: props.lineProps.data.map((object) => { return object[1]}),
    datasets: [{
      label: props.lineProps.symbol,
      data: props.lineProps.data.map((object) => { return object[0]})
    }]
  });

  const parseOptions =() => {
    setOptions({
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
          text: props.lineProps.info,
          color: 'rgba(255, 255, 255, 1)'
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
    })
  };

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
        text: props.lineProps.info,
        color: 'rgba(255, 255, 255, 1)'
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
    parseData();
    parseOptions();
  }, [props])

  return (
    <Line data={data} options={options} />
  )

}

export default LineChart