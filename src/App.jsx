import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home'
import Fisios from './Pages/Fisios'
import AboutMe from './Pages/AboutMe'
import Agendamento from './Pages/Agendamento'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Fisios" element={<Fisios />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Agendamento" element={<Agendamento />} />
        {/* Adicione mais rotas conforme necessário */}
      </Routes>
    </BrowserRouter>
  )
}

export default App