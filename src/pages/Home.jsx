import { Link } from 'react-router-dom'
import { modulos, todasAulas } from '../data/aulas.js'
import { useProgressoContext } from '../components/Layout.jsx'
import { IconeAlvo, IconeLampada, IconeLista, IconePlay, IconeRelogio } from '../components/Icones.jsx'

const pilares = [
  { Icone: IconeAlvo, t: 'O quê', d: 'Cada aula apresenta o processo e o objetivo dele.' },
  { Icone: IconeLampada, t: 'Por quê', d: 'Entenda a razão de fazermos cada coisa do jeito certo.' },
  { Icone: IconeLista, t: 'Como', d: 'Passo a passo prático, direto e rápido de aplicar.' },
]

const etapas = ['Assista à mini aula', 'Aplique o passo a passo', 'Responda ao teste rápido', 'Conclua e avance']

export default function Home() {
  const { concluidas } = useProgressoContext()
  const total = todasAulas.length
  const pct = Math.round((concluidas.length / total) * 100)
  const proxima = todasAulas.find((a) => !concluidas.includes(a.id)) ?? todasAulas[0]
  const minutos = todasAulas.reduce((s, a) => s + a.duracao, 0)

  const stats = [
    { label: 'Mini cursos', valor: modulos.length },
    { label: 'Mini aulas', valor: total },
    { label: 'Minutos de conteúdo', valor: minutos },
    { label: 'Seu progresso', valor: `${pct}%` },
  ]

  return (
    <>
      <section className="hero">
        <div className="hero-texto">
          <span className="chip">Bem-vindo(a)</span>
          <h1>Centro Educacional<br />Backoffice</h1>
          <p>
            Mini aulas que ensinam os processos do Backoffice: qual é o objetivo de cada um,
            por que os fazemos e como executá-los com qualidade.
          </p>
          <div className="acoes">
            <Link className="btn-vidro" to={`/aula/${proxima.id}`}>
              <IconePlay width={16} height={16} /> {concluidas.length ? 'Continuar aprendendo' : 'Começar agora'}
            </Link>
            <span className="nota">Próxima: {proxima.titulo}</span>
          </div>
        </div>
        <img className="hero-logo" src="/logo-tag.png" alt="TAG Investimentos" />
      </section>

      <section className="stats vidro">
        {stats.map((s) => (
          <div key={s.label} className="stat">
            <strong>{s.valor}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </section>

      <header className="titulo-secao">
        <h2>O que é o Centro Educacional?</h2>
        <p>Um espaço de aprendizado contínuo para quem faz a operação acontecer.</p>
      </header>
      <div className="grade">
        {pilares.map(({ Icone, t, d }) => (
          <article key={t} className="cartao vidro">
            <span className="icone-bolha"><Icone /></span>
            <h3>{t}</h3>
            <p>{d}</p>
          </article>
        ))}
      </div>

      <header className="titulo-secao">
        <h2>Mini cursos</h2>
        <p>Escolha uma trilha no menu ou comece por aqui.</p>
      </header>
      <div className="grade">
        {modulos.map((m, i) => {
          const min = m.aulas.reduce((s, a) => s + a.duracao, 0)
          const feitas = m.aulas.filter((a) => concluidas.includes(a.id)).length
          return (
            <Link key={m.id} to={`/aula/${(m.aulas.find((a) => !concluidas.includes(a.id)) ?? m.aulas[0]).id}`} className="cartao vidro curso-card">
              <div className={`capa capa-${i % 3}`}>
                <span className="chip chip-claro">{m.aulas.length} aulas</span>
              </div>
              <h3>{m.titulo}</h3>
              <p>{m.descricao}</p>
              <div className="curso-rodape">
                <span className="meta"><IconeRelogio width={15} height={15} /> {min} min</span>
                <span className="meta">{feitas}/{m.aulas.length} concluídas</span>
              </div>
              <div className="trilho"><div style={{ width: `${(feitas / m.aulas.length) * 100}%` }} /></div>
            </Link>
          )
        })}
      </div>

      <header className="titulo-secao">
        <h2>Como funciona</h2>
      </header>
      <ol className="etapas">
        {etapas.map((e, i) => (
          <li key={e} className="vidro"><span className="n">{i + 1}</span>{e}</li>
        ))}
      </ol>
    </>
  )
}
