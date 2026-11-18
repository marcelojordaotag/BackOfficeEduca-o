import { Link } from 'react-router-dom'
import { modulos, todasAulas } from '../data/aulas.js'
import { useProgressoContext } from '../components/Layout.jsx'

const pilares = [
  { t: 'O quê', d: 'Cada aula explica o processo e seu objetivo.' },
  { t: 'Por quê', d: 'Entenda a razão de fazermos cada coisa do jeito certo.' },
  { t: 'Como', d: 'Passo a passo prático, direto e rápido.' },
]

export default function Home() {
  const { concluidas } = useProgressoContext()
  const proxima = todasAulas.find((a) => !concluidas.includes(a.id))

  return (
    <>
      <section className="hero">
        <p className="selo">Bem-vindo(a)</p>
        <h1>Centro Educacional Backoffice</h1>
        <p className="lead">
          Um espaço de aprendizado com mini aulas que ensinam os processos do Backoffice:
          qual é o objetivo de cada um, por que os fazemos e como executá-los com qualidade.
        </p>
        <div className="acoes">
          <Link className="btn" to={proxima ? `/aula/${proxima.id}` : '/trilhas'}>
            {concluidas.length ? 'Continuar aprendendo' : 'Começar agora'}
          </Link>
          <Link className="btn secundario" to="/trilhas">Ver todas as aulas</Link>
        </div>
      </section>

      <section className="pilares">
        {pilares.map((p) => (
          <article key={p.t} className="card">
            <h3>{p.t}</h3>
            <p>{p.d}</p>
          </article>
        ))}
      </section>

      <section>
        <h2>Módulos</h2>
        <div className="grade">
          {modulos.map((m) => (
            <Link key={m.id} to="/trilhas" className="card link">
              <h3>{m.titulo}</h3>
              <p>{m.descricao}</p>
              <small>{m.aulas.length} mini aulas</small>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
