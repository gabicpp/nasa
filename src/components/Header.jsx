import { NavLink, useLocation } from 'react-router-dom'

function Header() {
  
  const location = useLocation()

  const emDetalhes = location.pathname.startsWith('/detalhe/')

  return (
    <header style={{ 
      background: '#0b3d91', 
      padding: '1.2rem 2rem', 
      color: '#fff',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
    }}>
      <h1 style={{ fontSize: '1.8rem', margin: 0, fontFamily: 'sans-serif' }}>
        Astrocalendário - NASA
      </h1>
      
      <nav style={{ display: 'flex', gap: '20px' }}>
        {/* 1ª Seção: Início */}
        <NavLink 
          to="/" 
          style={({ isActive }) => ({ 
            color: '#fff', 
            fontWeight: isActive ? 'bold' : 'normal', 
            textDecoration: isActive ? 'underline' : 'none',
            fontSize: '1rem'
          })}
        >
          Início
        </NavLink>

        {/* 2ª Seção: Calendário */}
        <NavLink 
          to="/calendario" 
          style={({ isActive }) => ({ 
            color: '#fff', 
            fontWeight: isActive ? 'bold' : 'normal', 
            textDecoration: isActive ? 'underline' : 'none',
            fontSize: '1rem'
          })}
        >
          Explorador por Data
        </NavLink>

        {/* 3ª Seção: Só ativa visualmente no menu se o usuário tiver buscado uma imagem */}
        {emDetalhes ? (
          <NavLink 
            to={location.pathname} 
            style={{ 
              color: '#48cae4',
              fontWeight: 'bold', 
              textDecoration: 'underline',
              fontSize: '1rem'
            }}
          >
            Imagem do Dia
          </NavLink>
        ) : (
          <span style={{ color: '#aaa', fontSize: '1rem', cursor: 'not-allowed' }}>
            Imagem do Dia
          </span>
        )}
      </nav>
    </header>
  )
}

export default Header