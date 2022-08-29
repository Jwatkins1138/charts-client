import axios from 'axios'

const alpha = axios.create({
  baseURL: 'https://www.alphavantage.co',
});

const main = axios.create({
    // baseURL: 'http://localhost:3001',
    baseURL: 'https://shrouded-sierra-98549.herokuapp.com',
  });

// export default axios.create({
//   baseURL: 'http://localhost:3001',
// });

export {
  alpha,
  main
};