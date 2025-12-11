import { Routes, Route } from 'react-router-dom' // Removemos o BrowserRouter da importação

import Home from './Pages/Home'
import Fisios from './Pages/Fisios'
import AboutMe from './Pages/AboutMe'
import Agendamento from './Pages/Agendamento'

function App() {
  return (
    /* Removemos o <BrowserRouter> que envolvia tudo aqui */
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Fisios" element={<Fisios />} />
      <Route path="/AboutMe" element={<AboutMe />} />
      <Route path="/Agendamento" element={<Agendamento />} />
      {/* Adicione mais rotas conforme necessário */}
    </Routes>
  )
}

export default App