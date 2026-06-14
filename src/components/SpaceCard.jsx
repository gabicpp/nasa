import { Link } from 'react-router-dom'

function SpaceCard({ id, title, date, imageUrl }) {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', textAlign: 'center', background: '#fff' }}>
      <img src={imageUrl} alt={title} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '4px' }} />
      <h3 style={{ fontSize: '1rem', margin: '10px 0 5px 0', height: '40px', overflow: 'hidden' }}>{title}</h3>
      <p style={{ color: '#666', fontSize: '0.8rem' }}>{date}</p>
      <Link to={`/detalhe/${id}`} style={{ display: 'inline-block', marginTop: '10px', padding: '6px 12px', background: '#fc3d21', color: '#fff', textDecoration: 'none', borderRadius: '4px' }}>
        Ver Detalhes e Descrição
      </Link>
    </div>
  )
}

export default SpaceCard