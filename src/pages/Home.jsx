import Hero from '../components/Hero'
import Service from '../components/Service'
import Team from '../components/Team'

export default function Home() {
  return (
    <>
      <Hero />

      <section id="servicos">
        <Service />
      </section>

      <section id="team">
        <Team />
      </section>

      <div id="contato"></div>
    </>
  )
}
