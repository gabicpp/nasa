import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>404 - Rota Não Encontrada</h2>
      <p>A data ou rota que você tentou acessar está perdida no espaço.</p>
      <Link to="/">Voltar para a Home</Link>
    </main>
  )
}

export default NotFound