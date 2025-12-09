import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect } from 'react';

export default function Especialistas() {
  
  // --- CORREÇÃO AQUI: Rola para o topo assim que a página abre ---
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  // ---------------------------------------------------------------

  // Dados dos Especialistas para facilitar a edição
  const especialistas = [
    {
      nome: "Dra. Luana Cristina de Almeida",
      cargo: "Fisioterapeuta & Instrutora de Pilates",
      registro: "CREFITO: XXXXXXX-F",
      bio: [
        "Um texto de apresentação.",
        "Um texto de apresentação."
      ],
      foto: "https://as1.ftcdn.net/jpg/02/67/73/72/1000_F_267737218_0vABBntdJ1tg16Z2db4mZUmeVC1BWrLM.jpg",
      ordem: "normal" // Texto Esquerda / Foto Direita
    },
    {
      nome: "Dra. Patricia [...]",
      cargo: "Cargo",
      registro: "CREFITO: 654321-F",
      bio: [
       "um texto de apresentação"
      ],
      foto: "https://as1.ftcdn.net/jpg/02/67/73/72/1000_F_267737218_0vABBntdJ1tg16Z2db4mZUmeVC1BWrLM.jpg",
      ordem: "invertida" // Foto Esquerda / Texto Direita
    },
    {
      nome: "Dra. Camille [...]",
      cargo: "Cargo",
      registro: "CREFITO: xxxxxx-F",
      bio: [
        "texto de apresentação"
      ],
      foto: "https://as1.ftcdn.net/jpg/02/67/73/72/1000_F_267737218_0vABBntdJ1tg16Z2db4mZUmeVC1BWrLM.jpg", 
      ordem: "normal" // Texto Esquerda / Foto Direita
    },

    {
      nome: "Dra. Yde [...]",
      cargo: "Cargo",
      registro: "CREFITO: XXXXXXX-F",
      bio: [
        "Texto de apresentação"
      ],
      foto: "https://as1.ftcdn.net/jpg/02/67/73/72/1000_F_267737218_0vABBntdJ1tg16Z2db4mZUmeVC1BWrLM.jpg", 
      ordem: "invertida" // Texto Esquerda / Foto Direita
    }
  ]

  return (
    <div className="min-h-screen bg-[#fafaf9]">
      <Header />
      
      <main className="pt-24 pb-20">
        
        {/* Título da Página */}
        <div className="text-center mb-32 px-6">
          <h1 className="font-libre text-5xl md:text-6xl text-[#94a68c] mb-6">
            Nosso Corpo Clínico
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto font-light">
            Conheça as mentes e corações dedicados a cuidar da sua saúde com excelência e humanidade.
          </p>
        </div>

        {/* Lista de Especialistas */}
        <div className="flex flex-col gap-32">
          {especialistas.map((medico, index) => (
            <section key={index} className="max-w-7xl mx-auto px-6 w-full">
              
              <div className={`
                grid grid-cols-1 md:grid-cols-2 gap-12 items-center
                ${medico.ordem === 'invertida' ? '' : ''} 
              `}>
                
                {/* --- CONTEÚDO (TEXTO) --- */}
                {/* A classe 'order' define a posição visual: 
                    No celular (padrão): Texto sempre embaixo da foto (order-2).
                    No PC (md): Se for 'invertida', Texto vai pra direita (order-2). Se 'normal', Texto na esquerda (order-1).
                */}
                <div className={`
                  flex flex-col justify-center
                  order-2 ${medico.ordem === 'invertida' ? 'md:order-2 md:pl-16' : 'md:order-1 md:pr-16'}
                `}>
                  <span className="text-[#94a68c] font-bold tracking-widest text-sm uppercase mb-2">
                    {medico.cargo}
                  </span>
                  
                  <h2 className="font-libre text-4xl text-[#2f2b26] mb-2">
                    {medico.nome}
                  </h2>
                  
                  <p className="text-gray-400 text-sm mb-8 font-mono">
                    {medico.registro}
                  </p>
                  
                  <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                    {medico.bio.map((paragrafo, i) => (
                      <p key={i}>{paragrafo}</p>
                    ))}
                  </div>

                  {/* Botão de Agendar Específico */}
                  <div className="mt-8">
                    <button className="text-[#94a68c] font-bold border-b-2 border-[#94a68c] pb-1 hover:text-[#7a8c72] hover:border-[#7a8c72] transition-colors">
                      Agendar com {medico.nome.split(" ")[0]} &rarr;
                    </button>
                  </div>
                </div>

                {/* --- FOTO --- */}
                <div className={`
                  relative h-[500px] w-full
                  order-1 ${medico.ordem === 'invertida' ? 'md:order-1' : 'md:order-2'}
                `}>
                  {/* Sombra Decorativa atrás da foto */}
                  <div className={`
                    absolute top-4 bottom-4 bg-[#94a68c]/20 w-full rounded-3xl -z-0
                    ${medico.ordem === 'invertida' ? '-left-4' : '-right-4'}
                  `}></div>
                  
                  <img 
                    src={medico.foto} 
                    alt={medico.nome} 
                    className="w-full h-full object-cover rounded-3xl shadow-xl z-10 relative"
                  />
                </div>

              </div>
            </section>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  )
}