import Home from './components/Home'
import Test from './components/Test'
import Loading from './components/Loading'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Chart from './components/Chart'
import Profile from './components/Profile'
import Posts from './components/Posts'
import About from './components/About'
import Info from './components/Info'
import Browse from './components/Browse'

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
        <Route path='/chart/:ticker' element={<Chart />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/about' element={<About />} />
        <Route path='/posts/:ticker' element={<Posts />} />
        <Route path='/info/:ticker' element={<Info />} />
        <Route path='/browse' element={<Browse />} />
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
