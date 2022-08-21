import Home from './components/Home'
import Test from './components/Test'
import Loading from './components/Loading'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/test' element={<Test />} />
        <Route path='/loading' element={<Loading />} />
      </Routes>
    </BrowserRouter>  
  );
}

export default App;
