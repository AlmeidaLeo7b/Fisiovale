  export default function AboutMe() {
    return (
      <div className="bg-[#F5F5F5] min-h-screen flex flex-col">

            {/* CONTEÚDO PRINCIPAL */}
        <section className="relative flex-1 pt-32 pb-24 px-4 sm:px-6 md:px-12">
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center relative">

            {/* =================== CARD BRANCO SOBREPOSTO =================== */}
            <div
              className="
                bg-white 
                p-6 
                md:p-8 
                lg:p-12 
                text-[#6B8F80] 
                text-lg 
                md:text-xl 
                leading-relaxed 
                shadow-lg
                relative 
                z-10
                lg:-mr-16
                order-2 
                lg:order-1
                mt-8
                lg:mt-0
              "
            >
              <p className="text-justify md:text-left">
                Esta clínica foi criada com o propósito de promover saúde, equilíbrio e qualidade de vida por meio de práticas responsáveis, 
                movimento consciente e evolução contínua. Aqui, cada pessoa encontra orientação acolhedora, fundamentos técnicos sólidos 
                e um ambiente preparado para apoiar sua jornada de bem-estar. Acreditamos que essa vontade nasce quando o indivíduo se sente 
                no lugar certo — um lugar onde cuidado, conhecimento e confiança caminham juntos. Nosso compromisso é oferecer clareza, 
                segurança e suporte em cada etapa, para que cada avanço seja significativo e sustentável.
              </p>
            </div>

            {/* =================== IMAGEM PANORÂMICA =================== */}
            <div className="relative z-10 order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop"
                alt="Paisagem inspiradora"
                className="
                  w-full 
                  h-[600px]
                  sm:h-[500px]
                  md:h-[600px]
                  lg:h-[650px]
                  xl:h-[700px]
                  object-cover 
                  shadow-lg
                  rounded-lg
                  lg:rounded-none
                "
                loading="lazy"
              />
              
              {/* Overlay sutil para melhor contraste do texto */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent lg:hidden"></div>
            </div>
          </div>
        </section>
      </div>
    )
  }