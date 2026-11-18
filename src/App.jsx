import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Aula from './pages/Aula.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="aula/:id" element={<Aula />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}
