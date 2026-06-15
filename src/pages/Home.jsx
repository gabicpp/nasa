import { Link } from 'react-router-dom'

function Home() {
  return (
    <main style={{ 
      padding: '4rem 2rem', 
      textAlign: 'center', 
      backgroundColor: '#0b132b', 
      minHeight: '85vh',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#48cae4' }}>
        Calendário Astronômico da NASA
      </h2>
      <p style={{ maxWidth: '600px', fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '2.5rem', color: '#e2e8f0' }}>
        Bem-vindo ao explorador do cosmos. Aqui você pode selecionar uma data específica 
        para buscar e visualizar a imagem astronômica daquele dia com dados oficiais fornecidos pela NASA.
      </p>
      
      <Link to="/calendario" style={{ 
        display: 'inline-block', 
        padding: '14px 28px', 
        backgroundColor: '#fc3d21', 
        color: '#ffffff', 
        textDecoration: 'none', 
        borderRadius: '30px',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        boxShadow: '0 4px 15px rgba(252, 61, 33, 0.4)'
      }}>
        Abrir calendário astronômico
      </Link>
    </main>
  )
}

export default Home