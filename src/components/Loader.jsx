function Loader({ message = "Buscando dados na NASA..." }) {
  return (
    <div style={{ textAlign: 'center', padding: '2rem', color: '#0b3d91' }}>
      <p>⏳ {message}</p>
    </div>
  )
}

export default Loader