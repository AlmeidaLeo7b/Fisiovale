import { Link } from "react-router-dom";

export default function Team() {
  return (
    <section className="relative bg-gradient-to-b from-[#94a68c] to-[#bec9b9] py-32 px-6 overflow-hidden">

      {/* Glow premium no topo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-white/10 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">

        {/* =================== COLUNA DE TEXTO =================== */}
        <div className="order-2 md:order-1">

          {/* Título estilo Apple */}
          <h2 className="font-libre text-white text-5xl md:text-7xl font-semibold leading-tight tracking-tight mb-10 drop-shadow-xl">
            Uma equipe criada<br /> para cuidar de você
          </h2>

          {/* Texto com leitura premium */}
          <p className="text-white/90 text-lg md:text-xl leading-relaxed mb-8">
            A Fisiovale reúne profissionais selecionados pela excelência técnica e pela sensibilidade humana. 
            Aqui, cada atendimento nasce do equilíbrio entre conhecimento profundo e cuidado genuíno.
          </p>

          <p className="text-white/80 text-lg leading-relaxed mb-12">
            Nosso propósito é oferecer uma experiência terapêutica que respeita sua história, seu ritmo e seu 
            bem-estar — com precisão, empatia e atenção aos mínimos detalhes.
          </p>

          {/* Botão minimalista premium */}
          <Link
            to="/Fisios"
            className="
              inline-block px-12 py-4 rounded-full 
              bg-white/10 backdrop-blur-xl border border-white/30 
              text-white text-lg font-medium tracking-wide
              hover:bg-white/20 transition-all duration-300
              shadow-[0_4px_40px_rgba(255,255,255,0.15)]
            "
          >
            Conhecer especialistas
          </Link>

          {/* Imagem extra (com fade e mood premium) */}
          <div className="mt-14 overflow-hidden rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.25)] group">
            <img
              src="https://www.shutterstock.com/image-photo/therapeutic-physiotherapy-session-africanamerican-woman-600nw-2608163279.jpg"
              alt="Equipe de fisioterapia"
              className="w-full h-[260px] md:h-[300px] object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />
          </div>
        </div>

        {/* =================== COLUNA DA IMAGEM PRINCIPAL =================== */}
        <div className="order-1 md:order-2 flex justify-center">

          <div className="relative w-full md:w-[80%] overflow-hidden rounded-[40px] shadow-[0_25px_80px_rgba(0,0,0,0.35)] group">

            {/* Imagem principal com efeito cinematográfico */}
            <img
              src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2000&auto=format&fit=crop"
              alt="Profissional de fisioterapia"
              className="
                w-full h-[520px] md:h-[760px] object-cover
                transition-transform duration-[1400ms]
                group-hover:scale-[1.04]
              "
            />

            {/* Gradient interno premium */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          </div>

        </div>
      </div>
    </section>
  );
}
