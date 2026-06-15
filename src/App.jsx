import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import SpaceList from './pages/SpaceList.jsx'
import SpaceDetail from './pages/SpaceDetail.jsx'

function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '#0b132b', minHeight: '100vh', fontFamily: 'sans-serif' }}>
        <Header /> 
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendario" element={<SpaceList />} />
          <Route path="/detalhe/:id" element={<SpaceDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App