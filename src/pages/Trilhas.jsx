import { Link } from 'react-router-dom'
import { modulos } from '../data/aulas.js'
import { useProgressoContext } from '../components/Layout.jsx'

export default function Trilhas() {
  const { concluidas, reiniciar } = useProgressoContext()

  return (
    <>
      <h1>Mini aulas</h1>
      {modulos.map((m) => (
        <section key={m.id} className="modulo">
          <h2>{m.titulo}</h2>
          <p className="mudo">{m.descricao}</p>
          <ul className="lista-aulas">
            {m.aulas.map((a, i) => {
              const ok = concluidas.includes(a.id)
              return (
                <li key={a.id}>
                  <Link to={`/aula/${a.id}`} className="card link linha">
                    <span className={`num ${ok ? 'ok' : ''}`}>{ok ? '✓' : i + 1}</span>
                    <span>
                      <strong>{a.titulo}</strong>
                      <small>{a.duracao} min</small>
                    </span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
      ))}
      {concluidas.length > 0 && (
        <button className="btn secundario" onClick={reiniciar}>Reiniciar progresso</button>
      )}
    </>
  )
}
