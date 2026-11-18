import { useState } from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'
import useProgresso from '../hooks/useProgresso.js'
import Sidebar from './Sidebar.jsx'

export default function Layout() {
  const progresso = useProgresso()
  const [aberta, setAberta] = useState(false)

  return (
    <div className="app">
      <Sidebar concluidas={progresso.concluidas} aberta={aberta} onFechar={() => setAberta(false)} />
      <div className="principal">
        <button className="hamburguer" onClick={() => setAberta(true)} aria-label="Abrir menu">☰</button>
        <main className="conteudo">
          <Outlet context={progresso} />
        </main>
      </div>
    </div>
  )
}

export const useProgressoContext = () => useOutletContext()
