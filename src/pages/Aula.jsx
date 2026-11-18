import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getAula, todasAulas } from '../data/aulas.js'
import { useProgressoContext } from '../components/Layout.jsx'
import { IconeAlvo, IconeLampada, IconeLista, IconeRelogio, IconeSeta, IconeLink } from '../components/Icones.jsx'

export default function Aula() {
  const { id } = useParams()
  return <ConteudoAula key={id} id={id} />
}

function ConteudoAula({ id }) {
  const aula = getAula(id)
  const { concluidas, concluir } = useProgressoContext()
  const [resposta, setResposta] = useState(null)

  if (!aula) {
    return (
      <div className="cartao vidro">
        <h3>Aula não encontrada</h3>
        <Link to="/inicio" className="link">Voltar ao início</Link>
      </div>
    )
  }

  const idx = todasAulas.findIndex((a) => a.id === id)
  const anterior = todasAulas[idx - 1]
  const proxima = todasAulas[idx + 1]
  const certa = aula.quiz?.correta
  const feita = concluidas.includes(id)

  const responder = (i) => {
    setResposta(i)
    if (i === certa) concluir(id)
  }

  return (
    <article className="aula">
      <header className="aula-topo">
        <nav className="migalha"><Link to="/inicio">Início</Link> <IconeSeta width={14} height={14} /> {aula.moduloTitulo}</nav>
        <h1>{aula.titulo}</h1>
        <div className="aula-info">
          <span className="chip chip-vinho"><IconeRelogio width={14} height={14} /> {aula.duracao} min</span>
          <span className="chip chip-vinho">Aula {idx + 1} de {todasAulas.length}</span>
          {feita && <span className="chip chip-ok">✓ Concluída</span>}
        </div>
      </header>

      <div className="aula-grade">
        <section className="cartao vidro bloco">
          <span className="icone-bolha"><IconeAlvo /></span>
          <h3>Objetivo</h3>
          <p>{aula.objetivo}</p>
        </section>
        <section className="cartao vidro bloco">
          <span className="icone-bolha"><IconeLampada /></span>
          <h3>Por que fazemos?</h3>
          <p>{aula.porque}</p>
        </section>
      </div>

      {aula.links?.length > 0 && (
        <section className="cartao vidro bloco">
          <span className="icone-bolha"><IconeLink /></span>
          <h3>Links de acesso</h3>
          <div className="links-acesso">
            {aula.links.map((l) => (
              <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="link-acesso">
                <strong>{l.rotulo}</strong>
                <span>{l.descricao}</span>
                <code>{l.url.replace(/^https:\/\//, '').split('?')[0]}</code>
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="cartao vidro bloco">
        <span className="icone-bolha"><IconeLista /></span>
        <h3>Passo a passo</h3>
        <ol className="passos">
          {aula.passos.map((p, i) => <li key={p}><span className="n">{i + 1}</span>{p}</li>)}
        </ol>
      </section>

      {aula.imagem && (
        <figure className="print vidro">
          <img src={aula.imagem.src} alt={aula.imagem.legenda} />
          <figcaption>{aula.imagem.legenda}</figcaption>
        </figure>
      )}

      {aula.destaque && (
        <section className="destaque-aula">
          <strong>{aula.destaque.titulo}</strong>
          <p>{aula.destaque.texto}</p>
        </section>
      )}

      {aula.dicas?.length > 0 && (
        <section className="dica vidro">
          <strong>Dica</strong>
          {aula.dicas.map((d) => <p key={d}>{d}</p>)}
        </section>
      )}

      {!aula.quiz && (
        <section className="concluir">
          {feita
            ? <span className="chip chip-ok">✓ Aula concluída</span>
            : <button className="btn-primario" onClick={() => concluir(id)}>Marcar como concluída</button>}
        </section>
      )}

      {aula.quiz && (
      <section className="cartao vidro bloco">
        <h3>Teste rápido</h3>
        <p>{aula.quiz.pergunta}</p>
        <div className="opcoes">
          {aula.quiz.opcoes.map((o, i) => (
            <button
              key={o}
              className={`opcao ${resposta === i ? (i === certa ? 'certa' : 'errada') : ''}`}
              onClick={() => responder(i)}
            >
              <span className="letra">{String.fromCharCode(65 + i)}</span>{o}
            </button>
          ))}
        </div>
        {resposta !== null && (
          <p className={`feedback ${resposta === certa ? 'ok' : 'erro'}`}>
            {resposta === certa ? 'Correto! Aula concluída.' : 'Quase! Tente outra opção.'}
          </p>
        )}
      </section>
      )}

      <nav className="paginacao">
        {anterior
          ? <Link className="btn-secundario vidro" to={`/aula/${anterior.id}`}>← {anterior.titulo}</Link>
          : <span />}
        {proxima
          ? <Link className="btn-primario" to={`/aula/${proxima.id}`}>Próxima: {proxima.titulo} →</Link>
          : <Link className="btn-primario" to="/inicio">Voltar ao início</Link>}
      </nav>
    </article>
  )
}
