import Home from './components/Home'
import Test from './components/Test'
import Loading from './components/Loading'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Chart from './components/Chart'
import LineChart from './components/Line'
import Profile from './components/Profile'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Test />} />
        <Route path='/loading' element={<Loading />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/chart' element={<Chart />} />
        <Route path='/chart/:ticker' element={<Chart />} />
        <Route path='/line' element={<LineChart />} />
        <Route path='/line/:ticker' element={<LineChart />} />
        <Route path='/profile' element={<Profile />} />

      </Routes>
    </BrowserRouter>  
  );
}

export default App;
