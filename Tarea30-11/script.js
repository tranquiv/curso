const API_KEY = 'TU_API_KEY_AQUÍ'; // Reemplaza con tu API Key de TMDB
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const moviesContainer = document.getElementById('movies-container');

// Manejo de errores
const handleError = (error) => {
  moviesContainer.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
};

// Buscar películas
const searchMovies = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    displayMovies(data.results);
  } catch (error) {
    handleError(error);
  }
};

// Mostrar películas en el DOM
const displayMovies = (movies) => {
  if (movies.length === 0) {
    moviesContainer.innerHTML = '<p>No movies found. Try a different search term!</p>';
    return;
  }
  moviesContainer.innerHTML = movies
    .map(
      (movie) => `
      <div class="movie-card">
        <img src="${movie.poster_path ? IMAGE_BASE_URL + movie.poster_path : 'https://via.placeholder.com/200x300'}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p>Rating: ${movie.vote_average || 'N/A'}</p>
      </div>
    `
    )
    .join('');
};

// Evento para buscar
searchBtn.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) {
    searchMovies(query);
  } else {
    alert('Please enter a movie name.');
  }
});