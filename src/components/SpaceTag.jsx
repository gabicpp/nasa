import { Link } from 'react-router-dom'

function SpaceTag({ id, label }) {
  return (
    <Link 
      to={`/detalhe/${id}`} 
      style={{ 
        display: 'inline-block', 
        padding: '8px 16px', 
        backgroundColor: '#1c2541', 
        color: '#48cae4', 
        textDecoration: 'none', 
        borderRadius: '20px', 
        border: '1px solid #3a506b',
        fontSize: '0.9rem',
        fontWeight: 'bold',
        margin: '5px',
        transition: 'all 0.2s ease'
      }}
      onMouseOver={(e) => {
        e.target.style.backgroundColor = '#48cae4'
        e.target.style.color = '#0b132b'
      }}
      onMouseOut={(e) => {
        e.target.style.backgroundColor = '#1c2541'
        e.target.style.color = '#48cae4'
      }}
    >
      #{label}
    </Link>
  )
}

export default SpaceTag