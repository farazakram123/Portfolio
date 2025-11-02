import Navbar from './components/Navbar/Navbar'
import './index.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import UnderDevPhase from './components/UnderDevPhase/UnderDevPhase'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/under-development' element={<UnderDevPhase />} />
      </Routes>
    </div>
  )
}

export default App
