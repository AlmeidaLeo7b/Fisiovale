import Header from '../components/Header'
import Hero from '../components/Hero'
import Service from '../components/Service'
import Team from '../components/Team'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Hero />

      {/* Adicionamos o ID aqui para o link #servicos funcionar */}
      <section id="servicos">
        <Service />
      </section>

     <section id="team">
       <Team />
    </section>
    
      {/* Adicionamos o ID aqui para o link #contato funcionar */}
      <div id="contato">
        <Footer />
      </div>
    </div>
  )
}