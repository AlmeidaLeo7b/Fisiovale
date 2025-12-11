export default function Services() {
  const servicos = [
    {
      titulo: "Pilates",
      imagem:
        "https://hubconteudo.dasa.com.br/wp-content/uploads/2022/05/shutterstock_1723669582-720.jpg",
    },
    {
      titulo: "Fisioterapia",
      imagem:
        "https://www.enriquegballesteros.es/wp-content/uploads/2018/02/electroterapia.jpg",
    },
    {
      titulo: "Acupuntura",
      imagem:
        "https://cdn.prod.website-files.com/652421babb6bdd7f92f721b7/652421babb6bdd7f92f7231c_acupuntura-o-que-e.jpg",
    },
    {
      titulo: "Cuidados Estéticos",
      imagem:
        "https://media.gettyimages.com/id/1347013301/pt/foto/the-procedure-of-aesthetic-medicine.jpg?s=612x612&w=0&k=20&c=4A_QSUNX0LvtqolfrhZ0zDSJf1ynsMRh9X3lLt5q2-c=",
    },
  ];

  return (
    <section className="bg-[#f4f4f9] py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-5xl font-libre font-bold text-[#7d8f75] mb-20 tracking-tight">
          Nossos Serviços
        </h2>

        {/* GRID PREMIUM */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-4 
            gap-14 
            place-items-center
          "
        >
          {servicos.map((servico, index) => (<div
            key={index}
            className="
    group relative cursor-pointer
    w-full sm:w-[300px] md:w-[330px] lg:w-[280px]
    h-[430px]
    rounded-[32px]
    transition-all duration-700
    hover:-translate-y-3
  "
          >
            {/* WRAPPER DO TILT — SOMENTE ELE USA transform */}
            <div
              className="
      relative w-full h-full rounded-[32px]
      shadow-[0_20px_60px_-10px_rgba(0,0,0,0.25)]
      bg-[#0a0a0a]
      overflow-hidden

      transition-transform duration-700
      group-hover:[transform:perspective(900px)_rotateX(4deg)_rotateY(-4deg)]
      will-change-transform
    "
            >
              {/* WRAPPER DA IMAGEM (somente SCALE aqui) */}
              <div
                className="
        absolute inset-0
        transition-transform duration-[1500ms]
        group-hover:scale-[1.12]
        will-change-transform
      "
              >
                <img
                  src={servico.imagem}
                  className="w-full h-full object-cover"
                  alt={servico.titulo}
                />
              </div>

              {/* HIGHLIGHT */}
              <div
                className="
        absolute inset-0 pointer-events-none
        bg-gradient-to-tr from-white/5 to-transparent
        opacity-0 group-hover:opacity-100
        transition-opacity duration-700
      "
              />

              {/* GRADIENTE CINEMATIC */}
              <div
                className="
                absolute inset-0 
                bg-gradient-to-t 
                from-black/70 via-black/40 to-transparent "
              />

              {/* GLASSMORPHISM */}
              <div
                className="
                  absolute bottom-0 left-0 right-0
                  backdrop-blur-2xl bg-white/10
                  border-t border-white/20
                  p-7
                  rounded-b-[32px]
                "
              >
                <h3 className="font-libre font-semibold text-[1.7rem] text-white tracking-tight">
                  {servico.titulo}
                </h3>

                <div
                  className="
          w-10 h-[3px] bg-white/80 rounded-full mt-3
          transition-all duration-700 group-hover:w-20
        "
                />

                <p className="text-white/80 text-[0.9rem] leading-relaxed mt-4">
                  Experiência completa com atendimento especializado em{" "}
                  {servico.titulo.toLowerCase()}.
                </p>
              </div>
            </div>
          </div>

          ))}
        </div>
      </div>
    </section>
  );
}
