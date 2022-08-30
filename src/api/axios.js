import axios from 'axios'

const alpha = axios.create({
  baseURL: 'https://www.alphavantage.co',
});

const main = axios.create({
    // develpment backend
    // baseURL: 'http://localhost:3001',

    //production backend
    baseURL: 'https://shrouded-sierra-98549.herokuapp.com',
  });


export {
  alpha,
  main
};