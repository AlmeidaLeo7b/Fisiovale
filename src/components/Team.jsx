import { Link } from 'react-router-dom'

export default function Team() {
  return (
    <section className="bg-[#94a68c] py-24 px-6">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

        {/* =================== COLUNA ESQUERDA =================== */}
        <div className="order-2 md:order-1 max-w-xl">

          <h2 className="font-libre text-5xl md:text-6xl text-white leading-tight mb-8">
            Conheça nossa equipe
          </h2>

          <p className="text-white text-lg leading-relaxed mb-6">
            Na Fisiovale, acreditamos que a cura começa com a confiança. Nossa equipe não é formada apenas
            por especialistas técnicos, mas por pessoas apaixonadas por devolver qualidade de vida.
          </p>

          <p className="text-white text-lg leading-relaxed mb-10">
            Combinamos anos de experiência clínica com uma abordagem profundamente humana. Cada profissional
            foi escolhido não só pela excelência curricular, mas pela capacidade de ouvir e acolher sua história.
          </p>

          {/* ------ BOTÃO ------ */}
          <Link
            to="/Fisios"
            className="inline-block bg-white text-[#94A68C] px-10 py-3 rounded-full 
            hover:bg-[#F5F5F5] transition-colors shadow-lg font-medium"
          >
            Ver especialistas
          </Link>

          {/* ------ IMAGEM PEQUENA (abaixo do botão) ------ */}
          <img
            src="https://www.shutterstock.com/image-photo/therapeutic-physiotherapy-session-africanamerican-woman-600nw-2608163279.jpg"
            alt="Equipamento de fisioterapia"
            className="mt-12 w-[full] h-[85%] rounded-xl shadow-lg object-cover"
          />

        </div>

        {/* =================== COLUNA DIREITA =================== */}
        <div className="order-1 md:order-2 flex justify-center w-full">
          <img
            src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2000&auto=format&fit=crop"
            alt="Profissional de fisioterapia"
            className="w-full md:w-[75%] h-[65%] md:h-[750px] object-cover rounded-3xl shadow-xl"
          />
        </div>

      </div>
    </section>
  )
}
