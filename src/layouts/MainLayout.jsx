import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

export default function MainLayout() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* HEADER FIXO */}
      <Header />

      {/* ÁREA PRINCIPAL — onde as páginas são exibidas */}
      <main className="flex-1]"> 
        <Outlet />
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  )
}
