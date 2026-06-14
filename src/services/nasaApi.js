export function nasaMapper(item) {
  return {
    id: item.date, 
    title: item.title || 'Objeto Celestial',
    date: item.date,
    imageUrl: item.media_type === 'image' ? item.url : 'https://placehold.co/600x400/0b3d91/ffffff?text=Video+Content',
    hdImageUrl: item.hdurl || item.url,
    explanation: item.explanation || 'Sem descrição disponível.',
    copyright: item.copyright || 'Domínio Público'
  }
}

export async function fetchNasaByPeriod(startDate) {
  const API_KEY = 'EmOsMh0yfzfQfEXtvETbThm2yqdyCWyo3jqHSJb6'
  
  const start = new Date(startDate)
  const end = new Date(start)
  end.setDate(start.getDate() + 1) 
  
  const formatDate = (d) => d.toISOString().split('T')[0]
  
  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${formatDate(start)}&end_date=${formatDate(end)}`

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Erro ao conectar com a API da NASA para este período.')
  }

  const data = await response.json()
  
  return data.map(nasaMapper).reverse() 
}