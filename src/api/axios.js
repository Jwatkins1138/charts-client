import axios from 'axios'

const alpha = axios.create({
  baseURL: 'https://www.alphavantage.co',
});

const main = axios.create({
    baseURL: 'http://localhost:3001',
  });

// export default axios.create({
//   baseURL: 'http://localhost:3001',
// });

export {
  alpha,
  main
};