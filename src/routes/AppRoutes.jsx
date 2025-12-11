import { Routes, Route } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'

import Home from '../pages/Home'
import Fisios from '../pages/Fisios'
import AboutMe from '../pages/AboutMe'
import Agendamento from '../pages/Agendamento'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="fisios" element={<Fisios />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="agendamento" element={<Agendamento />} />
      </Route>
    </Routes>
  )
}
