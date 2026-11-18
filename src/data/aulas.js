// Conteúdo das mini aulas. Para adicionar uma aula, basta incluir um objeto
// em `aulas` dentro do módulo desejado. Os textos abaixo são EXEMPLOS:
// substitua pelos processos reais do Backoffice.

export const modulos = [
  {
    id: 'fundamentos',
    titulo: 'Fundamentos do Backoffice',
    descricao: 'Entenda o papel do Backoffice e como ele sustenta a operação.',
    aulas: [
      {
        id: 'o-que-e-backoffice',
        titulo: 'O que é o Backoffice?',
        duracao: 4,
        objetivo: 'Entender qual é a missão do Backoffice e como ele se conecta com as demais áreas.',
        porque: 'Quando todos entendem o papel do Backoffice, os pedidos chegam completos, os prazos são respeitados e o retrabalho diminui.',
        passos: [
          'Conheça as áreas atendidas pelo Backoffice.',
          'Identifique os principais processos sob nossa responsabilidade.',
          'Saiba a quem recorrer em caso de dúvida.',
        ],
        dicas: ['Em caso de dúvida, pergunte antes de executar.'],
        quiz: {
          pergunta: 'Qual é o principal papel do Backoffice?',
          opcoes: [
            'Atender clientes diretamente',
            'Dar suporte e garantir a execução correta dos processos internos',
            'Definir a estratégia comercial',
          ],
          correta: 1,
        },
      },
      {
        id: 'valores-e-qualidade',
        titulo: 'Qualidade e responsabilidade',
        duracao: 3,
        objetivo: 'Conhecer os princípios que guiam a execução dos nossos processos.',
        porque: 'Processos bem executados evitam erros, riscos e retrabalho.',
        passos: ['Confira os dados antes de enviar.', 'Registre o que foi feito.', 'Sinalize inconsistências.'],
        dicas: ['Dupla checagem é sempre melhor que correção depois.'],
        quiz: {
          pergunta: 'O que fazer ao encontrar uma inconsistência?',
          opcoes: ['Ignorar', 'Sinalizar ao responsável', 'Corrigir sem avisar'],
          correta: 1,
        },
      },
    ],
  },
  {
    id: 'processos',
    titulo: 'Processos do dia a dia',
    descricao: 'Aprenda o passo a passo, o objetivo e o porquê de cada processo.',
    aulas: [
      {
        id: 'processo-exemplo',
        titulo: 'Processo de exemplo',
        duracao: 5,
        objetivo: 'Executar o processo do início ao fim, sem erros.',
        porque: 'Este processo garante que a informação chegue correta ao próximo passo da operação.',
        passos: ['Receba a solicitação.', 'Valide as informações.', 'Execute a tarefa.', 'Registre e comunique a conclusão.'],
        dicas: ['Substitua esta aula pelo processo real.'],
        quiz: {
          pergunta: 'Qual é o último passo do processo?',
          opcoes: ['Receber a solicitação', 'Registrar e comunicar a conclusão', 'Validar as informações'],
          correta: 1,
        },
      },
    ],
  },
]

export const todasAulas = modulos.flatMap((m) =>
  m.aulas.map((a) => ({ ...a, moduloId: m.id, moduloTitulo: m.titulo })),
)

export const getAula = (id) => todasAulas.find((a) => a.id === id)
