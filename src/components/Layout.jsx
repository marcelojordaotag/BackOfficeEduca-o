import { Link, NavLink, Outlet, useOutletContext } from 'react-router-dom'
import useProgresso from '../hooks/useProgresso.js'
import { todasAulas } from '../data/aulas.js'

export default function Layout() {
  const progresso = useProgresso()
  const pct = Math.round((progresso.concluidas.length / todasAulas.length) * 100)

  return (
    <>
      <header className="topo">
        <Link to="/" className="marca">Centro Educacional <strong>Backoffice</strong></Link>
        <nav>
          <NavLink to="/" end>Início</NavLink>
          <NavLink to="/trilhas">Aulas</NavLink>
        </nav>
        <div className="mini-progresso" title={`${pct}% concluído`}>
          <div className="barra"><span style={{ width: `${pct}%` }} /></div>
          <small>{pct}%</small>
        </div>
      </header>
      <main className="conteudo">
        <Outlet context={progresso} />
      </main>
      <footer className="rodape">Centro Educacional Backoffice</footer>
    </>
  )
}

export const useProgressoContext = () => useOutletContext()
