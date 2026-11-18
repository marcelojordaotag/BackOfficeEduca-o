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
        id: 'primeiro-acesso-britech',
        titulo: 'Acessando a Britech',
        duracao: 3,
        objetivo: 'Acessar a Britech (Atlas PAS) e saber a diferença entre o ambiente de produção e o de pré-produção.',
        porque: 'Acessar o sistema é o primeiro passo de qualquer rotina na Britech. Usar o ambiente certo evita que um teste vire uma alteração real.',
        links: [
          {
            rotulo: 'Produção',
            descricao: 'Ambiente oficial, onde as rotinas do dia a dia são feitas.',
            url: 'https://tag.britech.com.br/PAS/Login/LoginInit.aspx?ReturnUrl=%2fPAS%2f',
          },
          {
            rotulo: 'Pré-produção',
            descricao: 'Ambiente de testes, separado da produção.',
            url: 'https://tag-pre-prod.britech.com.br/PAS/Login/LoginInit.aspx',
          },
        ],
        passos: [
          'Abra o link do ambiente de produção.',
          'Na tela "Seja bem vindo ao Atlas PAS", preencha o Login e a Senha.',
          'Clique em Acessar.',
          'Se esquecer a senha, use o link "Esqueci a senha" na própria tela.',
        ],
        imagem: { src: '/aulas/britech-login.png', legenda: 'Tela de login da Britech (Atlas PAS).' },
        destaque: {
          titulo: 'Existem dois ambientes',
          texto: 'Além da produção, existe o ambiente de pré-produção. Cada ambiente tem login e senha próprios: a senha de um não funciona no outro.',
        },
        dicas: ['Nunca compartilhe seu usuário e senha.'],
      },
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
      },
      {
        id: 'navegando-na-britech',
        titulo: 'Navegando pelo sistema',
        duracao: 5,
        objetivo: 'Conhecer os menus e as principais telas da Britech.',
        porque: 'Saber onde está cada coisa deixa o trabalho mais rápido e reduz o risco de alterar a informação errada.',
        passos: ['Conheça o menu principal.', 'Encontre as telas mais usadas.', 'Use a busca e os filtros.'],
      },
    ],
  },
]

export const todasAulas = modulos.flatMap((m) =>
  m.aulas.map((a) => ({ ...a, moduloId: m.id, moduloTitulo: m.titulo })),
)

export const getAula = (id) => todasAulas.find((a) => a.id === id)
