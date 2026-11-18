// Conteúdo das mini aulas. Para adicionar uma aula, basta incluir um objeto
// em `aulas` dentro do módulo desejado. Os textos abaixo são EXEMPLOS:
// substitua pelos processos reais do Backoffice.

export const modulos = [
  {
    id: 'introducao-britech',
    titulo: 'Introdução à Britech',
    descricao: 'Conheça a Britech, para que a usamos no Backoffice e como dar os primeiros passos no sistema.',
    aulas: [
      {
        id: 'o-que-e-a-britech',
        titulo: 'O que é a Britech?',
        duracao: 4,
        objetivo: 'Entender o que é a Britech e qual é o papel dela na rotina do Backoffice.',
        porque: 'Saber para que serve o sistema ajuda a entender cada processo que passa por ele e a evitar erros na operação.',
        passos: [
          'Conheça o que é a Britech.',
          'Veja quais rotinas do Backoffice passam pelo sistema.',
          'Entenda quem usa a Britech e para quê.',
        ],
        dicas: ['Substitua este texto pelo conteúdo real da aula.'],
        quiz: {
          pergunta: 'Por que é importante conhecer a Britech?',
          opcoes: [
            'Não é importante, basta seguir ordens',
            'Porque vários processos do Backoffice passam por ela',
            'Porque ela substitui todas as outras áreas',
          ],
          correta: 1,
        },
      },
      {
        id: 'primeiro-acesso-britech',
        titulo: 'Primeiro acesso',
        duracao: 3,
        objetivo: 'Acessar a Britech pela primeira vez com segurança.',
        porque: 'O acesso correto garante que cada pessoa veja apenas o que precisa e que as ações fiquem registradas.',
        passos: ['Solicite seu acesso.', 'Entre com seu usuário e senha.', 'Confira se você vê as telas do seu dia a dia.'],
        dicas: ['Nunca compartilhe seu usuário e senha.'],
        quiz: {
          pergunta: 'O que fazer com seu usuário e senha?',
          opcoes: ['Compartilhar com o time', 'Manter só com você', 'Anotar no monitor'],
          correta: 1,
        },
      },
      {
        id: 'navegando-na-britech',
        titulo: 'Navegando pelo sistema',
        duracao: 5,
        objetivo: 'Conhecer os menus e as principais telas da Britech.',
        porque: 'Saber onde está cada coisa deixa o trabalho mais rápido e reduz o risco de alterar a informação errada.',
        passos: ['Conheça o menu principal.', 'Encontre as telas mais usadas.', 'Use a busca e os filtros.'],
        dicas: ['Substitua este texto pelo conteúdo real da aula.'],
        quiz: {
          pergunta: 'Qual é o benefício de conhecer bem as telas?',
          opcoes: ['Trabalhar mais rápido e com menos erros', 'Nenhum', 'Poder pular etapas'],
          correta: 0,
        },
      },
    ],
  },
]

export const todasAulas = modulos.flatMap((m) =>
  m.aulas.map((a) => ({ ...a, moduloId: m.id, moduloTitulo: m.titulo })),
)

export const getAula = (id) => todasAulas.find((a) => a.id === id)
