import { useCallback, useEffect, useState } from 'react'

const KEY = 'backoffice-educa:concluidas'

function ler() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) ?? []
  } catch {
    return []
  }
}

export default function useProgresso() {
  const [concluidas, setConcluidas] = useState(ler)

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(concluidas))
    } catch {
      /* armazenamento indisponível */
    }
  }, [concluidas])

  const concluir = useCallback(
    (id) => setConcluidas((c) => (c.includes(id) ? c : [...c, id])),
    [],
  )
  const reiniciar = useCallback(() => setConcluidas([]), [])

  return { concluidas, concluir, reiniciar }
}
