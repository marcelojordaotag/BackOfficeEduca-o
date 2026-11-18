import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getAula, todasAulas } from '../data/aulas.js'
import { useProgressoContext } from '../components/Layout.jsx'

export default function Aula() {
  const { id } = useParams()
  const aula = getAula(id)
  const { concluidas, concluir } = useProgressoContext()
  const [resposta, setResposta] = useState(null)

  if (!aula) return <p>Aula não encontrada. <Link to="/trilhas">Voltar</Link></p>

  const idx = todasAulas.findIndex((a) => a.id === id)
  const anterior = todasAulas[idx - 1]
  const proxima = todasAulas[idx + 1]
  const acertou = resposta === aula.quiz.correta
  const feita = concluidas.includes(id)

  const responder = (i) => {
    setResposta(i)
    if (i === aula.quiz.correta) concluir(id)
  }

  return (
    <article className="aula" key={id}>
      <p className="mudo">{aula.moduloTitulo} · {aula.duracao} min</p>
      <h1>{aula.titulo}</h1>

      <section className="bloco"><h2>🎯 Objetivo</h2><p>{aula.objetivo}</p></section>
      <section className="bloco"><h2>💡 Por que fazemos?</h2><p>{aula.porque}</p></section>
      <section className="bloco">
        <h2>📋 Passo a passo</h2>
        <ol>{aula.passos.map((p) => <li key={p}>{p}</li>)}</ol>
      </section>
      {aula.dicas?.length > 0 && (
        <section className="bloco dica">
          <h2>⚠️ Dicas</h2>
          <ul>{aula.dicas.map((d) => <li key={d}>{d}</li>)}</ul>
        </section>
      )}

      <section className="bloco quiz">
        <h2>✅ Teste rápido</h2>
        <p>{aula.quiz.pergunta}</p>
        {aula.quiz.opcoes.map((o, i) => (
          <button
            key={o}
            className={`opcao ${resposta === i ? (i === aula.quiz.correta ? 'certa' : 'errada') : ''}`}
            onClick={() => responder(i)}
          >
            {o}
          </button>
        ))}
        {resposta !== null && (
          <p className={acertou ? 'feedback certo' : 'feedback erro'}>
            {acertou ? 'Correto! Aula concluída.' : 'Quase! Tente novamente.'}
          </p>
        )}
        {feita && resposta === null && <p className="feedback certo">Você já concluiu esta aula.</p>}
      </section>

      <nav className="paginacao">
        {anterior ? <Link className="btn secundario" to={`/aula/${anterior.id}`}>← Anterior</Link> : <span />}
        {proxima
          ? <Link className="btn" to={`/aula/${proxima.id}`}>Próxima →</Link>
          : <Link className="btn" to="/trilhas">Ver todas</Link>}
      </nav>
    </article>
  )
}
