import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './components/home/Home'
import { Page1 } from './components/page1/Page1'
import { Page2 } from './components/page2/Page2'
import { Page3 } from './components/page1/Page3'
import { Page4 } from './components/page2/Page4'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/page1' element={<Page1 />} />
        <Route path='/page1.2' element={<Page3 />} />
        <Route path='/page2' element={<Page2 />} />
        <Route path='/page2.2' element={<Page4 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
