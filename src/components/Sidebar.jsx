import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { modulos } from '../data/aulas.js'

export default function Sidebar({ concluidas, aberta, onFechar }) {
  const [abertos, setAbertos] = useState(() => new Set([modulos[0]?.id]))
  const alternar = (id) =>
    setAbertos((s) => {
      const n = new Set(s)
      n.has(id) ? n.delete(id) : n.add(id)
      return n
    })

  return (
    <>
      <div className={`overlay ${aberta ? 'visivel' : ''}`} onClick={onFechar} />
      <aside className={`sidebar ${aberta ? 'aberta' : ''}`} aria-label="Menu lateral">
        <div className="sidebar-logo">
          <img src="/logo-tag.png" alt="TAG Investimentos" />
        </div>

        <nav className="sidebar-nav">
          <NavLink to="/" end className="item" onClick={onFechar}>
            <span className="icone">⌂</span> Início
          </NavLink>

          <p className="secao-menu">Mini cursos</p>
          {modulos.map((m) => {
            const feitas = m.aulas.filter((a) => concluidas.includes(a.id)).length
            const pct = Math.round((feitas / m.aulas.length) * 100)
            const aberto = abertos.has(m.id)
            return (
              <div key={m.id} className="curso">
                <button className="item curso-btn" onClick={() => alternar(m.id)} aria-expanded={aberto}>
                  <span className="icone">▣</span>
                  <span className="curso-nome">{m.titulo}</span>
                  <span className={`seta ${aberto ? 'up' : ''}`}>›</span>
                </button>
                <div className="curso-barra"><span style={{ width: `${pct}%` }} /></div>
                {aberto && (
                  <ul className="aulas">
                    {m.aulas.map((a) => (
                      <li key={a.id} className="aula-item" title="Em breve">
                        <span className={`bolinha ${concluidas.includes(a.id) ? 'ok' : ''}`} />
                        <span>{a.titulo}</span>
                        <small>{a.duracao} min</small>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
        </nav>

        <p className="sidebar-rodape">TAG Investimentos · Backoffice</p>
      </aside>
    </>
  )
}
