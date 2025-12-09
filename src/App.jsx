import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Fisios from './Pages/Fisios'
import AboutMe from './Pages/AboutMe'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Fisios" element={<Fisios />} />
        <Route path="/AboutMe" element={<AboutMe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App