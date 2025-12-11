import { Link } from 'react-router-dom'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function Header() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-20 bg-[#94a68c] flex items-center justify-between px-[2vw] py-4 font-sans">

        {/* NAVBAR - ESQUERDA (DESKTOP) */}
        <nav className="hidden md:flex gap-[2vw] text-white font-medium">
          {/* Combinamos a rota '/' com o hash '#servicos' */}
          <Link to="/#servicos" className="hover:text-white transition-colors">Serviços</Link>
          
          {/* Se 'Team' for uma seção na home: */}
          <Link to="/#team" className="hover:text-white transition-colors">Quem somos</Link>
          
          {/* Se 'Contato' for uma seção na home: */}
          <Link to="/#contato" className="hover:text-white transition-colors">Contato</Link>
        </nav>

        {/* TÍTULO — SEMPRE CENTRALIZADO */}
        <Link
          to="/"
          className="text-[2rem] text-white font-libre font-bold tracking-wide leading-none absolute left-1/2 -translate-x-1/2"
        >
          Fisiovale
        </Link>

        {/* DIREITA */}
        <div className="flex items-center gap-4">

          {/* Hamburguer no mobile */}
          <button
            className="md:hidden"
            onClick={() => setOpen(true)}
          >
            <Bars3Icon className="w-8 h-8 text-white" />
          </button>

          {/* Botão no desktop */}
          <Link
            to="/Agendamento"
            className="hidden md:block bg-white text-[#94A68C] px-6 py-2 rounded-full hover:bg-[#F5F5F5] transition-colors shadow-lg"
          >
            Agende agora
          </Link>

        </div>
      </header>
      
      {/* OVERLAY */}
      {
        open && (
          <div
            className="fixed inset-0 top-[50px] bg-black/20 backdrop-blur-sm z-10 md:hidden"
            onClick={() => setOpen(false)}
          />
        )
      }

      { /* SIDEBAR MOBILE */}
      <div
        className={`
          fixed top-[50px] left-0 h-full w-[60%]
          bg-[#94a68c] text-white z-20
          flex flex-col gap-6 p-6
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:hidden
        `}
      >
        {/* Botão de fechar */}
        <button onClick={() => setOpen(false)} className="self-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Links do menu Mobile corrigidos também */}
        <Link to="/#servicos" className="text-lg" onClick={() => setOpen(false)}>Serviços</Link>
        <Link to="/#team" className="text-lg" onClick={() => setOpen(false)}>Quem somos</Link>
        <Link to="/#contato" className="text-lg" onClick={() => setOpen(false)}>Contato</Link>

        {/* Botão “Agende agora” */}
        <Link to="/Agendamento" className="bg-white text-[#94A68C] px-6 py-2 rounded-full shadow-md" onClick={() => setOpen(false)}>
          Agende agora
        </Link>
      </div>
    </>
  )
}