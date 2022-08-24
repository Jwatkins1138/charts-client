import Home from './components/Home'
import Test from './components/Test'
import Loading from './components/Loading'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Chart from './components/Chart'

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
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
