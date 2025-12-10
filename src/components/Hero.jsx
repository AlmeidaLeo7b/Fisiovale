import { Link } from 'react-router-dom'

export default function Hero() {
  <section class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
    <div class="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-500),transparent)] opacity-10"></div>
    <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-900 shadow-xl ring-1 shadow-indigo-500/5 ring-white/5 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
    <div class="mx-auto max-w-2xl lg:max-w-4xl">
      <img src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-400.svg" alt="" class="mx-auto h-12" />
      <figure class="mt-10">
        <blockquote class="text-center text-xl/8 font-semibold text-white sm:text-2xl/9">
          <p>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
        </blockquote>
        <figcaption class="mt-10">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="mx-auto size-10 rounded-full" />
          <div class="mt-4 flex items-center justify-center space-x-3 text-base">
            <div class="font-semibold text-white">Judith Black</div>
            <svg viewBox="0 0 2 2" width="3" height="3" aria-hidden="true" class="fill-white">
              <circle r="1" cx="1" cy="1" />
            </svg>
            <div class="text-gray-400">CEO of Workcation</div>
          </div>
        </figcaption>
      </figure>
    </div>
  </section>
  return (
    <section
      className="
        bg-[#94a68c]
        grid grid-cols-1 md:grid-cols-2
        min-h-screen      /* agora ocupa a tela inteira */
        mt-[50px]         /* compensa o header fixo */
      "
    >

      {/* --- COLUNA ESQUERDA (TEXTO) --- */}
      <div className="flex flex-col justify-center px-[5vw] py-12">

        <h1 className="font-libre text-white text-5xl md:text-6xl font-bold leading-tight mb-6">
          Transforme sua Vida
          <br />
          com Inovação em Fisioterapia
        </h1>

        <p className="text-white text-lg leading-relaxed mb-8 max-w-lg">
          Descubra a revolução da fisioterapia moderna, onde a inovação transcende barreiras.
          Nossos profissionais não apenas tratam, mas reimaginam o seu bem-estar.
        </p>

        <div> {/* 2. Trocamos <button> por <Link> 3. O 'to' deve ser igual ao 'path' lá no seu arquivo de rotas (App.jsx ou main.jsx) */} <Link to="/AboutMe" className="inline-block bg-white text-[#94a68c] 
        font-bold py-4 px-10 rounded-full shadow-lg hover:bg-gray-100 transition-transform hover:scale-105" > Saiba mais </Link> </div>
      </div>

      {/* --- COLUNA DIREITA (IMAGEM) --- */}
      <div className="relative flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2000&auto=format&fit=crop"
          alt="Sala de Fisioterapia Zen"
          className="w-[90%] h-[90%] object-cover rounded-xl shadow-2xl"
        />
      </div>

    </section>
  )
}
