import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Apresentacao from './pages/Apresentacao.jsx'
import Home from './pages/Home.jsx'
import Aula from './pages/Aula.jsx'

export default function App() {
  return (
    <Routes>
      <Route index element={<Apresentacao />} />
      <Route element={<Layout />}>
        <Route path="inicio" element={<Home />} />
        <Route path="aula/:id" element={<Aula />} />
      </Route>
      <Route path="*" element={<Apresentacao />} />
    </Routes>
  )
}
