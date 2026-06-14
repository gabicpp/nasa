import { useState, useEffect } from 'react'
import { fetchNasaByPeriod } from '../services/nasaApi'

function SpaceList() {
  
  const [dataSelecionada, setDataSelecionada] = useState('2026-05-01')
  const [items, setItems] = useState([])
  const [filtroTexto, setFiltroTexto] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  const itensFiltrados = items.filter(item => 
    item.title.toLowerCase().includes(filtroTexto.toLowerCase())
  )

  useEffect(() => {
    let cancelled = false

    async function loadNasaCalendar() {
      try {
        setLoading(true)
        setError(null)
        
        const data = await fetchNasaByPeriod(dataSelecionada)
        if (!cancelled) setItems(data)
      } catch (err) {
        if (!cancelled) setError(err.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    loadNasaCalendar()
    return () => { cancelled = true }
  }, [dataSelecionada]) 

  return (
    <main style={{ padding: '2rem' }}>
      <h2>Explorador Espacial</h2>
      
      {}
      <div style={{ background: '#eee', padding: '15px', borderRadius: '8px', margin: '1rem 0', display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div>
          <label htmlFor="dateInput" style={{ fontWeight: 'bold', display: 'block' }}>1. Escolha uma data de partida:</label>
          <input 
            id="dateInput"
            type="date" 
            value={dataSelecionada} 
            onChange={(e) => setDataSelecionada(e.target.value)}
            style={{ padding: '8px', marginTop: '5px' }}
          />
        </div>

        {}
        <div>
          <label htmlFor="textInput" style={{ fontWeight: 'bold', display: 'block' }}>2. Filtrar resultados abaixo por título:</label>
          <input 
            id="textInput"
            type="search" 
            placeholder="Ex: Galaxy, Nebula..." 
            value={filtroTexto}
            onChange={(e) => setFiltroTexto(e.target.value)}
            style={{ padding: '8px', marginTop: '5px', width: '250px' }}
          />
        </div>
      </div>

      {loading && <Loader message={`Sintonizando histórico a partir de ${dataSelecionada}...`} />}
      {error && <p role="alert" style={{ color: 'red' }}>⚠️ {error}</p>}

      {!loading && !error && (
        <>
          <h3>Imagens Disponíveis nesse período:</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', marginTop: '1rem' }}>
            {itensFiltrados.map(item => (
              <SpaceCard key={item.id} {...item} />
            ))}
          </div>
        </>
      )}
    </main>
  )
}

export default SpaceList