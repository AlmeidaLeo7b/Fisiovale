import { Link } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Agendar() {
    return (
        <>
            {/* HEADER FIXO — sempre fora da section */}
            <Header />

            <section className="min-h-screen bg-[#f5f5f5] pt-[120px] pb-32 px-6 md:px-20">

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-20 items-start">

                    {/* COLUNA DA ESQUERDA — TEXTO */}
                    <div>
                        <h1 className="font-libre text-6xl md:text-7xl leading-tight mb-10">
                            Agendar
                        </h1>

                        <p className="text-gray-700 text-lg leading-relaxed max-w-xl">
                            Descubra um novo patamar de cuidado com nossos serviços de fisioterapia
                            inovadores. Marque sua consulta e experimente uma abordagem transformadora
                            que desafia os padrões tradicionais de tratamento.
                        </p>

                        <div className="mt-10 flex justify-start">
                            <img
                                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=1600&auto=format&fit=crop"
                                alt="Fisioterapia"
                                className="w-full h-[85%] rounded-xl shadow-2xl object-cover"
                            />
                        </div>
                    </div>

                    {/* COLUNA DA DIREITA — CARD FAKE */}
                    <div className="bg-white rounded-xl shadow-xl p-10 w-full max-w-lg mx-auto md:ml-8 mt-16">

                        <h2 className="text-xl font-semibold mb-6">
                            Selecionar sessão
                        </h2>

                        {/* ITEM ÚNICO */}
                        <div className="flex items-center justify-between border-b py-6">
                            <div>
                                <p className="font-medium text-gray-800">Agendar sua avaliação</p>
                                <p className="text-sm text-gray-500">30 minutos</p>
                            </div>

                            <button className="bg-black text-white px-6 py-2 text-sm rounded hover:bg-gray-800 transition">
                                AGENDAR
                            </button>
                        </div>

                        <div className="pt-8 text-center text-xs text-gray-400">
                            Interface demonstrativa
                        </div>

                    </div>
                </div>

                {/* IMAGEM PRINCIPAL */}
                {/* IMAGEM GRANDONA — MESMA LARGURA DO CARD */}




            </section>

            {/* FOOTER SEMPRE FORA DA SECTION */}
            <Footer />
        </>
    );
}
