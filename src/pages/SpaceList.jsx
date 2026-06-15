import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SpaceList() {
  // Define o dia 01/05/2026 como a data inicial padrão do calendário
  const [dataSelecionada, setDataSelecionada] = useState('2026-05-01')
  
  const navigate = useNavigate()

  const handleAvancar = () => {
    
    navigate(`/detalhe/${dataSelecionada}`)
  }

  return (
    <main style={{ 
      padding: '3rem 2rem', 
      backgroundColor: '#0b132b', 
      minHeight: '85vh', 
      color: '#ffffff',
      textAlign: 'center'
    }}>
     
      <h2 style={{ color: '#48cae4', marginBottom: '1rem', fontSize: '2rem' }}>
        Selecione uma data
      </h2>
      <p style={{ color: '#cbd5e1', marginBottom: '2rem', fontSize: '1.1rem' }}>
        Escolha um dia do mês 05/2026
      </p>
      
      <div style={{ 
        maxWidth: '400px', 
        margin: '0 auto', 
        backgroundColor: '#1c2541', 
        padding: '30px', 
        borderRadius: '12px',
        border: '1px solid #3a506b',
        boxShadow: '0 8px 24px rgba(0,0,0,0.3)'
      }}>
        <label htmlFor="datePicker" style={{ display: 'block', fontWeight: 'bold', marginBottom: '15px', fontSize: '1.1rem' }}>
          CALENDÁRIO
        </label>
        
        <input 
          id="datePicker"
          type="date" 
          value={dataSelecionada}
          
          min="2026-05-01"
          max="2026-05-31"
          onChange={(e) => setDataSelecionada(e.target.value)}
          style={{ 
            padding: '12px', 
            fontSize: '1.1rem', 
            borderRadius: '6px', 
            border: '2px solid #3a506b',
            backgroundColor: '#0b132b',
            color: '#ffffff',
            width: '100%',
            textAlign: 'center',
            marginBottom: '25px',
            outline: 'none'
          }}
        />

        <button 
          onClick={handleAvancar}
          style={{
            width: '100%',
            padding: '14px',
            backgroundColor: '#fc3d21',
            color: '#ffffff',
            border: 'none',
            borderRadius: '6px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(252, 61, 33, 0.4)',
            transition: 'background 0.2s'
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#e0321a'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#fc3d21'}
        >
          Clique para ver a imagem do dia
        </button>
      </div>
    </main>
  )
}

export default SpaceList