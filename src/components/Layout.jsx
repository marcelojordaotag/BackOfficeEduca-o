import { useState } from 'react'
import { Outlet, useOutletContext } from 'react-router-dom'
import useProgresso from '../hooks/useProgresso.js'
import Sidebar from './Sidebar.jsx'
import { IconeMenu } from './Icones.jsx'

export default function Layout() {
  const progresso = useProgresso()
  const [aberta, setAberta] = useState(false)

  return (
    <div className="app">
      <div className="fundo" aria-hidden="true"><span /><span /><span /></div>
      <Sidebar concluidas={progresso.concluidas} aberta={aberta} onFechar={() => setAberta(false)} />
      <div className="principal">
        <button className="hamburguer vidro" onClick={() => setAberta(true)} aria-label="Abrir menu"><IconeMenu /></button>
        <main className="conteudo">
          <Outlet context={progresso} />
        </main>
      </div>
    </div>
  )
}

export const useProgressoContext = () => useOutletContext()
