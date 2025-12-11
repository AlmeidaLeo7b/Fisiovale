import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section
      className="
        bg-gradient-to-b from-[#94a68c] to-[#bec9b9]
        grid grid-cols-1 md:grid-cols-2
        min-h-screen
      "
    >
      {/* COLUNA ESQUERDA */}
      <div className="flex flex-col justify-center px-[5vw] py-12">
        <h1 className="font-libre text-white text-5xl md:text-6xl font-bold leading-tight mb-6">
          Transforme sua Vida
          com Inovação em Fisioterapia
        </h1>

        <p className="text-white text-lg leading-relaxed mb-8 max-w-lg">
          Descubra a revolução da fisioterapia moderna, onde a inovação transcende barreiras.
          Nossos profissionais não apenas tratam, mas reimaginam o seu bem-estar.
        </p>

        <div>
          <Link
            to="/about"
            className="
              inline-block
              bg-white text-[#94a68c]
              font-bold py-4 px-10 
              rounded-full shadow-lg
              hover:bg-gray-100 
              transition-transform hover:scale-105
            "
          >
            Saiba mais
          </Link>
        </div>
      </div>

      {/* COLUNA DIREITA */}
      <div className="relative flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=2000&auto=format&fit=crop"
          alt="Sala de Fisioterapia Zen"
          className="w-[90%] h-[90%] object-cover rounded-xl shadow-2xl"
        />
      </div>
    </section>
  );
}
