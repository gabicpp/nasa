import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header style={{ background: '#0b3d91', padding: '1rem', color: '#fff' }}>
      <h1>AstroCalendar - NASA </h1>
      <nav style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
        <NavLink to="/" style={({ isActive }) => ({ color: '#fff', fontWeight: isActive ? 'bold' : 'normal', textDecoration: isActive ? 'underline' : 'none' })}>
          Início
        </NavLink>
        <NavLink to="/calendario" style={({ isActive }) => ({ color: '#fff', fontWeight: isActive ? 'bold' : 'normal', textDecoration: isActive ? 'underline' : 'none' })}>
          Explorador por Data
        </NavLink>
      </nav>
    </header>
  )
}

export default Header