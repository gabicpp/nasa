export function nasaMapper(item) {
  return {
    id: item.date,
    title: item.title || 'Imagem Celestial',
    date: item.date,
    imageUrl: item.media_type === 'image' ? item.url : 'https://placehold.co/600x400/0b3d91/ffffff?text=Conteudo+em+Video',
    explanation: item.explanation || 'Sem descrição disponível.',
    copyright: item.copyright || 'NASA'
  }
}

export async function fetchNasaByDate(date) {
  const API_KEY = 'EmOsMh0yfzfQfEXtvETbThm2yqdyCWyo3jqHSJb6'
  const url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`

  const response = await fetch(url)
  if (!response.ok) {
    throw new Error('Não foi possível carregar os dados desta data.')
  }

  const data = await response.json()
  return nasaMapper(data)
}