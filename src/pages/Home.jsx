import { Link } from 'react-router-dom'

function Home() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Descubra o Cosmos por Data</h2>
      <p style={{ maxWidth: '600px', margin: '1rem auto' }}>
        Selecione qualquer data no nosso calendário para puxar diretamente dos servidores da NASA a imagem astronômica correspondente, seu título oficial e a descrição científica.
      </p>
      <Link to="/calendario" style={{ display: 'inline-block', padding: '10px 20px', background: '#0b3d91', color: '#fff', textDecoration: 'none', borderRadius: '4px' }}>
        Abrir Calendário Astronômico
      </Link>
    </main>
  )
}

export default Home