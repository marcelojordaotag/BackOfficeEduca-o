import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { modulos } from '../data/aulas.js'
import { IconeCurso, IconeInicio, IconeSeta } from './Icones.jsx'

export default function Sidebar({ concluidas, aberta, onFechar }) {
  const [abertos, setAbertos] = useState(() => new Set([modulos[0]?.id]))
  const alternar = (id) =>
    setAbertos((s) => {
      const n = new Set(s)
      if (n.has(id)) n.delete(id)
      else n.add(id)
      return n
    })

  return (
    <>
      <div className={`overlay ${aberta ? 'visivel' : ''}`} onClick={onFechar} />
      <aside className={`sidebar vidro ${aberta ? 'aberta' : ''}`} aria-label="Menu lateral">
        <div className="sidebar-logo">
          <div className="logo-selo"><img src="/logo-tag.png" alt="TAG Investimentos" /></div>
        </div>

        <nav className="sidebar-nav">
          <NavLink to="/" end className="item" onClick={onFechar}>
            <IconeInicio /> Início
          </NavLink>

          <p className="secao-menu">Mini cursos</p>
          {modulos.map((m) => {
            const feitas = m.aulas.filter((a) => concluidas.includes(a.id)).length
            const aberto = abertos.has(m.id)
            return (
              <div key={m.id} className={`curso ${aberto ? 'aberto' : ''}`}>
                <button className="item" onClick={() => alternar(m.id)} aria-expanded={aberto}>
                  <IconeCurso />
                  <span className="curso-nome">{m.titulo}</span>
                  <span className="contador">{feitas}/{m.aulas.length}</span>
                  <IconeSeta className="seta" width={16} height={16} />
                </button>
                {aberto && (
                  <ul className="aulas">
                    {m.aulas.map((a) => (
                      <li key={a.id} className="aula-item" title="Em breve">
                        <span className={`bolinha ${concluidas.includes(a.id) ? 'ok' : ''}`} />
                        <span className="aula-nome">{a.titulo}</span>
                        <small>{a.duracao}′</small>
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
