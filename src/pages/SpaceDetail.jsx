import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { nasaMapper } from '../services/nasaApi'
import Loader from '../components/Loader'

function SpaceDetail() {
  const { id } = useParams() 
  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    const API_KEY = 'DEMO_KEY'

    async function loadSingleDay() {
      try {
        setLoading(true)
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${id}`)
        if (!response.ok) throw new Error('Não encontramos dados da NASA para este dia específico.')
        
        const rawData = await response.json()
        if (!cancelled) setItem(nasaMapper(rawData))
      } catch (err) {
        if (!cancelled) setError(err.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    loadSingleDay()
    return () => { cancelled = true }
  }, [id])

  if (loading) return <Loader message="Carregando imagem em alta resolução e dados oficiais..." />
  if (error) return <div style={{ padding: '2rem' }}><p style={{ color: 'red' }}>{error}</p><Link to="/calendario">Voltar</Link></div>

  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <Link to="/calendario" style={{ color: '#0b3d91', fontWeight: 'bold' }}>← Voltar para a Galeria</Link>
      
      <h2 style={{ marginTop: '1rem' }}>{item.title}</h2>
      <p style={{ color: '#666' }}><strong>Data de Publicação:</strong> {item.date} | © {item.copyright}</p>
      
      <img src={item.hdImageUrl} alt={item.title} style={{ width: '100%', borderRadius: '8px', margin: '1.5rem 0' }} />
      
      <h3>Descrição da Imagem (NASA):</h3>
      <p style={{ lineHeight: '1.6', textAlign: 'justify', color: '#333' }}>{item.explanation}</p>
    </main>
  )
}

export default SpaceDetail