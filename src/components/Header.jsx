import { Link } from 'react-router-dom'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { useState } from 'react'

export default function Header() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="
        w-full 
        bg-[#94a68c]
        px-[2vw] py-4
        flex items-center justify-between
        font-sans
        relative
      ">

        {/* NAVBAR - ESQUERDA (DESKTOP) */}
        <nav className="hidden md:flex gap-[2vw] text-white font-medium opacity-90">
          <Link to="/#servicos" className="hover:opacity-100 transition-opacity">Serviços</Link>
          <Link to="/#team" className="hover:opacity-100 transition-opacity">Quem somos</Link>
          <Link to="/#contato" className="hover:opacity-100 transition-opacity">Contato</Link>
        </nav>

        {/* TÍTULO — ELEGANTE E SEM FIXAÇÃO */}
        <Link
          to="/"
          className="
            text-[2rem] text-white font-libre font-bold tracking-wide
            absolute left-1/2 -translate-x-1/2
            select-none
            hover:opacity-100 transition-opacity
          "
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
            className="
              hidden md:block 
              bg-white text-[#94A68C] 
              px-6 py-2 rounded-full 
              shadow-[0_4px_15px_rgba(0,0,0,0.1)]
              transition-all
              hover:bg-[#f3f3f3] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)]
            "
          >
            Agende agora
          </Link>

        </div>
      </header>

      {/* OVERLAY */}
      {
        open && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-10 md:hidden"
            onClick={() => setOpen(false)}
          />
        )
      }

      {/* SIDEBAR MOBILE */}
      <div
        className={`
          fixed top-0 left-0
          h-full w-[65%]
          bg-[#94a68c] text-white 
          z-20
          flex flex-col gap-8 p-8
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          md:hidden
        `}
      >

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

        <Link to="/#servicos" className="text-lg" onClick={() => setOpen(false)}>
          Serviços
        </Link>
        <Link to="/#team" className="text-lg" onClick={() => setOpen(false)}>
          Quem somos
        </Link>
        <Link to="/#contato" className="text-lg" onClick={() => setOpen(false)}>
          Contato
        </Link>

        <Link
          to="/Agendamento"
          className="bg-white text-[#94A68C] px-6 py-2 rounded-full shadow-md"
          onClick={() => setOpen(false)}
        >
          Agende agora
        </Link>
      </div>
    </>
  )
}
