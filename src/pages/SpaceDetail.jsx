import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { fetchNasaByDate } from '../services/nasaApi'
import Loader from '../components/Loader.jsx'

function SpaceDetail() {
  const { id } = useParams()
  const [spaceData, setSpaceData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function loadDayInfo() {
      try {
        setLoading(true)
        setError(null)
        const data = await fetchNasaByDate(id)
        if (!cancelled) setSpaceData(data)
      } catch (err) {
        if (!cancelled) setError(err.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    loadDayInfo()
    return () => { cancelled = true }
  }, [id])

if (loading) {
  return (
    <div style={{ 
      padding: '4rem', 
      textAlign: 'center', 
      backgroundColor: '#0b132b', 
      minHeight: '85vh',
      display: 'flex',       
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Loader message="Buscando registros na NASA..." />
    </div>
  )
}

  if (error) {
    return (
      <div style={{ padding: '4rem', textAlign: 'center', backgroundColor: '#0b132b', minHeight: '85vh', color: 'red' }}>
        <h2> {error}</h2>
        <Link to="/calendario" style={{ color: '#fff', marginTop: '1rem', display: 'block' }}>Voltar ao Calendário</Link>
      </div>
    )
  }

  return (
    <main style={{ 
      padding: '2rem', 
      backgroundColor: '#0b132b', 
      minHeight: '85vh', 
      color: '#ffffff' 
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ color: '#48cae4', marginBottom: '0.5rem' }}>{spaceData.title}</h2>
        <p style={{ color: '#cbd5e1', marginBottom: '1.5rem' }}>Data do Registro: {spaceData.date}</p>
        
        <img 
          src={spaceData.imageUrl} 
          alt={spaceData.title} 
          style={{ 
            width: '100%', 
            maxHeight: '500px', 
            objectFit: 'contain', 
            borderRadius: '8px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.5)',
            marginBottom: '2rem'
          }} 
        />

        <div style={{ textAlign: 'justify', backgroundColor: '#1c2541', padding: '20px', borderRadius: '8px', border: '1px solid #3a506b', marginBottom: '2.5rem' }}>
          <h3 style={{ color: '#48cae4', marginBottom: '10px' }}>Descrição:</h3>
          <p style={{ lineHeight: '1.6', color: '#e2e8f0' }}>{spaceData.explanation}</p>
        </div>

        <Link to="/calendario" style={{ 
          display: 'inline-block', 
          padding: '12px 24px', 
          backgroundColor: '#3a506b', 
          color: '#ffffff', 
          textDecoration: 'none', 
          borderRadius: '6px',
          fontWeight: 'bold',
          transition: 'background 0.2s'
        }}>
          Clique para uma nova busca
        </Link>
      </div>
    </main>
  )
}

export default SpaceDetail