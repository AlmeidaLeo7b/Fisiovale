import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Especialistas() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const especialistas = [
    {
      nome: "Dra. Luana Cristina de Almeida",
      cargo: "Fisioterapeuta & Instrutora de Pilates",
      registro: "CREFITO: XXXXXXX-F",
      bio: [
        "Com dedicação e cuidado, transformamos saúde em bem-estar.",
        "Cada paciente é único e merece atenção personalizada."
      ],
      foto: "https://as1.ftcdn.net/jpg/02/67/73/72/1000_F_267737218_0vABBntdJ1tg16Z2db4mZUmeVC1BWrLM.jpg",
      ordem: "normal"
    },
    {
      nome: "Dra. Patricia ",
      cargo: "Fisioterapeuta",
      registro: "CREFITO: XXXXXX-F",
      bio: ["Especialista em técnicas avançadas de reabilitação."],
      foto: "https://as1.ftcdn.net/jpg/02/67/73/72/1000_F_267737218_0vABBntdJ1tg16Z2db4mZUmeVC1BWrLM.jpg",
      ordem: "invertida"
    },
    {
      nome: "Dra. Camile ",
      cargo: "Instrutora de Pilates",
      registro: "CREFITO: xxxxxx-F",
      bio: ["Foco em equilíbrio, postura e qualidade de vida."],
      foto: "https://as1.ftcdn.net/jpg/02/67/73/72/1000_F_267737218_0vABBntdJ1tg16Z2db4mZUmeVC1BWrLM.jpg",
      ordem: "normal"
    },
    {
      nome: "Dra. Yde ",
      cargo: "Fisioterapeuta",
      registro: "CREFITO: XXXXXXX-F",
      bio: ["Atendimento humanizado e técnicas modernas de reabilitação."],
      foto: "https://as1.ftcdn.net/jpg/02/67/73/72/1000_F_267737218_0vABBntdJ1tg16Z2db4mZUmeVC1BWrLM.jpg",
      ordem: "invertida"
    }
  ]

  // Variants de animação
  const container = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' }
    })
  }

  return (
    <div className="min-h-screen bg-[#fafaf9] font-sans">
      <main className="pt-24 pb-32">
        {/* Título */}
        <div className="text-center mb-32 px-6 md:px-12">
          <h1 className="font-serif text-5xl md:text-6xl text-[#7d8f75] mb-6">
            Nosso Corpo Clínico
          </h1>
          <p className="text-[#7d8f75] text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Conheça as mentes e corações dedicados a cuidar da sua saúde com excelência e humanidade.
          </p>
        </div>

        {/* Especialistas */}
        <div className="flex flex-col gap-32">
          {especialistas.map((medico, index) => (
            <motion.section
              key={index}
              className="max-w-7xl mx-auto px-6 md:px-12 w-full py-16"
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={container}
            >
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center`}>

                {/* Texto */}
                <div className={`flex flex-col justify-center
                  order-2 ${medico.ordem === 'invertida' ? 'md:order-2 md:pl-12' : 'md:order-1 md:pr-12'}`}>

                  <span className="text-[#94a68c] font-semibold tracking-widest text-sm uppercase mb-2">
                    {medico.cargo}
                  </span>

                  <h2 className="font-serif text-4xl text-[#1c1c1c] mb-2">
                    {medico.nome}
                  </h2>

                  <p className="text-gray-500 text-sm mb-6 font-mono">
                    {medico.registro}
                  </p>

                  <div className="text-gray-600 text-lg leading-relaxed space-y-4">
                    {medico.bio.map((paragrafo, i) => (
                      <p key={i}>{paragrafo}</p>
                    ))}
                  </div>

                  <div className="mt-8">
                    <button className="text-[#94a68c] font-semibold border-b-2 border-[#94a68c] pb-1 hover:text-gray-800 hover:border-gray-800 transition-all duration-300">
                      Agendar com {medico.nome.split(" ")[0]} &rarr;
                    </button>
                  </div>
                </div>

                {/* Foto */}
                <div className={`relative h-[500px] w-full order-1 ${medico.ordem === 'invertida' ? 'md:order-1' : 'md:order-2'}`}>
                  <div className={`absolute top-6 bottom-6 bg-[#94a68c]/10 w-full rounded-3xl -z-0 ${medico.ordem === 'invertida' ? '-left-4' : '-right-4'}`}></div>
                  <motion.img
                    src={medico.foto}
                    alt={medico.nome}
                    className="w-full h-full object-cover rounded-3xl shadow-lg z-10 relative"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

              </div>
            </motion.section>
          ))}
        </div>
      </main>
    </div>
  )
}
