import { modulos, todasAulas } from '../data/aulas.js'
import { useProgressoContext } from '../components/Layout.jsx'

const pilares = [
  { sigla: 'O', t: 'O quê', d: 'Cada aula apresenta o processo e o seu objetivo.' },
  { sigla: 'P', t: 'Por quê', d: 'Entenda a razão de fazermos cada coisa do jeito certo.' },
  { sigla: 'C', t: 'Como', d: 'Passo a passo prático, direto e rápido de aplicar.' },
]

const etapas = ['Assista à mini aula', 'Aplique o passo a passo', 'Responda ao teste rápido', 'Conclua e avance']

export default function Home() {
  const { concluidas } = useProgressoContext()
  const total = todasAulas.length
  const pct = Math.round((concluidas.length / total) * 100)
  const minutos = todasAulas.reduce((s, a) => s + a.duracao, 0)

  return (
    <>
      <section className="topo">
        <div>
          <p className="selo">Bem-vindo(a)</p>
          <h1 className="marca">Centro Educacional Backoffice</h1>
          <p className="sub">
            Mini aulas que ensinam os processos do Backoffice: qual é o objetivo de cada um,
            por que os fazemos e como executá-los com qualidade.
          </p>
          <div className="acoes">
            <button className="btn" disabled title="Em breve">▶ Começar agora</button>
            <span className="versao">Aulas em desenvolvimento</span>
          </div>
        </div>
        <img src="/logo-tag.png" alt="TAG Investimentos" />
      </section>

      <section className="kpis">
        <div className="kpi"><div className="kpi-label">Mini cursos</div><div className="kpi-valor">{modulos.length}</div></div>
        <div className="kpi"><div className="kpi-label">Mini aulas</div><div className="kpi-valor">{total}</div></div>
        <div className="kpi"><div className="kpi-label">Duração total</div><div className="kpi-valor">{minutos}<small> min</small></div></div>
        <div className="kpi ok"><div className="kpi-label">Seu progresso</div><div className="kpi-valor">{pct}%</div></div>
      </section>

      <h2 className="secao">O que é o Centro Educacional Backoffice?</h2>
      <p className="secao-sub">Um espaço de aprendizado contínuo para quem faz a operação acontecer.</p>
      <div className="grade">
        {pilares.map((p) => (
          <article key={p.t} className="card pilar">
            <div className="sigla">{p.sigla}</div>
            <h3>{p.t}</h3>
            <p>{p.d}</p>
          </article>
        ))}
      </div>

      <h2 className="secao">Mini cursos</h2>
      <p className="secao-sub">Escolha uma trilha no menu ou comece por aqui.</p>
      <div className="grade">
        {modulos.map((m) => {
          const min = m.aulas.reduce((s, a) => s + a.duracao, 0)
          const feitas = m.aulas.filter((a) => concluidas.includes(a.id)).length
          return (
            <article key={m.id} className="card curso-card">
              <div className="capa">{m.titulo.slice(0, 2).toUpperCase()}</div>
              <h3>{m.titulo}</h3>
              <p>{m.descricao}</p>
              <div className="meta">{m.aulas.length} aulas · {min} min</div>
              <div className="progresso"><div style={{ width: `${(feitas / m.aulas.length) * 100}%` }} /></div>
              <span className="badge neutro">Em breve</span>
            </article>
          )
        })}
      </div>

      <h2 className="secao">Como funciona</h2>
      <div className="etapas">
        {etapas.map((e, i) => (
          <div key={e} className="etapa"><span className="n">{i + 1}</span>{e}</div>
        ))}
      </div>
    </>
  )
}
