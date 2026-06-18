import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import SpaceList from './pages/SpaceList.jsx'
import SpaceDetail from './pages/SpaceDetail.jsx'
import NotFound from './pages/NotFound.jsx'

function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '#0b132b', minHeight: '100vh', fontFamily: 'sans-serif' }}>
        <Header /> 
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calendario" element={<SpaceList />} />
          <Route path="/detalhe/:id" element={<SpaceDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App