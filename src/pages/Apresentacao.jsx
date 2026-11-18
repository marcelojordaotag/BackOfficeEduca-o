import { Link } from 'react-router-dom'
import { modulos, todasAulas } from '../data/aulas.js'
import {
  IconeAlvo, IconeCapelo, IconeCheck, IconeDocumento, IconeEngrenagem,
  IconeGrafico, IconeLampada, IconeLivro, IconePlay, IconeRelogio,
} from '../components/Icones.jsx'

// Elementos decorativos flutuantes: [classe de posição, Ícone]
const flutuantes = [
  ['f1', IconeLivro], ['f2', IconeCheck], ['f3', IconeLampada], ['f4', IconeGrafico],
  ['f5', IconeCapelo], ['f6', IconeAlvo], ['f7', IconeDocumento], ['f8', IconeEngrenagem],
]

export default function Apresentacao() {
  const minutos = todasAulas.reduce((s, a) => s + a.duracao, 0)

  return (
    <div className="landing">
      <div className="landing-deco" aria-hidden="true">
        <span className="orbe o1" /><span className="orbe o2" /><span className="orbe o3" />
        <span className="anel a1" /><span className="anel a2" />
        <span className="pontos p1" /><span className="pontos p2" />
        <span className="forma s1" /><span className="forma s2" /><span className="forma s3" />
        {flutuantes.map(([cls, Icone]) => (
          <span key={cls} className={`flutua ${cls}`}><Icone width={26} height={26} /></span>
        ))}
      </div>

      <header className="landing-topo">
        <img src="/logo-tag.png" alt="TAG Investimentos" />
      </header>

      <main className="landing-centro">
        <span className="chip">TAG Investimentos · Backoffice</span>
        <h1>
          Aprenda os processos que <span className="destaque">fazem a operação acontecer</span>
        </h1>
        <p>
          O Centro Educacional Backoffice reúne mini aulas rápidas e práticas sobre cada processo:
          qual é o objetivo, por que fazemos e como executar com qualidade.
        </p>
        <Link to="/inicio" className="btn-vidro btn-grande">
          <IconePlay width={18} height={18} /> Vamos aprender
        </Link>

        <ul className="landing-fatos">
          <li><strong>{modulos.length}</strong> {modulos.length === 1 ? 'mini curso' : 'mini cursos'}</li>
          <li><strong>{todasAulas.length}</strong> mini aulas</li>
          <li><IconeRelogio width={16} height={16} /> <strong>{minutos}</strong> min de conteúdo</li>
        </ul>
      </main>

      <footer className="landing-rodape">BackOffice Education · TAG Investimentos</footer>
    </div>
  )
}
