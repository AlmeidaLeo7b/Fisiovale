export default function Services() {
  const servicos = [
    {
      titulo: "Pilates",
      imagem: "https://hubconteudo.dasa.com.br/wp-content/uploads/2022/05/shutterstock_1723669582-720.jpg",
    },

    {
      titulo: "Fisioterapia",
      imagem: "https://www.enriquegballesteros.es/wp-content/uploads/2018/02/electroterapia.jpg",
    },

    {
      titulo: "Acupuntura",
      imagem: "https://cdn.prod.website-files.com/652421babb6bdd7f92f721b7/652421babb6bdd7f92f7231c_acupuntura-o-que-e.jpg",
    },

    {
      titulo: "Cuidados Estéticos",
      imagem: "https://media.gettyimages.com/id/1347013301/pt/foto/the-procedure-of-aesthetic-medicine.jpg?s=612x612&w=0&k=20&c=4A_QSUNX0LvtqolfrhZ0zDSJf1ynsMRh9X3lLt5q2-c=",
    }
  ]

  return (
    <section className="bg-[#f4f4f9] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-libre font-bold text-[#94a68c] mb-16">
          Nossos Serviços
        </h2>

        {/* Container Flexível */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8">

          {servicos.map((servico, index) => (
            <div
              key={index}
              // TODOS COM O MESMO ESTILO E TAMANHO:
              // w-full md:w-[380px]: Largura fixa no computador
              // h-[500px]: Altura igual para todos
              // hover:-translate-y-2: Ao passar o mouse, ele sobe um pouquinho (efeito flutuar)
              className="
                relative rounded-2xl overflow-hidden shadow-lg group 
                w-full md:w-[600px] h-[500px] 
                transition-all duration-300 hover:shadow-2xl hover:-translate-y-2
              "
            >
              {/* Imagem de Fundo (com zoom suave ao passar o mouse) */}
              <img
                src={servico.imagem}
                alt={servico.titulo}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Legenda (Fundo degrade escuro para ler o texto) */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white">
                <h3 className="font-libre font-bold text-2xl">
                  {servico.titulo}
                </h3>
                <p className="text-gray-200 text-lg mt-2 font-medium">
                  {servico.preco}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}