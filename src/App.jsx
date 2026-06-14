import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SpaceList from './pages/SpaceList'
import SpaceDetail from './pages/SpaceDetail'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', background: '#f9f9f9', fontFamily: 'sans-serif' }}>
        <Header />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calendario" element={<SpaceList />} />
            <Route path="/detalhe/:id" element={<SpaceDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App