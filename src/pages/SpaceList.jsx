import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function SpaceList() {
  // Define a data atual do dia para iniciar padrão do calendário

 const [dataSelecionada, setDataSelecionada] = useState(
  new Date().toISOString().split('T')[0]
)
  
  const navigate = useNavigate()

  const handleAvancar = () => {
    
    navigate(`/detalhe/${dataSelecionada}`)
  }

  function subtract7Days(dateString) {
    try {
        if (typeof dateString !== "string") {
            throw new Error("Input must be a string in YYYY-MM-DD format.");
        }

        // Validate basic format using regex
        if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
            throw new Error("Invalid date format. Expected YYYY-MM-DD.");
        }

        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
            throw new Error("Invalid date value.");
        }

        // Subtract 7 days
        date.setDate(date.getDate() - 30);

        // Format back to YYYY-MM-DD
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");

        return `${year}-${month}-${day}`;
    } catch (err) {
        console.error(err.message);
        return null;
    }
}

  return (
    <main style={{ 
      padding: '3rem 2rem', 
      backgroundColor: '#0b132b', 
      minHeight: '85vh', 
      color: '#ffffffff',
      textAlign: 'center'
    }}>
     
      <h2 style={{ color: '#48cae4', marginBottom: '1rem', fontSize: '2rem' }}>
        Selecione uma data
      </h2>
      
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
          
          min={subtract7Days(new Date().toISOString().split('T')[0])}
          max = {new Date().toISOString().split('T')[0]}
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
            color: '#ffffffff',
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