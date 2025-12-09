import Header from '../components/Header'
import Footer from '../components/Footer'
import { useEffect } from 'react';

export default function AboutMe() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#fafaf9] flex flex-col justify-between">
      <Header />
      
      {/* --- MAIN CONTENT --- */}
      <main className="flex-grow flex items-center justify-center px-6 py-20">
        
        {/* Container Principal do Grid (máximo de largura 6xl para não ficar gigante) */}
        <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 items-center">
          
          {/* --- COLUNA DA IMAGEM (Ocupa 7 de 12 colunas no PC) --- */}
          <div className="md:col-span-7 relative z-0 h-[400px] md:h-[600px]">
            <img 
              // Substitua este link pela sua imagem
              src="https://images.unsplash.com/photo-1464822759023-d6268d823038?q=80&w=2070&auto=format&fit=crop" 
              alt="Paisagem inspiradora" 
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* --- COLUNA DO TEXTO (Ocupa 5 de 12 colunas no PC) --- */}
          {/* md:-ml-20: A MÁGICA! Margem negativa puxa a caixa para cima da imagem.
              z-10: Garante que o texto fique NA FRENTE da imagem.
              bg-white p-12 shadow-2xl: Estilo da caixa branca flutuante.
          */}
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-2xl md:col-span-5 relative z-10 mt-8 md:mt-0 md:-ml-20">
            <h2 className="font-libre text-2xl md:text-3xl lg:text-4xl text-[#94a68c] leading-relaxed font-normal text-left">
              Tudo começa com uma ideia. Talvez você queira abrir um negócio. Talvez você queira transformar um passatempo em algo mais sério. Ou talvez você tenha um projeto criativo para divulgar ao mundo. Seja o que for, o modo de contar sua história on-line faz toda a diferença.
            </h2>
          </div>

        </section>

      </main>

      <Footer />
    </div>
  )
}