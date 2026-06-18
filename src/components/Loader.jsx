function Loader({ message = "Buscando dados na NASA..." }) {
  return (
    <div style={{ textAlign: 'center', padding: '1rem' }}>
      <p style={{ 
        color: '#48cae4', 
        fontSize: '1.2rem', 
        fontWeight: 'bold',
        letterSpacing: '0.5px'
      }}>
        {message}
      </p>
    </div>
  )
}

export default Loader